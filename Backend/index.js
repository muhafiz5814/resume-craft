import "dotenv/config";
import e from "express";
import mongoose from "mongoose";

import resumeRoutes from "./routes/api/v1/resume/index.js";

const app = e();

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
    res.send("Hi! from server.");
});

app.use("/resumes", resumeRoutes);

Promise.all([mongoose.connect(process.env.DATABASE_CONNECTION_STRING)])
    .then(() => {
        console.log("Connected to DB, preparing server.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(`MongoDB atlas error: ${err}`);
    });