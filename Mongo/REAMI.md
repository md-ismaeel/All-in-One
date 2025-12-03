# Mongoose Query Methods and Operators Guide

## Common Query Methods

### 1. **find()**
- **Purpose**: Finds multiple documents matching criteria
- **Returns**: Array of documents
- **Example**: `User.find({ age: { $gte: 18 } })`

### 2. **findOne()**
- **Purpose**: Finds first document matching criteria
- **Returns**: Single document or null
- **Example**: `User.findOne({ email: 'john@example.com' })`

### 3. **findById()**
- **Purpose**: Finds document by ObjectId
- **Returns**: Single document or null
- **Example**: `User.findById('507f1f77bcf86cd799439011')`

### 4. **findOneAndUpdate()**
- **Purpose**: Finds and updates a single document
- **Returns**: Original or updated document
- **Example**: `User.findOneAndUpdate({ _id: userId }, { name: 'John' }, { new: true })`

### 5. **findOneAndDelete()**
- **Purpose**: Finds and deletes a single document
- **Returns**: Deleted document
- **Example**: `User.findOneAndDelete({ _id: userId })`

### 6. **updateOne()**
- **Purpose**: Updates first matching document
- **Returns**: Update result object
- **Example**: `User.updateOne({ _id: userId }, { $set: { age: 25 } })`

### 7. **updateMany()**
- **Purpose**: Updates all matching documents
- **Returns**: Update result object
- **Example**: `User.updateMany({ status: 'inactive' }, { $set: { status: 'active' } })`

### 8. **deleteOne()**
- **Purpose**: Deletes first matching document
- **Returns**: Delete result object
- **Example**: `User.deleteOne({ _id: userId })`

### 9. **deleteMany()**
- **Purpose**: Deletes all matching documents
- **Returns**: Delete result object
- **Example**: `User.deleteMany({ status: 'inactive' })`

### 10. **countDocuments()**
- **Purpose**: Counts documents matching criteria
- **Returns**: Number
- **Example**: `User.countDocuments({ age: { $gte: 18 } })`

## Comparison Operators

### 1. **$eq** (Equal)
- **Full Name**: Equal
- **Purpose**: Matches values that are equal to specified value
- **Use Case**: Find users with specific age
- **Example**: `{ age: { $eq: 25 } }` or simply `{ age: 25 }`

### 2. **$ne** (Not Equal)
- **Full Name**: Not Equal
- **Purpose**: Matches values that are not equal to specified value
- **Use Case**: Find users who are not from a specific city
- **Example**: `{ city: { $ne: 'New York' } }`

### 3. **$gt** (Greater Than)
- **Full Name**: Greater Than
- **Purpose**: Matches values greater than specified value
- **Use Case**: Find users older than 18
- **Example**: `{ age: { $gt: 18 } }`

### 4. **$gte** (Greater Than or Equal)
- **Full Name**: Greater Than or Equal
- **Purpose**: Matches values greater than or equal to specified value
- **Use Case**: Find users 18 or older
- **Example**: `{ age: { $gte: 18 } }`

### 5. **$lt** (Less Than)
- **Full Name**: Less Than
- **Purpose**: Matches values less than specified value
- **Use Case**: Find products under $100
- **Example**: `{ price: { $lt: 100 } }`

### 6. **$lte** (Less Than or Equal)
- **Full Name**: Less Than or Equal
- **Purpose**: Matches values less than or equal to specified value
- **Use Case**: Find products $100 or less
- **Example**: `{ price: { $lte: 100 } }`

### 7. **$in** (In Array)
- **Full Name**: In
- **Purpose**: Matches any of the values in an array
- **Use Case**: Find users from specific cities
- **Example**: `{ city: { $in: ['New York', 'London', 'Paris'] } }`

### 8. **$nin** (Not In Array)
- **Full Name**: Not In
- **Purpose**: Matches none of the values in an array
- **Use Case**: Find users not from specific cities
- **Example**: `{ city: { $nin: ['New York', 'London'] } }`

## Logical Operators

### 1. **$and** (Logical AND)
- **Full Name**: Logical AND
- **Purpose**: Joins query clauses with logical AND
- **Use Case**: Find users who are adults AND from specific city
- **Example**: `{ $and: [{ age: { $gte: 18 } }, { city: 'New York' }] }`

