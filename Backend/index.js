import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import resumeRoutes from "./routes/api/v1/resume/index.js";

const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi! from server.");
});

app.use("/resumes", resumeRoutes);

Promise.all([mongoose.connect(process.env.DATABASE_CONNECTION_STRING)])
    .then(() => {
        console.log("Connected to DB, preparing server...");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(`MongoDB atlas error: ${err}`);
    });