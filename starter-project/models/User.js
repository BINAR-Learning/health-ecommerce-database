/**
 *  FILE INI PERLU DILENGKAPI
 *
 * User Model
 * Schema untuk user/customer
 *
 * Tugas:
 * 1. Buat schema dengan fields yang diminta
 * 2. Tambahkan virtual 'fullName'
 * 3. Tambahkan timestamps
 */

// TODO: Import mongoose

// TODO: Define userSchema
/*
Fields:
- firstName: String, required
- lastName: String, required
- email: String, required, unique, lowercase, trim
- password: String, required, minlength 6
- role: String, enum ['user', 'admin'], default 'user'
*/

// TODO: Tambahkan virtual 'fullName'
// Hint:
// userSchema.virtual('fullName').get(function() {
//   return `${this.firstName} ${this.lastName}`;
// });

// TODO: Opsional - Pre-save middleware untuk hash password
// (Akan dipelajari lebih detail di Modul 4 - Authentication)

// TODO: Export model
