# PostgreSQL Queries for Full-Stack Project

A comprehensive guide for PostgreSQL queries commonly used in full-stack applications. This document includes database setup, schema creation, and practical CRUD operations.

## Table of Contents

- [Database Setup](#database-setup)
- [Schema Overview](#schema-overview)
- [CRUD Operations](#crud-operations)
- [Advanced Queries](#advanced-queries)
- [Authentication Queries](#authentication-queries)
- [Performance Tips](#performance-tips)

## Database Setup

### Initial Connection

```sql
-- Connect to PostgreSQL
psql -U postgres -h localhost

-- Create database
CREATE DATABASE fullstack_db;

-- Connect to your database
\c fullstack_db
```

### Enable Extensions

```sql
-- For UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- For JSON operations
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```


## Schema Overview

This project includes the following tables:

1. **users** - User accounts and authentication
2. **products** - Product catalog
3. **orders** - Customer orders
4. **order_items** - Items within orders
5. **reviews** - Product reviews
6. **categories** - Product categories

### Entity Relationship Diagram

```
users (1) ─── (N) orders
users (1) ─── (N) reviews
products (1) ─── (N) reviews
products (1) ─── (N) order_items
orders (1) ─── (N) order_items
categories (1) ─── (N) products
```


## Table Creation Scripts

### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  avatar_url VARCHAR(500),
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email lookups
CREATE INDEX idx_users_email ON users(email);
```

### Products Table

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  category_id UUID NOT NULL,
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Indexes for better performance
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_is_active ON products(is_active);
```

### Orders Table

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  shipping_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL,
  product_id UUID NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);

-- Indexes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
```

### Reviews Table

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL,
  user_id UUID NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
```


## CRUD Operations

### CREATE

#### Add a New User

```sql
INSERT INTO users (email, password_hash, full_name)
VALUES (
  'john@example.com',
  '$2b$10$...hashed_password...',
  'John Doe'
)
RETURNING id, email, full_name;
```

#### Add a New Product

```sql
INSERT INTO products (name, description, price, stock_quantity, category_id)
VALUES (
  'Laptop',
  'High-performance laptop',
  999.99,
  50,
  (SELECT id FROM categories WHERE name = 'Electronics')
)
RETURNING *;
```

#### Create an Order

```sql
INSERT INTO orders (user_id, total_amount, status, shipping_address)
VALUES (
  '550e8400-e29b-41d4-a716-446655440000',
  1299.98,
  'pending',
  '123 Main St, City, State 12345'
)
RETURNING *;
```

### READ

#### Get User by Email

```sql
SELECT id, email, full_name, is_admin, created_at
FROM users
WHERE email = 'john@example.com';
```

#### Get All Active Products

```sql
SELECT 
  p.id,
  p.name,
  p.price,
  p.stock_quantity,
  c.name as category_name
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE p.is_active = TRUE
ORDER BY p.created_at DESC;
```

#### Get Product with Reviews

```sql
SELECT 
  p.id,
  p.name,
  p.price,
  ROUND(AVG(r.rating)::NUMERIC, 2) as avg_rating,
  COUNT(r.id) as review_count
FROM products p
LEFT JOIN reviews r ON p.id = r.product_id
WHERE p.id = 'product-uuid-here'
GROUP BY p.id, p.name, p.price;
```

#### Get User Orders

```sql
SELECT 
  o.id,
  o.total_amount,
  o.status,
  o.created_at,
  COUNT(oi.id) as item_count
FROM orders o
LEFT JOIN order_items oi ON o.id = oi.order_id
WHERE o.user_id = 'user-uuid-here'
GROUP BY o.id
ORDER BY o.created_at DESC;
```

### UPDATE

#### Update User Profile

```sql
UPDATE users
SET 
  full_name = 'Jane Doe',
  avatar_url = 'https://example.com/avatar.jpg',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'user-uuid-here'
RETURNING *;
```

#### Update Product Stock

```sql
UPDATE products
SET 
  stock_quantity = stock_quantity - 1,
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'product-uuid-here'
AND stock_quantity > 0
RETURNING stock_quantity;
```

#### Update Order Status

```sql
UPDATE orders
SET 
  status = 'shipped',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'order-uuid-here'
RETURNING *;
```

### DELETE

#### Delete User (with cascade)

```sql
DELETE FROM users
WHERE id = 'user-uuid-here'
RETURNING id, email;
```

#### Delete Product

```sql
DELETE FROM products
WHERE id = 'product-uuid-here'
RETURNING id, name;
```

#### Delete Order

```sql
DELETE FROM orders
WHERE id = 'order-uuid-here'
RETURNING id;
```


## Advanced Queries

### Get Top 10 Best-Selling Products

```sql
SELECT 
  p.id,
  p.name,
  p.price,
  SUM(oi.quantity) as total_sold,
  SUM(oi.quantity * oi.unit_price) as revenue
FROM products p
JOIN order_items oi ON p.id = oi.product_id
JOIN orders o ON oi.order_id = o.id
WHERE o.status = 'completed'
GROUP BY p.id, p.name, p.price
ORDER BY total_sold DESC
LIMIT 10;
```

### Get Monthly Sales Report

```sql
SELECT 
  DATE_TRUNC('month', o.created_at) as month,
  COUNT(DISTINCT o.id) as total_orders,
  COUNT(DISTINCT o.user_id) as unique_customers,
  SUM(o.total_amount) as total_revenue,
  AVG(o.total_amount) as avg_order_value
FROM orders o
WHERE o.status = 'completed'
GROUP BY DATE_TRUNC('month', o.created_at)
ORDER BY month DESC;
```

### Get Products by Category with Stats

```sql
SELECT 
  c.name as category,
  COUNT(p.id) as product_count,
  AVG(p.price) as avg_price,
  MIN(p.price) as min_price,
  MAX(p.price) as max_price,
  SUM(p.stock_quantity) as total_stock
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.name
ORDER BY product_count DESC;
```

### Get User Spending Analysis

```sql
SELECT 
  u.id,
  u.full_name,
  u.email,
  COUNT(o.id) as total_orders,
  SUM(o.total_amount) as total_spent,
  AVG(o.total_amount) as avg_order_value,
  MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.full_name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC;
```

### Get Products with Low Stock

```sql
SELECT 
  id,
  name,
  stock_quantity,
  price,
  CASE 
    WHEN stock_quantity < 10 THEN 'Critical'
    WHEN stock_quantity < 25 THEN 'Low'
    ELSE 'Adequate'
  END as stock_level
FROM products
WHERE stock_quantity < 50
ORDER BY stock_quantity ASC;
```

### Get Recent Reviews with User Info

```sql
SELECT 
  r.id,
  r.title,
  r.comment,
  r.rating,
  r.created_at,
  p.name as product_name,
  u.full_name as reviewer_name
FROM reviews r
JOIN products p ON r.product_id = p.id
JOIN users u ON r.user_id = u.id
ORDER BY r.created_at DESC
LIMIT 20;
```


## Authentication Queries

### User Registration

```sql
-- Insert new user
INSERT INTO users (email, password_hash, full_name)
VALUES ($1, $2, $3)
ON CONFLICT (email) DO NOTHING
RETURNING id, email;
```

### User Login

```sql
-- Get user by email for password verification
SELECT id, email, password_hash, is_admin
FROM users
WHERE email = $1;
```

### Check if Email Exists

```sql
SELECT EXISTS(
  SELECT 1 FROM users WHERE email = $1
) as email_exists;
```

### Update Last Login

```sql
UPDATE users
SET updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING id, email;
```


## Performance Tips

### 1. Use Indexes Wisely

```sql
-- Always index foreign keys
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- Index frequently filtered columns
CREATE INDEX idx_products_category_id ON products(category_id);

-- Create composite indexes for common queries
CREATE INDEX idx_reviews_product_rating ON reviews(product_id, rating DESC);
```

### 2. Use EXPLAIN to Analyze Queries

```sql
EXPLAIN ANALYZE
SELECT p.*, c.name
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE p.is_active = TRUE;
```

### 3. Batch Operations

```sql
-- Better performance for multiple inserts
INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES 
  ($1, $2, $3, $4),
  ($5, $6, $7, $8),
  ($9, $10, $11, $12)
RETURNING *;
```

### 4. Use Connection Pooling

- Use tools like PgBouncer or connection pools in your application framework
- Keep connection pool size between 5-20 for most applications

### 5. Query Optimization

```sql
-- Use LIMIT when you don't need all results
SELECT * FROM orders LIMIT 100;

-- Select only needed columns
SELECT id, name, price FROM products;

-- Use appropriate JOINs
-- INNER JOIN - records with matches in both tables
-- LEFT JOIN - all records from left table
-- Use sparingly for performance
```


## Connection String Example

```
postgresql://username:password@localhost:5432/fullstack_db
```

## Environment Variables

```
DATABASE_URL=postgresql://user:password@localhost:5432/fullstack_db
DB_POOL_SIZE=10
DB_IDLE_TIMEOUT=30000
```


## Common Issues and Solutions

### Issue: Slow Queries
**Solution**: Use EXPLAIN ANALYZE to identify bottlenecks, add appropriate indexes

### Issue: Deadlocks
**Solution**: Keep transactions short, maintain consistent ordering of table access

### Issue: Disk Space
**Solution**: Archive old data, vacuum databases regularly, monitor table sizes

### Issue: Connection Limit
**Solution**: Implement connection pooling, adjust max_connections in PostgreSQL config


## Additional Resources

- [PostgreSQL Official Docs](https://www.postgresql.org/docs/)
- [PostgreSQL Query Performance](https://www.postgresql.org/docs/current/sql.html)
- [Database Design Best Practices](https://en.wikipedia.org/wiki/Database_normalization)


**Last Updated**: December 2024
**Version**: 1.0.0
