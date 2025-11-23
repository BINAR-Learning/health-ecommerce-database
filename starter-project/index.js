/**
 * Main Entry Point - Health Products Database (STARTER PROJECT)
 *
 * File ini akan jalan setelah kamu implement:
 * - models/Product.js
 * - services/productService.js
 *
 * Note: Modul ini focus ke Database/MongoDB saja.
 * Express API akan dibahas di Modul 3.
 */

require("dotenv").config();
const connectDB = require("./config/database");

// TODO: Uncomment setelah implement productService
// const productService = require('./services/productService');

async function main() {
  try {
    // Connect to database
    await connectDB();

    console.log("\n" + "=".repeat(60));
    console.log("HEALTH PRODUCTS DATABASE - STARTER PROJECT");
    console.log("=".repeat(60));

    console.log("\nDatabase connection successful!");

    console.log("\nThis is starter project - implementation needed:");
    console.log("   1. Complete models/Product.js");
    console.log("   2. Complete services/productService.js");
    console.log("   3. Uncomment code in this file");
    console.log("   4. Run: npm run seed (untuk sample data)");
    console.log("   5. Run: npm run dev (untuk test)");

    // TODO: Uncomment code below setelah implement productService
    /*
    console.log("\nGetting all products...");
    const products = await productService.getAllProducts();
    console.log(`Found ${products.count} products`);
    if (products.data && products.data.length > 0) {
      console.log(`   Sample: ${products.data[0].name} - Rp ${products.data[0].price.toLocaleString()}`);
    }

    console.log("\nSearching for 'vitamin'...");
    const searchResult = await productService.searchProducts("vitamin");
    console.log(`Found ${searchResult.count} matching products`);
    */

    console.log("\n" + "=".repeat(60));
    console.log("Next Steps:");
    console.log("   - Read materi.md untuk understand concepts");
    console.log("   - Check finished-project untuk reference");
    console.log("   - Start with models/Product.js");
    console.log("   - Test dengan: node test.js");
    console.log("=".repeat(60) + "\n");

    // Keep connection alive in dev mode
    if (process.env.NODE_ENV === "development") {
      console.log("Running in dev mode - watching for changes...\n");
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error("\nError:", error.message);
    console.error("\nMake sure:");
    console.error("   - MongoDB service is running");
    console.error("   - .env file exists (copy from .env.example)");
    console.error("   - MONGODB_URI is correct in .env\n");
    process.exit(1);
  }
}

// Run the application
main();
