// ==============================
// 📌 Database Commands
// ==============================

// Show all databases
// show dbs

// Switch to (or create) a database
// use myDatabase

// Show all collections in the database
// show collections

// Drop the current database
db.dropDatabase()


// ==============================
// 📌 Collection Commands
// ==============================

// Create a collection
db.createCollection("users")

// Drop a collection
db.users.drop()


// ==============================
// 📌 Insert Data
// ==============================

// Insert a single document
db.users.insertOne({ name: "John", age: 30, city: "New York" })

// Insert multiple documents
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 }
])


// ==============================
// 📌 Retrieve Data (Read)
// ==============================

// Find all documents
db.users.find()

// Find with a condition
db.users.find({ name: "John" })

// Find one document
db.users.findOne({ age: 30 })

// Projection: Select specific fields
db.users.find({}, { name: 1, _id: 0 }) // Show only "name", hide "_id"


// ==============================
// 📌 Comparison Operators
// ==============================

db.users.find({ age: { $gt: 25 } })   // Greater than (>)
db.users.find({ age: { $lt: 30 } })   // Less than (<)
db.users.find({ age: { $gte: 25 } })  // Greater than or equal (>=)
db.users.find({ age: { $lte: 30 } })  // Less than or equal (<=)
db.users.find({ age: { $ne: 30 } })   // Not equal (!=)


// ==============================
// 📌 Logical Operators
// ==============================

// AND condition
db.users.find({ $and: [{ age: { $gt: 25 } }, { city: "New York" }] })

// OR condition
db.users.find({ $or: [{ age: 25 }, { city: "London" }] })

// NOT condition
db.users.find({ age: { $not: { $lt: 30 } } }) // Age is NOT less than 30


// ==============================
// 📌 Find with Multiple Values
// ==============================

// Matches any of the given values
db.users.find({ city: { $in: ["New York", "London"] } })

// Excludes certain values
db.users.find({ city: { $nin: ["Paris", "Tokyo"] } })


// ==============================
// 📌 Update Data
// ==============================

// Update one document
db.users.updateOne({ name: "John" }, { $set: { age: 35 } })

// Update multiple documents
db.users.updateMany({ city: "New York" }, { $set: { country: "USA" } })

// Increment a field
db.users.updateOne({ name: "Alice" }, { $inc: { age: 2 } }) // Adds 2 to age

// Add a field if it doesn’t exist
db.users.updateOne({ name: "John" }, { $setOnInsert: { country: "USA" } }, { upsert: true })

// Rename a field
db.users.updateMany({}, { $rename: { "oldField": "newField" } })

// Replace a document completely
db.users.replaceOne({ name: "John" }, { name: "John Doe", age: 40 })


// ==============================
// 📌 Delete Data
// ==============================

// Delete one document
db.users.deleteOne({ name: "Alice" })

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 30 } })


// ==============================
// 📌 Sorting, Limiting, and Skipping
// ==============================

// Sort in ascending order (1) or descending order (-1)
db.users.find().sort({ age: 1 })  // Ascending
db.users.find().sort({ age: -1 }) // Descending

// Limit results
db.users.find().limit(5) // Show only 5 results

// Skip results
db.users.find().skip(2) // Skip the first 2 results

// Pagination: Skip + Limit
db.users.find().skip(5).limit(10) // Skip 5 and return next 10


// ==============================
// 📌 Aggregation (Advanced Queries)
// ==============================

// Group and count documents
db.users.aggregate([
  { $group: { _id: "$city", count: { $sum: 1 } } }
])

// Filter and project specific fields
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $project: { name: 1, age: 1, _id: 0 } }
])

// Sort using aggregation
db.users.aggregate([
  { $sort: { age: -1 } }
])


// ==============================
// 📌 Indexes (Performance Optimization)
// ==============================

// Create an index
db.users.createIndex({ name: 1 })

// Show indexes
db.users.getIndexes()

// Drop an index
db.users.dropIndex("name_1")


// ==============================
// 📌 Bulk Operations
// ==============================

// Bulk insert
db.users.bulkWrite([
  { insertOne: { document: { name: "Eve", age: 22 } } },
  { insertOne: { document: { name: "Mike", age: 29 } } }
])

// Bulk update
db.users.bulkWrite([
  { updateOne: { filter: { name: "John" }, update: { $set: { age: 40 } } } },
  { updateOne: { filter: { name: "Alice" }, update: { $set: { city: "Chicago" } } } }
])

// Bulk delete
db.users.bulkWrite([
  { deleteOne: { filter: { name: "Eve" } } },
  { deleteMany: { filter: { age: { $lt: 25 } } } }
])


// ==============================
// 📌 Miscellaneous
// ==============================

// Count documents
db.users.countDocuments()

// Show collection size
db.users.stats()

// Show database stats
db.stats()


// ==============================
// 📌 Summary of Operators
// ==============================

/*
$gt  -> Greater than (>), e.g., db.users.find({ age: { $gt: 25 } })
$lt  -> Less than (<), e.g., db.users.find({ age: { $lt: 30 } })
$gte -> Greater than or equal (>=), e.g., db.users.find({ age: { $gte: 25 } })
$lte -> Less than or equal (<=), e.g., db.users.find({ age: { $lte: 30 } })
$ne  -> Not equal (!=), e.g., db.users.find({ age: { $ne: 30 } })
$and -> Matches all conditions, e.g., db.users.find({ $and: [{ age: { $gt: 25 } }, { city: "NY" }] })
$or  -> Matches at least one condition, e.g., db.users.find({ $or: [{ age: 25 }, { city: "London" }] })
$not -> Negates a condition, e.g., db.users.find({ age: { $not: { $lt: 30 } } })
$in  -> Matches any value in an array, e.g., db.users.find({ city: { $in: ["NY", "London"] } })
$nin -> Excludes values in an array, e.g., db.users.find({ city: { $nin: ["Paris", "Tokyo"] } })
$set -> Update or add a field, e.g., db.users.updateOne({ name: "John" }, { $set: { age: 35 } })
$inc -> Increment a field’s value, e.g., db.users.updateOne({ name: "Alice" }, { $inc: { age: 2 } })
$rename -> Rename a field, e.g., db.users.updateMany({}, { $rename: { "oldField": "newField" } })
*/

