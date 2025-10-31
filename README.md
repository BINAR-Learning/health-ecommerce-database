# 💾 health-ecommerce-database

> **MongoDB & Mongoose ODM untuk Health E-Commerce**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-brightgreen)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-7.0+-red)](https://mongoosejs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Database layer untuk Health E-Commerce dengan MongoDB dan Mongoose ODM - dari installation sampai production-ready schemas.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-database/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Untuk practice (dengan TODO)
│   ├── README.md
│   ├── config/
│   ├── models/
│   ├── services/
│   └── scripts/
└── finished-project/    # ✅ Complete implementation
    ├── README.md
    ├── config/
    ├── models/ (4 models complete!)
    ├── services/ (3 services complete!)
    └── scripts/ (seeding script)
```

**Pilih mana?**

- **Starter** - Untuk **belajar dengan practice** (RECOMMENDED!)
- **Finished** - Untuk **reference** saat stuck

---

## 🚀 Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1) Masuk ke starter-project
cd starter-project

# 2) Install dependencies
npm install

# 3) Setup environment
Copy-Item .env.example .env   # Windows
# Mac/Linux: cp .env.example .env

# 4) Edit .env (MONGODB_URI lokal atau Atlas)

# 5) Start MongoDB (jika lokal)
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 6) Seed database (isi data contoh)
npm run seed

# 7) Jalankan project (jika ada script dev)
npm run dev
```

### Option 2: Lihat Finished Project (Reference)

```bash
# 1) Masuk ke finished-project
cd finished-project

# 2) Install dependencies
npm install

# 3) Setup environment
Copy-Item .env.example .env   # Windows
# Mac/Linux: cp .env.example .env

# 4) Edit .env dengan connection string yang benar

# 5) Start MongoDB (jika lokal)
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 6) Seed database
npm run seed

# 7) Jalankan project
npm run dev
```

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan modul ini, peserta akan mampu:

1. ✅ Install dan setup MongoDB di komputer lokal
2. ✅ Menggunakan MongoDB Compass untuk manage database visually
3. ✅ Setup MongoDB Atlas (cloud database)
4. ✅ Melakukan query operations (CRUD, filtering, sorting)
5. ✅ Memahami perbedaan Native Query vs Mongoose ODM
6. ✅ Membuat schema dan model dengan Mongoose
7. ✅ Implement relasi data (1-to-many, many-to-many)
8. ✅ Optimasi database dengan indexing

## 📂 Struktur Folder

```
Modul_2-Database_ODM_MongoDB/
│
├── materi.md                          # 📚 Materi pembelajaran lengkap
│
├── starter-project/                   # 🏁 Project awal untuk latihan
│   ├── config/
│   │   └── database.js                # ✅ Database connection (lengkap)
│   ├── models/
│   │   ├── Product.js                 # ⚠️ PERLU DILENGKAPI
│   │   ├── User.js                    # ⚠️ PERLU DILENGKAPI
│   │   └── Review.js                  # ⚠️ PERLU DILENGKAPI
│   ├── services/
│   │   └── productService.js          # ⚠️ PERLU DILENGKAPI
│   ├── scripts/
│   │   └── seed.js                    # ⚠️ PERLU DILENGKAPI
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── finished-project/                  # ✅ Project lengkap sebagai referensi
│   ├── config/
│   │   └── database.js                # Database connection
│   ├── models/
│   │   ├── Product.js                 # Complete schema
│   │   ├── User.js                    # Complete schema
│   │   ├── Review.js                  # Complete schema
│   │   └── Category.js                # Complete schema
│   ├── services/
│   │   ├── productService.js          # Full CRUD
│   │   ├── reviewService.js           # Full CRUD
│   │   └── analyticsService.js        # Aggregations
│   ├── scripts/
│   │   └── seed.js                    # Complete seeding
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
└── README.md                          # File ini
```

## 🔧 Prerequisites

Sebelum memulai, pastikan sudah install:

- **Node.js** (v18+) - [Download](https://nodejs.org/)
- **MongoDB** (v5.0+) - Install sesuai OS kamu (Windows/Mac/Linux)
- **MongoDB Compass** (optional tapi recommended) - [Download](https://www.mongodb.com/products/compass)
- **Code Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

## 🚀 Menjalankan Project

### Persyaratan Sistem

Sebelum memulai, pastikan kamu sudah menginstall:

- **Node.js** versi 18 atau lebih baru ([Download di sini](https://nodejs.org/))
- **MongoDB** (pilih salah satu):
  - MongoDB lokal terinstall di komputer, ATAU
  - MongoDB Atlas account (gratis)

### Langkah 1: Install Dependencies

1. Buka terminal atau command prompt
2. Navigasi ke folder **starter-project** atau **finished-project** (pilih salah satu)
3. Jalankan perintah untuk menginstall semua dependencies:

```bash
npm install
```

Tunggu sampai proses selesai. Kamu akan melihat folder `node_modules` muncul.

### Langkah 2: Setup Environment Variables

1. **Copy file template environment:**

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Mac/Linux
cp .env.example .env
```

2. **Edit file `.env` yang baru dibuat:**

**Jika pakai MongoDB Lokal:**

```env
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/health-products
```

**Jika pakai MongoDB Atlas (Cloud):**

```env
NODE_ENV=development
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/health-products
```

Ganti `your-username`, `your-password`, dan `your-cluster` dengan credentials Atlas kamu.

### Langkah 3: Start MongoDB

**Jika Pakai MongoDB Lokal:**

```bash
# Windows
net start MongoDB

# Mac (dengan Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Jika Pakai Atlas:**

- Pastikan cluster sudah dalam status "Active" di Atlas dashboard
- Connection string di `.env` sudah benar

### Langkah 4: Seed Database (Isi Data Sample)

Jalankan perintah ini untuk mengisi database dengan data contoh:

```bash
npm run seed
```

Kamu akan melihat output seperti ini:

```
✅ MongoDB Local connected successfully
🗑️  Existing products deleted
✅ 12 products inserted
✅ 5 users inserted
✅ 10 reviews inserted
🎉 Database seeded successfully!
```

### Langkah 5: Jalankan Project

```bash
npm run dev
```

Jika berhasil, kamu akan melihat:

```
✅ MongoDB Local connected successfully
📍 Database: health-products
```

### Langkah 6: Verify Data

**Menggunakan MongoDB Compass:**

1. Buka MongoDB Compass
2. Connect ke `mongodb://localhost:27017`
3. Pilih database `health-products`
4. Browse collections: products, users, reviews
5. Lihat data yang baru di-seed

**Menggunakan mongosh:**

```bash
mongosh
use health-products
db.products.find().pretty()
```

## 📚 Cara Menggunakan Modul Ini

### 1️⃣ Baca Materi Terlebih Dahulu

File `materi.md` berisi:

- Tutorial instalasi MongoDB lokal (Windows/Mac/Linux)
- Setup MongoDB Compass
- Setup MongoDB Atlas
- Konsep database dan query operations
- Perbandingan Native vs Mongoose ODM
- Mongoose schema & validations
- Relasi data dan aggregation
- Indexing dan optimization

### 2️⃣ Kerjakan Starter Project

```bash
cd starter-project/

# File yang perlu dilengkapi:
# - models/Product.js (schema dengan validation)
# - models/User.js (schema)
# - models/Review.js (schema dengan reference)
# - services/productService.js (CRUD functions)
# - scripts/seed.js (seeding script)
```

**Checklist Pengerjaan:**

- [ ] Product schema lengkap dengan validations
- [ ] User schema dengan virtual fullName
- [ ] Review schema dengan reference ke Product
- [ ] CRUD functions di productService
- [ ] Seeding script dengan 10+ sample products
- [ ] Test semua operations

### 3️⃣ Bandingkan dengan Finished Project

Setelah selesai, compare hasil kamu dengan `finished-project/` untuk:

- Lihat best practices implementation
- Check apakah ada yang terlewat
- Understand optimization techniques

## 🎓 Konsep yang Dipelajari

- **MongoDB Basics:** Collections, documents, data types
- **Setup:** Local installation, Compass, Atlas
- **Query Operations:** Find, filter, sort, limit, skip
- **Mongoose ODM:** Schema, model, validation
- **CRUD:** Create, read, update, delete
- **Relationships:** One-to-many, many-to-many, populate
- **Aggregation:** Pipeline, group, lookup
- **Optimization:** Indexing strategies

## 🔗 Integrasi dengan Project Health E-Commerce

Database yang kamu bangun di modul ini akan digunakan untuk:

- Backend API dengan Express.js
- Authentication & Security features
- Integration dengan payment gateway
- Frontend React application
- Complete fullstack e-commerce system

Modul ini menjadi **foundation** untuk semua fitur yang akan dibangun selanjutnya.

---

## 🔗 Hubungan dengan Modul Lain

- **Modul 1** → OOP concepts menjadi dasar struktur model/schema
- **Modul 2 (This!)** → Schema & data layer dengan MongoDB/Mongoose
- **Modul 3** → Gunakan schema ini di Express controllers & routes
- **Modul 4** → Tambahkan authentication & security di atas API yang memakai database ini
- **Modul 5** → Integrasi layanan eksternal yang juga bergantung pada data yang sama

## 💡 Tips Sukses

1. **Practice di mongosh** - Familiarize dengan query syntax
2. **Use Compass** - Visualize data structure dan results
3. **Test incrementally** - Jangan tunggu semua selesai
4. **Read error messages** - MongoDB error messages sangat helpful
5. **Understand trade-offs** - Embedded vs Referenced, Index benefits vs costs
6. **Use Atlas for team** - Share database dengan team members

## 🐛 Troubleshooting

### Error: "Cannot find module 'mongoose'"

**Solusi:**

```bash
npm install
```

Pastikan semua dependencies terinstall dengan benar.

### Error: "MongooseServerSelectionError: connect ECONNREFUSED"

**Solusi:**

- **Jika pakai MongoDB Lokal:** Pastikan MongoDB service sudah running
  ```bash
  # Windows: net start MongoDB
  # Mac: brew services start mongodb-community
  # Linux: sudo systemctl start mongod
  ```
- **Jika pakai Atlas:** Check connection string di `.env` sudah benar (username, password, cluster name)

### Error: "ValidationError: Path 'name' is required"

**Solusi:**

- Ada required field yang belum diisi saat create/update document
- Check error message untuk tahu field mana yang missing
- Pastikan semua required fields terisi

### Error: "E11000 duplicate key error"

**Solusi:**

- Ada field unique (seperti email) yang sudah ada di database
- Gunakan email/username yang berbeda
- Atau clear database dan seed ulang: `npm run seed`

### Error: "Cannot read property '\_id' of null"

**Solusi:**

- Document yang dicari tidak ditemukan
- Check apakah ID yang digunakan valid dan ada di database
- Gunakan MongoDB Compass untuk verify data

## 📖 Referensi

- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)
- [MongoDB Compass](https://docs.mongodb.com/compass/)

## 🆘 Butuh Bantuan?

Jika mengalami kendala:

1. Check bagian **Troubleshooting** di atas
2. Compare dengan `finished-project` untuk lihat reference implementation
3. Gunakan MongoDB Compass untuk visualize dan debug data
4. Tanya mentor atau instruktur jika masih stuck

---

## 🧾 Penutup / Summary – Database & ODM (MongoDB & Mongoose)

### 🧩 Ringkasan Poin Utama

Pada modul ini, peserta telah mempelajari **database NoSQL dengan MongoDB** dan **Mongoose ODM**, mencakup instalasi, setup tools (Compass & Atlas), query operations, schema modeling, relasi data, aggregation, dan optimization.

Peserta diharapkan kini mampu:

- Install dan configure MongoDB di berbagai platform (Windows/Mac/Linux)
- Menggunakan MongoDB Compass untuk visualisasi dan management database
- Setup MongoDB Atlas untuk cloud database production-ready
- Melakukan CRUD operations dengan native queries maupun Mongoose
- Membuat schemas dengan proper validation dan relationships
- Menggunakan aggregation pipeline untuk data analytics
- Optimasi query performance dengan indexing

Dengan pemahaman ini, peserta telah menguasai **database fundamentals** yang essential untuk backend API development dengan Express.js di modul selanjutnya.

### 🎯 Kaitan dengan Tujuan Pembelajaran

| Tujuan Pembelajaran      | Pencapaian Melalui Materi                                                              |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Install MongoDB lokal    | Tutorial step-by-step untuk Windows, Mac, Linux dengan troubleshooting guide           |
| Setup cloud database     | MongoDB Atlas setup lengkap dari account creation sampai connection testing            |
| Query operations         | Practice find, filter, sort, aggregate dengan native MongoDB dan Mongoose              |
| Schema & validation      | Mongoose schemas dengan built-in validations, custom error messages, dan type checking |
| Data relationships       | Implementasi one-to-many dan many-to-many dengan populate untuk join data              |
| Performance optimization | Text index, compound index, dan query analysis dengan explain()                        |

### 💭 Refleksi Akhir

Setelah menyelesaikan modul ini, coba renungkan:

**"Mengapa MongoDB lebih cocok untuk Health E-Commerce dibanding SQL database? Apa trade-offs yang perlu dipertimbangkan?"**

**"Kapan sebaiknya menggunakan embedded data vs referenced data dalam MongoDB? Berikan contoh case dari project kamu."**

**"Apa perbedaan yang paling signifikan antara MongoDB native queries dan Mongoose ODM? Kapan kamu akan pilih salah satunya?"**

Refleksi ini membantu memahami decision-making dalam database design dan mempersiapkan untuk integrate database dengan Express API.

### 📚 Sumber Referensi

- [MongoDB Manual](https://docs.mongodb.com/manual/) - Official MongoDB documentation lengkap
- [Mongoose Documentation](https://mongoosejs.com/docs/) - Comprehensive guide untuk Mongoose ODM
- [MongoDB University](https://university.mongodb.com/) - Free courses dari MongoDB Inc.
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/) - Cloud database management guide
- [Database Design Patterns](https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-summary/) - Best practices untuk MongoDB schema design

### 📘 Glosarium

| Istilah         | Definisi Singkat                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| **NoSQL**       | Database yang tidak menggunakan tabel relational, menyimpan data dalam format fleksibel seperti JSON |
| **Collection**  | Grup dari documents dalam MongoDB, analog dengan "table" di SQL database                             |
| **Document**    | Single record dalam MongoDB collection, disimpan dalam format BSON (Binary JSON)                     |
| **Schema**      | Structure atau blueprint yang mendefinisikan fields, types, dan validations untuk documents          |
| **ODM**         | Object Data Modeling - library yang menyederhanakan interaksi dengan database menggunakan objects    |
| **Mongoose**    | ODM library paling populer untuk MongoDB di Node.js ecosystem                                        |
| **Populate**    | Method untuk join dan retrieve referenced documents dari collection lain                             |
| **Aggregation** | Pipeline-based query untuk perform complex data analysis dan transformations                         |
| **Index**       | Database structure yang meningkatkan speed query operations                                          |
| **Atlas**       | MongoDB cloud hosting service dengan free tier untuk development                                     |
| **Compass**     | Official GUI tool untuk visualize dan manage MongoDB databases                                       |
| **ObjectId**    | Unique identifier 12-byte yang auto-generated untuk setiap MongoDB document                          |

### 💬 Kalimat Penutup

Dengan menyelesaikan modul ini, peserta telah memahami **database management dengan MongoDB dan Mongoose ODM**.

Selanjutnya, peserta akan mempelajari **Backend Development dengan Express.js** untuk membangun REST API yang connect dengan database ini, creating complete backend system.

---

## 🧾 Penutup / Summary – Database & ODM (MongoDB & Mongoose)

### 🧩 Ringkasan Poin Utama

Pada modul ini, peserta telah mempelajari **database NoSQL dengan MongoDB** dan **Mongoose ODM**, mencakup instalasi, setup tools (Compass & Atlas), query operations, schema modeling, relasi data, aggregation, dan optimization.

Peserta diharapkan kini mampu:

- Install dan configure MongoDB di berbagai platform (Windows/Mac/Linux)
- Menggunakan MongoDB Compass untuk visualisasi dan management database
- Setup MongoDB Atlas untuk cloud database production-ready
- Melakukan CRUD operations dengan native queries maupun Mongoose
- Membuat schemas dengan proper validation dan relationships
- Menggunakan aggregation pipeline untuk data analytics
- Optimasi query performance dengan indexing

Dengan pemahaman ini, peserta telah menguasai **database fundamentals** yang essential untuk backend API development dengan Express.js di modul selanjutnya.

### 🎯 Kaitan dengan Tujuan Pembelajaran

| Tujuan Pembelajaran      | Pencapaian Melalui Materi                                                              |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Install MongoDB lokal    | Tutorial step-by-step untuk Windows, Mac, Linux dengan troubleshooting guide           |
| Setup cloud database     | MongoDB Atlas setup lengkap dari account creation sampai connection testing            |
| Query operations         | Practice find, filter, sort, aggregate dengan native MongoDB dan Mongoose              |
| Schema & validation      | Mongoose schemas dengan built-in validations, custom error messages, dan type checking |
| Data relationships       | Implementasi one-to-many dan many-to-many dengan populate untuk join data              |
| Performance optimization | Text index, compound index, dan query analysis dengan explain()                        |

### 💭 Refleksi Akhir

Setelah menyelesaikan modul ini, coba renungkan:

**"Mengapa MongoDB lebih cocok untuk Health E-Commerce dibanding SQL database? Apa trade-offs yang perlu dipertimbangkan?"**

**"Kapan sebaiknya menggunakan embedded data vs referenced data dalam MongoDB? Berikan contoh case dari project kamu."**

**"Apa perbedaan yang paling signifikan antara MongoDB native queries dan Mongoose ODM? Kapan kamu akan pilih salah satunya?"**

Refleksi ini membantu memahami decision-making dalam database design dan mempersiapkan untuk integrate database dengan Express API.

### 📚 Sumber Referensi

- [MongoDB Manual](https://docs.mongodb.com/manual/) - Official MongoDB documentation lengkap
- [Mongoose Documentation](https://mongoosejs.com/docs/) - Comprehensive guide untuk Mongoose ODM
- [MongoDB University](https://university.mongodb.com/) - Free courses dari MongoDB Inc.
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/) - Cloud database management guide
- [Database Design Patterns](https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-summary/) - Best practices untuk MongoDB schema design

### 📘 Glosarium

| Istilah         | Definisi Singkat                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| **NoSQL**       | Database yang tidak menggunakan tabel relational, menyimpan data dalam format fleksibel seperti JSON |
| **Collection**  | Grup dari documents dalam MongoDB, analog dengan "table" di SQL database                             |
| **Document**    | Single record dalam MongoDB collection, disimpan dalam format BSON (Binary JSON)                     |
| **Schema**      | Structure atau blueprint yang mendefinisikan fields, types, dan validations untuk documents          |
| **ODM**         | Object Data Modeling - library yang menyederhanakan interaksi dengan database menggunakan objects    |
| **Mongoose**    | ODM library paling populer untuk MongoDB di Node.js ecosystem                                        |
| **Populate**    | Method untuk join dan retrieve referenced documents dari collection lain                             |
| **Aggregation** | Pipeline-based query untuk perform complex data analysis dan transformations                         |
| **Index**       | Database structure yang meningkatkan speed query operations                                          |
| **Atlas**       | MongoDB cloud hosting service dengan free tier untuk development                                     |
| **Compass**     | Official GUI tool untuk visualize dan manage MongoDB databases                                       |
| **ObjectId**    | Unique identifier 12-byte yang auto-generated untuk setiap MongoDB document                          |

### 💬 Kalimat Penutup

Dengan menyelesaikan modul ini, peserta telah memahami **database management dengan MongoDB dan Mongoose ODM**.

Selanjutnya, peserta akan mempelajari **Backend Development dengan Express.js** untuk membangun REST API yang connect dengan database ini, creating complete backend system.

---

**Happy Learning! 💾🚀**

_Disusun oleh Pusbang Talenta Digital_

---

## 🚀 Next Steps

1. ✅ Verifikasi data di Compass atau mongosh setelah seeding
2. ✅ Pastikan CRUD dasar bekerja lewat services/models
3. ➡️ Lanjut ke **Modul 3** – Build REST API dengan Express menggunakan schema ini