### 2. **$or** (Logical OR)
- **Full Name**: Logical OR
- **Purpose**: Joins query clauses with logical OR
- **Use Case**: Find users who are either admin OR manager
- **Example**: `{ $or: [{ role: 'admin' }, { role: 'manager' }] }`

### 3. **$not** (Logical NOT)
- **Full Name**: Logical NOT
- **Purpose**: Inverts the effect of a query expression
- **Use Case**: Find users who are NOT adults
- **Example**: `{ age: { $not: { $gte: 18 } } }`

### 4. **$nor** (Logical NOR)
- **Full Name**: Logical NOR
- **Purpose**: Joins query clauses with logical NOR
- **Use Case**: Find users who are neither admin NOR manager
- **Example**: `{ $nor: [{ role: 'admin' }, { role: 'manager' }] }`

## Element Operators

### 1. **$exists** (Field Exists)
- **Full Name**: Exists
- **Purpose**: Matches documents that have the specified field
- **Use Case**: Find users who have a phone number field
- **Example**: `{ phone: { $exists: true } }`

### 2. **$type** (Field Type)
- **Full Name**: Type
- **Purpose**: Matches documents where field is of specified type
- **Use Case**: Find documents where age is a number
- **Example**: `{ age: { $type: 'number' } }`

## Array Operators

### 1. **$all** (All Elements)
- **Full Name**: All
- **Purpose**: Matches arrays containing all specified elements
- **Use Case**: Find users with all specified skills
- **Example**: `{ skills: { $all: ['JavaScript', 'Node.js'] } }`

### 2. **$elemMatch** (Element Match)
- **Full Name**: Element Match
- **Purpose**: Matches documents with array elements matching criteria
- **Use Case**: Find users with scores in specific range
- **Example**: `{ scores: { $elemMatch: { $gte: 80, $lt: 90 } } }`

### 3. **$size** (Array Size)
- **Full Name**: Size
- **Purpose**: Matches arrays with specified number of elements
- **Use Case**: Find users with exactly 3 skills
- **Example**: `{ skills: { $size: 3 } }`

## String Operators

### 1. **$regex** (Regular Expression)
- **Full Name**: Regular Expression
- **Purpose**: Matches strings using regular expressions
- **Use Case**: Find users whose name starts with 'J'
- **Example**: `{ name: { $regex: '^J', $options: 'i' } }`

### 2. **$text** (Text Search)
- **Full Name**: Text Search
- **Purpose**: Performs full-text search
- **Use Case**: Search for specific keywords in content
- **Example**: `{ $text: { $search: 'javascript mongodb' } }`

## Update Operators

### 1. **$set** (Set Field Value)
- **Full Name**: Set
- **Purpose**: Sets the value of a field
- **Use Case**: Update user's email
- **Example**: `{ $set: { email: 'newemail@example.com' } }`

### 2. **$unset** (Remove Field)
- **Full Name**: Unset
- **Purpose**: Removes specified field from document
- **Use Case**: Remove user's temporary field
- **Example**: `{ $unset: { tempField: '' } }`

### 3. **$inc** (Increment)
- **Full Name**: Increment
- **Purpose**: Increments field value by specified amount
- **Use Case**: Increment user's login count
- **Example**: `{ $inc: { loginCount: 1 } }`

### 4. **$mul** (Multiply)
- **Full Name**: Multiply
- **Purpose**: Multiplies field value by specified amount
- **Use Case**: Apply discount to product price
- **Example**: `{ $mul: { price: 0.9 } }`

### 5. **$push** (Push to Array)
- **Full Name**: Push
- **Purpose**: Adds element to array
- **Use Case**: Add new skill to user's skills array
- **Example**: `{ $push: { skills: 'React' } }`

### 6. **$pull** (Pull from Array)
- **Full Name**: Pull
- **Purpose**: Removes elements from array matching condition
- **Use Case**: Remove specific skill from user's skills
- **Example**: `{ $pull: { skills: 'React' } }`

