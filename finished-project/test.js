/**
 * Test File - Health Products Database
 * Mendemonstrasikan berbagai operasi MongoDB + Mongoose
 */

require("dotenv").config();
const connectDB = require("./config/database");
const productService = require("./services/productService");
const reviewService = require("./services/reviewService");
const analyticsService = require("./services/analyticsService");

// Helper function untuk print results
function printResult(title, result) {
  console.log("\n" + "=".repeat(50));
  console.log(`${title}`);
  console.log("=".repeat(50));
  console.log(JSON.stringify(result, null, 2));
}

// Main test function
async function runTests() {
  try {
    // Connect to database
    await connectDB();
    console.log("\nDatabase connected! Starting tests...\n");

    // ========== TEST 1: Get All Products ==========
    const allProducts = await productService.getAllProducts();
    printResult("TEST 1: Get All Products", {
      success: allProducts.success,
      count: allProducts.count,
      sampleProduct: allProducts.data?.[0],
    });

    // ========== TEST 2: Search Products ==========
    const searchResults = await productService.searchProducts("vitamin");
    printResult("TEST 2: Search 'vitamin'", {
      success: searchResults.success,
      count: searchResults.count,
      products: searchResults.data?.map((p) => p.name),
    });

    // ========== TEST 3: Get Products by Category ==========
    const vitamins = await productService.getAllProducts({
      category: "Vitamin",
    });
    printResult("TEST 3: Filter by Category 'Vitamin'", {
      success: vitamins.success,
      count: vitamins.count,
      products: vitamins.data?.map((p) => ({ name: p.name, price: p.price })),
    });

    // ========== TEST 4: Product Stats by Category ==========
    const stats = await analyticsService.getProductStats();
    printResult("TEST 4: Product Statistics by Category", stats);

    // ========== TEST 5: Top Rated Products ==========
    const topRated = await analyticsService.getTopRatedProducts(5);
    printResult("TEST 5: Top 5 Rated Products", topRated);

    // ========== TEST 6: Inventory Value ==========
    const inventory = await analyticsService.getInventoryValue();
    printResult("TEST 6: Inventory Value by Category", inventory);

    // ========== TEST 7: Get Product Reviews ==========
    if (allProducts.data && allProducts.data.length > 0) {
      const productId = allProducts.data[0]._id;
      const reviews = await reviewService.getProductReviews(productId);
      printResult("TEST 7: Reviews for First Product", {
        productId: productId,
        success: reviews.success,
        count: reviews.count,
        sampleReview: reviews.data?.[0],
      });
    }

    // ========== TEST 8: Create New Product (Example) ==========
    const newProduct = await productService.createProduct({
      name: "Test Vitamin D3",
      description: "Test product created from test.js",
      price: 85000,
      category: "Vitamin",
      stock: 50,
      imageUrl: "https://via.placeholder.com/300",
    });
    printResult("TEST 8: Create New Product", {
      success: newProduct.success,
      message: newProduct.message,
      productId: newProduct.data?._id,
    });

    // ========== TEST 9: Update Product ==========
    if (newProduct.success && newProduct.data) {
      const updated = await productService.updateProduct(newProduct.data._id, {
        price: 90000,
        stock: 45,
      });
      printResult("TEST 9: Update Product Price & Stock", {
        success: updated.success,
        message: updated.message,
        updatedPrice: updated.data?.price,
        updatedStock: updated.data?.stock,
      });
    }

    // ========== TEST 10: Soft Delete Product ==========
    if (newProduct.success && newProduct.data) {
      const deleted = await productService.deleteProduct(newProduct.data._id);
      printResult("TEST 10: Soft Delete Product", deleted);
    }

    // Success summary
    console.log("\n" + "=".repeat(50));
    console.log("ALL TESTS COMPLETED SUCCESSFULLY!");
    console.log("=".repeat(50));
    console.log("\nTips:");
    console.log("   - Check MongoDB Compass untuk melihat data");
    console.log("   - Jalankan 'npm run seed' untuk reset data");
    console.log("   - Modify test.js untuk experiment lebih lanjut\n");

    process.exit(0);
  } catch (error) {
    console.error("\nError running tests:", error);
    process.exit(1);
  }
}

// Run all tests
runTests();
