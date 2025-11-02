# 💾 health-ecommerce-database

> **MongoDB & Mongoose ODM untuk Health E-Commerce**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-brightgreen)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-7.5-red)](https://mongoosejs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Complete database layer untuk Health E-Commerce dengan MongoDB Atlas, Mongoose ODM, schemas, relationships, dan aggregations.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-database/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── config/
│   ├── models/ (with TODOs)
│   ├── services/
│   └── scripts/
└── finished-project/    # ✅ Complete database layer
    ├── README.md
    ├── package.json
    ├── config/
    ├── models/ (4 complete models!)
    ├── services/
    └── scripts/ (seeding script)
```

**Pilih mana?**

- **Starter** - Untuk **belajar dengan practice** (RECOMMENDED!)
- **Finished** - Untuk **reference** saat stuck

---

## 🚀 Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/health-ecommerce-database.git

# 2. Masuk ke folder repository
cd health-ecommerce-database

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install

# 5. Copy .env.example jadi .env
cp .env.example .env
# Windows: Copy-Item .env.example .env

# 6. Edit .env - pilih MongoDB local atau Atlas
# MONGODB_URI=mongodb://localhost:27017/health-ecommerce
# atau
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/health-ecommerce

# 7. Start MongoDB (jika pakai local)
mongod

# 8. Test connection
node test-connection.js

# 9. Seed database
npm run seed

# Database terisi dengan sample data!
```

### Option 2: Lihat Complete Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-database.git

# 2. Masuk ke folder repository
cd health-ecommerce-database

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Setup .env
cp .env.example .env
# Edit dengan MongoDB URI kamu

# 6. Start MongoDB (jika local)
mongod

# 7. Seed database
npm run seed

# Database terisi: 12 products + 5 users + 10 reviews!
```

---

## 🎯 Apa yang Akan Kamu Pelajari?

**Modul 2** melanjutkan dari Modul 1 (OOP) dengan membangun **database layer**!

### Konsep yang Dipelajari:

- ✅ **MongoDB Setup** - Local installation, Compass GUI, Atlas cloud
- ✅ **Mongoose ODM** - Schemas, models, validations
- ✅ **CRUD Operations** - Create, read, update, delete documents
- ✅ **Relationships** - One-to-many, many-to-many dengan populate
- ✅ **Aggregations** - Powerful data processing pipelines
- ✅ **Indexing** - Performance optimization

### Apa yang Dibangun:

- **4 Mongoose Models** (Product, User, Order, Review)
- **Relationships** antar models
- **Seeding script** untuk sample data
- **Aggregation queries** untuk analytics

**Output:** Production-ready database layer untuk Express API (Modul 3)!

---

## 📁 Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── package.json           # Dependencies
├── test-connection.js    # ✅ MongoDB test (ready!)
├── config/
│   └── database.js       # ⚠️ TODO: MongoDB connection
├── models/
│   ├── Product.js        # ⚠️ TODO: Product schema
│   ├── User.js           # ⚠️ TODO: User schema
│   ├── Order.js          # ⚠️ TODO: Order schema
│   └── Review.js         # ⚠️ TODO: Review schema
├── services/
│   └── productService.js # ⚠️ TODO: CRUD operations
└── scripts/
    └── seed.js           # ⚠️ TODO: Database seeding
```

**TODOs:**

- [ ] `config/database.js` - MongoDB connection setup
- [ ] `models/*.js` - Create 4 schemas dengan validations
- [ ] `services/productService.js` - Implement CRUD dengan Mongoose
- [ ] `scripts/seed.js` - Seed database dengan sample data

---

## 📁 Struktur Finished Project

```
finished-project/
├── README.md              # Complete guide
├── package.json           # Dependencies
├── test-connection.js    # ✅ Connection test
├── config/
│   └── database.js       # ✅ Complete connection
├── models/
│   ├── Product.js        # ✅ Full schema dengan validations
│   ├── User.js           # ✅ User schema dengan bcrypt
│   ├── Order.js          # ✅ Order schema dengan references
│   └── Review.js         # ✅ Review schema dengan populate
├── services/
│   ├── productService.js # ✅ Complete CRUD operations
│   ├── aggregation.js    # ✅ Aggregation examples
│   └── relationship.js   # ✅ Population examples
└── scripts/
    └── seed.js           # ✅ Seeds 12+5+10 documents
```

**All implemented:**

- ✅ 4 complete Mongoose schemas
- ✅ Relationships (1-to-many, many-to-many)
- ✅ Aggregation pipelines (5 examples)
- ✅ Database indexing
- ✅ Seeding script

---

## 🧪 Testing Database

### Test Connection:

```bash
node test-connection.js
```

**Expected:**

```
✅ MongoDB Connected: localhost
📊 Database: health-ecommerce
```

### Seed Database:

```bash
npm run seed
```

**Expected:**

```
🗑️  Clearing old data...
✅ 12 products created
✅ 5 users created
✅ 10 reviews created
🎉 Database seeding complete!
```

### View Data dengan MongoDB Compass:

1. Open MongoDB Compass
2. Connect: `mongodb://localhost:27017`
3. Select database: `health-ecommerce`
4. View collections: products, users, orders, reviews

---

## 🔗 Hubungan dengan Modul Lain

**Dari Modul 1 (OOP):**

- ✅ Class concepts → Mongoose schema classes
- ✅ Data validation patterns

**Modul 2 (This!)** → Builds Database Layer

- 🆕 MongoDB setup (local + cloud)
- 🆕 Mongoose schemas & models
- 🆕 CRUD operations
- 🆕 Relationships & aggregations

**Ke Modul 3 (Express):**

- → Models will be used in controllers
- → Database queries in API endpoints

**Ke Modul 4 (Auth):**

- → User model for authentication
- → Password hashing with bcrypt

**Ke Modul 5 (Integration):**

- → Product model extended dengan kemenkesId
- → Integration dengan external data sources

---

## 🐛 Troubleshooting

### ❌ "MongoServerError: connect ECONNREFUSED"

**Solusi:**

```bash
# Check MongoDB running
mongosh

# If not running, start it:
# Windows: Services → Start "MongoDB Server"
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### ❌ "ValidationError: Path `name` is required"

**Solusi:**

- Check schema required fields
- Ensure all required fields provided
- Review seed.js data

### ❌ "MongoServerError: E11000 duplicate key"

**Solusi:**

- Unique constraint violated
- Clear database: `db.dropDatabase()`
- Run seed again: `npm run seed`

---

## 💡 Tips Sukses

1. **Start dengan starter** - Practice creates understanding
2. **Use MongoDB Compass** - Visual GUI helps learning
3. **Test queries immediately** - See results in real-time
4. **Read Mongoose docs** - Understand schema types
5. **Check finished when stuck** - But understand, don't copy
6. **Seed data frequently** - Fresh data for testing

---

## 📚 Resources

**Documentation:**

- [MongoDB Manual](https://docs.mongodb.com/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

**Tools:**

- [MongoDB Compass](https://www.mongodb.com/products/compass) - Database GUI
- [Studio 3T](https://studio3t.com/) - Alternative MongoDB IDE

---

## 🚀 Next Steps

After completing this module:

1. ✅ **Verify 4 models** working with Compass
2. ✅ **Test CRUD operations** in isolation
3. ➡️ **Modul 3** - Build Express API using these models
4. ➡️ **Modul 4** - Add authentication with User model
5. ➡️ **Modul 5** - External integrations

---

**Happy Database Building! 💾**

_Modul 2 - Database & Mongoose ODM_  
_Part of Health E-Commerce Backend Series_

---

**📁 Repository Info:**

- **Name:** `health-ecommerce-database`
- **Type:** Database Layer (Models & Schemas)
- **Structure:** 1 Repo, 2 Folders (starter + finished)
