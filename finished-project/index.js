/**
 * Main Entry Point - Health Products Database
 * Interactive MongoDB Operations Demo
 *
 * Note: Modul ini focus ke Database/MongoDB saja.
 * Express API akan dibahas di Modul 3.
 */

require("dotenv").config();
const connectDB = require("./config/database");
const productService = require("./services/productService");
const reviewService = require("./services/reviewService");
const analyticsService = require("./services/analyticsService");

// Main application
async function main() {
  try {
    // Connect to database
    await connectDB();

    console.log("\n" + "=".repeat(60));
    console.log("HEALTH PRODUCTS DATABASE - INTERACTIVE DEMO");
    console.log("=".repeat(60));

    // Example 1: Get all products
    console.log("\nExample 1: Get All Products");
    const products = await productService.getAllProducts();
    console.log(`Found ${products.count} products`);
    if (products.data && products.data.length > 0) {
      console.log(
        `   Sample: ${
          products.data[0].name
        } - Rp ${products.data[0].price.toLocaleString()}`
      );
    }

    // Example 2: Search products
    console.log("\nExample 2: Search 'vitamin'");
    const searchResult = await productService.searchProducts("vitamin");
    console.log(`Found ${searchResult.count} matching products`);
    searchResult.data?.forEach((p, i) => {
      console.log(`   ${i + 1}. ${p.name}`);
    });

    // Example 3: Get statistics
    console.log("\nExample 3: Product Statistics by Category");
    const stats = await analyticsService.getProductStats();
    if (stats.success) {
      stats.data.forEach((stat) => {
        console.log(
          `   ${stat.category}: ${
            stat.totalProducts
          } products, Avg: Rp ${stat.avgPrice.toLocaleString()}`
        );
      });
    }

    // Example 4: Get inventory value
    console.log("\nExample 4: Total Inventory Value");
    const inventory = await analyticsService.getInventoryValue();
    if (inventory.success) {
      let totalValue = 0;
      inventory.data.forEach((inv) => {
        totalValue += inv.inventoryValue;
        console.log(
          `   ${inv.category}: Rp ${inv.inventoryValue.toLocaleString()}`
        );
      });
      console.log(`   ${"─".repeat(40)}`);
      console.log(`   TOTAL: Rp ${totalValue.toLocaleString()}`);
    }

    console.log("\n" + "=".repeat(60));
    console.log("Demo completed successfully!");
    console.log("\nWant to see more?");
    console.log("   - Run: node test.js (untuk comprehensive tests)");
    console.log("   - Run: npm run seed (untuk reset data)");
    console.log("   - Check MongoDB Compass untuk explore data");
    console.log("   - Edit index.js untuk custom operations");
    console.log("=".repeat(60) + "\n");

    // Keep connection alive in dev mode
    if (process.env.NODE_ENV === "development") {
      console.log("Running in dev mode - watching for changes...\n");
      // Connection stays open for nodemon
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error("\nError:", error.message);
    process.exit(1);
  }
}

// Run the application
main();
