import express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routers/students";
import cors from "cors";

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//     //logic
//     next();
// })
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); //middleware

mongoose
  .connect("mongodb://localhost:27017/students")
  .then(() => console.log("connected"));

app.use("/students", studentsRouter);

app.listen(port, () => console.log(`Running on port ${port}`));
