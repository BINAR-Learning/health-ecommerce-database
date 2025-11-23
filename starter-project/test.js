/**
 * Test File - Health Products Database (STARTER PROJECT)
 *
 * File ini untuk testing implementasi kamu!
 * Uncomment test sesuai progress pengerjaan.
 */

require("dotenv").config();
const connectDB = require("./config/database");

// TODO: Uncomment ketika sudah implement productService
// const productService = require('./services/productService');

// Helper function untuk print results
function printResult(title, result) {
  console.log("\n" + "=".repeat(60));
  console.log(`${title}`);
  console.log("=".repeat(60));
  console.log(JSON.stringify(result, null, 2));
}

function printInfo(message) {
  console.log(`\n${message}`);
}

function printSuccess(message) {
  console.log(`\n${message}`);
}

function printWarning(message) {
  console.log(`\n${message}`);
}

// Main test function
async function runTests() {
  try {
    // Connect to database
    await connectDB();
    printSuccess("Database connected! Starting tests...\n");

    // ========== TEST 1: Database Connection ==========
    printInfo("TEST 1: Database Connection - PASSED");

    // ========== TEST 2: Create Product ==========
    printWarning("TEST 2: Create Product - UNCOMMENT SETELAH IMPLEMENT");
    /*
    const newProduct = await productService.createProduct({
      name: "Test Vitamin C",
      description: "Produk test untuk vitamin C",
      category: "Vitamin",
      price: 75000,
      stock: 30,
      manufacturer: "Test Manufacturer"
    });
    printResult("TEST 2: Create Product", newProduct);
    
    // Simpan ID untuk test selanjutnya
    const testProductId = newProduct.data?._id;
    */

    // ========== TEST 3: Get All Products ==========
    printWarning("TEST 3: Get All Products - UNCOMMENT SETELAH IMPLEMENT");
    /*
    const allProducts = await productService.getAllProducts();
    printResult("TEST 3: Get All Products", {
      success: allProducts.success,
      count: allProducts.count,
      sampleProduct: allProducts.data?.[0]
    });
    */

    // ========== TEST 4: Get Product by ID ==========
    printWarning("TEST 4: Get Product by ID - UNCOMMENT SETELAH IMPLEMENT");
    /*
    if (testProductId) {
      const product = await productService.getProductById(testProductId);
      printResult("TEST 4: Get Product by ID", product);
    }
    */

    // ========== TEST 5: Filter Products by Category ==========
    printWarning("TEST 5: Filter by Category - UNCOMMENT SETELAH IMPLEMENT");
    /*
    const vitamins = await productService.getAllProducts({ category: 'Vitamin' });
    printResult("TEST 5: Filter Products (Category: Vitamin)", {
      success: vitamins.success,
      count: vitamins.count,
      products: vitamins.data?.map(p => ({ name: p.name, price: p.price }))
    });
    */

    // ========== TEST 6: Update Product ==========
    printWarning("TEST 6: Update Product - UNCOMMENT SETELAH IMPLEMENT");
    /*
    if (testProductId) {
      const updated = await productService.updateProduct(testProductId, {
        price: 80000,
        stock: 25
      });
      printResult("TEST 6: Update Product", {
        success: updated.success,
        message: updated.message,
        newPrice: updated.data?.price,
        newStock: updated.data?.stock
      });
    }
    */

    // ========== TEST 7: Soft Delete Product ==========
    printWarning("TEST 7: Soft Delete - UNCOMMENT SETELAH IMPLEMENT");
    /*
    if (testProductId) {
      const deleted = await productService.deleteProduct(testProductId);
      printResult("TEST 7: Soft Delete Product", deleted);
      
      // Verify soft delete
      const checkDeleted = await productService.getProductById(testProductId);
      printResult("TEST 7b: Verify Soft Delete (isActive should be false)", {
        productId: testProductId,
        isActive: checkDeleted.data?.isActive
      });
    }
    */

    // Success summary
    console.log("\n" + "=".repeat(60));
    console.log("TEST SUMMARY");
    console.log("=".repeat(60));
    console.log("TEST 1: Database Connection - PASSED");
    console.log("TEST 2-7: Waiting for implementation...");
    console.log("=".repeat(60));

    console.log("\nNEXT STEPS:");
    console.log("   1. Implement models/Product.js");
    console.log("   2. Implement services/productService.js");
    console.log("   3. Uncomment tests satu per satu sesuai progress");
    console.log("   4. Run: npm run seed (untuk sample data)");
    console.log("   5. Run: node test.js (untuk test ulang)");

    console.log("\nTIPS:");
    console.log("   - Kerjakan step by step, jangan langsung semua");
    console.log("   - Test setiap function sebelum lanjut ke next");
    console.log("   - Kalau error, baca error message dengan teliti");
    console.log("   - Check finished-project kalau stuck");
    console.log("   - Pakai MongoDB Compass untuk verify data\n");

    process.exit(0);
  } catch (error) {
    console.error("\nError running tests:", error.message);
    console.error("\nTroubleshooting:");
    console.error("   - Pastikan MongoDB service running");
    console.error("   - Check .env file (MONGODB_URI)");
    console.error("   - Pastikan npm install sudah dijalankan");
    console.error("   - Coba: mongosh (untuk test connection)\n");
    process.exit(1);
  }
}

// Run all tests
console.log("\n" + "=".repeat(60));
console.log("STARTER PROJECT - TEST SUITE");
console.log("=".repeat(60));
console.log("This file contains tests for your implementation.");
console.log("Uncomment tests as you complete each feature!");
console.log("=".repeat(60));

runTests();
