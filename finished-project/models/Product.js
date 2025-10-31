const mongoose = require("mongoose");

/**
 * Product Schema
 * Schema untuk produk kesehatan dengan validation lengkap
 */

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama produk wajib diisi"],
      trim: true,
      maxlength: [100, "Nama maksimal 100 karakter"],
    },
    description: {
      type: String,
      required: [true, "Deskripsi wajib diisi"],
    },
    category: {
      type: String,
      required: [true, "Kategori wajib diisi"],
      enum: {
        values: [
          "Vitamin",
          "Supplement",
          "Medical Equipment",
          "Medicine",
          "Other",
        ],
        message: "{VALUE} bukan kategori valid",
      },
    },
    price: {
      type: Number,
      required: [true, "Harga wajib diisi"],
      min: [0, "Harga harus positif"],
    },
    stock: {
      type: Number,
      required: [true, "Stock wajib diisi"],
      min: [0, "Stock tidak boleh negatif"],
      default: 0,
    },
    manufacturer: {
      type: String,
      required: [true, "Manufacturer wajib diisi"],
    },
    imageUrl: {
      type: String,
      default: "/images/default-product.jpg",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Text index untuk search functionality
productSchema.index({ name: "text", description: "text" });

// Compound index untuk query optimization
productSchema.index({ category: 1, price: -1 });

module.exports = mongoose.model("Product", productSchema);
