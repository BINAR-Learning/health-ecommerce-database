# 🏁 Starter Project - Health Products Database

## 📝 Deskripsi

Ini adalah **starter project** untuk pembelajaran Database & MongoDB dengan Mongoose ODM. Project ini berisi struktur dasar dengan beberapa bagian yang perlu kamu lengkapi sebagai latihan.

## 🎯 Tujuan

Dengan mengerjakan starter project ini, kamu akan:

1. ✅ Membuat Mongoose schemas dengan validation lengkap
2. ✅ Implementasi CRUD operations
3. ✅ Setup relasi antar models (references)
4. ✅ Membuat seeding script untuk sample data
5. ✅ Practice query operations dan aggregation

## 📂 Struktur Folder

```
starter-project/
├── config/
│   └── database.js         # ✅ Sudah lengkap - Database connection
├── models/
│   ├── Product.js          # ⚠️ PERLU DILENGKAPI
│   ├── User.js             # ⚠️ PERLU DILENGKAPI
│   └── Review.js           # ⚠️ PERLU DILENGKAPI
├── services/
│   └── productService.js   # ⚠️ PERLU DILENGKAPI
├── scripts/
│   └── seed.js            # ⚠️ PERLU DILENGKAPI
├── .env.example           # ✅ Template environment variables
├── package.json           # ✅ Sudah lengkap
└── README.md              # File ini
```

## 🔧 Setup & Instalasi

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Setup Environment Variables

Copy `.env.example` menjadi `.env`:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Mac/Linux
cp .env.example .env
```

Edit `.env` sesuai setup kamu:

**Untuk MongoDB Lokal:**

```env
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/health-products
```

**Untuk MongoDB Atlas:**

```env
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/health-products
```

### 3️⃣ Pastikan MongoDB Running

**Lokal:**

```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Atlas:**

- Pastikan cluster sudah active
- Connection string sudah benar di `.env`

## 📝 Tugas yang Perlu Dikerjakan

### ⚠️ 1. Lengkapi `models/Product.js`

Buat Mongoose schema dengan fields:

- `name` (String, required, max 100 chars, trim)
- `description` (String, required)
- `category` (String, enum: Vitamin/Supplement/Medical Equipment/Medicine/Other)
- `price` (Number, required, min 0)
- `stock` (Number, required, min 0, default 0)
- `manufacturer` (String, required)
- `imageUrl` (String, default: `/images/default.jpg`)
- `isActive` (Boolean, default: true)
- Tambahkan `timestamps: true`
- Tambahkan text index untuk `name` dan `description`

**Hint:** Lihat `finished-project/models/Product.js` untuk reference

### ⚠️ 2. Lengkapi `models/User.js`

Buat Mongoose schema dengan fields:

- `firstName` (String, required)
- `lastName` (String, required)
- `email` (String, required, unique, lowercase)
- `password` (String, required, minlength: 6)
- `role` (String, enum: user/admin, default: user)
- Tambahkan virtual `fullName` (firstName + lastName)
- Tambahkan timestamps

**Hint:**

```javascript
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
```

### ⚠️ 3. Lengkapi `models/Review.js`

Buat Mongoose schema dengan fields:

- `productId` (ObjectId, ref: 'Product', required)
- `userId` (ObjectId, ref: 'User', required)
- `rating` (Number, required, min: 1, max: 5)
- `comment` (String)
- Tambahkan timestamps

**Hint:** Gunakan `mongoose.Schema.Types.ObjectId` untuk reference

### ⚠️ 4. Lengkapi `services/productService.js`

Implementasikan functions:

#### `createProduct(data)`

- Create product baru dengan `Product.create()`
- Return `{ success, data }` atau `{ success, error }`

#### `getAllProducts(filter = {})`

- Get all products dengan optional filter
- Sort by `createdAt` descending
- Limit 50 results
- Return `{ success, count, data }`

#### `getProductById(id)`

- Find product by ID
- Handle jika not found
- Return `{ success, data }` atau `{ success, error }`