### 7. **$addToSet** (Add to Set)
- **Full Name**: Add to Set
- **Purpose**: Adds element to array only if it doesn't exist
- **Use Case**: Add unique tag to post
- **Example**: `{ $addToSet: { tags: 'mongodb' } }`

### 8. **$pop** (Pop from Array)
- **Full Name**: Pop
- **Purpose**: Removes first or last element from array
- **Use Case**: Remove last item from user's recent activities
- **Example**: `{ $pop: { recentActivities: 1 } }` (1 for last, -1 for first)

## Practical Examples

### Complex Query Example
```javascript
// Find active users between ages 18-65, from specific cities,
// with at least 2 skills, sorted by creation date
User.find({
  $and: [
    { status: 'active' },
    { age: { $gte: 18, $lte: 65 } },
    { city: { $in: ['New York', 'London', 'Tokyo'] } },
    { skills: { $size: { $gte: 2 } } },
    { email: { $exists: true } }
  ]
})
.sort({ createdAt: -1 })
.limit(10)
.select('name email age city skills');
```

### Update with Multiple Operators
```javascript
// Update user: increment login count, set last login date,
// add new skill if not exists
User.updateOne(
  { _id: userId },
  {
    $inc: { loginCount: 1 },
    $set: { lastLogin: new Date() },
    $addToSet: { skills: 'MongoDB' }
  }
);
```

### Aggregation Pipeline Stages

### 1. **$match** (Filter Documents)
- **Full Name**: Match
- **Purpose**: Filters documents (similar to find())
- **Use Case**: Filter active users before grouping
- **Example**: `{ $match: { status: 'active', age: { $gte: 18 } } }`

### 2. **$group** (Group Documents)
- **Full Name**: Group
- **Purpose**: Groups documents by specified fields and performs calculations
- **Use Case**: Group users by city and calculate statistics
- **Example**: 
```javascript
{
  $group: {
    _id: '$city',           // Group by city field
    totalUsers: { $sum: 1 }, // Count documents in each group
    avgAge: { $avg: '$age' }, // Calculate average age
    maxAge: { $max: '$age' }, // Find maximum age
    minAge: { $min: '$age' }  // Find minimum age
  }
}
```

### 3. **$sort** (Sort Documents)
- **Full Name**: Sort
- **Purpose**: Sorts documents by specified fields
- **Use Case**: Sort groups by total users descending
- **Example**: `{ $sort: { totalUsers: -1, avgAge: 1 } }`

### 4. **$project** (Reshape Documents)
- **Full Name**: Project
- **Purpose**: Includes, excludes, or adds new fields
- **Use Case**: Format output and calculate new fields
- **Example**: 
```javascript
{
  $project: {
    _id: 0,                    // Exclude _id
    cityName: '$_id',          // Rename _id to cityName
    totalUsers: 1,             // Include totalUsers
    avgAge: { $round: ['$avgAge', 2] }, // Round average age
    ageRange: { $subtract: ['$maxAge', '$minAge'] } // Calculate age range
  }
}
```

### 5. **$limit** (Limit Results)
- **Full Name**: Limit
- **Purpose**: Limits number of documents
- **Use Case**: Get top 10 cities by user count
- **Example**: `{ $limit: 10 }`

### 6. **$skip** (Skip Documents)
- **Full Name**: Skip
- **Purpose**: Skips specified number of documents
- **Use Case**: Pagination - skip first 20 results
- **Example**: `{ $skip: 20 }`

### 7. **$lookup** (Join Collections)
- **Full Name**: Lookup
- **Purpose**: Performs left outer join with another collection
- **Use Case**: Join users with their orders
- **Example**: 
```javascript
{
  $lookup: {
    from: 'orders',           // Collection to join
    localField: '_id',        // Field from current collection
    foreignField: 'userId',   // Field from joined collection
    as: 'userOrders'          // Output array name
  }
}
```

### 8. **$unwind** (Deconstruct Array)
- **Full Name**: Unwind
- **Purpose**: Deconstructs array field into separate documents
- **Use Case**: Separate each skill into individual documents
- **Example**: `{ $unwind: '$skills' }`

