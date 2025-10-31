const Review = require("../models/Review");

/**
 * Review Service
 * Business logic untuk product reviews
 */

/**
 * CREATE - Buat review baru
 */
async function createReview(data) {
  try {
    const review = await Review.create(data);
    return {
      success: true,
      message: "Review created successfully",
      data: review,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * READ - Get reviews untuk product tertentu
 */
async function getProductReviews(productId) {
  try {
    const reviews = await Review.find({ productId })
      .populate("userId", "firstName lastName email")
      .sort({ createdAt: -1 });

    return {
      success: true,
      count: reviews.length,
      data: reviews,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * READ - Get reviews by user
 */
async function getUserReviews(userId) {
  try {
    const reviews = await Review.find({ userId })
      .populate("productId", "name imageUrl price")
      .sort({ createdAt: -1 });

    return {
      success: true,
      count: reviews.length,
      data: reviews,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * UPDATE - Update review
 */
async function updateReview(id, updates) {
  try {
    const review = await Review.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!review) {
      return {
        success: false,
        error: "Review not found",
      };
    }

    return {
      success: true,
      message: "Review updated successfully",
      data: review,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * DELETE - Delete review
 */
async function deleteReview(id) {
  try {
    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return {
        success: false,
        error: "Review not found",
      };
    }

    return {
      success: true,
      message: "Review deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = {
  createReview,
  getProductReviews,
  getUserReviews,
  updateReview,
  deleteReview,
};
