require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const User = require("../models/User");
const Review = require("../models/Review");
const connectDB = require("../config/database");

/**
 * Database Seeding Script
 * Mengisi database dengan sample data
 */

const products = [
  {
    name: "Vitamin C 1000mg",
    description:
      "Suplemen vitamin C untuk meningkatkan daya tahan tubuh dan melindungi sel dari radikal bebas",
    category: "Vitamin",
    price: 85000,
    stock: 50,
    manufacturer: "PT Aiman",
  },
  {
    name: "Vitamin D3 2000 IU",
    description:
      "Suplemen vitamin D untuk kesehatan tulang dan sistem kekebalan tubuh",
    category: "Vitamin",
    price: 120000,
    stock: 30,
    manufacturer: "PT Aila",
  },
  {
    name: "Multivitamin Complete",
    description: "Multivitamin lengkap untuk memenuhi kebutuhan nutrisi harian",
    category: "Vitamin",
    price: 150000,
    stock: 40,
    manufacturer: "PT Aiman",
  },
  {
    name: "Vitamin B Complex",
    description: "Kombinasi vitamin B untuk energi dan metabolisme",
    category: "Vitamin",
    price: 95000,
    stock: 45,
    manufacturer: "PT Aila",
  },
  {
    name: "Omega-3 Fish Oil",
    description: "Suplemen minyak ikan untuk kesehatan jantung dan fungsi otak",
    category: "Supplement",
    price: 200000,
    stock: 25,
    manufacturer: "PT Aiman",
  },
  {
    name: "Glucosamine & Chondroitin",
    description: "Suplemen untuk kesehatan sendi dan tulang rawan",
    category: "Supplement",
    price: 180000,
    stock: 20,
    manufacturer: "PT Aila",
  },
  {
    name: "Probiotics 10 Billion CFU",
    description: "Suplemen probiotik untuk kesehatan pencernaan",
    category: "Supplement",
    price: 165000,
    stock: 35,
    manufacturer: "PT Aiman",
  },
  {
    name: "Zinc Supplement 50mg",
    description: "Suplemen zinc untuk mendukung sistem kekebalan tubuh",
    category: "Supplement",
    price: 75000,
    stock: 40,
    manufacturer: "PT Aila",
  },
  {
    name: "Termometer Digital",
    description:
      "Termometer digital akurat untuk mengukur suhu tubuh dengan cepat",
    category: "Medical Equipment",
    price: 75000,
    stock: 60,
    manufacturer: "PT Aiman",
  },
  {
    name: "Blood Pressure Monitor",
    description: "Alat pengukur tekanan darah digital otomatis",
    category: "Medical Equipment",
    price: 350000,
    stock: 15,
    manufacturer: "PT Aila",
  },
  {
    name: "Masker Medis 3 Ply",
    description: "Masker medis 3 lapis untuk perlindungan maksimal",
    category: "Medical Equipment",
    price: 50000,
    stock: 100,
    manufacturer: "PT Aiman",
  },
  {
    name: "Paracetamol 500mg",
    description: "Obat pereda nyeri dan penurun demam",
    category: "Medicine",
    price: 15000,
    stock: 200,
    manufacturer: "PT Aila",
  },
];

const users = [
  {
    firstName: "Aiman",
    lastName: "Rahman",
    email: "aiman@example.com",
    password: "password123", // Note: Should be hashed in production
    role: "admin",
  },
  {
    firstName: "Aila",
    lastName: "Putri",
    email: "aila@example.com",
    password: "password123",
    role: "user",
  },
  {
    firstName: "Budi",
    lastName: "Santoso",
    email: "budi@example.com",
    password: "password123",
    role: "user",
  },
  {
    firstName: "Citra",
    lastName: "Dewi",
    email: "citra@example.com",
    password: "password123",
    role: "user",
  },
  {
    firstName: "Dani",
    lastName: "Wijaya",
    email: "dani@example.com",
    password: "password123",
    role: "user",
  },
];