### 9. **$addFields** (Add New Fields)
- **Full Name**: Add Fields
- **Purpose**: Adds new fields to documents
- **Use Case**: Add calculated fields without removing existing ones
- **Example**: 
```javascript
{
  $addFields: {
    fullName: { $concat: ['$firstName', ' ', '$lastName'] },
    isAdult: { $gte: ['$age', 18] }
  }
}
```

### 10. **$facet** (Multi-Pipeline Processing)
- **Full Name**: Facet
- **Purpose**: Processes multiple pipelines within single stage
- **Use Case**: Get both user statistics and age distribution
- **Example**: 
```javascript
{
  $facet: {
    userStats: [
      { $group: { _id: null, totalUsers: { $sum: 1 }, avgAge: { $avg: '$age' } } }
    ],
    ageGroups: [
      { $group: { _id: { $floor: { $divide: ['$age', 10] } }, count: { $sum: 1 } } }
    ]
  }
}
```

## Group Operators (Used within $group stage)

### 1. **$sum** (Sum Values)
- **Full Name**: Sum
- **Purpose**: Calculates sum of numeric values
- **Use Case**: Count documents or sum field values
- **Examples**: 
  - `{ $sum: 1 }` (count documents)
  - `{ $sum: '$amount' }` (sum amount field)

### 2. **$avg** (Average Values)
- **Full Name**: Average
- **Purpose**: Calculates average of numeric values
- **Use Case**: Calculate average age, salary, etc.
- **Example**: `{ $avg: '$age' }`

### 3. **$min** (Minimum Value)
- **Full Name**: Minimum
- **Purpose**: Finds minimum value
- **Use Case**: Find youngest user in each city
- **Example**: `{ $min: '$age' }`

### 4. **$max** (Maximum Value)
- **Full Name**: Maximum
- **Purpose**: Finds maximum value
- **Use Case**: Find oldest user in each city
- **Example**: `{ $max: '$age' }`

### 5. **$first** (First Value)
- **Full Name**: First
- **Purpose**: Gets first value in group
- **Use Case**: Get first user registered in each city
- **Example**: `{ $first: '$registrationDate' }`

### 6. **$last** (Last Value)
- **Full Name**: Last
- **Purpose**: Gets last value in group
- **Use Case**: Get most recent user registered in each city
- **Example**: `{ $last: '$registrationDate' }`

### 7. **$push** (Push to Array)
- **Full Name**: Push
- **Purpose**: Creates array of values from group
- **Use Case**: Collect all user names in each city
- **Example**: `{ $push: '$name' }`

### 8. **$addToSet** (Add to Set)
- **Full Name**: Add to Set
- **Purpose**: Creates array of unique values
- **Use Case**: Get unique skills across all users in city
- **Example**: `{ $addToSet: '$skills' }`

### 9. **$count** (Count Documents)
- **Full Name**: Count
- **Purpose**: Counts documents in group
- **Use Case**: Count users in each department
- **Example**: `{ $count: 'totalUsers' }`

### 10. **$stdDevPop** (Population Standard Deviation)
- **Full Name**: Standard Deviation Population
- **Purpose**: Calculates population standard deviation
- **Use Case**: Measure age variance in each city
- **Example**: `{ $stdDevPop: '$age' }`

### 11. **$stdDevSamp** (Sample Standard Deviation)
- **Full Name**: Standard Deviation Sample
- **Purpose**: Calculates sample standard deviation
- **Use Case**: Measure salary variance in departments
- **Example**: `{ $stdDevSamp: '$salary' }`

## Comprehensive Aggregation Examples

### Example 1: User Statistics by City
```javascript
User.aggregate([
  // Stage 1: Filter active users
  { $match: { status: 'active' } },
  
  // Stage 2: Group by city
  { $group: {
    _id: '$city',
    totalUsers: { $sum: 1 },
    avgAge: { $avg: '$age' },
    minAge: { $min: '$age' },
    maxAge: { $max: '$age' },
    userNames: { $push: '$name' },
    uniqueSkills: { $addToSet: '$skills' }
  }},
  
  // Stage 3: Add calculated fields
  { $addFields: {
    ageRange: { $subtract: ['$maxAge', '$minAge'] },
    cityName: '$_id'
  }},
  
  // Stage 4: Sort by total users
  { $sort: { totalUsers: -1 } },
  
  // Stage 5: Limit to top 10
  { $limit: 10 },
  
  // Stage 6: Project final structure
  { $project: {
    _id: 0,
    cityName: 1,
    totalUsers: 1,
    avgAge: { $round: ['$avgAge', 2] },
    ageRange: 1,
    skillCount: { $size: '$uniqueSkills' }
  }}
]);
```

