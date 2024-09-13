import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo:27018/profile", {
        });
        console.log("Database is connected");
    } catch (error) {
        console.log("Database connection error:", error);
    }
};
