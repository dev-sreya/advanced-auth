import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("hello World it's ME 321");
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on ort 3000");
});

//qU5Yn7sxWASNjKj3