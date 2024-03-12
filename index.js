import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

const app = express ();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Databse connected sucessfully.");
    app.listen (PORT,() => {
        console.log(`Server started on port: ${PORT}`);
    })
}).catch((err) =>{
    console.error(err)
});

app.use("/api/user", route)