#### `updateProduct(id, updates)`

- Update dengan `findByIdAndUpdate`
- Options: `{ new: true, runValidators: true }`
- Handle not found
- Return `{ success, data }` atau `{ success, error }`

#### `deleteProduct(id)`

- **Soft delete:** Set `isActive: false` (jangan hard delete)
- Return `{ success, message }`

**Hint:** Gunakan try-catch untuk error handling

### ⚠️ 5. Lengkapi `scripts/seed.js`

Buat seeding script:

- Connect ke database
- Delete existing products
- Insert array of 10+ sample products
- Log progress (deleted, inserted)
- Exit setelah selesai

**Sample products minimal:**

- 3 Vitamin products
- 3 Supplement products
- 2 Medical Equipment
- 2 Medicine/Others

## ✅ Checklist Pengerjaan

### Setup

- [ ] MongoDB installed (lokal atau Atlas)
- [ ] Dependencies installed
- [ ] `.env` file configured
- [ ] MongoDB service running
- [ ] Test connection berhasil

### Models

- [ ] Product.js schema lengkap dengan validations
- [ ] User.js schema dengan virtual fullName
- [ ] Review.js schema dengan references
- [ ] All models exported correctly

### Services

- [ ] createProduct function works
- [ ] getAllProducts function works
- [ ] getProductById function works
- [ ] updateProduct function works
- [ ] deleteProduct (soft delete) works

### Seeding

- [ ] seed.js script complete
- [ ] Sample data realistic dan varied
- [ ] Seeding works without errors
- [ ] Data visible di Compass/mongosh

### Testing

- [ ] Create product via service function
- [ ] Get all products
- [ ] Filter products by category
- [ ] Update product
- [ ] Soft delete product
- [ ] Verify di Compass

## 🧪 Testing

### Via Node.js Script

Buat file `test.js`:

```javascript
const connectDB = require("./config/database");
const productService = require("./services/productService");

async function test() {
  await connectDB();

  // Test CREATE
  const created = await productService.createProduct({
    name: "Test Product",
    description: "Test description",
    category: "Vitamin",
    price: 50000,
    stock: 20,
    manufacturer: "Test Manufacturer",
  });
  console.log("Created:", created);

  // Test READ
  const all = await productService.getAllProducts();
  console.log("All products:", all);

  process.exit(0);
}

test();
```

### Via MongoDB Compass

1. Connect Compass ke database
2. Browse collections: products, users, reviews
3. Verify data structure
4. Try manual queries

### Via mongosh

```bash
mongosh
use health-products
db.products.find()
db.products.find({ category: "Vitamin" })
```

## 🐛 Troubleshooting

### MongoDB Connection Error

**Error:** `MongooseServerSelectionError`  
**Solusi:**

- Check MongoDB service running
- Verify MONGODB_URI di .env
- Test dengan `mongosh`

### Validation Error

**Error:** `ValidationError: Path 'name' is required`  
**Solusi:**

- Check semua required fields terisi
- Lihat error message untuk tahu field mana yang missing

### Reference Error

**Error:** `Cast to ObjectId failed`  
**Solusi:**

- Check format ObjectId valid (24 hex characters)
- Verify referenced document exists

## 💡 Tips

1. **Baca materi.md dulu** - Pahami konsep sebelum coding
2. **Start simple** - Schema basic dulu, validation belakangan
3. **Test incrementally** - Test setiap function satu per satu
4. **Use Compass** - Visualize data untuk verify
5. **Check finished-project** - Kalau stuck, lihat reference (tapi jangan langsung copy!)

## 🔗 Referensi

- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)
- [MongoDB Compass Guide](https://docs.mongodb.com/compass/)

## 🎯 Tujuan Akhir

Setelah menyelesaikan starter project:

- ✅ Bisa membuat Mongoose schemas dengan validation
- ✅ Bisa implement CRUD operations
- ✅ Paham relasi data di MongoDB
- ✅ Ready untuk Modul 3 (Express API)

**Selamat mengerjakan! 💾🚀**
