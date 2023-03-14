import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import User from "./models/User";
import * as bcrypt from "bcryptjs";

const PORT = process.env.PORT || 3000;

// TODO - export this in interfaces
interface Register {
  email: string;
  password: string;
}

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// TODO fix this
mongoose.connect(process.env.MONGO_URL ? process.env.MONGO_URL : "");

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World !!!");
});

app.post("/register", async (req: Request, res: Response) => {
  const { email, password }: Register = req.body;

//   TODO = handle error
  try{
    const user = await User.create({
      email,
      password: bcrypt.hashSync(password, 12),
    });
    return user;
  }catch(err){
    // TODO error handling - make a hook for different errors
    res.status(422).json(err)
  }
});

app.listen(3000, () => {
  console.log(`server running on port ${PORT}`);
});
