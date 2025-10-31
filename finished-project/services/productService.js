const Product = require("../models/Product");

/**
 * Product Service
 * Business logic untuk CRUD operations
 */

/**
 * CREATE - Buat product baru
 */
async function createProduct(data) {
  try {
    const product = await Product.create(data);
    return {
      success: true,
      message: "Product created successfully",
      data: product,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * READ - Get all products
 */
async function getAllProducts(filter = {}) {
  try {
    // Only active products by default
    const query = { isActive: true, ...filter };

    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(50);

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
 * READ - Get product by ID
 */
async function getProductById(id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      return {
        success: false,
        error: "Product not found",
      };
    }

    return {
      success: true,
      data: product,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * UPDATE - Update product
 */
async function updateProduct(id, updates) {
  try {
    const product = await Product.findByIdAndUpdate(id, updates, {
      new: true, // Return updated document
      runValidators: true, // Run schema validations
    });

    if (!product) {
      return {
        success: false,
        error: "Product not found",
      };
    }

    return {
      success: true,
      message: "Product updated successfully",
      data: product,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * DELETE - Soft delete product
 */
async function deleteProduct(id) {
  try {
    // Soft delete: set isActive to false
    const product = await Product.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!product) {
      return {
        success: false,
        error: "Product not found",
      };
    }

    return {
      success: true,
      message: "Product deleted successfully (soft delete)",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * SEARCH - Text search products
 */
async function searchProducts(keyword) {
  try {
    const products = await Product.find({
      $text: { $search: keyword },
      isActive: true,
    }).select("name description price category");

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

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
