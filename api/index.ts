import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import User from "./models/User";
import _ from "lodash";
import cookieParser from "cookie-parser";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { IUser } from "./models/UserInterface";
import { User as UserRoles } from "./enums/User.enum";
import { cloudinary } from "./utils/cloudinary";
import { IProperty } from "./models/PropertyInterface";
import { Property } from "./models/Property";
import {
  getTheLatestProperties,
  uploadImages,
  verifyUser,
} from "./utils/utils";
import { AdvertisementType } from "./enums/Property.enum";

const PORT = process.env.PORT || 3000;
const app = express();

// TODO export this in env
const jwtSecret = process.env.SECRET!;

if (!jwtSecret) {
  console.error("No jwtSecret found in process.env");
  process.exit(1);
}

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// TODO fix this
mongoose.connect(process.env.MONGO_URL ? process.env.MONGO_URL : "");

// TODO - export this in interfaces
interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World !!!");
});

// !!! MAKE NEW LISTING
app.post("/add-listing", async (req: Request, res: Response) => {
  const property: IProperty = req.body;
  const { token } = req.cookies;

  if (token) {
    try {
      const userPayload = await verifyUser({ token, jwtSecret });

      if (userPayload.id) {
        const userData = (await User.findById(userPayload.id)) as IUser;
        const { role } = userData;

        if (role === UserRoles.USER_ADMIN) {
          try {
            const uploadedImageUrls = await uploadImages(property.images);
            const listing = await Property.create({
              ...property,
              images: uploadedImageUrls,
            });

            if (listing) {
              res.status(200).json(listing);
            }
          } catch (err) {
            res.status(500).json({ message: err });
          }
        } else {
          res.status(401).json({ message: "Not authorized" });
        }
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid Token" });
    }
  } else {
    res.status(400).json({ message: "No token provided" });
  }
});

// !!! GET NEWESET LISTINGS
app.get("/get-latest-properties", getTheLatestProperties);

//  !!! GET PROPERTY BY ID
app.get("/search-property", async (req: Request, res: Response) => {
  const param = req.query.id;

  if (param) {
    try {
      const response = (await Property.findById(param)) as IProperty;
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(400).json(`Could not get property with id ${param}`);
      }
    } catch (error) {
      console.error("Error querying the database:", error);
      res.status(500).json("Internal server error");
    }
  } else {
    res.status(401).json("Invalid property Id");
  }
});

// !!! GET PROPERTY BY CITY AND ADD TYPE

app.get("/search-property-by-city", async (req: Request, res: Response) => {
  const { city, advertisementType } = req.body;

  const searchAddType =
    advertisementType === AdvertisementType.RENT
      ? AdvertisementType.RENT
      : AdvertisementType.SELL;

  try {
    const properties = await Property.find({
      advertisementType: searchAddType,
      "location.city": city,
    });
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: "Error getting the properties: ", err });
  }
});

// !!! REGISTER
app.post("/register", async (req: Request, res: Response) => {
  const { email, password, firstName, lastName }: Register = req.body;

  //   TODO = handle error
  try {
    const user = await User.create({
      email,
      firstName,
      lastName,
      // by default every new user will be signed as a regular user.
      // Admins will be added manually to the Database to avoid malicious actions
      role: UserRoles.USER,
      password: bcrypt.hashSync(password, 12),
    });

    if (user) {
      const userWithoutPassword = _.omit(user.toObject(), ["password"]);
      // TODO - omit the object from the DB to exclude what is not needed and
      // spread the object
      jwt.sign(
        {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          id: user._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;

          res.cookie("token", token).json(userWithoutPassword);
        }
      );
    }
  } catch (err) {
    // TODO error handling - make a hook for different errors
    res.status(422).json(err);
  }
});

// !!! LOGIN
app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (isValidPassword) {
        // first object is the data we are signing, 2nd is the secret
        // 3rd is the option and 4th is the error
        jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user._id,
            role: user.role,
          },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;

            const userWithoutPassword = _.omit(user.toObject(), ["password"]);

            res.cookie("token", token).json(userWithoutPassword);
          }
        );
      } else {
        // res.json('not ok')
        res.status(422).json("Invalid email or password");
      }
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.json(err);
  }
});

// !!! PROFILE
app.get("/profile", async (req: Request, res: Response) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const userPayload = await verifyUser({ token, jwtSecret });

      if (userPayload.id) {
        const userData = (await User.findById(userPayload.id)) as IUser;
        const { firstName, lastName, email, id, role, phoneNumber } = userData;

        res.json({ firstName, lastName, email, id, role, phoneNumber });
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid Token" });
    }
  } else {
    res.status(400).json({ message: "No token provided" });
  }
});

// !!! LOGOUT
app.post("/logout", (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
  });

  res.status(200).json({ message: "Logged out successfully" });
});

app.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
});
