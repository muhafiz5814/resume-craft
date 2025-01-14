import "dotenv/config";
import e from "express";

const app = e();

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
    res.send("Hi! from server.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});