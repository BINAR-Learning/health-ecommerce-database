require("dotenv").config();
const mongoose = require("mongoose");

/**
 * Database Connection
 * Supports both local MongoDB and MongoDB Atlas
 */

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const dbType = process.env.MONGODB_URI.includes("mongodb+srv")
      ? "Atlas (Cloud)"
      : "Local";

    console.log(`MongoDB ${dbType} connected successfully`);
    console.log(`Database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

module.exports = connectDB;
