import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/user.route.js";
import userAuth from "./Routes/auth.route.js";
import cors from "cors";

const app=express();
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Movie')
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    }
);

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
     methods: ["GET", "POST"]
}));

// Routes
app.use('/api/user', userRoute);
app.use('/api/auth', userAuth);


// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
