const Product = require("../models/Product");
const Review = require("../models/Review");

/**
 * Analytics Service
 * Aggregation queries untuk business intelligence
 */

/**
 * Get product statistics by category
 */
async function getProductStats() {
  try {
    const stats = await Product.aggregate([
      // Stage 1: Filter active products only
      {
        $match: { isActive: true },
      },
      // Stage 2: Group by category
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: "$price" },
          minPrice: { $min: "$price" },
          maxPrice: { $max: "$price" },
          totalStock: { $sum: "$stock" },
        },
      },
      // Stage 3: Add computed fields
      {
        $addFields: {
          category: "$_id",
          priceRange: {
            $concat: [
              "Rp ",
              { $toString: "$minPrice" },
              " - Rp ",
              { $toString: "$maxPrice" },
            ],
          },
        },
      },
      // Stage 4: Sort by avgPrice descending
      {
        $sort: { avgPrice: -1 },
      },
      // Stage 5: Project final fields
      {
        $project: {
          category: 1,
          totalProducts: 1,
          avgPrice: { $round: ["$avgPrice", 0] },
          totalStock: 1,
          priceRange: 1,
          _id: 0,
        },
      },
    ]);

    return {
      success: true,
      data: stats,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Get top rated products
 */
async function getTopRatedProducts(limit = 10) {
  try {
    const products = await Review.aggregate([
      // Stage 1: Group reviews by product
      {
        $group: {
          _id: "$productId",
          avgRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
      // Stage 2: Filter products dengan minimal 3 reviews
      {
        $match: { reviewCount: { $gte: 3 } },
      },
      // Stage 3: Sort by avgRating descending
      {
        $sort: { avgRating: -1 },
      },
      // Stage 4: Limit results
      {
        $limit: limit,
      },
      // Stage 5: Lookup product details
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      // Stage 6: Unwind product array
      {
        $unwind: "$product",
      },
      // Stage 7: Project final fields
      {
        $project: {
          productId: "$_id",
          name: "$product.name",
          category: "$product.category",
          price: "$product.price",
          avgRating: { $round: ["$avgRating", 1] },
          reviewCount: 1,
          _id: 0,
        },
      },
    ]);

    return {
      success: true,
      count: products.length,
      data: products,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Get inventory value by category
 */
async function getInventoryValue() {
  try {
    const inventory = await Product.aggregate([
      // Stage 1: Active products only
      {
        $match: { isActive: true },
      },
      // Stage 2: Calculate value (price * stock)
      {
        $addFields: {
          totalValue: { $multiply: ["$price", "$stock"] },
        },
      },
      // Stage 3: Group by category
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          totalStock: { $sum: "$stock" },
          inventoryValue: { $sum: "$totalValue" },
        },
      },
      // Stage 4: Sort by inventoryValue
      {
        $sort: { inventoryValue: -1 },
      },
      // Stage 5: Project
      {
        $project: {
          category: "$_id",
          totalProducts: 1,
          totalStock: 1,
          inventoryValue: { $round: ["$inventoryValue", 0] },
          _id: 0,
        },
      },
    ]);

    return {
      success: true,
      data: inventory,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = {
  getProductStats,
  getTopRatedProducts,
  getInventoryValue,
};
