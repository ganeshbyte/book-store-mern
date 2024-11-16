import express from "express";
import { connectToDb } from "./db/connect.js";
import router from "./routes/main.routes.js";
import cors from "cors";

import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  try {
    console.log(process.env.MONGO_URL);
    await connectToDb(process.env.MONGO_URL);

    console.log("connected to db...");

    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  } catch (error) {
    console.log("Internal Server Error");
  }
};

start();
