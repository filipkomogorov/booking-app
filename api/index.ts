import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import User from "./models/User";
import _ from "lodash";
import cookieParser from "cookie-parser";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const PORT = process.env.PORT || 3000;
const app = express();

// TODO export this in env
const jwtSecret = "duash@1sdadua123141sdSDak_21!!ashdasuh";

app.use(express.json());
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

// REGISTER
app.post("/register", async (req: Request, res: Response) => {
  const { email, password, firstName, lastName }: Register = req.body;

  //   TODO = handle error
  try {
    const user = await User.create({
      email,
      firstName,
      lastName,
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

// LOGIN
app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      const isValidPassword = bcrypt.compareSync(password, foundUser.password);
      if (isValidPassword) {
        // first object is the data we are signing, 2nd is the secret
        // 3rd is the option and 4th is the error
        jwt.sign(
          {
            email: foundUser.email,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            id: foundUser._id,
          },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;

            const userWithoutPassword = _.omit(foundUser.toObject(), [
              "password",
            ]);

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

// PROFILE

app.get("/profile", async (req: Request, res: Response) => {
  // res.json('ok')
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, user) => {
      if (err) throw err;

      res.json(user);
    });
  } else {
    res.status(400)
  }
});

app.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
});
