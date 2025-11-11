/**
 *  FILE INI PERLU DILENGKAPI
 *
 * Database Seeding Script
 * Mengisi database dengan sample data
 *
 * Tugas:
 * 1. Import dependencies
 * 2. Buat array products (min 10 products)
 * 3. Connect ke database
 * 4. Delete existing products
 * 5. Insert sample products
 * 6. Log progress
 * 7. Exit
 */

// TODO: Import dependencies
// require('dotenv').config();
// const mongoose = require('mongoose');
// const Product = require('../models/Product');
// const connectDB = require('../config/database');

// TODO: Buat array sample products
const products = [
  // Tambahkan minimal 10 produk dengan data realistic
  // Contoh:
  // {
  //   name: "Vitamin C 1000mg",
  //   description: "Suplemen vitamin C untuk daya tahan tubuh",
  //   category: "Vitamin",
  //   price: 85000,
  //   stock: 50,
  //   manufacturer: "PT Sehat Sejahtera"
  // },
];

// TODO: Fungsi seeding
async function seedDatabase() {
  try {
    // TODO: Connect to database
    // TODO: Delete existing products
    // await Product.deleteMany();
    // console.log('  Existing products deleted');
    // TODO: Insert new products
    // const created = await Product.insertMany(products);
    // console.log(` ${created.length} products inserted`);
    // TODO: Log sample product IDs
    // TODO: Exit
    // process.exit(0);
  } catch (error) {
    console.error(" Seeding error:", error);
    process.exit(1);
  }
}

// TODO: Call seedDatabase();
