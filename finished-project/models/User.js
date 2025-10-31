const mongoose = require("mongoose");

/**
 * User Schema
 * Schema untuk user/customer dengan virtual fullName
 */

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name wajib diisi"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name wajib diisi"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email wajib diisi"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Email tidak valid"],
    },
    password: {
      type: String,
      required: [true, "Password wajib diisi"],
      minlength: [6, "Password minimal 6 karakter"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
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

// Virtual property: fullName
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Ensure virtuals are included in JSON output
userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

// Index untuk email (unique sudah create index otomatis)
userSchema.index({ email: 1 });

module.exports = mongoose.model("User", userSchema);
