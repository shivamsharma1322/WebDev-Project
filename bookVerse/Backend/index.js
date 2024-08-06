import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json()); //middleware   -> will parse all the data coming from api's body into json format

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

// Connect to MongoDB

try {
  mongoose.connect(URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error : ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
