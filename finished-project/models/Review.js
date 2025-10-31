const mongoose = require("mongoose");

/**
 * Review Schema
 * Schema untuk product reviews dengan reference ke Product dan User
 */

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product ID wajib diisi"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID wajib diisi"],
    },
    rating: {
      type: Number,
      required: [true, "Rating wajib diisi"],
      min: [1, "Rating minimal 1"],
      max: [5, "Rating maksimal 5"],
    },
    comment: {
      type: String,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index untuk query efficiency
reviewSchema.index({ productId: 1, createdAt: -1 });
reviewSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model("Review", reviewSchema);
