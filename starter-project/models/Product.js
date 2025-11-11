/**
 *  FILE INI PERLU DILENGKAPI
 *
 * Product Model
 * Schema untuk produk kesehatan
 *
 * Tugas:
 * 1. Import mongoose
 * 2. Define productSchema dengan fields yang diminta
 * 3. Tambahkan validation untuk setiap field
 * 4. Tambahkan timestamps
 * 5. Tambahkan text index untuk search
 * 6. Export model
 */

// TODO: Import mongoose
// Hint: const mongoose = require('mongoose');

// TODO: Definisikan productSchema
// Hint: const productSchema = new mongoose.Schema({ ... }, { timestamps: true });

/*
Fields yang harus ada:
- name: String, required, trim, maxlength 100
- description: String, required
- category: String, required, enum ['Vitamin', 'Supplement', 'Medical Equipment', 'Medicine', 'Other']
- price: Number, required, min 0
- stock: Number, required, min 0, default 0
- manufacturer: String, required
- imageUrl: String, default '/images/default-product.jpg'
- isActive: Boolean, default true
*/

// TODO: Tambahkan text index
// Hint: productSchema.index({ name: 'text', description: 'text' });

// TODO: Export model
// Hint: module.exports = mongoose.model('Product', productSchema);
