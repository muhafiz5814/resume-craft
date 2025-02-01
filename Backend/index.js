import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import router for resumes endpoint.
import resumeRoutes from "./routes/api/v1/resume/index.js";

// Create an express app.
const app = express();

// Set a port, uses deployment hosts port in production environment and uses post 3030 in local development environment.
const PORT = process.env.PORT || 3030;

// Allow cors access from frontend and localhost.
app.use(cors({ origin: [process.env.CORS_ORIGIN, "http://localhost:3000"] }));

// Extract request body data available in json form.
app.use(express.json());

// Use the import router with 'resumes' endpoint.
app.use("/resumes", resumeRoutes);

// Before starting the server, connect API to database.
// Once connected start the server.
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