### Example 2: Sales Analysis with Lookup
```javascript
Order.aggregate([
  // Stage 1: Match orders from last 30 days
  { $match: { 
    orderDate: { $gte: new Date(Date.now() - 30*24*60*60*1000) }
  }},
  
  // Stage 2: Lookup user information
  { $lookup: {
    from: 'users',
    localField: 'userId',
    foreignField: '_id',
    as: 'user'
  }},
  
  // Stage 3: Unwind user array
  { $unwind: '$user' },
  
  // Stage 4: Group by user city
  { $group: {
    _id: '$user.city',
    totalOrders: { $sum: 1 },
    totalRevenue: { $sum: '$amount' },
    avgOrderValue: { $avg: '$amount' },
    customers: { $addToSet: '$userId' }
  }},
  
  // Stage 5: Add customer count
  { $addFields: {
    customerCount: { $size: '$customers' }
  }},
  
  // Stage 6: Sort by revenue
  { $sort: { totalRevenue: -1 } }
]);
```

### Example 3: Complex Grouping with Multiple Levels
```javascript
Product.aggregate([
  // Stage 1: Unwind categories array
  { $unwind: '$categories' },
  
  // Stage 2: Group by category and brand
  { $group: {
    _id: {
      category: '$categories',
      brand: '$brand'
    },
    productCount: { $sum: 1 },
    avgPrice: { $avg: '$price' },
    totalStock: { $sum: '$stock' },
    products: { $push: {
      name: '$name',
      price: '$price',
      stock: '$stock'
    }}
  }},
  
  // Stage 3: Group by category only
  { $group: {
    _id: '$_id.category',
    brands: { $push: {
      brandName: '$_id.brand',
      productCount: '$productCount',
      avgPrice: '$avgPrice',
      totalStock: '$totalStock'
    }},
    categoryTotal: { $sum: '$productCount' },
    categoryAvgPrice: { $avg: '$avgPrice' }
  }},
  
  // Stage 4: Sort by category total
  { $sort: { categoryTotal: -1 } }
]);
```

### Example 4: Time-based Aggregation
```javascript
User.aggregate([
  // Stage 1: Group by year and month of registration
  { $group: {
    _id: {
      year: { $year: '$createdAt' },
      month: { $month: '$createdAt' }
    },
    newUsers: { $sum: 1 },
    avgAge: { $avg: '$age' },
    cities: { $addToSet: '$city' }
  }},
  
  // Stage 2: Add formatted date
  { $addFields: {
    date: {
      $dateFromParts: {
        year: '$_id.year',
        month: '$_id.month',
        day: 1
      }
    },
    uniqueCities: { $size: '$cities' }
  }},
  
  // Stage 3: Sort by date
  { $sort: { date: 1 } },
  
  // Stage 4: Project final format
  { $project: {
    _id: 0,
    date: { $dateToString: { format: '%Y-%m', date: '$date' } },
    newUsers: 1,
    avgAge: { $round: ['$avgAge', 1] },
    uniqueCities: 1
  }}
]);
```

## Query Modifiers

### 1. **sort()**
- **Purpose**: Sorts results
- **Example**: `.sort({ age: 1, name: -1 })` (1 for ascending, -1 for descending)

### 2. **limit()**
- **Purpose**: Limits number of results
- **Example**: `.limit(10)`

### 3. **skip()**
- **Purpose**: Skips specified number of documents
- **Example**: `.skip(20)`

### 4. **select()**
- **Purpose**: Specifies which fields to include/exclude
- **Example**: `.select('name email -_id')` (include name, email; exclude _id)

### 5. **populate()**
- **Purpose**: Populates referenced documents
- **Example**: `.populate('userId', 'name email')`

This guide covers the most commonly used Mongoose query methods and operators with their full names, purposes, and practical use cases.