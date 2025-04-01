import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://gamesraja24:gamesraja24@student.v7hn6.mongodb.net/?retryWrites=true&w=majority&appName=Student');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
