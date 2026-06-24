# PostgreSQL Complete Beginner's Guide - From MongoDB to PostgreSQL

> **Learning Path**: If you're coming from MongoDB, this guide will help you understand PostgreSQL concepts and translate your knowledge.

## Table of Contents

1. [PostgreSQL vs MongoDB - Quick Comparison](#postgresql-vs-mongodb---quick-comparison)
2. [Core Concepts & Definitions](#core-concepts--definitions)
3. [Data Types Explained](#data-types-explained)
4. [Setting Up PostgreSQL](#setting-up-postgresql)
5. [Creating Tables (Like Collections)](#creating-tables-like-collections)
6. [CRUD Operations](#crud-operations)
7. [Querying Data](#querying-data)
8. [Relationships & Foreign Keys](#relationships--foreign-keys)
9. [Advanced Concepts](#advanced-concepts)
10. [Real-World Examples](#real-world-examples)

## PostgreSQL vs MongoDB - Quick Comparison

### What's the Difference?

| Feature             | MongoDB                          | PostgreSQL                      |
| ------------------- | -------------------------------- | ------------------------------- |
| **Type**            | NoSQL (Document)                 | SQL (Relational)                |
| **Data Structure**  | Collections with flexible schema | Tables with fixed schema        |
| **Document Format** | JSON-like BSON format            | Rows and Columns (Tables)       |
| **Schema**          | Schema-less (flexible)           | Schema-required (structured)    |
| **Scaling**         | Horizontal (sharding)            | Vertical (better single-server) |
| **Transactions**    | Limited (recently improved)      | Full ACID transactions          |
| **Relationships**   | Nested documents                 | Foreign keys & JOINs            |
| **Query Language**  | MongoDB Query Language           | SQL                             |
| **Joins**           | Not ideal (embed data)           | Designed for JOINs              |

### Terminology Translation

```
MongoDB              →  PostgreSQL
Collection           →  Table
Document            →  Row
Field               →  Column
Nested Document     →  Foreign Key + JOIN
Array of Documents  →  Separate Table with relationship
```

## Core Concepts & Definitions

### 1. What is PostgreSQL?

PostgreSQL is a **relational database management system (RDBMS)**. It's SQL-based, meaning you query data using a language called SQL (Structured Query Language).

**Key Point**: Unlike MongoDB where you store documents flexibly, PostgreSQL requires you to define your data structure upfront in **tables**.

### 2. Database vs Schema vs Table

```
PostgreSQL Structure (Top-Down):
├── Database (like a project)
│   ├── Schema (namespace/grouping)
│   │   ├── Table (like MongoDB collection)
│   │   │   ├── Column (like a field in MongoDB)
│   │   │   └── Row (like a document in MongoDB)
```

**Example**:

```
Database: e_commerce_db
  └── Schema: public (default)
      ├── Table: users
      │   ├── Column: id
      │   ├── Column: email
      │   └── Column: name
      ├── Table: products
      │   ├── Column: id
      │   └── Column: name
      └── Table: orders
```

### 3. What is a Table?

A **table** is the main storage structure in PostgreSQL. It has:

- **Columns** (fields) - Define WHAT data is stored
- **Rows** (records/documents) - The actual data
- **Schema** - Rules defining column names, types, and constraints

**MongoDB vs PostgreSQL**:

```javascript
// MongoDB - Flexible
db.users.insertOne({
  name: "John",
  age: 30,
  email: "john@example.com",
  address: { city: "NYC", zip: "10001" }  // nested object
})

// PostgreSQL - Structured
INSERT INTO users (name, age, email, city, zip)
VALUES ('John', 30, 'john@example.com', 'NYC', '10001');
```

### 4. Primary Key

A **primary key** is a unique identifier for each row.

**MongoDB**: Uses `_id` automatically
**PostgreSQL**: You define it (usually `id`)

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,  -- Each row has unique id
  email VARCHAR(255),
  name VARCHAR(255)
);
```

### 5. Foreign Key

A **foreign key** creates a relationship between tables (replaces MongoDB's nested documents).

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,                    -- Foreign key
  order_total DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)  -- Links to users table
);
```

**What this means**: Each order must belong to an existing user. If you delete a user, you can configure what happens to their orders.

### 6. Index

An **index** makes queries faster (like creating a book index for quick lookup).

```sql
CREATE INDEX idx_users_email ON users(email);  -- Searching by email will be fast
```

**When to use**:

- Columns frequently used in WHERE clauses
- Foreign keys
- Columns used in JOIN conditions

## Data Types Explained

PostgreSQL has many data types. Here are the most common:

### String Types

```sql
VARCHAR(n)     -- Variable length string, max n characters
                  Example: VARCHAR(255) for email
CHAR(n)        -- Fixed length string (pad with spaces)
TEXT           -- Unlimited length string

-- Examples:
email VARCHAR(255),
first_name VARCHAR(100),
bio TEXT,
status CHAR(1)  -- 'A' for active, 'I' for inactive
```

### Numeric Types

```sql
INT or INTEGER           -- Whole numbers (-2,147,483,648 to 2,147,483,647)
BIGINT                   -- Larger whole numbers
SMALLINT                 -- Smaller whole numbers (-32,768 to 32,767)
DECIMAL(precision, scale) -- Exact decimal (money, prices)
NUMERIC(precision, scale) -- Same as DECIMAL
FLOAT                    -- Approximate decimal

-- Examples:
quantity INT,
price DECIMAL(10, 2),      -- 10 total digits, 2 after decimal ($99,999,999.99)
stock_count INT,
rating FLOAT
```

### Date/Time Types

```sql
DATE           -- Date only (2024-12-05)
TIME           -- Time only (14:30:00)
TIMESTAMP      -- Date and time (2024-12-05 14:30:00)
INTERVAL       -- Duration (e.g., '1 day 2 hours')

-- Examples:
created_at TIMESTAMP,
birth_date DATE,
opening_time TIME,
subscription_valid_until TIMESTAMP
```

### Boolean Type

```sql
BOOLEAN or BOOL   -- TRUE or FALSE

-- Examples:
is_active BOOLEAN,
is_admin BOOLEAN,
is_verified BOOLEAN
```

### UUID Type (Modern)

```sql
UUID  -- Unique universal identifier (128-bit)

-- First enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Then use:
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),  -- Auto-generates unique ID
  email VARCHAR(255)
);
```

### JSON Type

```sql
JSON or JSONB   -- Store JSON data (flexible like MongoDB!)

-- Example (rarely used, but possible):
CREATE TABLE user_preferences (
  id INT PRIMARY KEY,
  user_id INT,
  settings JSONB  -- Stores: {"theme": "dark", "language": "en"}
);
```

## Setting Up PostgreSQL

### Installation

**macOS** (using Homebrew):

```bash
brew install postgresql
brew services start postgresql
```

**Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)

**Linux** (Ubuntu):

```bash
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

### First Steps

```bash
# Connect to PostgreSQL
psql -U postgres

# You're now in PostgreSQL shell
# Prompt looks like: postgres=#

# Create a new database
CREATE DATABASE my_app;

# Connect to your database
\c my_app

# Now you can start creating tables
```

### PostgreSQL Commands Reference

```sql
-- Database commands
CREATE DATABASE db_name;           -- Create database
DROP DATABASE db_name;             -- Delete database (dangerous!)
\c db_name                         -- Connect to database (in psql shell)

-- Table commands
\dt                                -- List all tables
\d table_name                      -- Show table structure
\dp                                -- List table permissions

-- Data commands
SELECT * FROM table_name;          -- View all data
SELECT * FROM table_name LIMIT 5;  -- View first 5 rows
```

## Creating Tables (Like Collections)

### Basic Table Creation

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,     -- NOT NULL means must have value
  first_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Auto-set to now
);
```

**What each part means**:

- `CREATE TABLE users` - Create a table named "users"
- `id INT PRIMARY KEY` - Unique identifier column (INT = whole numbers)
- `NOT NULL` - Cannot be empty
- `VARCHAR(255)` - Text up to 255 characters
- `DEFAULT CURRENT_TIMESTAMP` - Auto-fills current time

### Modern Approach with UUID

```sql
-- Enable UUID extension (do this once)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Now create table with auto-generated IDs
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,  -- UNIQUE = no duplicate emails
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  age INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Real-World Example: E-commerce Database

```sql
-- 1. Create categories table
CREATE TABLE categories (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create products table
CREATE TABLE products (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT DEFAULT 0,
  category_id INT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)  -- Link to categories
);

-- 3. Create users table
CREATE TABLE users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create orders table
CREATE TABLE orders (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',  -- pending, shipped, delivered
  shipping_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 5. Create order_items table (what was in each order)
CREATE TABLE order_items (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

## CRUD Operations

CRUD = Create, Read, Update, Delete

### CREATE - Insert Data

#### Insert Single Row

```sql
INSERT INTO users (email, first_name, last_name)
VALUES ('john@example.com', 'John', 'Doe');

-- If you want the generated ID back:
INSERT INTO users (email, first_name, last_name)
VALUES ('john@example.com', 'John', 'Doe')
RETURNING id, email;
```

#### Insert Multiple Rows

```sql
INSERT INTO products (name, price, category_id)
VALUES
  ('Laptop', 999.99, 1),
  ('Mouse', 29.99, 1),
  ('Keyboard', 79.99, 1);
```

#### MongoDB vs PostgreSQL Comparison

```javascript
// MongoDB
db.users.insertOne({
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: '123 Main St',
    city: 'NYC'
  }
});

// PostgreSQL (simple table)
INSERT INTO users (email, first_name, last_name, address_street, address_city)
VALUES ('john@example.com', 'John', 'Doe', '123 Main St', 'NYC');

// Or with separate address table (better practice):
INSERT INTO addresses (street, city, user_id) VALUES ('123 Main St', 'NYC', 1);
```

### READ - Query Data

#### Get Everything

```sql
SELECT * FROM users;  -- Gets all columns, all rows
```

#### Get Specific Columns

```sql
SELECT email, first_name, last_name FROM users;  -- Only these columns
```

#### Filter with WHERE

```sql
-- Get one user
SELECT * FROM users WHERE email = 'john@example.com';

-- Get multiple matching rows
SELECT * FROM users WHERE is_active = TRUE;

-- Combine conditions
SELECT * FROM users
WHERE is_active = TRUE AND age > 18;

-- OR condition
SELECT * FROM users
WHERE email LIKE '%@gmail.com' OR email LIKE '%@yahoo.com';
```

#### Comparison Operators

```sql
=       -- Equal
!=      -- Not equal
<>      -- Not equal (also valid)
>       -- Greater than
<       -- Less than
>=      -- Greater than or equal
<=      -- Less than or equal
LIKE    -- Pattern matching (with %)
IN      -- Check if in list
BETWEEN -- Check if between range
```

#### Pattern Matching with LIKE

```sql
LIKE 'john%'      -- Starts with "john"
LIKE '%@gmail.com' -- Ends with "@gmail.com"
LIKE '%john%'     -- Contains "john"
LIKE 'j_hn'       -- j, any char, h, n
```

#### LIMIT and OFFSET

```sql
SELECT * FROM products LIMIT 10;           -- First 10
SELECT * FROM products LIMIT 10 OFFSET 20; -- Skip 20, get 10
SELECT * FROM products ORDER BY price DESC LIMIT 5;  -- Top 5 most expensive
```

#### Sorting

```sql
ORDER BY price ASC;       -- Lowest price first (ascending)
ORDER BY price DESC;      -- Highest price first (descending)
ORDER BY created_at DESC; -- Most recent first
ORDER BY price, name;     -- Sort by price first, then name
```

#### MongoDB vs PostgreSQL Comparison

```javascript
// MongoDB
db.users.find({ email: 'john@example.com' });
db.users.find({ age: { $gt: 18 } });
db.users.find({}, { projection: { email: 1, name: 1 } }).limit(10);

// PostgreSQL
SELECT * FROM users WHERE email = 'john@example.com';
SELECT * FROM users WHERE age > 18;
SELECT email, name FROM users LIMIT 10;
```

### UPDATE - Modify Data

#### Update Single Row

```sql
UPDATE users
SET first_name = 'Jane'
WHERE email = 'john@example.com'
RETURNING *;  -- Return updated row
```

#### Update Multiple Columns

```sql
UPDATE users
SET
  first_name = 'Jane',
  last_name = 'Smith',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 1;
```

#### Update with Calculation

```sql
-- Increase all prices by 10%
UPDATE products
SET price = price * 1.1
WHERE is_active = TRUE;

-- Decrease stock
UPDATE products
SET stock_quantity = stock_quantity - 5
WHERE id = 10;
```

#### MongoDB vs PostgreSQL Comparison

```javascript
// MongoDB
db.users.updateOne(
  { email: 'john@example.com' },
  { $set: { firstName: 'Jane' } }
);

// PostgreSQL
UPDATE users
SET first_name = 'Jane'
WHERE email = 'john@example.com';
```

### DELETE - Remove Data

#### Delete Single Row

```sql
DELETE FROM users WHERE id = 1;
```

#### Delete Multiple Rows

```sql
DELETE FROM users WHERE is_active = FALSE;
```

#### Delete with Conditions

```sql
DELETE FROM orders WHERE created_at < '2023-01-01';  -- Old orders
```

**⚠️ WARNING**: Always use WHERE clause!

```sql
DELETE FROM users;  -- This deletes EVERYTHING! Don't do this!
```

#### MongoDB vs PostgreSQL Comparison

```javascript
// MongoDB
db.users.deleteOne({ email: 'john@example.com' });
db.users.deleteMany({ isActive: false });

// PostgreSQL
DELETE FROM users WHERE email = 'john@example.com';
DELETE FROM users WHERE is_active = FALSE;
```

## Querying Data - Advanced

### JOIN - Combine Data from Multiple Tables

**Key Concept**: JOINs replace MongoDB's nested documents.

#### INNER JOIN - Only Matching Rows

```sql
SELECT
  users.email,
  orders.id as order_id,
  orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

**What it does**: Shows users WITH orders only (if user has no orders, they don't appear).

#### LEFT JOIN - All from Left, Matching from Right

```sql
SELECT
  users.email,
  COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.email;
```

**What it does**: Shows ALL users, even if they have no orders (order_count will be 0).

#### RIGHT JOIN - All from Right, Matching from Left

```sql
SELECT
  products.name,
  orders.id
FROM products
RIGHT JOIN orders ON products.id = orders.product_id;
```

**What it does**: Shows ALL orders, even if product is deleted.

#### FULL JOIN - All from Both

```sql
SELECT
  users.email,
  orders.id
FROM users
FULL JOIN orders ON users.id = orders.user_id;
```

**What it does**: Shows all users AND all orders (may have NULL values).

#### Visual Representation

```
INNER JOIN:      LEFT JOIN:       RIGHT JOIN:      FULL JOIN:
X                X                  X              X
XXX              XXX              XXX             XXX
X                X                  X              X
```

### GROUP BY - Aggregate Data

```sql
-- Count how many orders each user has
SELECT
  users.email,
  COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.email;

-- Total spent per user
SELECT
  users.email,
  SUM(orders.total_amount) as total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.email;

-- Average order value
SELECT
  users.email,
  AVG(orders.total_amount) as avg_order_value
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.email;
```

### Aggregate Functions

```sql
COUNT()    -- Number of rows
SUM()      -- Total
AVG()      -- Average
MIN()      -- Minimum
MAX()      -- Maximum

Example:
SELECT
  COUNT(*) as total_users,
  AVG(age) as average_age,
  MIN(age) as youngest,
  MAX(age) as oldest
FROM users;
```

### HAVING - Filter Grouped Results

```sql
-- Get categories with more than 5 products
SELECT
  categories.name,
  COUNT(products.id) as product_count
FROM categories
LEFT JOIN products ON categories.id = products.category_id
GROUP BY categories.id, categories.name
HAVING COUNT(products.id) > 5;  -- Filter after grouping
```

**Difference**:

- `WHERE` - Filters BEFORE grouping
- `HAVING` - Filters AFTER grouping

### Subqueries - Query Within Query

```sql
-- Get products that are in orders
SELECT * FROM products
WHERE id IN (
  SELECT DISTINCT product_id FROM order_items
);

-- Get users who spent more than average
SELECT email FROM users
WHERE id IN (
  SELECT user_id FROM orders
  WHERE total_amount > (SELECT AVG(total_amount) FROM orders)
);
```

## Relationships & Foreign Keys

### Understanding Relationships

#### One-to-Many (Most Common)

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  total_amount DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- One user can have MANY orders
-- Each order belongs to ONE user
```

#### Many-to-Many (Products in Orders)

```sql
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE order_items (
  id INT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- One product can be in MANY orders
-- One order can have MANY products
```

### ON DELETE Actions

```sql
-- CASCADE: Delete related rows too
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
-- If you delete a user, all their orders are deleted

-- SET NULL: Set to NULL if referenced deleted
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
-- If you delete a user, orders.user_id becomes NULL

-- RESTRICT: Prevent deletion if related rows exist
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT
-- Can't delete a user if they have orders

-- NO ACTION: Same as RESTRICT (checked at end of transaction)
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE NO ACTION
```

## Advanced Concepts

### Transactions - All or Nothing

```sql
BEGIN;  -- Start transaction

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;  -- Save changes

-- If error happens:
ROLLBACK;  -- Undo all changes
```

**Key Point**: Either BOTH updates happen, or NONE happen. This ensures data consistency.

### Indexes - Faster Queries

```sql
-- Create index
CREATE INDEX idx_users_email ON users(email);

-- Now queries like this will be FAST:
SELECT * FROM users WHERE email = 'john@example.com';

-- Types of indexes:
CREATE UNIQUE INDEX idx_email ON users(email);  -- Unique values only

-- Composite index (multiple columns)
CREATE INDEX idx_order_user_date ON orders(user_id, created_at);
```

**When to index**:

- Columns used in WHERE clauses
- Foreign keys
- Columns used in JOINs
- BUT: Slows down inserts/updates

### Constraints - Enforce Rules

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,                -- No duplicate emails
  age INT CHECK (age >= 18),                -- Only adults
  is_active BOOLEAN DEFAULT TRUE,           -- Default value
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Views - Saved Queries

```sql
-- Create a view (like a saved query)
CREATE VIEW user_orders AS
SELECT
  users.email,
  orders.id,
  orders.total_amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Use it like a table
SELECT * FROM user_orders WHERE email = 'john@example.com';
```

### Aggregate Functions with GROUP BY

```sql
-- Sales per month
SELECT
  DATE_TRUNC('month', created_at) as month,
  SUM(total_amount) as monthly_revenue,
  COUNT(id) as order_count,
  AVG(total_amount) as avg_order_value
FROM orders
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- Product stats
SELECT
  products.name,
  COUNT(order_items.id) as times_ordered,
  SUM(order_items.quantity) as total_sold,
  AVG(order_items.unit_price) as avg_price
FROM products
LEFT JOIN order_items ON products.id = order_items.product_id
GROUP BY products.id, products.name;
```

## Real-World Examples

### Example 1: User Registration & Authentication

```sql
-- Check if email exists (during signup)
SELECT EXISTS(
  SELECT 1 FROM users WHERE email = $1
) as email_exists;

-- Insert new user
INSERT INTO users (email, password_hash, full_name)
VALUES ($1, $2, $3)
RETURNING id, email;

-- Login query
SELECT id, email, password_hash FROM users
WHERE email = $1;
```

### Example 2: Place an Order

```sql
-- Step 1: Create order
INSERT INTO orders (user_id, total_amount, status)
VALUES (123, 299.98, 'pending')
RETURNING id;  -- Get the order ID (let's say it's 456)

-- Step 2: Add items to order
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES
  (456, 10, 2, 49.99),  -- 2 Laptops
  (456, 20, 1, 99.99);  -- 1 Monitor

-- Step 3: Reduce stock
UPDATE products SET stock_quantity = stock_quantity - 2 WHERE id = 10;
UPDATE products SET stock_quantity = stock_quantity - 1 WHERE id = 20;
```

### Example 3: Get User Purchase History

```sql
SELECT
  orders.id as order_id,
  orders.created_at,
  orders.total_amount,
  orders.status,
  products.name as product_name,
  order_items.quantity,
  order_items.unit_price
FROM orders
LEFT JOIN order_items ON orders.id = order_items.order_id
LEFT JOIN products ON order_items.product_id = products.id
WHERE orders.user_id = 123
ORDER BY orders.created_at DESC;
```

### Example 4: Best Selling Products

```sql
SELECT
  products.name,
  categories.name as category,
  COUNT(order_items.id) as times_sold,
  SUM(order_items.quantity) as units_sold,
  SUM(order_items.quantity * order_items.unit_price) as revenue
FROM products
LEFT JOIN order_items ON products.id = order_items.product_id
LEFT JOIN categories ON products.category_id = categories.id
GROUP BY products.id, products.name, categories.id, categories.name
ORDER BY revenue DESC
LIMIT 10;
```

### Example 5: Monthly Sales Report

```sql
SELECT
  DATE_TRUNC('month', orders.created_at) as month,
  COUNT(DISTINCT orders.id) as total_orders,
  COUNT(DISTINCT orders.user_id) as unique_customers,
  SUM(orders.total_amount) as total_revenue,
  AVG(orders.total_amount) as avg_order_value
FROM orders
WHERE orders.status = 'completed'
GROUP BY DATE_TRUNC('month', orders.created_at)
ORDER BY month DESC;
```

## Key Differences Summary

| Scenario                | MongoDB                 | PostgreSQL                          |
| ----------------------- | ----------------------- | ----------------------------------- |
| **Storing nested data** | Embed in document       | Create separate table + foreign key |
| **Flexible schema**     | Yes, add fields anytime | No, must define upfront             |
| **Finding documents**   | `db.collection.find()`  | `SELECT * FROM table WHERE`         |
| **Adding many docs**    | `insertMany()`          | `INSERT INTO VALUES (...), (...)`   |
| **Joining data**        | Expensive, avoid        | Optimized, use JOINs                |
| **Transactions**        | Limited                 | Full ACID transactions              |
| **Relationships**       | Nested or references    | Foreign keys                        |

## Practice Exercises

### Exercise 1: Create Basic Tables

```sql
-- Create a blog database with users and posts tables
-- Users: id, name, email
-- Posts: id, user_id, title, content, created_at
-- Link posts to users with foreign key

CREATE TABLE users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);

CREATE TABLE posts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Exercise 2: Insert Sample Data

```sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane@example.com');

INSERT INTO posts (user_id, title, content) VALUES
(1, 'My First Post', 'This is content');
```

### Exercise 3: Query Data

```sql
-- Get all posts with author names
SELECT users.name, posts.title, posts.created_at
FROM posts
LEFT JOIN users ON posts.user_id = users.id;

-- Count posts per user
SELECT users.name, COUNT(posts.id) as post_count
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.id, users.name;
```

## Tips for Success

1. **Think in Tables**: Instead of nested documents, think in separate tables
2. **Plan Relationships**: Before creating tables, plan what connects to what
3. **Use Indexes**: Add indexes to columns you search/filter frequently
4. **Test Queries**: Test SELECT before INSERT/UPDATE/DELETE
5. **Use Transactions**: Wrap related operations in transactions
6. **Learn JOINs**: JOINs are your new best friend (unlike MongoDB)
7. **Normalize Data**: Avoid repeating data (MongoDB habit to break)

## Next Steps

1. Install PostgreSQL locally
2. Create a test database
3. Create tables following the examples
4. Practice CRUD operations
5. Write complex queries with JOINs
6. Learn about performance optimization
7. Explore connection from your application

**Happy Learning! 🚀**
