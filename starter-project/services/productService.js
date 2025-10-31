/**
 * ⚠️ FILE INI PERLU DILENGKAPI
 *
 * Product Service
 * Business logic untuk CRUD operations
 *
 * Tugas:
 * Implementasikan 5 fungsi berikut
 */

// TODO: Import Product model
// Hint: const Product = require('../models/Product');

/**
 * CREATE - Buat product baru
 */
async function createProduct(data) {
  try {
    // TODO: Create product dengan Product.create(data)
    // TODO: Return { success: true, data: product }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * READ - Get all products
 */
async function getAllProducts(filter = {}) {
  try {
    // TODO: Find products dengan filter (jika ada)
    // TODO: Sort by createdAt descending
    // TODO: Limit 50
    // TODO: Return { success: true, count, data }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * READ - Get product by ID
 */
async function getProductById(id) {
  try {
    // TODO: Find by ID
    // TODO: Check if not found, return error
    // TODO: Return { success: true, data }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * UPDATE - Update product
 */
async function updateProduct(id, updates) {
  try {
    // TODO: findByIdAndUpdate dengan options { new: true, runValidators: true }
    // TODO: Check if not found
    // TODO: Return { success: true, data }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * DELETE - Soft delete product
 */
async function deleteProduct(id) {
  try {
    // TODO: Soft delete - set isActive: false (jangan hard delete!)
    // TODO: Check if not found
    // TODO: Return { success: true, message }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// TODO: Export semua functions
// module.exports = {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   updateProduct,
//   deleteProduct
// };