async function seedDatabase() {
  try {
    await connectDB();

    console.log("\n Starting database seeding...\n");

    // Delete existing data
    await Product.deleteMany();
    console.log("  Existing products deleted");

    await User.deleteMany();
    console.log("  Existing users deleted");

    await Review.deleteMany();
    console.log("  Existing reviews deleted");

    // Insert products
    const createdProducts = await Product.insertMany(products);
    console.log(` ${createdProducts.length} products inserted`);

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log(` ${createdUsers.length} users inserted`);

    // Insert sample reviews
    const reviews = [
      {
        productId: createdProducts[0]._id, // Vitamin C
        userId: createdUsers[0]._id, // Aiman
        rating: 5,
        comment:
          "Vitamin C-nya bagus banget! Setelah konsumsi rutin, jarang sakit.",
        isVerified: true,
      },
      {
        productId: createdProducts[0]._id, // Vitamin C
        userId: createdUsers[1]._id, // Aila
        rating: 4,
        comment: "Kualitas oke, harga terjangkau.",
        isVerified: true,
      },
      {
        productId: createdProducts[1]._id, // Vitamin D3
        userId: createdUsers[1]._id, // Aila
        rating: 5,
        comment: "Cocok untuk yang kurang sinar matahari. Recommended!",
        isVerified: true,
      },
      {
        productId: createdProducts[4]._id, // Omega-3
        userId: createdUsers[2]._id, // Budi
        rating: 5,
        comment: "Omega-3 terbaik! Nggak ada after taste amis.",
        isVerified: true,
      },
      {
        productId: createdProducts[4]._id, // Omega-3
        userId: createdUsers[3]._id, // Citra
        rating: 4,
        comment: "Bagus untuk jantung, rutin konsumsi.",
        isVerified: false,
      },
      {
        productId: createdProducts[8]._id, // Termometer
        userId: createdUsers[0]._id, // Aiman
        rating: 5,
        comment: "Akurat dan cepat. Wajib punya di rumah!",
        isVerified: true,
      },
      {
        productId: createdProducts[2]._id, // Multivitamin
        userId: createdUsers[4]._id, // Dani
        rating: 4,
        comment: "Lengkap kandungannya, harga worth it.",
        isVerified: true,
      },
      {
        productId: createdProducts[5]._id, // Glucosamine
        userId: createdUsers[2]._id, // Budi
        rating: 5,
        comment: "Lutut udah nggak sakit lagi setelah rutin minum ini!",
        isVerified: true,
      },
      {
        productId: createdProducts[6]._id, // Probiotics
        userId: createdUsers[3]._id, // Citra
        rating: 4,
        comment: "Pencernaan jadi lebih lancar.",
        isVerified: false,
      },
      {
        productId: createdProducts[3]._id, // Vitamin B
        userId: createdUsers[1]._id, // Aila
        rating: 5,
        comment: "Energi meningkat, nggak gampang capek!",
        isVerified: true,
      },
    ];

    const createdReviews = await Review.insertMany(reviews);
    console.log(` ${createdReviews.length} reviews inserted`);

    // Display summary
    console.log("\n Database Summary:");
    console.log(`   Products: ${createdProducts.length}`);
    console.log(`   Users: ${createdUsers.length}`);
    console.log(`   Reviews: ${createdReviews.length}`);

    console.log("\n Sample Product IDs:");
    createdProducts.slice(0, 3).forEach((product) => {
      console.log(`   - ${product.name}: ${product._id}`);
    });

    console.log("\n Sample User IDs:");
    createdUsers.slice(0, 2).forEach((user) => {
      console.log(`   - ${user.firstName} ${user.lastName}: ${user._id}`);
    });

    console.log("\n Database seeded successfully!\n");

    process.exit(0);
  } catch (error) {
    console.error("\n Seeding error:", error);
    process.exit(1);
  }
}

seedDatabase();
