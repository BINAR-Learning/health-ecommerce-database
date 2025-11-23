require("dotenv").config();
const mongoose = require("mongoose");

/**
 * Database Connection
 * File ini sudah lengkap - tidak perlu dimodifikasi
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

module.exports = connectDB;
