# 🐘 SQL Learning Roadmap — From MongoDB Basics to Industry-Ready SQL

> A complete, hands-on curriculum for developers who know **MongoDB** and want to master **SQL (PostgreSQL)** for Full Stack / Backend development and technical interviews.

![SQL](https://img.shields.io/badge/SQL-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Level](https://img.shields.io/badge/Level-Beginner_to_Advanced-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Self--Paced-success?style=flat-square)

## 👋 Who This Guide Is For

You already know:

- Basic **MongoDB** (collections, documents, `find()`, aggregation basics)
- Basic programming / JavaScript / Node.js concepts

You want to:

- Learn **SQL from absolute zero** using **PostgreSQL**
- Understand relational database design like a backend engineer
- Write production-grade queries, not just toy examples
- Be ready for **SQL interview rounds** at product/service companies
- Use SQL with **Node.js** and **Prisma ORM** in real projects

This guide assumes **zero prior SQL knowledge** but **intermediate programming knowledge**.

## 🧭 How to Use This Guide

1. Go **top to bottom** — topics build on each other.
2. Actually **run every query** in `psql`, pgAdmin, or DBeaver. Don't just read.
3. Do the **Practice Exercises** before checking answers.
4. After Part 3 (Advanced), start the **Projects** in parallel with later topics.
5. Use the **checklists** at the end of each part to track progress.
6. Revisit the **Interview Preparation** section a week before interviews.

Each major topic follows this fixed structure:

```
## Topic
### What is it?
### Why is it important?
### Syntax
### Example
### MongoDB Comparison
### Real-world Use Case
### Practice Exercises
### Interview Questions
### Common Mistakes
```

## 📋 Prerequisites

- A computer (Windows/Mac/Linux) with admin rights to install software
- Basic command line comfort (`cd`, `ls`, running commands)
- Node.js installed (v18+) for the later Node.js/Prisma sections
- No prior database experience needed — but MongoDB knowledge will be reused constantly for comparison

## 🗺️ Learning Roadmap

```
Beginner            →  Relational thinking, CRUD, filtering, aggregation
Intermediate        →  Joins, subqueries, CTEs, window functions, design theory
Advanced            →  Performance, transactions, concurrency, JSON in SQL
Industry-Ready      →  Node.js integration, ORMs, migrations, security, architecture
Projects            →  5 progressively harder real-world schemas
Interview Prep       →  Conceptual + query-writing + system design style questions
```

## 📑 Table of Contents

### Part 0 — Foundations

- [0.1 SQL & Relational Database Fundamentals](#01-sql--relational-database-fundamentals)
- [0.2 SQL vs NoSQL](#02-sql-vs-nosql)
- [0.3 PostgreSQL Setup](#03-postgresql-setup)
- [0.4 Databases, Tables, Rows, Columns](#04-databases-tables-rows-columns)

### Part 1 — Beginner

- [1.1 Primary Keys & Foreign Keys](#11-primary-keys--foreign-keys)
- [1.2 Constraints](#12-constraints)
- [1.3 CRUD Operations](#13-crud-operations)
- [1.4 SELECT & Filtering (WHERE)](#14-select--filtering-where)
- [1.5 ORDER BY, LIMIT, DISTINCT](#15-order-by-limit-distinct)
- [1.6 NULL Handling](#16-null-handling)
- [1.7 Aggregate Functions](#17-aggregate-functions)
- [1.8 GROUP BY and HAVING](#18-group-by-and-having)

### Part 2 — Intermediate

- [2.1 JOINs (All Types)](#21-joins-all-types)
- [2.2 Subqueries](#22-subqueries)
- [2.3 CTEs (WITH clause)](#23-ctes-with-clause)
- [2.4 UNION / UNION ALL](#24-union--union-all)
- [2.5 EXISTS / NOT EXISTS](#25-exists--not-exists)
- [2.6 CASE Expressions](#26-case-expressions)
- [2.7 Window Functions](#27-window-functions)
- [2.8 Database Relationships](#28-database-relationships)
- [2.9 Normalization & Denormalization](#29-normalization--denormalization)
- [2.10 Database Design & ER Diagrams](#210-database-design--er-diagrams)

### Part 3 — Advanced

- [3.1 Indexes](#31-indexes)
- [3.2 Query Optimization](#32-query-optimization)
- [3.3 EXPLAIN / EXPLAIN ANALYZE](#33-explain--explain-analyze)
- [3.4 Transactions](#34-transactions)
- [3.5 ACID Properties](#35-acid-properties)
- [3.6 Isolation Levels](#36-isolation-levels)
- [3.7 Locks & Concurrency](#37-locks--concurrency)
- [3.8 Views & Materialized Views](#38-views--materialized-views)
- [3.9 PostgreSQL JSON/JSONB](#39-postgresql-jsonjsonb)

### Part 4 — Industry Ready

- [4.1 Node.js + PostgreSQL](#41-nodejs--postgresql)
- [4.2 SQL Injection & Security](#42-sql-injection--security)
- [4.3 Pagination, Filtering & Searching](#43-pagination-filtering--searching)
- [4.4 Prisma ORM](#44-prisma-orm)
- [4.5 Raw SQL vs ORM](#45-raw-sql-vs-orm)
- [4.6 Database Migrations](#46-database-migrations)
- [4.7 Real-World Database Architecture](#47-real-world-database-architecture)

### Part 5 — Projects

- [5.1 Project 1: Employee Management System](#51-project-1-employee-management-system)
- [5.2 Project 2: E-commerce Database](#52-project-2-e-commerce-database)
- [5.3 Project 3: Blog / Social Media Database](#53-project-3-blog--social-media-database)
- [5.4 Project 4: Job Portal](#54-project-4-job-portal)
- [5.5 Project 5: SaaS Application](#55-project-5-saas-application)

### Part 6 — Interview Preparation

- [6.1 Conceptual Questions Bank](#61-conceptual-questions-bank)
- [6.2 Query Writing Challenges](#62-query-writing-challenges)
- [6.3 System Design Style DB Questions](#63-system-design-style-db-questions)

### Final

- [✅ Full Progress Checklist](#-full-progress-checklist)
- [🏆 Final Skills Checklist](#-final-skills-checklist)
- [📚 Additional Resources](#-additional-resources)

# Part 0 — Foundations

## 0.1 SQL & Relational Database Fundamentals

### What is it?

**SQL (Structured Query Language)** is the standard language used to talk to **relational databases** — databases that store data in **tables** made of rows and columns, where relationships between tables are defined explicitly (unlike MongoDB, where relationships are often implicit or embedded).

A **relational database** organizes data based on a mathematical concept called _relations_ (tables). Every table has a fixed set of columns (a schema), and each row is one record.

### Why is it important?

- SQL powers the majority of production backend systems (banking, e-commerce, SaaS, HR systems).
- Almost every backend interview includes a SQL round.
- Understanding relational modeling makes you a better data modeler even in MongoDB.

### Syntax

SQL is broadly divided into sub-languages:

| Category | Full Form                    | Commands                              | Purpose              |
| -------- | ---------------------------- | ------------------------------------- | -------------------- |
| DDL      | Data Definition Language     | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | Define/modify schema |
| DML      | Data Manipulation Language   | `INSERT`, `UPDATE`, `DELETE`          | Modify data          |
| DQL      | Data Query Language          | `SELECT`                              | Read data            |
| DCL      | Data Control Language        | `GRANT`, `REVOKE`                     | Permissions          |
| TCL      | Transaction Control Language | `COMMIT`, `ROLLBACK`, `SAVEPOINT`     | Manage transactions  |

### Example

```sql
-- DDL
CREATE TABLE employees (id SERIAL PRIMARY KEY, name TEXT);

-- DML
INSERT INTO employees (name) VALUES ('Riya');

-- DQL
SELECT * FROM employees;
```

### MongoDB Comparison

| MongoDB                     | PostgreSQL                                |
| --------------------------- | ----------------------------------------- |
| Database                    | Database                                  |
| Collection                  | Table                                     |
| Document                    | Row                                       |
| Field                       | Column                                    |
| Schema-less (flexible)      | Schema enforced (strict, defined upfront) |
| `db.collection.insertOne()` | `INSERT INTO table`                       |
| `db.collection.find()`      | `SELECT`                                  |

The biggest mindset shift coming from MongoDB: **structure is defined before you insert data**, not discovered from whatever you happened to insert.

### Real-world Use Case

Any system needing strong consistency and complex relationships — orders linked to customers linked to payments — is typically modeled relationally, because SQL guarantees data integrity through constraints and transactions in a way that's harder to enforce manually in MongoDB.

### Practice Exercises

1. List 3 differences between a "document" and a "row."
2. Categorize these commands into DDL/DML/DQL/DCL/TCL: `DROP TABLE`, `SELECT`, `GRANT`, `COMMIT`, `UPDATE`.
3. Write in words (no SQL yet): how would you store "students" and "courses" they enroll in, relationally?

### Interview Questions

- What is SQL and what problem does it solve?
- What are the sub-languages of SQL (DDL, DML, DQL, DCL, TCL)?
- What is a relational database, in your own words?

### Common Mistakes

- ❌ Thinking SQL and MySQL/PostgreSQL are the same thing — SQL is the _language_; PostgreSQL/MySQL/SQL Server are _database systems_ that implement it (with slightly different dialects).
- ❌ Assuming all SQL databases behave identically — PostgreSQL, MySQL, and SQL Server have syntax differences (this guide focuses on PostgreSQL).

## 0.2 SQL vs NoSQL

### What is it?

**SQL databases** (PostgreSQL, MySQL) store structured data in tables with fixed schemas and strong relationships. **NoSQL databases** (MongoDB, Cassandra, Redis) store data more flexibly — as documents, key-value pairs, wide columns, or graphs — often trading strict consistency for flexibility and horizontal scalability.

### Why is it important?

Choosing the wrong database type for your use case is one of the most expensive architectural mistakes. Interviewers frequently test whether you understand _when_ to use which.

### Syntax

N/A (conceptual topic) — but here's the mental model:

```
SQL:    Data → Fits neatly into tables → Relationships matter → Consistency matters
NoSQL:  Data → Varies in shape → Needs to scale horizontally → Flexibility matters
```

### Example

**E-commerce order** in MongoDB (embedded):

```json
{
  "_id": "order123",
  "customer": "Riya",
  "items": [
    { "product": "Laptop", "price": 60000 },
    { "product": "Mouse", "price": 500 }
  ]
}
```

**Same data** in PostgreSQL (normalized, across tables):

```sql
-- orders table
id | customer_id | created_at
1  | 42          | 2026-08-01

-- order_items table
id | order_id | product_id | price
1  | 1        | 501        | 60000
2  | 1        | 512        | 500
```

### MongoDB Comparison

| Aspect         | SQL (PostgreSQL)                             | NoSQL (MongoDB)                                                     |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| Schema         | Fixed, enforced                              | Flexible, dynamic                                                   |
| Relationships  | Foreign keys + JOINs                         | Embedding or manual `$lookup`                                       |
| Scaling        | Vertical (mostly), horizontal is harder      | Horizontal by design                                                |
| Consistency    | Strong (ACID)                                | Tunable (often eventual in clusters)                                |
| Best for       | Financial data, complex relations, reporting | Rapidly changing schemas, huge write throughput, catalog-style data |
| Query language | SQL                                          | MQL (MongoDB Query Language) / Aggregation pipeline                 |

### Real-world Use Case

- **Banking / fintech / inventory / HR / ERP systems** → SQL (data integrity is non-negotiable).
- **Content feeds, logging, real-time analytics, product catalogs with varying attributes** → NoSQL often fits better.
- Many real companies use **both** — e.g., PostgreSQL for orders/payments, MongoDB or Elasticsearch for product search/catalog.

### Practice Exercises

1. Would you use SQL or NoSQL for a hospital patient records system? Justify.
2. Would you use SQL or NoSQL for a chat application's messages? Justify.
3. Design (on paper) how you'd store "blog posts with comments" in both MongoDB and PostgreSQL.

### Interview Questions

- When would you choose SQL over NoSQL and vice versa?
- Can a SQL database handle unstructured data? (Yes — via `JSONB`, covered in 3.9)
- What is "schema-on-write" vs "schema-on-read"?

### Common Mistakes

- ❌ Believing "NoSQL is always more scalable" — modern PostgreSQL scales very well for most applications; horizontal scaling is a specific need, not a default requirement.
- ❌ Believing SQL can't store flexible/JSON data — PostgreSQL's `JSONB` type gives you the best of both worlds.
- ❌ Picking a database technology before understanding the data's actual shape and access patterns.

## 0.3 PostgreSQL Setup

### What is it?

Getting a working PostgreSQL environment: server + a client to run queries.

### Why is it important?

You can't learn SQL by reading — you need a real database to query against.

### Syntax / Setup Steps

**Option A: Local install**

- macOS: `brew install postgresql@16` then `brew services start postgresql@16`
- Windows: Download installer from postgresql.org, includes **pgAdmin** (GUI tool)
- Linux (Debian/Ubuntu): `sudo apt install postgresql postgresql-contrib`

**Option B: Docker (recommended — clean, disposable, matches production)**

```bash
docker run --name pg-learn \
  -e POSTGRES_PASSWORD=learnsql \
  -e POSTGRES_DB=sql_practice \
  -p 5432:5432 \
  -d postgres:16
```

**Option C: Cloud (zero setup)**

- [Supabase](https://supabase.com) or [Neon](https://neon.tech) — free-tier hosted PostgreSQL, great for practicing without local install.

**Connect via CLI:**

```bash
psql -h localhost -U postgres -d sql_practice
```

**GUI clients (optional but recommended):** pgAdmin, DBeaver, TablePlus.

### Example

Once connected, test it:

```sql
SELECT version();
SELECT current_database();
\dt   -- list tables (psql-specific meta-command)
\d employees   -- describe a table's structure
```

### MongoDB Comparison

| MongoDB               | PostgreSQL                          |
| --------------------- | ----------------------------------- |
| `mongosh` shell       | `psql` shell                        |
| MongoDB Compass (GUI) | pgAdmin / DBeaver / TablePlus (GUI) |
| MongoDB Atlas (cloud) | Supabase / Neon / RDS (cloud)       |
| `show dbs`            | `\l`                                |
| `use mydb`            | `\c mydb`                           |
| `show collections`    | `\dt`                               |

### Real-world Use Case

Every real project starts with an environment setup step like this — usually via **Docker Compose** so the whole team (and CI pipeline) gets an identical database.

### Practice Exercises

1. Install PostgreSQL using any method above and connect via `psql`.
2. Run `\l`, `\dt`, `\du` and note what each shows.
3. Create a database called `sql_practice` if it doesn't exist: `CREATE DATABASE sql_practice;`

### Interview Questions

- What's the difference between `psql` and pgAdmin?
- What port does PostgreSQL run on by default? (5432)
- How would you connect to PostgreSQL from a Node.js app? (preview — covered fully in 4.1)

### Common Mistakes

- ❌ Forgetting to start the PostgreSQL service before connecting.
- ❌ Confusing the **PostgreSQL superuser password** with your OS password.
- ❌ Not using Docker/cloud for practice — leads to messy, hard-to-reset local state early on.

## 0.4 Databases, Tables, Rows, Columns

### What is it?

- A **database** is a container for related tables (like a MongoDB database).
- A **table** is a structured collection of records, each with the same set of columns.
- A **row** (a.k.a. _tuple_ or _record_) is one entry in a table.
- A **column** (a.k.a. _field_ or _attribute_) is a typed property shared by all rows.

### Why is it important?

This is the atomic vocabulary of SQL — every concept from here on builds on it.

### Syntax

```sql
CREATE DATABASE company;

\c company

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  salary NUMERIC(10,2),
  hired_at DATE
);
```

Common PostgreSQL data types:

| Type                                 | Use for                               |
| ------------------------------------ | ------------------------------------- |
| `INTEGER` / `SERIAL`                 | Whole numbers / auto-incrementing IDs |
| `BIGINT` / `BIGSERIAL`               | Large whole numbers                   |
| `NUMERIC(p,s)`                       | Exact decimals (money!)               |
| `VARCHAR(n)` / `TEXT`                | Strings                               |
| `BOOLEAN`                            | true/false                            |
| `DATE` / `TIMESTAMP` / `TIMESTAMPTZ` | Dates and times                       |
| `UUID`                               | Unique identifiers                    |
| `JSON` / `JSONB`                     | Semi-structured data (see 3.9)        |

### Example

```sql
INSERT INTO employees (first_name, last_name, salary, hired_at)
VALUES ('Aditi', 'Sharma', 75000.00, '2024-03-15');

SELECT * FROM employees;
```

**Expected Output:**

```
 id | first_name | last_name | salary   | hired_a-+------------+-----------+----------+------------
  1 | Aditi      | Sharma    | 75000.00 | 2024-03-15
```

### MongoDB Comparison

| MongoDB                                       | PostgreSQL                                                      |
| --------------------------------------------- | --------------------------------------------------------------- |
| `db.createCollection("employees")`            | `CREATE TABLE employees (...)`                                  |
| Document `{ name: "Aditi", salary: 75000 }`   | Row `(1, 'Aditi', ..., 75000.00, ...)`                          |
| Any field, any document                       | Every row **must** match the table's columns and types          |
| Adding a new field to one document is trivial | Adding a new column requires `ALTER TABLE` (affects _all_ rows) |

### Real-world Use Case

An `employees`, `products`, or `orders` table is the backbone of nearly every backend system — this is literally what you'll be designing in every project in Part 5.

### Practice Exercises

1. Create a database called `bookstore`.
2. Inside it, create a table `books` with columns: `id`, `title`, `author`, `price`, `published_date`.
3. Insert 3 books and run `SELECT * FROM books;`.

### Interview Questions

- What is the difference between a table's _schema_ and its _data_?
- Why does PostgreSQL enforce column types while MongoDB doesn't (by default)?
- What is `SERIAL` and how is it different from `INTEGER`?

### Common Mistakes

- ❌ Using `VARCHAR` without a length when you actually want unlimited text — just use `TEXT` in PostgreSQL (there's no meaningful performance difference).
- ❌ Using `FLOAT`/`REAL` for money — always use `NUMERIC` to avoid floating-point rounding errors.
- ❌ Forgetting a primary key on a table (next topic!) — every table should have one.

# Part 1 — Beginner

## 1.1 Primary Keys & Foreign Keys

### What is it?

A **Primary Key (PK)** uniquely identifies each row in a table — no duplicates, never `NULL`.
A **Foreign Key (FK)** is a column in one table that references the Primary Key of another table, creating a **relationship** between them.

### Why is it important?

Primary and foreign keys are _how relational databases enforce data integrity_. Without them, you could have an order pointing to a customer that doesn't exist — impossible in a well-designed SQL schema, but a real risk in MongoDB unless you code the check manually.

### Syntax

```sql
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  department_id INTEGER REFERENCES departments(id)
);
```

### Example

```sql
INSERT INTO departments (name) VALUES ('Engineering'), ('Sales');

INSERT INTO employees (name, department_id) VALUES ('Aditi', 1);

-- This FAILS because department_id 99 doesn't exist:
INSERT INTO employees (name, department_id) VALUES ('Rahul', 99);
```

**Expected Output (error):**

```
ERROR:  insert or update on table "employees" violates foreign key constraint
DETAIL:  Key (department_id)=(99) is not present in table "departments".
```

### MongoDB Comparison

| MongoDB                                                              | PostgreSQL                                          |
| -------------------------------------------------------------------- | --------------------------------------------------- |
| `_id` (ObjectId, auto-generated)                                     | Primary Key (`SERIAL`, `UUID`, etc.)                |
| Manual reference (`department_id: ObjectId(...)`) — **not enforced** | `FOREIGN KEY` — **enforced by the database**        |
| `$lookup` to join manually at query time                             | `JOIN` with guaranteed referential integrity        |
| No built-in protection against dangling references                   | Database _refuses_ invalid references automatically |

This is one of the biggest advantages of SQL over MongoDB: **you cannot accidentally create orphaned/broken references.**

### Real-world Use Case

An `orders.customer_id` foreign key to `customers.id` guarantees you never have an order "floating" without a valid customer — critical for billing systems, audits, and reporting.

### Practice Exercises

1. Create `authors` and `books` tables where `books.author_id` references `authors.id`.
2. Try inserting a book with a non-existent `author_id` and observe the error.
3. What happens if you try to delete an author who has books? (Try it, then read 1.2 for `ON DELETE` behavior.)

### Interview Questions

- What's the difference between a Primary Key and a Unique Key?
- Can a table have more than one foreign key? Can it have more than one primary key?
- What is a **composite primary key**? Give an example (e.g., `enrollments(student_id, course_id)`).
- What is a **surrogate key** vs a **natural key**?

### Common Mistakes

- ❌ Using a "natural" key (like email) as a Primary Key — emails can change; prefer a surrogate key (`SERIAL`/`UUID`).
- ❌ Forgetting to index foreign key columns (PostgreSQL does **not** auto-index FK columns — see 3.1).
- ❌ Not deciding `ON DELETE` behavior upfront, leading to surprises in production (covered next in Constraints).

## 1.2 Constraints

### What is it?

**Constraints** are rules enforced by the database to guarantee data validity — beyond just "is it the right type."

| Constraint    | Meaning                               |
| ------------- | ------------------------------------- |
| `PRIMARY KEY` | Unique + not null, identifies the row |
| `FOREIGN KEY` | Must match a value in another table   |
| `NOT NULL`    | Column can't be empty                 |
| `UNIQUE`      | No duplicate values allowed           |
| `CHECK`       | Custom condition must be true         |
| `DEFAULT`     | Value used when none is provided      |

### Why is it important?

Constraints push validation **down into the database layer**, so bad data can never enter regardless of which application, script, or developer writes to it — a safety net application code alone can't guarantee.

### Syntax

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  sku TEXT UNIQUE NOT NULL,
  price NUMERIC(10,2) CHECK (price > 0),
  stock INTEGER DEFAULT 0,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
);
```

`ON DELETE` options for foreign keys:
| Option | Behavior when parent row is deleted |
|---|---|
| `CASCADE` | Delete child rows too |
| `SET NULL` | Set the FK column to NULL |
| `RESTRICT` (default) | Block the delete if children exist |
| `NO ACTION` | Similar to RESTRICT, checked at end of statement |

### Example

```sql
INSERT INTO products (name, sku, price) VALUES ('Keyboard', 'KB-001', 999.00); -- OK
INSERT INTO products (name, sku, price) VALUES ('Mouse', 'KB-001', 499.00);    -- FAILS (duplicate sku)
INSERT INTO products (name, sku, price) VALUES ('Free Item', 'FR-001', -10);   -- FAILS (check constraint)
```

### MongoDB Comparison

| MongoDB                                              | PostgreSQL                                                    |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| Schema validation (`$jsonSchema`) — optional, opt-in | Constraints — enforced by default, built into `CREATE TABLE`  |
| Uniqueness via manual **unique index**               | `UNIQUE` constraint (also implemented internally as an index) |
| App-level validation (Mongoose `required: true`)     | `NOT NULL` at the database level                              |
| No native `CHECK`-style range validation             | `CHECK` constraints natively supported                        |

### Real-world Use Case

A `price CHECK (price > 0)` constraint prevents a bug in your checkout code from ever inserting a negative price — even if 5 different microservices write to that table.

### Practice Exercises

1. Add a `UNIQUE` constraint on `employees.email`.
2. Add a `CHECK` constraint ensuring `employees.salary >= 0`.
3. Create a `department_id` FK with `ON DELETE CASCADE` and test deleting a parent department.

### Interview Questions

- What's the difference between `UNIQUE` and `PRIMARY KEY`?
- What does `ON DELETE CASCADE` do, and when is it dangerous?
- How do you add a constraint to an _existing_ table? (`ALTER TABLE ... ADD CONSTRAINT ...`)

### Common Mistakes

- ❌ Using `CASCADE` everywhere "for convenience" — this can cause silent, unintended mass deletions in production.
- ❌ Relying only on application-level validation and skipping database constraints — an admin script or a bug can bypass your app entirely.
- ❌ Forgetting `NOT NULL` on required columns, allowing invisible data quality issues to accumulate.

## 1.3 CRUD Operations

### What is it?

**CRUD** = Create, Read, Update, Delete — the four fundamental data operations, done in SQL with `INSERT`, `SELECT`, `UPDATE`, `DELETE`.

### Why is it important?

This is the daily bread-and-butter of backend development — every API endpoint eventually boils down to one of these four operations.

### Syntax

```sql
-- CREATE
INSERT INTO employees (name, salary) VALUES ('Kabir', 50000);

-- READ
SELECT * FROM employees;

-- UPDATE
UPDATE employees SET salary = 55000 WHERE name = 'Kabir';

-- DELETE
DELETE FROM employees WHERE name = 'Kabir';
```

### Example

```sql
-- Insert multiple rows at once
INSERT INTO employees (name, salary) VALUES
  ('Aditi', 75000),
  ('Rahul', 60000),
  ('Priya', 82000);

-- Update with a computed value
UPDATE employees SET salary = salary * 1.10 WHERE name = 'Rahul'; -- 10% raise

-- Delete conditionally
DELETE FROM employees WHERE salary < 30000;
```

**Expected Output for the UPDATE:**

```
UPDATE 1
```

(PostgreSQL always tells you how many rows were affected.)

### MongoDB Comparison

| MongoDB                        | PostgreSQL                     |
| ------------------------------ | ------------------------------ |
| `insertOne()` / `insertMany()` | `INSERT INTO ... VALUES (...)` |
| `find()` / `findOne()`         | `SELECT`                       |
| `updateOne()` / `updateMany()` | `UPDATE ... WHERE ...`         |
| `deleteOne()` / `deleteMany()` | `DELETE FROM ... WHERE ...`    |
| `$set` operator                | Plain `SET column = value`     |

### Real-world Use Case

Every REST/GraphQL API method maps directly:

- `POST /employees` → `INSERT`
- `GET /employees/:id` → `SELECT ... WHERE id = $1`
- `PATCH /employees/:id` → `UPDATE ... WHERE id = $1`
- `DELETE /employees/:id` → `DELETE ... WHERE id = $1`

### Practice Exercises

1. Insert 5 employees with varying salaries.
2. Update one employee's salary by giving a 15% raise.
3. Delete all employees earning less than 40000.
4. **Danger drill:** what happens if you run `DELETE FROM employees;` with no `WHERE`? (Try it in a throwaway table — it deletes _everything_.)

### Interview Questions

- What happens if you forget the `WHERE` clause in `UPDATE` or `DELETE`?
- What's the difference between `DELETE`, `TRUNCATE`, and `DROP`?
- Can `INSERT` return the inserted row? (Yes — `INSERT ... RETURNING *`)

### Common Mistakes

- ❌ Running `UPDATE`/`DELETE` without a `WHERE` clause — affects **every row** in the table.
- ❌ Not wrapping multi-step CRUD operations in a transaction (see 3.4) — leaves data half-updated if something fails midway.
- ❌ Forgetting that string values need single quotes: `'Kabir'` not `"Kabir"` (double quotes are for identifiers in PostgreSQL!).

## 1.4 SELECT & Filtering (WHERE)

### What is it?

`SELECT` retrieves data; `WHERE` filters _which rows_ are returned.

### Why is it important?

This is the single most-used SQL statement — nearly every query starts with `SELECT ... WHERE`.

### Syntax

```sql
SELECT column1, column2 FROM table_name WHERE condition;
```

Common operators:
| Operator | Meaning |
|---|---|
| `=`, `!=` / `<>` | Equals, not equals |
| `>`, `<`, `>=`, `<=` | Comparisons |
| `AND`, `OR`, `NOT` | Logical combinations |
| `BETWEEN a AND b` | Range (inclusive) |
| `IN (a, b, c)` | Matches any in list |
| `LIKE '%pattern%'` | Pattern match (`%` = any chars, `_` = one char) |
| `ILIKE` | Case-insensitive `LIKE` (PostgreSQL-specific) |
| `IS NULL` / `IS NOT NULL` | Null checks (see 1.6) |

### Example

```sql
SELECT name, salary FROM employees WHERE salary > 60000;

SELECT * FROM employees WHERE department_id IN (1, 2) AND salary >= 50000;

SELECT * FROM employees WHERE name ILIKE '%a%';  -- names containing 'a', case-insensitive

SELECT * FROM employees WHERE hired_at BETWEEN '2023-01-01' AND '2023-12-31';
```

**Expected Output (first query):**

```
 name  | salar----+--------
 Aditi | 75000
 Priya | 82000
```

### MongoDB Comparison

| MongoDB                                         | PostgreSQL                      |
| ----------------------------------------------- | ------------------------------- |
| `find({ salary: { $gt: 60000 } })`              | `WHERE salary > 60000`          |
| `find({ dept: { $in: [1,2] } })`                | `WHERE department_id IN (1, 2)` |
| `find({ name: /a/i })`                          | `WHERE name ILIKE '%a%'`        |
| `find({}, { name: 1, salary: 1 })` (projection) | `SELECT name, salary FROM ...`  |

### Real-world Use Case

Almost every "search" or "filter" feature in an app — filtering products by price range, searching users by name, filtering orders by date — is a `WHERE` clause under the hood.

### Practice Exercises

1. Select all employees with a salary between 50,000 and 80,000.
2. Select employees whose name starts with "A" (hint: `LIKE 'A%'`).
3. Select employees who are **not** in department 1 (`!=` or `NOT IN`).
4. Combine 3 conditions using `AND`/`OR` and add parentheses to control precedence.

### Interview Questions

- What's the difference between `LIKE` and `ILIKE`?
- How does operator precedence work with mixed `AND`/`OR`? (Always use parentheses to be explicit!)
- What's the difference between `=` and `IS` when checking for `NULL`? (Covered in depth in 1.6)

### Common Mistakes

- ❌ Forgetting that `LIKE` is case-sensitive in PostgreSQL (use `ILIKE` for case-insensitive search).
- ❌ Mixing `AND`/`OR` without parentheses, causing unexpected logic: `WHERE a = 1 OR b = 2 AND c = 3` doesn't do what most people assume.
- ❌ Using `SELECT *` in production code — always select only the columns you need (performance + safety).

## 1.5 ORDER BY, LIMIT, DISTINCT

### What is it?

- `ORDER BY` sorts result rows.
- `LIMIT` (with optional `OFFSET`) restricts how many rows are returned.
- `DISTINCT` removes duplicate rows from the result.

### Why is it important?

These three are the backbone of **pagination**, **top-N queries**, and **deduplication** — extremely common in real applications.

### Syntax

```sql
SELECT * FROM employees ORDER BY salary DESC;         -- highest first
SELECT * FROM employees ORDER BY department_id, salary DESC; -- multi-column sort
SELECT * FROM employees LIMIT 5;                       -- top 5 rows
SELECT * FROM employees LIMIT 5 OFFSET 10;             -- rows 11-15 (pagination)
SELECT DISTINCT department_id FROM employees;          -- unique department ids
```

### Example

```sql
-- Top 3 highest-paid employees
SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 3;
```

**Expected Output:**

```
 name  | salar----+--------
 Priya | 82000
 Aditi | 75000
 Rahul | 66000
```

### MongoDB Comparison

| MongoDB                      | PostgreSQL                               |
| ---------------------------- | ---------------------------------------- |
| `.sort({ salary: -1 })`      | `ORDER BY salary DESC`                   |
| `.limit(5)`                  | `LIMIT 5`                                |
| `.skip(10).limit(5)`         | `LIMIT 5 OFFSET 10`                      |
| `.distinct("department_id")` | `SELECT DISTINCT department_id FROM ...` |

### Real-world Use Case

- "Top 10 best-selling products" → `ORDER BY sales DESC LIMIT 10`
- Paginated API results (page 2, 20 per page) → `LIMIT 20 OFFSET 20`
- "List of unique cities customers are from" → `SELECT DISTINCT city FROM customers`

### Practice Exercises

1. Get the 5 lowest-paid employees.
2. Get unique department IDs currently used by employees.
3. Implement "page 3 of 10 employees per page" using `LIMIT`/`OFFSET`.
4. Sort employees first by department, then by salary descending within each department.

### Interview Questions

- Why is `OFFSET`-based pagination considered inefficient at scale? (It has to scan and discard all skipped rows — "keyset pagination" using a cursor/`WHERE id > last_id` is more efficient; discussed in 4.3.)
- Does `DISTINCT` work on multiple columns? What does it mean then? (Removes duplicate _combinations_ of those columns.)
- Can you `ORDER BY` a column not present in the `SELECT` list? (Yes.)

### Common Mistakes

- ❌ Assuming row order is guaranteed without `ORDER BY` — SQL does **not** guarantee any order unless you explicitly sort.
- ❌ Using large `OFFSET` values in production pagination (slow at scale — see 4.3 for better patterns).
- ❌ Thinking `DISTINCT` is "free" — it requires a sort/hash internally and has a real performance cost on large tables.

## 1.6 NULL Handling

### What is it?

`NULL` represents **unknown/missing data** — it is not the same as `0`, `''` (empty string), or `false`. It behaves specially in comparisons and calculations.

### Why is it important?

NULL logic trips up almost every SQL beginner (and many experienced developers). Understanding it prevents subtle, hard-to-find bugs.

### Syntax

```sql
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM employees WHERE manager_id IS NOT NULL;
SELECT COALESCE(bonus, 0) FROM employees;        -- replace NULL with a default
SELECT NULLIF(discount, 0) FROM orders;          -- turn 0 into NULL
```

**Key rule:** `NULL = NULL` evaluates to `NULL` (not `true`!), so you must use `IS NULL`, never `= NULL`.

### Example

```sql
-- WRONG: this returns ZERO rows even if nulls exist
SELECT * FROM employees WHERE manager_id = NULL;

-- CORRECT
SELECT * FROM employees WHERE manager_id IS NULL;

-- Arithmetic with NULL
SELECT 100 + NULL;         -- result: NULL (anything + NULL = NULL)
SELECT COALESCE(100 + NULL, 0); -- result: 0

-- Aggregates ignore NULLs
SELECT AVG(bonus) FROM employees; -- NULL bonuses are excluded from the average, not treated as 0
```

### MongoDB Comparison

| MongoDB                                                | PostgreSQL                                    |
| ------------------------------------------------------ | --------------------------------------------- |
| Field missing entirely, or explicit `null`             | `NULL` (single unified concept)               |
| `find({ field: null })` matches missing OR null fields | `IS NULL` matches only explicit `NULL` values |
| `$ifNull` operator                                     | `COALESCE()` function                         |

MongoDB's "field doesn't exist" vs "field is null" distinction doesn't exist the same way in SQL — every column exists for every row, it's either a value or `NULL`.

### Real-world Use Case

- Optional profile fields (middle name, referral code) → `NULL` by default.
- `COALESCE(discount, 0)` to safely calculate final price even when no discount was applied.
- Reporting: `AVG()`/`SUM()` automatically ignoring `NULL`s prevents skewed statistics.

### Practice Exercises

1. Find all employees with no assigned `manager_id`.
2. Use `COALESCE` to display "No Bonus" (as text) instead of `NULL` for employees without a bonus.
3. Predict the output of `SELECT NULL = NULL, NULL IS NULL;` — then run it and confirm.

### Interview Questions

- Why does `WHERE column = NULL` never return any rows?
- What does `COALESCE` do, and can it take more than 2 arguments? (Yes — returns the first non-null.)
- Do aggregate functions like `COUNT(*)` and `COUNT(column)` behave differently with NULLs? (Yes — `COUNT(*)` counts all rows, `COUNT(column)` skips NULLs in that column.)

### Common Mistakes

- ❌ Using `= NULL` or `!= NULL` instead of `IS NULL` / `IS NOT NULL`.
- ❌ Forgetting that `NOT IN` with a NULL in the list silently returns zero rows (a classic gotcha):
  ```sql
  SELECT * FROM employees WHERE department_id NOT IN (1, 2, NULL); -- returns NOTHING!
  ```
- ❌ Assuming `SUM()`/`AVG()` treat `NULL` as `0` — they don't; they exclude the row entirely from the calculation.

## 1.7 Aggregate Functions

### What is it?

Aggregate functions compute a **single summary value** from multiple rows: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.

### Why is it important?

Dashboards, reports, and analytics all run on aggregates — "total revenue," "average order value," "number of active users" are all aggregate queries.

### Syntax

```sql
SELECT COUNT(*) FROM employees;
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MIN(salary), MAX(salary) FROM employees;
```

### Example

```sql
SELECT
  COUNT(*)          AS total_employees,
  SUM(salary)        AS total_payroll,
  ROUND(AVG(salary), 2) AS avg_salary,
  MIN(salary)        AS lowest,
  MAX(salary)        AS highest
FROM employees;
```

**Expected Output:**

```
 total_employees | total_payroll | avg_salary | lowest | highes---------------+---------------+------------+--------+---------
               3 |        223000 |   74333.33 |  60000 |   82000
```

### MongoDB Comparison

| MongoDB                        | PostgreSQL                                    |
| ------------------------------ | --------------------------------------------- |
| `countDocuments()`             | `COUNT(*)`                                    |
| `$sum` in aggregation pipeline | `SUM()`                                       |
| `$avg`                         | `AVG()`                                       |
| `$min` / `$max`                | `MIN()` / `MAX()`                             |
| Requires an `$group` stage     | Aggregate functions work directly in `SELECT` |

SQL aggregates are simpler to write for basic cases; MongoDB's aggregation pipeline is more powerful for complex, staged transformations but more verbose.

### Real-world Use Case

- "Total revenue this month" → `SUM(amount)`
- "Average rating for a product" → `AVG(rating)`
- "Number of registered users" → `COUNT(*)`
- Admin dashboards are essentially collections of aggregate queries.

### Practice Exercises

1. Find the total number of employees.
2. Find the highest and lowest salary in the company.
3. Find the average salary, rounded to 2 decimal places.
4. Count how many employees have a non-null `bonus`.

### Interview Questions

- What's the difference between `COUNT(*)`, `COUNT(1)`, and `COUNT(column_name)`?
- Do aggregate functions ignore `NULL` values? (Yes, except `COUNT(*)`.)
- Can you use aggregate functions without `GROUP BY`? (Yes — it treats the whole table as one group.)

### Common Mistakes

- ❌ Mixing aggregate and non-aggregate columns in `SELECT` without `GROUP BY` (causes an error — see next topic).
- ❌ Forgetting `ROUND()` and getting long floating-point decimals in reports.
- ❌ Assuming `COUNT(column)` and `COUNT(*)` always give the same number — they differ when `column` has `NULL`s.

## 1.8 GROUP BY and HAVING

### What is it?

`GROUP BY` groups rows sharing a value into summary rows, typically used with aggregate functions. `HAVING` filters those _grouped_ results (unlike `WHERE`, which filters individual rows _before_ grouping).

### Why is it important?

This is how you answer questions like "total sales **per** product" or "average salary **per** department" — grouped analytics are everywhere in real applications.

### Syntax

```sql
SELECT department_id, COUNT(*), AVG(salary)
FROM employees
GROUP BY department_id;

SELECT department_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 60000;
```

**Execution order (important!):**

```
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

### Example

```sql
SELECT
  department_id,
  COUNT(*) AS num_employees,
  ROUND(AVG(salary), 2) AS avg_salary
FROM employees
WHERE hired_at > '2020-01-01'         -- filters rows BEFORE grouping
GROUP BY department_id
HAVING COUNT(*) > 2                    -- filters groups AFTER grouping
ORDER BY avg_salary DESC;
```

**Expected Output:**

```
 department_id | num_employees | avg_salar-------------+---------------+------------
              1 |             4 |   78500.00
              3 |             3 |   65200.00
```

### MongoDB Comparison

| MongoDB (Aggregation Pipeline)                           | PostgreSQL                               |
| -------------------------------------------------------- | ---------------------------------------- |
| `{ $match: {...} }`                                      | `WHERE`                                  |
| `{ $group: { _id: "$dept", avg: { $avg: "$salary" } } }` | `GROUP BY department_id` + `AVG(salary)` |
| A second `$match` after `$group`                         | `HAVING`                                 |
| `{ $sort: {...} }`                                       | `ORDER BY`                               |

Conceptually these map almost 1:1 — MongoDB's pipeline stages are just an explicit version of what SQL's execution order does implicitly.

### Real-world Use Case

- "Revenue per region" → `GROUP BY region`
- "Number of orders per customer, only customers with 5+ orders" → `GROUP BY customer_id HAVING COUNT(*) >= 5`
- "Average product rating per category" → `GROUP BY category_id`

### Practice Exercises

1. Get the count of employees per department.
2. Get departments where the average salary exceeds 70,000 (use `HAVING`).
3. Get the total salary paid per department, only for departments with more than 1 employee.
4. Explain in your own words why `WHERE salary > 50000` is valid but `WHERE AVG(salary) > 50000` is **not** (must use `HAVING` instead).

### Interview Questions

- What's the exact difference between `WHERE` and `HAVING`?
- Why can't you use an aggregate function inside `WHERE`?
- If you `SELECT name, department_id, COUNT(*) FROM employees GROUP BY department_id`, does this work? (No — every non-aggregated column in `SELECT` must appear in `GROUP BY`; `name` isn't grouped, so PostgreSQL will error.)

### Common Mistakes

- ❌ Trying to filter on an aggregate using `WHERE` instead of `HAVING`.
- ❌ Selecting a column that isn't in `GROUP BY` and isn't wrapped in an aggregate function (PostgreSQL enforces this strictly, unlike MySQL in some modes).
- ❌ Forgetting that `GROUP BY` happens **before** `SELECT` runs — you can't reference a `SELECT` alias inside `HAVING` in the same query in most cases (though PostgreSQL is lenient with `ORDER BY` aliases).

## ✅ Part 0 & 1 Checklist

- [ ] SQL & Relational Database Fundamentals
- [ ] SQL vs NoSQL
- [ ] PostgreSQL Setup
- [ ] Databases, Tables, Rows, Columns
- [ ] Primary Keys & Foreign Keys
- [ ] Constraints
- [ ] CRUD Operations
- [ ] SELECT & Filtering
- [ ] ORDER BY, LIMIT, DISTINCT
- [ ] NULL Handling
- [ ] Aggregate Functions
- [ ] GROUP BY and HAVING

# Part 2 — Intermediate

## 2.1 JOINs (All Types)

### What is it?

A **JOIN** combines rows from two or more tables based on a related column — this is _the_ defining feature of relational databases and directly replaces MongoDB's `$lookup` or manual application-side joining.

### Why is it important?

Normalized data (Part 2.9) is split across multiple tables. JOINs are how you reassemble that data for queries. **This is the single most-tested SQL topic in interviews.**

### Syntax & Types

Setup for all examples below:

```sql
CREATE TABLE departments (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name TEXT,
  department_id INTEGER REFERENCES departments(id)
);

INSERT INTO departments (name) VALUES ('Engineering'), ('Sales'), ('HR'), ('Marketing');
INSERT INTO employees (name, department_id) VALUES
  ('Aditi', 1), ('Rahul', 1), ('Priya', 2), ('Kabir', NULL);
-- Note: 'Marketing' (id 4) has no employees. Kabir has no department.
```

#### INNER JOIN — only matching rows in both tables

```sql
SELECT e.name, d.name AS department
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;
```

**Output:** Aditi, Rahul, Priya (Kabir excluded — no department; Marketing excluded — no employees)

#### LEFT JOIN (LEFT OUTER JOIN) — all rows from left table, matched or not

```sql
SELECT e.name, d.name AS department
FROM employees e
LEFT JOIN departments d ON e.department_id = d.id;
```

**Output:** Aditi, Rahul, Priya, **Kabir (department = NULL)**

#### RIGHT JOIN (RIGHT OUTER JOIN) — all rows from right table, matched or not

```sql
SELECT e.name, d.name AS department
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.id;
```

**Output:** Aditi, Rahul, Priya, **(NULL, 'Marketing')** — HR also appears with NULL name if no employee

#### FULL JOIN (FULL OUTER JOIN) — all rows from both, matched where possible

```sql
SELECT e.name, d.name AS department
FROM employees e
FULL JOIN departments d ON e.department_id = d.id;
```

**Output:** Everything — including Kabir (no dept) AND Marketing/HR (no employees)

#### CROSS JOIN — cartesian product (every row × every row)

```sql
SELECT e.name, d.name
FROM employees e
CROSS JOIN departments d;
-- 4 employees × 4 departments = 16 rows
```

#### SELF JOIN — a table joined to itself (e.g., employee-manager)

```sql
CREATE TABLE staff (id SERIAL PRIMARY KEY, name TEXT, manager_id INTEGER REFERENCES staff(id));

SELECT e.name AS employee, m.name AS manager
FROM staff e
LEFT JOIN staff m ON e.manager_id = m.id;
```

### Visual Summary

```
INNER JOIN:  A ∩ B                (only matches)
LEFT JOIN:   A + (A ∩ B)          (all of A, matched B or NULL)
RIGHT JOIN:  B + (A ∩ B)          (all of B, matched A or NULL)
FULL JOIN:   A ∪ B                (everything, matched where possible)
CROSS JOIN:  A × B                (every combination)
```

### MongoDB Comparison

| MongoDB                                                                        | PostgreSQL                                               |
| ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| `$lookup` (always like a LEFT JOIN, returns an array)                          | `LEFT JOIN`                                              |
| Manually filtering out empty lookup arrays                                     | `INNER JOIN`                                             |
| No native equivalent — must combine `$lookup` + `$unwind` + manual union logic | `FULL JOIN`                                              |
| Embedding data to avoid `$lookup` entirely                                     | Normalizing and using `JOIN` instead of duplicating data |

`$lookup` in MongoDB always behaves like a `LEFT JOIN` that nests results into an array — SQL gives you fine-grained control over exactly which join semantics you want.

### Real-world Use Case

- E-commerce: `orders LEFT JOIN order_items` → get every order, even ones with issues/empty items.
- HR system: `employees LEFT JOIN employees AS managers` (self join) for org charts.
- Reporting: `FULL JOIN` to reconcile two datasets and find mismatches (e.g., "customers with orders but no payment records, and payments with no matching order").

### Practice Exercises

1. Get a list of all employees with their department name (use `INNER JOIN`).
2. Get a list of **all** departments, including ones with zero employees, and the count of employees in each (`LEFT JOIN` + `GROUP BY`).
3. Find employees who have **no** department assigned using a `LEFT JOIN ... WHERE ... IS NULL` pattern.
4. Build a self-join query to list every employee alongside their manager's name.

### Interview Questions

- What's the difference between `INNER JOIN` and `LEFT JOIN`?
- How do you find rows in table A that have **no match** in table B? (`LEFT JOIN` + `WHERE B.id IS NULL`)
- What is a self-join and when would you use one?
- Is `JOIN` the same as `INNER JOIN`? (Yes, `JOIN` defaults to `INNER JOIN`.)
- What's the difference between joining `ON` a condition vs filtering with `WHERE` after a `LEFT JOIN`? (Putting a condition on the _right_ table in `ON` vs `WHERE` changes results — a classic gotcha, know this cold.)

### Common Mistakes

- ❌ Using `RIGHT JOIN` when a `LEFT JOIN` (with tables swapped) would be more readable — most engineers avoid `RIGHT JOIN` in practice for this reason.
- ❌ Putting a filter on the "outer" table inside `WHERE` instead of `ON` in a `LEFT JOIN`, which silently turns it into an `INNER JOIN`:

  ```sql
  -- WRONG: turns LEFT JOIN into INNER JOIN behavior
  SELECT * FROM employees e LEFT JOIN departments d ON e.department_id = d.id
  WHERE d.name = 'Engineering';

  -- CORRECT: keep the filter in the ON clause to preserve LEFT JOIN semantics
  SELECT * FROM employees e LEFT JOIN departments d ON e.department_id = d.id AND d.name = 'Engineering';
  ```

- ❌ Forgetting table aliases in multi-join queries, making column references ambiguous.
- ❌ Accidentally writing a `CROSS JOIN` by forgetting the `ON` clause.

## 2.2 Subqueries

### What is it?

A **subquery** is a query nested inside another query — in the `SELECT`, `FROM`, or `WHERE` clause.

### Why is it important?

Subqueries let you break complex logic into composable steps and are essential for filtering based on aggregated or derived data.

### Syntax

```sql
-- Subquery in WHERE
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery in FROM (derived table)
SELECT dept_avg.department_id, dept_avg.avg_salary
FROM (
  SELECT department_id, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY department_id
) AS dept_avg
WHERE dept_avg.avg_salary > 60000;

-- Subquery in SELECT (scalar subquery)
SELECT name,
  (SELECT COUNT(*) FROM employees e2 WHERE e2.department_id = e1.department_id) AS dept_size
FROM employees e1;

-- Correlated subquery (references the outer query)
SELECT name FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);
```

### Example

```sql
-- Employees earning more than their department's average
SELECT e1.name, e1.salary, e1.department_id
FROM employees e1
WHERE e1.salary > (
  SELECT AVG(e2.salary)
  FROM employees e2
  WHERE e2.department_id = e1.department_id
);
```

**Expected Output:**

```
 name  | salary | department_i----+--------+---------------
 Aditi |  75000 |             1
 Priya |  82000 |             2
```

### MongoDB Comparison

| MongoDB                                                     | PostgreSQL                          |
| ----------------------------------------------------------- | ----------------------------------- |
| `$lookup` + application-side filtering                      | Subquery in `WHERE`/`FROM`          |
| Two separate queries chained in app code                    | Single query with a nested subquery |
| Aggregation pipeline with multiple `$group`/`$match` stages | Subquery in `FROM` (derived table)  |

SQL subqueries let the _database_ do multi-step logic in one round trip — something you'd often do with multiple MongoDB queries chained in application code.

### Real-world Use Case

- "Products priced above the category average" → correlated subquery.
- "Customers who placed more than the average number of orders" → subquery in `HAVING`.
- Precomputing a derived table (e.g., monthly totals) then filtering/joining against it.

### Practice Exercises

1. Find employees earning more than the company-wide average salary.
2. Find the department with the highest average salary (subquery in `FROM` + `ORDER BY` + `LIMIT 1`).
3. Write a correlated subquery to find, for each employee, how many colleagues are in the same department.

### Interview Questions

- What's the difference between a **correlated** and a **non-correlated** subquery?
- What's the difference between a subquery and a JOIN — when would you prefer one over the other? (Often interchangeable; JOINs are usually more efficient for retrieving columns from multiple tables, subqueries are clearer for existence checks/aggregated filters.)
- Can a subquery return more than one column? (Yes, in `FROM`; in `WHERE` with `=` it must return exactly one column and typically one row unless using `IN`/`ANY`/`ALL`.)

### Common Mistakes

- ❌ Using `=` with a subquery that can return multiple rows (causes a runtime error) — use `IN`, `ANY`, or `ALL` instead.
- ❌ Writing a correlated subquery that runs once per outer row, causing severe performance issues on large tables (often a CTE or JOIN is faster — see 3.2).
- ❌ Forgetting to alias derived tables in `FROM` (PostgreSQL requires an alias for subqueries in `FROM`).

## 2.3 CTEs (WITH Clause)

### What is it?

A **CTE (Common Table Expression)** is a named, temporary result set defined using `WITH`, which you can reference like a table within the main query. Think of it as a readable, reusable "named subquery."

### Why is it important?

CTEs dramatically improve readability for complex queries and enable **recursive queries** (e.g., org charts, category trees) that plain subqueries can't do.

### Syntax

```sql
WITH cte_name AS (
  SELECT ...
)
SELECT * FROM cte_name WHERE ...;
```

Multiple CTEs:

```sql
WITH dept_totals AS (
  SELECT department_id, SUM(salary) AS total_salary
  FROM employees GROUP BY department_id
),
high_spenders AS (
  SELECT * FROM dept_totals WHERE total_salary > 150000
)
SELECT * FROM high_spenders;
```

Recursive CTE (e.g., for an org chart / hierarchy):

```sql
WITH RECURSIVE org_chart AS (
  SELECT id, name, manager_id, 1 AS level
  FROM staff WHERE manager_id IS NULL          -- base case: top-level

  UNION ALL

  SELECT s.id, s.name, s.manager_id, oc.level + 1
  FROM staff s
  JOIN org_chart oc ON s.manager_id = oc.id    -- recursive case
)
SELECT * FROM org_chart ORDER BY level;
```

### Example

```sql
WITH dept_avg AS (
  SELECT department_id, AVG(salary) AS avg_sal
  FROM employees
  GROUP BY department_id
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e
JOIN dept_avg d ON e.department_id = d.department_id
WHERE e.salary > d.avg_sal;
```

### MongoDB Comparison

| MongoDB                                                                        | PostgreSQL                                             |
| ------------------------------------------------------------------------------ | ------------------------------------------------------ |
| `$graphLookup` (for recursive/hierarchical data)                               | `WITH RECURSIVE`                                       |
| Breaking a pipeline into named intermediate variables (not natively supported) | Multiple named CTEs, referencing each other            |
| Multiple aggregation pipelines run separately, results merged in code          | A single query with CTEs, computed inside the database |

`$graphLookup` is MongoDB's closest analog to a recursive CTE, used for the same hierarchy-traversal problems.

### Real-world Use Case

- Org charts / employee hierarchy (recursive CTE).
- Category trees in e-commerce (parent-child categories, recursive CTE).
- Breaking a large analytics query into readable named steps (e.g., `monthly_sales` → `growth_rate` → `top_growth_products`).

### Practice Exercises

1. Rewrite the "employees earning above department average" subquery from 2.2 using a CTE instead.
2. Write a CTE that computes total salary per department, then filter for departments spending over 200,000.
3. Build a recursive CTE for a `categories` table with `parent_id`, listing every category with its depth level.

### Interview Questions

- What's the difference between a CTE and a subquery? (CTEs are more readable and reusable within the same query; in older PostgreSQL versions CTEs were also "optimization fences," though modern PostgreSQL — 12+ — inlines them like subqueries in most cases.)
- What is a recursive CTE and what problem does it solve?
- Can a CTE reference another CTE defined above it in the same `WITH` clause? (Yes.)

### Common Mistakes

- ❌ Assuming CTEs are always materialized (cached) — since PostgreSQL 12, non-recursive CTEs are inlined by default unless marked `MATERIALIZED`.
- ❌ Forgetting the `UNION ALL` (not plain `UNION`) requirement structure in recursive CTEs.
- ❌ Writing a recursive CTE with no proper base case / termination condition, causing an infinite loop on cyclic data.

## 2.4 UNION / UNION ALL

### What is it?

`UNION` combines the result sets of two or more `SELECT` queries into one, removing duplicates. `UNION ALL` does the same but **keeps** duplicates (and is faster).

### Why is it important?

Useful for combining similar data from different tables (e.g., archived vs active records) or building reports that stitch together multiple queries.

### Syntax

```sql
SELECT name FROM current_employees
UNION
SELECT name FROM former_employees;

SELECT name FROM current_employees
UNION ALL
SELECT name FROM former_employees;
```

**Rules:** Both queries must have the same number of columns, with compatible types.

### Example

```sql
SELECT 'customer' AS type, name FROM customers
UNION ALL
SELECT 'supplier' AS type, name FROM suppliers
ORDER BY name;
```

**Expected Output:**

```
   type    |   nam--------+----------
 supplier  | Acme Corp
 customer  | Aditi Traders
 ...
```

### MongoDB Comparison

| MongoDB                                              | PostgreSQL                                     |
| ---------------------------------------------------- | ---------------------------------------------- |
| `$unionWith` (aggregation stage)                     | `UNION` / `UNION ALL`                          |
| Merging two collections' results in application code | Merging two `SELECT`s directly in the database |

### Real-world Use Case

- Combining "active" and "archived" orders tables into one report.
- Merging results from two different search strategies (e.g., exact match + fuzzy match) into a single ranked list.
- Building a unified "activity feed" from `posts`, `comments`, and `likes` tables.

### Practice Exercises

1. Create two tables `active_users` and `deleted_users` and combine them with `UNION`.
2. Show the difference in row count between `UNION` and `UNION ALL` when duplicates exist.
3. Use `UNION ALL` with a literal "source" column (like the example above) to tag which table each row came from.

### Interview Questions

- What's the difference between `UNION` and `UNION ALL`, and which is faster? (`UNION ALL` — no deduplication step.)
- What are the requirements for combining two queries with `UNION`? (Same number of columns, compatible types.)
- Can you `ORDER BY` after a `UNION`? (Yes, applies to the combined result — only one `ORDER BY` at the very end.)

### Common Mistakes

- ❌ Using `UNION` by default when duplicates are actually acceptable/expected — wastes performance on unnecessary deduplication.
- ❌ Mismatching column counts or incompatible types between the two `SELECT`s.
- ❌ Forgetting that column _names_ in the output come from the **first** `SELECT` statement only.

## 2.5 EXISTS / NOT EXISTS

### What is it?

`EXISTS` checks whether a subquery returns **any** rows at all — it returns `true`/`false` rather than actual data, and is often more efficient than `IN` for large datasets.

### Why is it important?

`EXISTS` is the idiomatic, high-performance way to check "does a related record exist?" — extremely common in real queries.

### Syntax

```sql
SELECT * FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);

SELECT * FROM customers c
WHERE NOT EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
```

### Example

```sql
-- Departments that have at least one employee
SELECT d.name FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.id);

-- Departments with NO employees
SELECT d.name FROM departments d
WHERE NOT EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.id);
```

### MongoDB Comparison

| MongoDB                                                  | PostgreSQL          |
| -------------------------------------------------------- | ------------------- |
| `$lookup` + checking if the resulting array is non-empty | `EXISTS` (subquery) |
| No direct equivalent — usually requires post-processing  | `NOT EXISTS`        |

### Real-world Use Case

- "Customers who have never placed an order" → `NOT EXISTS`.
- "Products that have at least one review" → `EXISTS`.
- Often outperforms `IN` for large subquery result sets because the database can short-circuit as soon as one match is found.

### Practice Exercises

1. Find all departments that have at least one employee using `EXISTS`.
2. Find all customers who have never placed an order using `NOT EXISTS`.
3. Compare `EXISTS` vs `IN` for the same logical query — write both versions.

### Interview Questions

- What's the difference between `EXISTS` and `IN`?
- Why is `EXISTS` often preferred over `IN` for correlated checks against large tables?
- Does the subquery inside `EXISTS` need to select specific columns? (No — `SELECT 1` or `SELECT *` behave identically; only row _existence_ matters.)

### Common Mistakes

- ❌ Selecting actual columns inside `EXISTS` thinking it matters for performance (it doesn't — the optimizer ignores the select list).
- ❌ Using `NOT IN` instead of `NOT EXISTS` when the subquery could contain `NULL`s — `NOT IN` silently breaks with `NULL`s (see 1.6), `NOT EXISTS` doesn't have this problem.
- ❌ Forgetting the correlation condition (`WHERE o.customer_id = c.id`) — without it, `EXISTS` just checks if the subquery table has _any_ rows at all.

## 2.6 CASE Expressions

### What is it?

`CASE` is SQL's conditional expression — like an `if/else if/else` chain, usable inside `SELECT`, `WHERE`, `ORDER BY`, and `GROUP BY`.

### Why is it important?

Lets you compute derived/categorized values directly in SQL instead of pulling raw data and doing conditional logic in application code.

### Syntax

```sql
SELECT name, salary,
  CASE
    WHEN salary >= 80000 THEN 'Senior'
    WHEN salary >= 50000 THEN 'Mid'
    ELSE 'Junior'
  END AS salary_band
FROM employees;
```

Simple form (equality checks only):

```sql
SELECT name,
  CASE department_id
    WHEN 1 THEN 'Engineering'
    WHEN 2 THEN 'Sales'
    ELSE 'Other'
  END AS department_name
FROM employees;
```

### Example

```sql
SELECT
  CASE WHEN salary >= 70000 THEN 'High' ELSE 'Normal' END AS band,
  COUNT(*) AS num_employees
FROM employees
GROUP BY band;
```

**Expected Output:**

```
  band  | num_employee-----+---------------
 High   |             2
 Normal |             2
```

### MongoDB Comparison

| MongoDB                        | PostgreSQL                            |
| ------------------------------ | ------------------------------------- |
| `$cond` (aggregation operator) | `CASE WHEN ... THEN ... ELSE ... END` |
| `$switch`                      | `CASE` with multiple `WHEN` branches  |

### Real-world Use Case

- Categorizing customers into tiers (Bronze/Silver/Gold) based on spend.
- Building pivot-style reports (e.g., counting orders per status in separate columns).
- Translating status codes (`1`, `2`, `3`) into human-readable labels directly in a query.

### Practice Exercises

1. Add a `CASE`-based `salary_band` column (Junior/Mid/Senior) to your employees query.
2. Use `CASE` inside `GROUP BY` to count employees per salary band.
3. Build a "pivot" query counting orders by status (`pending`, `shipped`, `cancelled`) as separate columns using `CASE` + `SUM`.

### Interview Questions

- What's the difference between the "simple" and "searched" forms of `CASE`?
- Can `CASE` be used in a `WHERE` clause? (Yes.) In `ORDER BY`? (Yes — useful for custom sort orders.)
- How would you build a pivot table using `CASE`?

### Common Mistakes

- ❌ Forgetting the `ELSE` branch — without it, non-matching rows return `NULL` rather than erroring, which can be a silent bug.
- ❌ Writing overly complex nested `CASE` statements instead of splitting logic into a CTE or view.
- ❌ Forgetting that `CASE` conditions are evaluated **top to bottom** — order matters when ranges overlap.

## 2.7 Window Functions

### What is it?

**Window functions** perform calculations across a set of rows _related to the current row_ — without collapsing them into a single output row like `GROUP BY` does. They "look through a window" of rows.

### Why is it important?

Window functions are essential for rankings, running totals, moving averages, and comparing a row to its neighbors — extremely common in analytics and heavily tested in senior-level interviews.

### Syntax

```sql
function_name() OVER (
  [PARTITION BY column]
  [ORDER BY column]
  [ROWS/RANGE BETWEEN ... AND ...]
)
```

Common window functions:
| Function | Purpose |
|---|---|
| `ROW_NUMBER()` | Unique sequential number per row |
| `RANK()` | Rank with gaps after ties (1,1,3) |
| `DENSE_RANK()` | Rank without gaps after ties (1,1,2) |
| `NTILE(n)` | Divide rows into n buckets |
| `LAG(col)` / `LEAD(col)` | Previous / next row's value |
| `SUM()`/`AVG()` OVER (...) | Running totals / moving averages |
| `FIRST_VALUE()` / `LAST_VALUE()` | First/last value in the window |

### Example

```sql
-- Rank employees by salary within each department
SELECT
  name, department_id, salary,
  RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dept_rank
FROM employees;
```

**Expected Output:**

```
 name  | department_id | salary | dept_ran----+---------------+--------+-----------
 Aditi |             1 |  75000 |         1
 Rahul |             1 |  60000 |         2
 Priya |             2 |  82000 |         1
```

```sql
-- Running total of salary payouts, ordered by hire date
SELECT
  name, hired_at, salary,
  SUM(salary) OVER (ORDER BY hired_at) AS running_total
FROM employees;

-- Compare each employee's salary to the previous hire's salary
SELECT name, salary,
  LAG(salary) OVER (ORDER BY hired_at) AS previous_hire_salary
FROM employees;
```

### MongoDB Comparison

| MongoDB                                         | PostgreSQL                    |
| ----------------------------------------------- | ----------------------------- |
| `$setWindowFields` (available in MongoDB 5.0+)  | `OVER (...)` window functions |
| `$rank`, `$denseRank` inside `$setWindowFields` | `RANK()`, `DENSE_RANK()`      |
| `$shift` (for previous/next document)           | `LAG()` / `LEAD()`            |

MongoDB added window-function-like capability fairly recently (`$setWindowFields`); SQL window functions have existed for decades and remain more mature and widely used.

### Real-world Use Case

- **Leaderboards**: `RANK()` for top players/salespeople.
- **"Top N per group"**: e.g., top 3 highest-paid employees per department (using `ROW_NUMBER()` + filtering in an outer query).
- **Analytics dashboards**: running revenue totals, month-over-month comparisons using `LAG()`.
- **Pagination cursors**: `ROW_NUMBER()` for stable ordering.

### Practice Exercises

1. Rank employees by salary company-wide using `RANK()` and `DENSE_RANK()` — compare the outputs when there are ties.
2. Find the top 2 highest-paid employees **per department** (hint: wrap `ROW_NUMBER()` in a CTE, then filter `WHERE row_num <= 2` in the outer query).
3. Compute a running total of salaries ordered by hire date.
4. Use `LAG()` to show the salary difference between each employee and the previously-hired employee.

### Interview Questions

- What's the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`?
- What's the difference between `GROUP BY` and a window function's `PARTITION BY`? (`GROUP BY` collapses rows into one per group; `PARTITION BY` keeps all rows but computes the value across the group.)
- How would you get the "top N rows per group" using a window function? (Very common interview question — know this pattern cold.)
- Can you use a window function's result directly in `WHERE`? (No — must wrap it in a subquery/CTE and filter in the outer query, since window functions execute after `WHERE`.)

### Common Mistakes

- ❌ Trying to filter directly on a window function in `WHERE` (not allowed — window functions run after `WHERE`/`GROUP BY`, need an outer query).
- ❌ Confusing `PARTITION BY` (window functions) with `GROUP BY` (aggregate collapsing) — they solve different problems.
- ❌ Forgetting `ORDER BY` inside `OVER()` when using `RANK()`/`LAG()`/running totals — without it, results are non-deterministic or all-zero cumulative sums.

## 2.8 Database Relationships

### What is it?

Relationships describe how rows in one table connect to rows in another:

- **One-to-One (1:1)** — one row relates to exactly one row elsewhere (e.g., `users` ↔ `user_profiles`)
- **One-to-Many (1:N)** — one row relates to many rows elsewhere (e.g., `departments` → `employees`)
- **Many-to-Many (M:N)** — many rows relate to many rows, via a **junction/join table** (e.g., `students` ↔ `courses`)

### Why is it important?

Correctly identifying relationship type is the foundation of database design — get this wrong and your whole schema becomes awkward or incorrect.

### Syntax

```sql
-- ONE-TO-ONE
CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT);
CREATE TABLE user_profiles (
  user_id INTEGER PRIMARY KEY REFERENCES users(id), -- PK = FK enforces 1:1
  bio TEXT
);

-- ONE-TO-MANY
CREATE TABLE departments (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  department_id INTEGER REFERENCES departments(id) -- FK on the "many" side
);

-- MANY-TO-MANY (via junction table)
CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE courses (id SERIAL PRIMARY KEY, title TEXT);
CREATE TABLE enrollments (
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  enrolled_at DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY (student_id, course_id)  -- composite PK prevents duplicate enrollment
);
```

### Example

```sql
-- Query the many-to-many relationship: which courses is each student in?
SELECT s.name, c.title
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
ORDER BY s.name;
```

### MongoDB Comparison

| Relationship          | MongoDB Approach                               | PostgreSQL Approach                                                |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| One-to-One            | Embed directly in the same document            | Separate table with PK=FK, or just extra columns on the same table |
| One-to-Many (small N) | Embed as an array in the parent document       | Separate table with a FK on the "many" side                        |
| One-to-Many (large N) | Reference by ID (avoid huge embedded arrays)   | Same FK approach — scales naturally either way                     |
| Many-to-Many          | Array of ObjectIds on both sides, or `$lookup` | Junction/join table with two FKs                                   |

The **many-to-many junction table** pattern is one of the biggest new concepts for MongoDB developers — MongoDB has no equivalent structural requirement.

### Real-world Use Case

- 1:1 → `users` and `user_settings` (kept separate for security/performance reasons).
- 1:N → `authors` and `books`, `customers` and `orders`.
- M:N → `students`/`courses`, `posts`/`tags`, `users`/`roles` (RBAC systems).

### Practice Exercises

1. Design tables for "Doctors" and "Patients" where each patient has one primary doctor, but a doctor can have many patients (1:N).
2. Design a many-to-many relationship between `products` and `tags`, including the junction table.
3. Query: for a given student, list all their enrolled courses' titles.

### Interview Questions

- How do you implement a many-to-many relationship in SQL? (Junction table with two FKs, often with a composite PK.)
- How would you enforce a true one-to-one relationship at the database level? (`UNIQUE` or `PRIMARY KEY` on the foreign key column.)
- What additional data might a junction table hold besides the two foreign keys? (e.g., `enrolled_at`, `role`, `quantity` — junction tables often carry their own attributes.)

### Common Mistakes

- ❌ Forgetting the composite primary key (or unique constraint) on a junction table, allowing duplicate enrollments/relationships.
- ❌ Modeling a 1:N relationship backwards (putting the FK on the wrong side).
- ❌ Using a many-to-many junction table for what's actually a simple 1:N relationship (over-engineering).

## 2.9 Normalization & Denormalization

### What is it?

**Normalization** is the process of organizing tables to reduce data redundancy and improve integrity, following a series of "normal forms" (1NF, 2NF, 3NF, ...). **Denormalization** intentionally introduces redundancy (duplicated data) to optimize read performance, trading some integrity/storage for speed.

### Why is it important?

Understanding normalization is core database design theory tested in almost every SQL interview, and knowing _when to denormalize_ is a mark of a senior engineer.

### Syntax / Normal Forms (conceptual)

**1NF (First Normal Form):** Each column holds atomic (indivisible) values; no repeating groups.

```sql
-- BAD (violates 1NF): comma-separated values in one column
-- phone_numbers: "9999999999, 8888888888"

-- GOOD: separate rows/table
CREATE TABLE employee_phones (employee_id INT, phone TEXT);
```

**2NF:** Must be in 1NF + every non-key column depends on the **entire** primary key (only matters with composite keys).

```sql
-- BAD: order_date depends only on order_id, not on the full (order_id, product_id) key
CREATE TABLE order_items (order_id INT, product_id INT, order_date DATE, quantity INT);

-- GOOD: move order_date to the orders table
CREATE TABLE orders (id INT PRIMARY KEY, order_date DATE);
CREATE TABLE order_items (order_id INT, product_id INT, quantity INT);
```

**3NF:** Must be in 2NF + no column depends on another **non-key** column (no transitive dependency).

```sql
-- BAD: department_name depends on department_id, not directly on employee id
CREATE TABLE employees (id INT PRIMARY KEY, department_id INT, department_name TEXT);

-- GOOD: separate the department info
CREATE TABLE departments (id INT PRIMARY KEY, name TEXT);
CREATE TABLE employees (id INT PRIMARY KEY, department_id INT REFERENCES departments(id));
```

**Denormalization example (intentional redundancy for speed):**

```sql
-- Storing a denormalized "total_amount" on orders to avoid recalculating from order_items every read
ALTER TABLE orders ADD COLUMN total_amount NUMERIC(10,2);
-- Trade-off: must keep it in sync via app logic, a trigger, or a scheduled job
```

### MongoDB Comparison

| MongoDB                                                                        | PostgreSQL                                                                |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Embedding = denormalization by default (data is duplicated across documents)   | Normalization is the default; you _opt into_ denormalization deliberately |
| Great read performance for embedded, rarely-changing data                      | Great write integrity by default; denormalize case-by-case for read speed |
| Risk: update anomalies if duplicated data changes (must update every document) | Normalized data has a single source of truth — update once                |

MongoDB developers often _over-embed_ out of habit — bringing SQL discipline (normalize first, denormalize deliberately with a clear reason) is a valuable mindset shift.

### Real-world Use Case

- Normalize `customers`/`orders`/`order_items` for billing accuracy.
- Denormalize a `product_name` snapshot onto `order_items` (so historical orders still show the product name even if the product is later renamed or deleted) — a very common, justified denormalization.
- Denormalize aggregate counters (`posts.comment_count`) to avoid expensive `COUNT()` queries on every page load.

### Practice Exercises

1. Take a table with a comma-separated `tags` column and redesign it into 1NF.
2. Identify a 2NF violation in a hypothetical `order_items(order_id, product_id, customer_name, quantity)` table and fix it.
3. Describe one real scenario where you would deliberately denormalize, and explain the trade-off.

### Interview Questions

- What are 1NF, 2NF, and 3NF? Give an example of each violation.
- What is denormalization and when would you use it?
- What's a "transitive dependency" and why does 3NF eliminate it?
- Is a fully normalized database always the best design? (No — over-normalization can hurt read performance; real systems balance both.)

### Common Mistakes

- ❌ Normalizing everything to the extreme (over-normalization), causing excessive JOINs and slow reads for simple queries.
- ❌ Denormalizing without a plan to keep duplicated data in sync (leads to inconsistent data over time).
- ❌ Confusing normalization (a design process) with "normal" database structure — many production systems intentionally denormalize hot paths.

## 2.10 Database Design & ER Diagrams

### What is it?

**Entity-Relationship (ER) modeling** is the process of identifying entities (things, → tables), their attributes (→ columns), and relationships (→ foreign keys / junction tables) _before_ writing `CREATE TABLE` statements.

### Why is it important?

Good schema design upfront prevents painful migrations later. This is also a common **whiteboard/verbal interview exercise** ("design a database for X").

### Syntax (ER Diagram Notation — conceptual)

```
[Customer] --1---N-- [Order] --1---N-- [OrderItem] --N---1-- [Product]

Customer(id PK, name, email)
Order(id PK, customer_id FK, order_date, status)
OrderItem(id PK, order_id FK, product_id FK, quantity, price_at_purchase)
Product(id PK, name, price, stock)
```

**Crow's foot notation cheat sheet:**

```
||--o{   = one and only one  --- zero or many
||--||   = one and only one --- one and only one
}o--o{   = zero or many --- zero or many
```

### Example — Design Process for a Blog

1. **Identify entities**: User, Post, Comment, Tag.
2. **Identify attributes**: User(id, username, email); Post(id, title, body, user_id, created_at); Comment(id, post_id, user_id, body); Tag(id, name).
3. **Identify relationships**: User 1—N Post; Post 1—N Comment; Post M—N Tag (via `post_tags` junction table).
4. **Translate to SQL:**

```sql
CREATE TABLE users (id SERIAL PRIMARY KEY, username TEXT UNIQUE, email TEXT UNIQUE);
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id),
  body TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE tags (id SERIAL PRIMARY KEY, name TEXT UNIQUE);
CREATE TABLE post_tags (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
```

### MongoDB Comparison

| MongoDB Design Thinking                  | SQL Design Thinking                                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| "What will I query together?" → embed it | "What _is_ the data, and how is it related?" → normalize first                                          |
| Schema evolves organically per document  | Schema is designed upfront (though `ALTER TABLE` allows evolution)                                      |
| Fewer, richer documents                  | More, smaller, focused tables                                                                           |
| Design driven by access patterns         | Design driven by entities/relationships, then optimized for access patterns via indexes/denormalization |

### Real-world Use Case

Every production backend starts with this exact process — a whiteboard session identifying entities and relationships before any code is written. Tools like **dbdiagram.io**, **drawSQL**, or **Lucidchart** are commonly used to visualize ER diagrams before implementation.

### Practice Exercises

1. Design an ER diagram (on paper or dbdiagram.io) for a "Library Management System" — Books, Authors, Members, Loans.
2. Identify all relationship types (1:1, 1:N, M:N) in your design.
3. Convert your ER diagram into actual `CREATE TABLE` SQL statements with appropriate constraints.

### Interview Questions

- Walk me through how you'd design a database for [X] (a very common live-coding/whiteboard question).
- What's the difference between a logical data model and a physical data model?
- How do you decide between a `SERIAL` and `UUID` primary key in your design? (UUIDs avoid predictable/sequential IDs and work well in distributed systems; `SERIAL`/`BIGSERIAL` is simpler and more index-friendly for single-database apps.)

### Common Mistakes

- ❌ Jumping straight to `CREATE TABLE` without identifying relationships first — leads to redesigns mid-project.
- ❌ Not planning for future growth (e.g., hardcoding a 1:1 relationship that will likely become 1:N).
- ❌ Ignoring `ON DELETE`/`ON UPDATE` behavior during design — leads to orphaned data or accidental cascading deletes discovered too late.

## ✅ Part 2 Checklist

- [ ] JOINs (INNER, LEFT, RIGHT, FULL, CROSS, SELF)
- [ ] Subqueries
- [ ] CTEs (including recursive)
- [ ] UNION / UNION ALL
- [ ] EXISTS / NOT EXISTS
- [ ] CASE Expressions
- [ ] Window Functions
- [ ] Database Relationships (1:1, 1:N, M:N)
- [ ] Normalization & Denormalization
- [ ] Database Design & ER Diagrams

# Part 3 — Advanced

## 3.1 Indexes

### What is it?

An **index** is a separate data structure (usually a B-tree) that lets the database find rows quickly without scanning the entire table — like an index at the back of a book.

### Why is it important?

Indexes are the #1 lever for query performance. A missing index is the most common cause of "why is my query slow" in production and interviews alike.

### Syntax

```sql
CREATE INDEX idx_employees_department_id ON employees(department_id);
CREATE UNIQUE INDEX idx_employees_email ON employees(email);
CREATE INDEX idx_employees_dept_salary ON employees(department_id, salary); -- composite index
DROP INDEX idx_employees_department_id;
```

Index types in PostgreSQL:
| Type | Best for |
|---|---|
| `B-tree` (default) | Equality and range queries (`=`, `<`, `>`, `BETWEEN`) — 90% of cases |
| `Hash` | Equality only (`=`), rarely used over B-tree |
| `GIN` | Full-text search, `JSONB`, array containment |
| `GiST` | Geometric data, full-text search |
| `BRIN` | Very large, naturally ordered tables (e.g., time-series logs) |

### Example

```sql
-- Without an index: PostgreSQL scans every row (Sequential Scan)
EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 2;

-- After creating an index:
CREATE INDEX idx_dept ON employees(department_id);
EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 2;
-- Now uses an Index Scan — much faster on large tables
```

### MongoDB Comparison

| MongoDB                                   | PostgreSQL                                        |
| ----------------------------------------- | ------------------------------------------------- |
| `db.collection.createIndex({ field: 1 })` | `CREATE INDEX ON table(column)`                   |
| Compound index                            | Composite (multi-column) index                    |
| Unique index                              | `CREATE UNIQUE INDEX`                             |
| Text index                                | `GIN` index with `to_tsvector` (full-text search) |
| `explain()`                               | `EXPLAIN` / `EXPLAIN ANALYZE`                     |

The concepts transfer almost directly — if you understand MongoDB indexing, you already understand 80% of SQL indexing.

### Real-world Use Case

- Index every foreign key column used in JOINs (PostgreSQL does **not** auto-index them, unlike primary keys).
- Index columns frequently used in `WHERE`, `ORDER BY`, and `JOIN ... ON`.
- Composite index on `(customer_id, created_at)` to speed up "recent orders for this customer" queries.

### Practice Exercises

1. Create a table with 10,000+ dummy rows (use `generate_series`), then compare query time with and without an index on a filtered column.
2. Create a composite index and observe how column _order_ in the index affects which queries can use it.
3. Use `\di` in `psql` to list all indexes on a table.

### Interview Questions

- What is an index and how does it improve query speed?
- What's the trade-off of adding an index? (Faster reads, but slower writes/updates and extra storage — every `INSERT`/`UPDATE` must also update the index.)
- What is a composite index, and does column order matter? (Yes — a composite index on `(a, b)` can serve queries filtering on `a` alone or `a AND b`, but not efficiently on `b` alone.)
- Does PostgreSQL automatically index foreign keys? (No! Only primary keys are auto-indexed — a very common interview "gotcha.")

### Common Mistakes

- ❌ Assuming foreign keys are automatically indexed (they're not in PostgreSQL — you must create the index yourself).
- ❌ Over-indexing every column "just in case," which slows down writes significantly.
- ❌ Creating an index but still not seeing it used, often because of a function wrapped around the column (`WHERE LOWER(name) = ...` needs a matching _expression_ index) or a type mismatch.

## 3.2 Query Optimization

### What is it?

The practice of writing and structuring SQL so that PostgreSQL's query planner can execute it as efficiently as possible.

### Why is it important?

Slow queries are the #1 cause of production incidents in database-backed applications. Optimization skills separate junior from senior backend engineers.

### Syntax / Key Techniques

```sql
-- 1. Select only needed columns
SELECT id, name FROM employees; -- not SELECT *

-- 2. Filter early with indexed columns
SELECT * FROM employees WHERE department_id = 2; -- indexed column

-- 3. Avoid functions on indexed columns in WHERE
-- BAD: index on `email` can't be used
SELECT * FROM users WHERE LOWER(email) = 'test@x.com';
-- GOOD: use an expression index, or store normalized data
CREATE INDEX idx_lower_email ON users (LOWER(email));

-- 4. Prefer JOIN over correlated subquery when retrieving columns
-- 5. Use LIMIT when you don't need all rows
-- 6. Batch large INSERTs/UPDATEs instead of row-by-row loops
```

### Example

```sql
-- SLOW: correlated subquery re-executed per row
SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.id) AS order_count
FROM customers c;

-- FASTER: single JOIN + GROUP BY
SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.id, c.name;
```

### MongoDB Comparison

| MongoDB                                           | PostgreSQL                                        |
| ------------------------------------------------- | ------------------------------------------------- |
| `.explain("executionStats")`                      | `EXPLAIN ANALYZE`                                 |
| Avoiding `$lookup` on large unindexed collections | Avoiding JOINs on unindexed foreign keys          |
| Projection to limit returned fields               | `SELECT` only needed columns                      |
| Sharding for horizontal scale                     | Partitioning / read replicas for horizontal scale |

### Real-world Use Case

Optimizing a slow "dashboard" query that joins 5 tables and aggregates millions of rows is one of the most common real-world backend performance tasks — usually solved with indexes, denormalization, materialized views (3.8), or caching.

### Practice Exercises

1. Take a query using `SELECT *` and rewrite it to select only necessary columns.
2. Rewrite a correlated subquery as an equivalent JOIN + GROUP BY.
3. Identify (using `EXPLAIN ANALYZE`) whether a query is doing a Sequential Scan when an Index Scan would be faster.

### Interview Questions

- What are common causes of a slow SQL query?
- How would you debug a slow-running query in production?
- What's the difference between vertical and horizontal scaling for databases?
- What is "N+1 query problem" and how do you avoid it? (Very common — looping and running one query per row instead of a single JOIN/batched query; solved with JOINs, `IN (...)`, or ORM eager-loading.)

### Common Mistakes

- ❌ Optimizing queries before measuring (always profile with `EXPLAIN ANALYZE` first — don't guess).
- ❌ The N+1 query problem — extremely common when using ORMs carelessly (see 4.5).
- ❌ Adding indexes as a blanket fix without checking if they're actually used by the query planner.

## 3.3 EXPLAIN / EXPLAIN ANALYZE

### What is it?

`EXPLAIN` shows the **query execution plan** PostgreSQL _would_ use (without running it). `EXPLAIN ANALYZE` actually **runs** the query and shows real timing and row counts alongside the plan.

### Why is it important?

This is your primary diagnostic tool for understanding and fixing slow queries — essential for any real optimization work.

### Syntax

```sql
EXPLAIN SELECT * FROM employees WHERE department_id = 2;
EXPLAIN ANALYZE SELECT * FROM employees WHERE department_id = 2;
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) SELECT ...;
```

### Example

```sql
EXPLAIN ANALYZE
SELECT e.name, d.name FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE d.name = 'Engineering';
```

**Expected Output (simplified):**

```
Hash Join  (cost=1.09..25.50 rows=120 width=64) (actual time=0.045..0.312 rows=118 loops=1)
  Hash Cond: (e.department_id = d.id)
  ->  Seq Scan on employees e  (cost=0.00..20.00 rows=1000 width=36) (actual time=0.010..0.150 rows=1000 loops=1)
  ->  Hash  (cost=1.05..1.05 rows=1 width=36) (actual time=0.020..0.020 rows=1 loops=1)
        ->  Seq Scan on departments d  (cost=0.00..1.05 rows=1 width=36)
              Filter: (name = 'Engineering'::text)
Planning Time: 0.150 ms
Execution Time: 0.400 ms
```

**How to read it:**

- `Seq Scan` = full table scan (slow on big tables; fine on small ones).
- `Index Scan` / `Index Only Scan` = uses an index (fast for selective queries).
- `cost=X..Y` = planner's _estimated_ startup and total cost (arbitrary units, for comparison only).
- `actual time=X..Y rows=N` = real measured time and row count (only with `ANALYZE`).
- Read the plan **bottom-up** — innermost operations execute first.

### MongoDB Comparison

| MongoDB                      | PostgreSQL        |
| ---------------------------- | ----------------- |
| `.explain()`                 | `EXPLAIN`         |
| `.explain("executionStats")` | `EXPLAIN ANALYZE` |
| `COLLSCAN` (collection scan) | `Seq Scan`        |
| `IXSCAN` (index scan)        | `Index Scan`      |

### Real-world Use Case

Every performance investigation starts with `EXPLAIN ANALYZE` — checking whether a query is doing an unnecessary sequential scan, a bad join order, or missing an index.

### Practice Exercises

1. Run `EXPLAIN ANALYZE` on a query before and after adding an index — compare `Seq Scan` vs `Index Scan` and the timing difference.
2. Find a query in your practice database doing a `Seq Scan` on a large table and fix it.
3. Explain, in your own words, the difference between "estimated cost" and "actual time" in the output.

### Interview Questions

- What's the difference between `EXPLAIN` and `EXPLAIN ANALYZE`?
- What does a "Seq Scan" in the plan tell you, and is it always bad? (Not always — for small tables, a sequential scan can be faster than using an index.)
- How do you identify the slowest part of a multi-join query plan? (Look for the operation with the largest `actual time` delta and highest row counts flowing through it.)

### Common Mistakes

- ❌ Running `EXPLAIN ANALYZE` on `INSERT`/`UPDATE`/`DELETE` in production without wrapping in a transaction you roll back — it actually executes the statement!
- ❌ Only looking at "cost" numbers and ignoring "actual time" (cost is an estimate; actual time is ground truth).
- ❌ Assuming `Seq Scan` always means "bad" — for small tables or queries returning most of the rows anyway, it's often the correct choice.

## 3.4 Transactions

### What is it?

A **transaction** groups multiple SQL statements into a single all-or-nothing unit of work — either all statements succeed (`COMMIT`) or none do (`ROLLBACK`).

### Why is it important?

Transactions are what make SQL databases trustworthy for things like money transfers, inventory management, and any multi-step operation that must never be left half-done.

### Syntax

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;

-- If something goes wrong:
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  -- oops, something failed
ROLLBACK;

-- Partial rollback with SAVEPOINT
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  SAVEPOINT before_second_update;
  UPDATE accounts SET balance = balance + 500 WHERE id = 999; -- wrong id!
  ROLLBACK TO before_second_update;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2; -- corrected
COMMIT;
```

### Example

The classic **bank transfer** example — this MUST be atomic:

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1; -- debit
  UPDATE accounts SET balance = balance + 500 WHERE id = 2; -- credit
COMMIT;
```

If the app crashes between the two `UPDATE`s without a transaction, money vanishes. With a transaction, PostgreSQL guarantees both happen or neither does.

### MongoDB Comparison

| MongoDB                                                                  | PostgreSQL                                                                                    |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Single-document writes are atomic by default                             | Single-statement writes are atomic by default                                                 |
| Multi-document transactions (available since MongoDB 4.0, more overhead) | Multi-statement transactions (`BEGIN`/`COMMIT`) — a core, lightweight feature since inception |
| `session.startTransaction()` / `session.commitTransaction()`             | `BEGIN` / `COMMIT`                                                                            |
| Transactions are a relatively newer, heavier addition                    | Transactions are foundational and highly optimized                                            |

This is a major mindset shift: in MongoDB, you're often taught to _avoid_ needing multi-document transactions by embedding related data; in SQL, multi-table transactions are cheap and idiomatic.

### Real-world Use Case

- Bank transfers, order checkout (deduct stock + create order + charge payment — all or nothing).
- Any operation touching multiple tables that must remain consistent.

### Practice Exercises

1. Simulate a bank transfer between two rows in a table, wrapped in a transaction.
2. Intentionally cause an error mid-transaction and confirm `ROLLBACK` reverts everything.
3. Use a `SAVEPOINT` to roll back only part of a transaction while keeping earlier changes.

### Interview Questions

- What is a transaction and why is it important?
- What's the difference between `COMMIT` and `ROLLBACK`?
- What is a `SAVEPOINT`?
- What happens if your application crashes in the middle of a transaction before `COMMIT`? (PostgreSQL automatically rolls it back — nothing is persisted.)

### Common Mistakes

- ❌ Forgetting to `COMMIT` (leaves the transaction open, potentially holding locks — see 3.7).
- ❌ Wrapping read-only queries in unnecessary transactions, adding overhead for no benefit.
- ❌ Long-running transactions in production holding locks and blocking other queries.

## 3.5 ACID Properties

### What is it?

**ACID** describes the guarantees a transactional database makes:

- **A**tomicity — all-or-nothing (covered above).
- **C**onsistency — the database moves from one valid state to another, never violating constraints.
- **I**solation — concurrent transactions don't interfere with each other (see 3.6).
- **D**urability — once committed, data survives crashes/power loss.

### Why is it important?

ACID is _the_ theoretical foundation SQL databases are built on, and one of the most commonly asked conceptual interview topics.

### Syntax

N/A (conceptual) — but each letter maps to a real mechanism:

```
Atomicity   → BEGIN / COMMIT / ROLLBACK
Consistency → Constraints (PK, FK, CHECK, NOT NULL, UNIQUE)
Isolation   → Isolation levels + locks (MVCC in PostgreSQL)
Durability  → Write-Ahead Logging (WAL) to disk before confirming COMMIT
```

### Example

```sql
-- Consistency in action: this transaction is REJECTED, not partially applied,
-- because it would violate a CHECK constraint
BEGIN;
  INSERT INTO products (name, price) VALUES ('Bad Product', -50); -- CHECK (price > 0) fails
COMMIT;
-- Result: ERROR — the entire transaction is aborted, nothing is inserted
```

### MongoDB Comparison

| Property    | MongoDB (single doc)                 | MongoDB (multi-doc txn) | PostgreSQL                  |
| ----------- | ------------------------------------ | ----------------------- | --------------------------- |
| Atomicity   | ✅ built-in                          | ✅ (with transactions)  | ✅ built-in                 |
| Consistency | Limited (schema validation optional) | ✅                      | ✅ enforced via constraints |
| Isolation   | N/A (single doc)                     | ✅ configurable         | ✅ configurable (see 3.6)   |
| Durability  | ✅ (with write concern `majority`)   | ✅                      | ✅ (WAL)                    |

MongoDB achieves similar guarantees for single-document operations natively, and full ACID for multi-document transactions since v4.0 — but SQL databases have offered full multi-row/multi-table ACID transactions since the beginning, with generally lower overhead.

### Real-world Use Case

Every financial, inventory, or booking system relies on ACID guarantees to prevent double-spending, overselling, or lost updates.

### Practice Exercises

1. Explain, in your own words, what would go wrong in a bank transfer system without each of the four ACID properties.
2. Test "Consistency": try to insert data violating a `CHECK` constraint inside a transaction and observe the entire transaction fails.
3. Research: how does PostgreSQL achieve durability? (Write-Ahead Logging / WAL — briefly read about it.)

### Interview Questions

- What does ACID stand for and what does each letter guarantee?
- Give a real-world example where violating each property would cause a problem.
- Does MongoDB support ACID transactions? (Yes, since 4.0 for multi-document; always atomic for single-document ops.)

### Common Mistakes

- ❌ Confusing "Consistency" in ACID with "Consistency" in the CAP theorem — they are related but distinct concepts (ACID consistency = valid data per constraints; CAP consistency = all nodes see the same data at the same time).
- ❌ Assuming ACID means "the database is always perfectly fast" — ACID guarantees correctness, not speed; there are real performance trade-offs.
- ❌ Thinking Durability means data can never be lost under any circumstance (it protects against crashes/power loss for _committed_ data — hardware failure/disk corruption still requires backups).

## 3.6 Isolation Levels

### What is it?

**Isolation levels** control how much one transaction can "see" of another transaction's in-progress (uncommitted) changes, balancing correctness against concurrency performance.

### Why is it important?

Choosing the wrong isolation level can cause subtle bugs (double bookings, lost updates) that only appear under real concurrent load — a classic senior-level interview and real-world topic.

### Syntax

```sql
BEGIN ISOLATION LEVEL READ COMMITTED;   -- PostgreSQL's default
BEGIN ISOLATION LEVEL REPEATABLE READ;
BEGIN ISOLATION LEVEL SERIALIZABLE;
-- (READ UNCOMMITTED is accepted but PostgreSQL treats it identically to READ COMMITTED)
```

PostgreSQL's 3 effective isolation levels and the anomalies they prevent:

| Isolation Level          | Dirty Read | Non-Repeatable Read | Phantom Read |
| ------------------------ | ---------- | ------------------- | ------------ |
| Read Committed (default) | Prevented  | ❌ Possible         | ❌ Possible  |
| Repeatable Read          | Prevented  | Prevented           | Prevented\*  |
| Serializable             | Prevented  | Prevented           | Prevented    |

\*PostgreSQL's Repeatable Read is stricter than the SQL standard requires and also prevents phantom reads via MVCC snapshots.

**Anomaly definitions:**

- **Dirty Read** — reading another transaction's _uncommitted_ changes.
- **Non-Repeatable Read** — re-reading the same row twice in one transaction gives different results because another transaction committed a change in between.
- **Phantom Read** — re-running the same query twice returns a different _set of rows_ because another transaction inserted/deleted matching rows.

### Example

```sql
-- Session A
BEGIN ISOLATION LEVEL REPEATABLE READ;
SELECT balance FROM accounts WHERE id = 1; -- sees 1000

-- Session B (runs concurrently, commits before Session A finishes)
UPDATE accounts SET balance = 500 WHERE id = 1;
COMMIT;

-- Back in Session A (same transaction):
SELECT balance FROM accounts WHERE id = 1; -- STILL sees 1000 (repeatable read snapshot)
COMMIT;
```

### MongoDB Comparison

| MongoDB                                       | PostgreSQL                                                             |
| --------------------------------------------- | ---------------------------------------------------------------------- |
| Read concern `local`/`majority`/`snapshot`    | Isolation levels (`READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`) |
| Write concern (`w: 1`, `w: majority`)         | Durability handled via WAL + `synchronous_commit`                      |
| Snapshot isolation for multi-doc transactions | `REPEATABLE READ` / `SERIALIZABLE` provide snapshot-style isolation    |

### Real-world Use Case

- **E-commerce inventory**: `SERIALIZABLE` (or explicit row locking) prevents two customers from both "successfully" buying the last item in stock.
- **Reporting queries**: `REPEATABLE READ` ensures a report doesn't see inconsistent data mid-generation.
- **Most everyday CRUD**: `READ COMMITTED` (the default) is sufficient and has the best performance.

### Practice Exercises

1. Open two `psql` sessions. In session A, `BEGIN` a transaction and `SELECT` a row. In session B, update and commit that row. Back in session A, `SELECT` again under `READ COMMITTED` vs `REPEATABLE READ` and compare results.
2. Research and explain what a "phantom read" looks like with a concrete two-session example.
3. Decide which isolation level you'd use for a seat-booking system, and justify it.

### Interview Questions

- What are the four classic transaction isolation levels defined by the SQL standard?
- What's PostgreSQL's default isolation level? (`READ COMMITTED`.)
- What is a "dirty read" and can it happen in PostgreSQL? (No — PostgreSQL never allows dirty reads, even at its most permissive level, due to MVCC.)
- What's the trade-off of using `SERIALIZABLE`? (Strongest guarantees, but higher chance of transaction failures/retries under contention.)

### Common Mistakes

- ❌ Always using the strictest isolation level "to be safe" — hurts performance and causes more transaction retries/failures than necessary.
- ❌ Not handling `SERIALIZABLE` transaction failures in application code (they can fail with a serialization error and must be retried).
- ❌ Assuming isolation level issues "won't happen in practice" — they absolutely do under real concurrent production load.

## 3.7 Locks & Concurrency

### What is it?

**Locks** prevent multiple transactions from conflicting when accessing the same data simultaneously. PostgreSQL primarily uses **MVCC (Multi-Version Concurrency Control)**, which lets readers and writers avoid blocking each other in most cases, plus explicit row/table locks for specific scenarios.

### Why is it important?

Understanding locking prevents production deadlocks and helps you design systems that stay fast under concurrent load — critical for any multi-user application.

### Syntax

```sql
-- Row-level lock: locks the selected row(s) until the transaction ends
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;

-- Skip locked rows (great for job queues!)
SELECT * FROM jobs WHERE status = 'pending'
ORDER BY created_at
LIMIT 1
FOR UPDATE SKIP LOCKED;

-- Table-level lock (rarely needed directly)
LOCK TABLE accounts IN EXCLUSIVE MODE;
```

### Example — Preventing a race condition (classic "double booking" bug)

```sql
-- WITHOUT locking: two concurrent transactions can both read stock=1, both decrement, causing overselling
BEGIN;
SELECT stock FROM products WHERE id = 5;         -- both sessions read stock = 1
UPDATE products SET stock = stock - 1 WHERE id = 5; -- both proceed!
COMMIT;

-- WITH locking: the second transaction waits until the first commits
BEGIN;
SELECT stock FROM products WHERE id = 5 FOR UPDATE; -- locks the row
UPDATE products SET stock = stock - 1 WHERE id = 5 WHERE stock > 0;
COMMIT;
```

**MVCC in one sentence:** instead of blocking readers, PostgreSQL gives each transaction a consistent "snapshot" of the data, so `SELECT`s almost never block, while writers use row-level locks to serialize conflicting updates.

### MongoDB Comparison

| MongoDB                                                       | PostgreSQL                                                      |
| ------------------------------------------------------------- | --------------------------------------------------------------- |
| Document-level locking (implicit, automatic)                  | Row-level locking via `FOR UPDATE` (explicit control available) |
| `findOneAndUpdate` (atomic single-document read-modify-write) | `SELECT ... FOR UPDATE` + `UPDATE` inside a transaction         |
| No native "skip locked" pattern                               | `FOR UPDATE SKIP LOCKED` (ideal for job queues/workers)         |

### Real-world Use Case

- **Job queue / worker systems**: `FOR UPDATE SKIP LOCKED` lets multiple workers safely grab different jobs without stepping on each other.
- **Inventory management**: `FOR UPDATE` prevents overselling the last unit of a product.
- **Seat booking**: locking a specific seat row while a user completes checkout.

### Practice Exercises

1. Simulate a race condition: without locking, "sell" the last unit of a product from two concurrent sessions and observe if stock goes negative.
2. Fix it using `SELECT ... FOR UPDATE`.
3. Build a tiny "job queue" table and demonstrate `FOR UPDATE SKIP LOCKED` with two simulated workers.

### Interview Questions

- What is MVCC and how does PostgreSQL use it?
- What's the difference between an optimistic and a pessimistic locking strategy? (Pessimistic: lock upfront with `FOR UPDATE`. Optimistic: use a `version`/`updated_at` column and check it hasn't changed before committing an update.)
- What is a deadlock, and how can it happen? (Two transactions each hold a lock the other needs — PostgreSQL detects and aborts one automatically.)
- What does `FOR UPDATE SKIP LOCKED` do and when would you use it?

### Common Mistakes

- ❌ Holding a `FOR UPDATE` lock for a long time (e.g., waiting on an external API call mid-transaction) — blocks other transactions and hurts throughput.
- ❌ Not handling deadlock errors in application code with a retry strategy.
- ❌ Reaching for table-level locks when row-level locks would suffice — unnecessarily kills concurrency.

## 3.8 Views & Materialized Views

### What is it?

A **view** is a saved, named `SELECT` query that acts like a virtual table — always reflects live, current data. A **materialized view** is similar but **physically stores** the query's result, which must be manually or periodically refreshed.

### Why is it important?

Views simplify complex, frequently-reused queries and can restrict access to sensitive columns. Materialized views trade freshness for massive speed gains on expensive aggregate queries.

### Syntax

```sql
-- Regular view (always up-to-date, no extra storage, re-runs the query every time)
CREATE VIEW high_earners AS
SELECT name, salary, department_id FROM employees WHERE salary > 70000;

SELECT * FROM high_earners; -- query it just like a table

-- Materialized view (stored physically, must be refreshed)
CREATE MATERIALIZED VIEW department_summary AS
SELECT department_id, COUNT(*) AS num_employees, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;

REFRESH MATERIALIZED VIEW department_summary; -- updates the stored data
```

### Example

```sql
CREATE VIEW active_orders AS
SELECT o.id, c.name AS customer_name, o.total_amount, o.status
FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE o.status != 'cancelled';

-- Now any part of the app can simply query this view:
SELECT * FROM active_orders WHERE customer_name = 'Aditi';
```

### MongoDB Comparison

| MongoDB                                                                       | PostgreSQL                                               |
| ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| MongoDB Views (aggregation pipeline saved as a view)                          | `CREATE VIEW`                                            |
| On-demand aggregation pipeline results                                        | Regular view (always fresh, computed on read)            |
| Pre-aggregating into a separate "materialized" collection via a scheduled job | `CREATE MATERIALIZED VIEW` + `REFRESH MATERIALIZED VIEW` |

### Real-world Use Case

- Views: exposing a simplified, safe "public" version of a table (hiding sensitive columns like `password_hash`) to certain app layers or roles.
- Materialized views: expensive dashboard analytics (e.g., "monthly revenue by region") refreshed every hour via a cron job instead of recalculated on every page load.

### Practice Exercises

1. Create a view combining `orders` and `customers` showing only non-cancelled orders.
2. Create a materialized view summarizing total sales per product, then `REFRESH` it after inserting new orders.
3. Explain when you'd choose a materialized view over just caching the result in Redis.

### Interview Questions

- What's the difference between a view and a materialized view?
- Does querying a view re-execute the underlying SQL every time? (Yes, for a regular view.)
- How do you keep a materialized view up to date? (Manual `REFRESH`, a scheduled job, or `REFRESH MATERIALIZED VIEW CONCURRENTLY` to avoid locking readers during refresh.)
- Can you write to a view? (Sometimes — simple views over a single table can support `INSERT`/`UPDATE`; complex views generally can't without an `INSTEAD OF` trigger.)

### Common Mistakes

- ❌ Using a materialized view for data that needs to be real-time (it's inherently stale between refreshes).
- ❌ Forgetting to schedule `REFRESH MATERIALIZED VIEW` and wondering why the data never updates.
- ❌ Over-relying on views to "fix" a bad underlying schema instead of addressing the root design issue.

## 3.9 PostgreSQL JSON/JSONB

### What is it?

PostgreSQL can store semi-structured JSON data in a column using the `JSON` type (stores exact text) or **`JSONB`** (binary, indexed, and generally preferred) — giving you MongoDB-like flexibility _inside_ a relational database.

### Why is it important?

This is the bridge between your MongoDB experience and SQL — letting you combine strict relational structure with flexible, schema-less fields where appropriate.

### Syntax

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  attributes JSONB   -- flexible, varying specs per product
);

INSERT INTO products (name, attributes) VALUES
('Laptop', '{"ram": "16GB", "cpu": "i7", "colors": ["black", "silver"]}'),
('Mouse', '{"dpi": 1600, "wireless": true}');

-- Query JSON fields
SELECT name, attributes->>'ram' AS ram FROM products WHERE attributes->>'cpu' = 'i7';

-- Query nested arrays with containment
SELECT * FROM products WHERE attributes -> 'colors' ? 'black';

-- Index JSONB for fast queries
CREATE INDEX idx_attributes ON products USING GIN (attributes);
```

**Key operators:**
| Operator | Meaning |
|---|---|
| `->` | Get JSON field (returns JSON) |
| `->>` | Get JSON field as text |
| `#>` / `#>>` | Get value at a JSON path |
| `?` | Does key/element exist? |
| `@>` | Does left JSON contain right JSON? |
| `\|\|` | Concatenate/merge JSONB |

### Example

```sql
-- Update a nested JSONB field
UPDATE products
SET attributes = jsonb_set(attributes, '{ram}', '"32GB"')
WHERE name = 'Laptop';

-- Find products containing a specific attribute value
SELECT name FROM products WHERE attributes @> '{"wireless": true}';
```

### MongoDB Comparison

| MongoDB                                     | PostgreSQL                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Entire document is JSON-like (BSON)         | A single column can hold `JSONB` while the rest of the row stays strictly typed          |
| `find({ "attributes.cpu": "i7" })`          | `WHERE attributes->>'cpu' = 'i7'`                                                        |
| Automatic indexing flexibility on any field | Requires explicit `GIN` index on the `JSONB` column                                      |
| Fully schema-less by default                | Opt-in flexibility — best of both worlds: strict columns + flexible `JSONB` where needed |

This is genuinely one of PostgreSQL's best features for MongoDB developers — you don't have to give up flexibility entirely when moving to SQL.

### Real-world Use Case

- Product catalogs with wildly varying attributes per category (electronics vs. clothing).
- Storing webhook payloads, audit logs, or API responses as-is.
- User preference/settings blobs that change shape often without needing schema migrations.

### Practice Exercises

1. Create a `products` table with a `JSONB` attributes column and insert 3 products with different attribute shapes.
2. Query products where a specific nested key equals a given value.
3. Add a `GIN` index and use `EXPLAIN ANALYZE` to confirm it's used for a containment (`@>`) query.

### Interview Questions

- What's the difference between `JSON` and `JSONB` in PostgreSQL? (`JSON` stores exact text as-is, no indexing, slightly faster to insert; `JSONB` stores a parsed binary form, supports indexing, and is faster to query — `JSONB` is recommended for almost all use cases.)
- When would you use a `JSONB` column instead of a normal relational structure? (When the data's shape genuinely varies row-to-row and doesn't need relational querying/joins.)
- Can you index inside a `JSONB` column? (Yes — `GIN` indexes support containment/existence queries.)

### Common Mistakes

- ❌ Overusing `JSONB` for data that's actually structured and relational (defeats the purpose of using SQL at all — "just use MongoDB" territory).
- ❌ Forgetting a `GIN` index and then complaining `JSONB` queries are slow.
- ❌ Using `JSON` instead of `JSONB` without a specific reason — `JSONB` is almost always the better default.

## ✅ Part 3 Checklist

- [ ] Indexes
- [ ] Query Optimization
- [ ] EXPLAIN / EXPLAIN ANALYZE
- [ ] Transactions
- [ ] ACID Properties
- [ ] Isolation Levels
- [ ] Locks & Concurrency
- [ ] Views & Materialized Views
- [ ] PostgreSQL JSON/JSONB

# Part 4 — Industry Ready

## 4.1 Node.js + PostgreSQL

### What is it?

Connecting a Node.js backend to PostgreSQL, typically using the `pg` (node-postgres) library, to run parameterized SQL queries from your application code.

### Why is it important?

This is where SQL theory becomes real backend engineering — every API you build will read/write through a connection like this.

### Syntax

```bash
npm install pg
```

```js
// db.js
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "learnsql",
  database: "sql_practice",
  max: 10, // connection pool size
});

module.exports = pool;
```

```js
// employees.js
const pool = require("./db");

async function getEmployeesByDepartment(departmentId) {
  const result = await pool.query(
    "SELECT id, name, salary FROM employees WHERE department_id = $1",
    [departmentId], // parameterized — prevents SQL injection (see 4.2)
  );
  return result.rows;
}

async function createEmployee(name, salary, departmentId) {
  const result = await pool.query(
    `INSERT INTO employees (name, salary, department_id)
     VALUES ($1, $2, $3) RETURNING *`,
    [name, salary, departmentId],
  );
  return result.rows[0];
}
```

**Using a transaction from Node.js:**

```js
async function transferSalaryBudget(fromDeptId, toDeptId, amount) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(
      "UPDATE departments SET budget = budget - $1 WHERE id = $2",
      [amount, fromDeptId],
    );
    await client.query(
      "UPDATE departments SET budget = budget + $1 WHERE id = $2",
      [amount, toDeptId],
    );
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release(); // always release the connection back to the pool
  }
}
```

### Example

```js
// Express route example
app.get("/api/employees", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM employees ORDER BY id");
  res.json(rows);
});
```

**Expected Output (JSON response):**

```json
[
  { "id": 1, "name": "Aditi", "salary": "75000.00", "department_id": 1 },
  { "id": 2, "name": "Rahul", "salary": "60000.00", "department_id": 1 }
]
```

### MongoDB Comparison

| MongoDB (Mongoose/native driver) | PostgreSQL (`pg`)                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `mongoose.connect(uri)`          | `new Pool({...})`                                                                                    |
| `Model.find({...})`              | `pool.query('SELECT ... WHERE ...', [...])`                                                          |
| `Model.create({...})`            | `pool.query('INSERT INTO ... VALUES (...) RETURNING *', [...])`                                      |
| `session.startTransaction()`     | `client.query('BEGIN')` ... `COMMIT`/`ROLLBACK`                                                      |
| Connection managed automatically | Connection **pool** — must explicitly acquire (`connect()`) and `release()` clients for transactions |

### Real-world Use Case

Nearly every Node.js backend (Express, Fastify, NestJS) connecting to PostgreSQL uses this exact pattern — either raw `pg`, or an ORM like Prisma (4.4) built on top of similar principles.

### Practice Exercises

1. Set up a Node.js project, install `pg`, and connect to your practice database.
2. Write an async function that fetches all employees in a given salary range using a parameterized query.
3. Write a function performing a 2-step transaction (e.g., moving a budget between two departments) with proper `try/catch`/`ROLLBACK`.

### Interview Questions

- Why should you always use parameterized queries (`$1, $2, ...`) instead of string concatenation?
- What is connection pooling and why is it necessary?
- How do you handle a transaction across multiple queries in Node.js? (Acquire a dedicated `client` from the pool, not the pool itself.)
- What happens if you forget to `client.release()`? (Connection pool exhaustion — eventually the app can't get new connections.)

### Common Mistakes

- ❌ Using the shared `pool.query()` for multi-statement transactions (each call may run on a _different_ connection) — you must use a single `client` from `pool.connect()`.
- ❌ Forgetting `client.release()` in a `finally` block, leaking connections.
- ❌ String-concatenating user input into SQL instead of using parameterized placeholders (`$1`) — the #1 cause of SQL injection (next topic).

## 4.2 SQL Injection & Security

### What is it?

**SQL Injection** is a vulnerability where untrusted user input is inserted directly into a SQL query, letting an attacker manipulate the query's logic — potentially reading, modifying, or deleting arbitrary data.

### Why is it important?

This is one of the most dangerous and most tested security topics for any backend developer — appears constantly in interviews and real security audits (OWASP Top 10).

### Syntax — the vulnerability

```js
// DANGEROUS: string concatenation
const query = `SELECT * FROM users WHERE email = '${userInput}'`;
pool.query(query);

// If userInput = "' OR '1'='1"
// Final query becomes:
// SELECT * FROM users WHERE email = '' OR '1'='1'
// This returns ALL users, bypassing the intended filter!
```

A more destructive example:

```js
// userInput = "'; DROP TABLE users; --"
// Final query: SELECT * FROM users WHERE email = ''; DROP TABLE users; --'
```

### Example — the fix (parameterized queries)

```js
// SAFE: parameterized query — user input is never interpreted as SQL code
const query = "SELECT * FROM users WHERE email = $1";
pool.query(query, [userInput]);
```

**Other security practices:**

```sql
-- Principle of least privilege: app user should NOT be a superuser
CREATE ROLE app_user WITH LOGIN PASSWORD 'secure_password';
GRANT SELECT, INSERT, UPDATE ON employees TO app_user;
REVOKE DELETE ON employees FROM app_user; -- app can't delete if it shouldn't need to

-- Row-Level Security (RLS) — restrict which rows a user/role can see
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY customer_sees_own_orders ON orders
  USING (customer_id = current_setting('app.current_customer_id')::int);
```

### MongoDB Comparison

| MongoDB                                                                        | PostgreSQL                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------- |
| NoSQL injection via crafted operators (e.g., `{ "$gt": "" }` in a login field) | SQL injection via crafted string input            |
| Mongoose schema validation reduces (but doesn't eliminate) risk                | Parameterized queries eliminate the risk entirely |
| Both require sanitizing/validating all user input                              | Both require sanitizing/validating all user input |

**Important:** MongoDB is _not_ immune to injection-style attacks either — operator injection (passing `{$ne: null}` as a "password") is a real, similar-class vulnerability.

### Real-world Use Case

SQL injection has caused some of the largest real-world data breaches in history. Every production backend must use parameterized queries or a trusted ORM/query builder that does so automatically — never raw string concatenation with user input.

### Practice Exercises

1. Write a vulnerable login query using string concatenation, then demonstrate (on your own throwaway database) how `' OR '1'='1` bypasses it.
2. Rewrite it as a safe, parameterized query.
3. Create a restricted PostgreSQL role with only `SELECT` privileges on one table and test that `INSERT` fails for that role.

### Interview Questions

- What is SQL injection and how do you prevent it?
- Why are parameterized queries safer than string concatenation, technically? (The database treats parameters purely as _data_, never as executable SQL syntax — regardless of their content.)
- What is the "principle of least privilege" in a database context?
- What is Row-Level Security (RLS) and when would you use it?

### Common Mistakes

- ❌ Manually "escaping" quotes as a defense instead of using parameterized queries (error-prone and incomplete).
- ❌ Giving the application's database user overly broad privileges (e.g., using the PostgreSQL superuser account in production).
- ❌ Trusting an ORM blindly — most ORMs are safe by default, but raw/`unsafe` query-building methods within them can reintroduce injection risk.

## 4.3 Pagination, Filtering & Searching

### What is it?

Techniques for returning data to clients in manageable chunks (**pagination**), narrowing results by criteria (**filtering**), and finding text matches (**searching**) — the backbone of almost every list-style API endpoint.

### Why is it important?

No real API returns "all rows" — every list endpoint (products, users, orders) needs pagination, filters, and search, done efficiently at scale.

### Syntax

**Offset pagination (simple, but slow at scale):**

```sql
SELECT * FROM products ORDER BY id LIMIT 20 OFFSET 40; -- page 3, 20 per page
```

**Keyset/cursor pagination (efficient at scale):**

```sql
-- "Give me the next 20 products after id 140"
SELECT * FROM products WHERE id > 140 ORDER BY id LIMIT 20;
```

**Filtering (dynamic WHERE clauses):**

```sql
SELECT * FROM products
WHERE category_id = $1
  AND price BETWEEN $2 AND $3
ORDER BY created_at DESC
LIMIT 20;
```

**Full-text search:**

```sql
-- Simple pattern search
SELECT * FROM products WHERE name ILIKE '%laptop%';

-- Proper full-text search (faster, ranked, language-aware)
SELECT id, name, ts_rank(search_vector, query) AS rank
FROM products, to_tsquery('english', 'laptop & gaming') query
WHERE search_vector @@ query
ORDER BY rank DESC;

-- Precompute a search_vector column + GIN index for performance
ALTER TABLE products ADD COLUMN search_vector tsvector
  GENERATED ALWAYS AS (to_tsvector('english', name || ' ' || description)) STORED;
CREATE INDEX idx_search ON products USING GIN (search_vector);
```

### Example — a realistic paginated + filtered + searched API query

```sql
SELECT id, name, price
FROM products
WHERE category_id = $1
  AND name ILIKE '%' || $2 || '%'
  AND id > $3          -- cursor from the previous page
ORDER BY id
LIMIT 20;
```

### MongoDB Comparison

| MongoDB                                                         | PostgreSQL                               |
| --------------------------------------------------------------- | ---------------------------------------- |
| `.skip(40).limit(20)`                                           | `OFFSET 40 LIMIT 20`                     |
| `.find({ _id: { $gt: lastId } }).limit(20)` (cursor pagination) | `WHERE id > $1 LIMIT 20`                 |
| Text index + `$text: { $search: "..." }`                        | `to_tsvector`/`to_tsquery` + `GIN` index |
| `.find({ price: { $gte: min, $lte: max } })`                    | `WHERE price BETWEEN $1 AND $2`          |

### Real-world Use Case

- Product listing pages with filters (category, price range) + pagination + a search bar — this exact combination appears in nearly every e-commerce, job board, or content platform.
- Infinite-scroll feeds use keyset/cursor pagination almost universally (Twitter, Instagram-style feeds).

### Practice Exercises

1. Implement offset-based pagination for a `products` table (page size 10).
2. Convert it to keyset/cursor-based pagination and explain why it's faster for page 500 of a huge table.
3. Add full-text search using `tsvector`/`tsquery` with a `GIN` index, and compare it to a plain `ILIKE '%...%'` query using `EXPLAIN ANALYZE`.

### Interview Questions

- What's the difference between offset and keyset (cursor) pagination? Why does offset pagination get slower on later pages? (The database still has to scan and discard all `OFFSET` rows before returning results.)
- How would you implement search in a SQL database without a separate search engine like Elasticsearch?
- How do you combine dynamic filters (some optional) into a single query safely? (Build the `WHERE` clause dynamically in application code while still using parameterized placeholders — never string-concatenate.)

### Common Mistakes

- ❌ Using large `OFFSET` values in production for "infinite scroll" features — degrades badly at scale.
- ❌ Using `ILIKE '%term%'` for search at scale instead of proper full-text search with indexes — a leading `%` wildcard prevents any index use.
- ❌ Building dynamic `WHERE` clauses via string concatenation of filter values (SQL injection risk — always use parameters even when building queries dynamically).

## 4.4 Prisma ORM

### What is it?

**Prisma** is a modern, type-safe ORM (Object-Relational Mapper) for Node.js/TypeScript that lets you define your schema declaratively and query the database with auto-generated, type-safe functions instead of writing raw SQL.

### Why is it important?

Prisma is extremely popular in the current Node.js/TypeScript ecosystem and is commonly used in real production Full Stack apps (especially with Next.js) — a practical, hire-ready skill.

### Syntax

```bash
npm install prisma @prisma/client
npx prisma init
```

`prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Department {
  id        Int        @id @default(autoincrement())
  name      String
  employees Employee[]
}

model Employee {
  id           Int         @id @default(autoincrement())
  name         String
  salary       Decimal
  departmentId Int?
  department   Department? @relation(fields: [departmentId], references: [id])

  @@index([departmentId])
}
```

```bash
npx prisma migrate dev --name init   # creates & applies a migration (see 4.6)
npx prisma generate                  # regenerates the type-safe client
```

**Using Prisma Client in code:**

```js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CREATE
const emp = await prisma.employee.create({
  data: { name: "Aditi", salary: 75000, departmentId: 1 },
});

// READ with a relation (like a JOIN, done for you)
const employees = await prisma.employee.findMany({
  where: { salary: { gt: 60000 } },
  include: { department: true },
  orderBy: { salary: "desc" },
  take: 20,
  skip: 0, // pagination
});

// UPDATE
await prisma.employee.update({
  where: { id: 1 },
  data: { salary: 80000 },
});

// TRANSACTION
await prisma.$transaction([
  prisma.department.update({
    where: { id: 1 },
    data: { budget: { decrement: 500 } },
  }),
  prisma.department.update({
    where: { id: 2 },
    data: { budget: { increment: 500 } },
  }),
]);
```

### Example

```js
// Equivalent of: SELECT e.name, d.name FROM employees e JOIN departments d ON ...
const results = await prisma.employee.findMany({
  include: { department: true },
});
console.log(results[0]);
// { id: 1, name: 'Aditi', salary: 75000, departmentId: 1,
//   department: { id: 1, name: 'Engineering' } }
```

### MongoDB Comparison

| MongoDB (Mongoose)        | Prisma (PostgreSQL)                                              |
| ------------------------- | ---------------------------------------------------------------- |
| `Schema` + `model()`      | `schema.prisma` model definitions                                |
| `Model.find({...})`       | `prisma.model.findMany({ where: {...} })`                        |
| `.populate('field')`      | `include: { relation: true }`                                    |
| Runtime schema validation | Compile-time type safety (TypeScript) generated from your schema |
| Manual migration scripts  | `prisma migrate dev` (structured migration history)              |

### Real-world Use Case

Prisma is heavily used in modern full-stack apps (Next.js + PostgreSQL is one of the most common current stacks) for rapid, type-safe CRUD development while still allowing raw SQL escape hatches for complex queries.

### Practice Exercises

1. Set up Prisma with your practice PostgreSQL database and model `Employee`/`Department`.
2. Write a Prisma query fetching employees with salary above a threshold, including their department.
3. Perform an update and a transaction using Prisma's `$transaction` API.

### Interview Questions

- What is an ORM, and what problem does it solve?
- What are the trade-offs of using an ORM vs raw SQL? (See 4.5.)
- How does Prisma handle relationships/JOINs? (Via `include`, generating optimized SQL under the hood.)
- What is Prisma Migrate, and how does it differ from manually running SQL migration scripts?

### Common Mistakes

- ❌ Using `findMany` inside a loop (N+1 problem) instead of `include`/a single query with a `WHERE ... IN (...)`.
- ❌ Forgetting that Prisma still generates real SQL underneath — poor schema design or missing indexes still hurt performance just as much as with raw SQL.
- ❌ Over-relying on Prisma for every query when a complex report is genuinely easier and faster as raw SQL (`prisma.$queryRaw`).

## 4.5 Raw SQL vs ORM

### What is it?

The engineering trade-off between writing SQL directly versus using an ORM's abstraction layer to generate SQL for you.

### Why is it important?

Knowing _when_ to use which is a mark of a senior engineer — over-relying on either extreme causes real problems in production.

### Syntax — comparison

```js
// Raw SQL (via `pg`)
const { rows } = await pool.query(
  `SELECT e.name, d.name AS department
   FROM employees e JOIN departments d ON e.department_id = d.id
   WHERE e.salary > $1`,
  [60000],
);

// ORM (via Prisma)
const rows = await prisma.employee.findMany({
  where: { salary: { gt: 60000 } },
  include: { department: true },
});

// Raw SQL escape hatch WITHIN an ORM (for complex queries ORMs handle poorly)
const rows = await prisma.$queryRaw`
  SELECT department_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) AS median_salary
  FROM employees GROUP BY department_id
`;
```

### Example — Trade-off Table

| Factor                                              | Raw SQL                       | ORM (Prisma/Sequelize/TypeORM)                     |
| --------------------------------------------------- | ----------------------------- | -------------------------------------------------- |
| Development speed                                   | Slower for simple CRUD        | Much faster for simple CRUD                        |
| Complex analytical queries (window functions, CTEs) | Full control, often necessary | Often clunky or unsupported — use raw escape hatch |
| Type safety                                         | Manual                        | Automatic (with Prisma + TypeScript)               |
| Learning curve for team                             | Requires strong SQL skills    | Lower barrier to entry                             |
| Performance control                                 | Full, explicit                | Can hide N+1 issues if misused                     |
| Migrations                                          | Manual scripts                | Built-in migration tooling                         |
| Portability across DB engines                       | Low (SQL dialect-specific)    | Higher (ORM abstracts some differences)            |

### MongoDB Comparison

| MongoDB                                                | SQL World                                               |
| ------------------------------------------------------ | ------------------------------------------------------- |
| Native driver (`mongodb` package) vs Mongoose          | Raw SQL (`pg`) vs ORM (Prisma)                          |
| Mongoose reduces boilerplate, adds validation/hooks    | Prisma reduces boilerplate, adds type safety/migrations |
| Complex aggregation pipelines often still hand-written | Complex analytical SQL often still hand-written         |

### Real-world Use Case

Most production teams use a **hybrid approach**: an ORM for 90% of standard CRUD operations (fast, safe, maintainable), and raw SQL for the 10% of complex reporting/analytics queries where the ORM's abstraction gets in the way or hurts performance.

### Practice Exercises

1. Write the same query (e.g., "employees with department name and salary rank") once in raw SQL and once via Prisma.
2. Identify one query from earlier sections (e.g., the recursive CTE, or window function ranking) that would be awkward to express in a typical ORM — and needs a raw SQL escape hatch.
3. Write a short justification (3-4 sentences) for when your future team should reach for raw SQL over the ORM.

### Interview Questions

- What are the pros and cons of using an ORM?
- Have you ever needed to drop down to raw SQL from an ORM? Why? (Great real interview question — have a concrete example ready, e.g., window functions, complex aggregations.)
- Does using an ORM eliminate the need to understand SQL? (No — you still need to understand SQL to write efficient schemas, debug slow ORM-generated queries, and know when to bypass the ORM.)

### Common Mistakes

- ❌ Believing an ORM removes the need to understand SQL fundamentals (it doesn't — you'll still need to debug generated queries and design schemas correctly).
- ❌ Fighting an ORM to force it into doing something raw SQL would do trivially (recognize when to switch approaches).
- ❌ Using raw SQL everywhere out of habit/distrust of ORMs, losing the productivity and safety benefits for standard CRUD.

## 4.6 Database Migrations

### What is it?

**Migrations** are version-controlled, incremental scripts that evolve your database schema over time (adding tables/columns, changing types, etc.) in a repeatable, trackable way across environments (dev, staging, production).

### Why is it important?

Without migrations, keeping schemas in sync across a team and across environments becomes chaotic and error-prone — this is a mandatory practice in real engineering teams.

### Syntax

**Using Prisma Migrate:**

```bash
# After editing schema.prisma to add a new field/model:
npx prisma migrate dev --name add_employee_bonus_column
# Generates a timestamped SQL migration file + applies it + regenerates the client
```

Generated migration file (example):

```sql
-- migrations/20260830120000_add_employee_bonus_column/migration.sql
ALTER TABLE "Employee" ADD COLUMN "bonus" DECIMAL(10,2);
```

**Applying migrations in production:**

```bash
npx prisma migrate deploy  # applies pending migrations without generating new ones (safe for CI/CD)
```

**Raw SQL migration tools (e.g., node-pg-migrate, Flyway, Knex) follow the same philosophy:**

```sql
-- 0001_create_employees_table.sql (up)
CREATE TABLE employees (id SERIAL PRIMARY KEY, name TEXT);

-- 0001_create_employees_table_down.sql (down/rollback)
DROP TABLE employees;
```

### Example — A realistic migration workflow

```
1. Developer edits schema.prisma to add a `phone` column.
2. Runs `npx prisma migrate dev --name add_phone_to_employees` locally.
3. Commits the generated migration SQL file to git.
4. CI/CD pipeline runs `npx prisma migrate deploy` against staging, then production.
5. Every environment now has an identical, versioned schema history.
```

### MongoDB Comparison

| MongoDB                                                                             | PostgreSQL                                                                   |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| No enforced schema → often no formal "migrations"                                   | Schema changes MUST go through migrations (columns/types are fixed)          |
| Schema changes handled ad-hoc in application code (e.g., defaulting missing fields) | Migrations run explicitly, tracked in a history table (`_prisma_migrations`) |
| Easier initially, riskier long-term (schema drift across environments)              | More upfront discipline required, safer long-term consistency                |

This is one of the clearest differences in daily workflow between MongoDB and SQL development — get comfortable with migrations early.

### Real-world Use Case

Every production SQL-backed application uses migrations to safely evolve schema — adding a column for a new feature, backfilling data, renaming fields — all without downtime or data loss, and with a full audit trail of schema history.

### Practice Exercises

1. Set up Prisma Migrate on your practice project and create a migration adding a new column.
2. Intentionally write a migration that would break existing data (e.g., adding a `NOT NULL` column with no default to a table with existing rows) and observe the failure.
3. Fix it by adding a `DEFAULT` value or backfilling data before adding the constraint.

### Interview Questions

- What is a database migration and why is it necessary?
- How do you safely add a `NOT NULL` column to a large, already-populated table in production? (Add it as nullable first, backfill data, then add the `NOT NULL` constraint — avoids locking/breaking existing rows.)
- What's the difference between `migrate dev` and `migrate deploy` in Prisma?
- How do you roll back a bad migration in production?

### Common Mistakes

- ❌ Manually editing the database schema directly in production without a tracked migration (causes environment drift).
- ❌ Adding `NOT NULL` constraints to populated tables without a default value or backfill step, causing the migration to fail or lock the table.
- ❌ Not testing migrations against a copy of production-like data before deploying.

## 4.7 Real-World Database Architecture

### What is it?

How production systems structure their database layer beyond a single table/query — connection pooling, replication, caching, scaling strategies, and multi-database architectures.

### Why is it important?

This is where interview questions move from "write a query" to "design a system" — increasingly common in mid-to-senior backend interviews.

### Syntax / Key Concepts

**Read replicas** (scale reads horizontally):

```
        ┌──────────────┐
Writes →│ Primary DB   │──replicates──▶ Read Replica 1
        └──────────────┘                Read Replica 2
Reads  ────────────────────────────────▶ (load-balanced)
```

**Connection pooling at scale** (e.g., PgBouncer sits between app and PostgreSQL):

```
App servers (many) → PgBouncer (pooler) → PostgreSQL (limited real connections)
```

**Caching layer** (reduce database load for hot reads):

```js
async function getProduct(id) {
  const cached = await redis.get(`product:${id}`);
  if (cached) return JSON.parse(cached);

  const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);
  await redis.set(`product:${id}`, JSON.stringify(rows[0]), "EX", 300); // cache 5 min
  return rows[0];
}
```

**Partitioning** (splitting a huge table for performance):

```sql
CREATE TABLE orders (
  id SERIAL,
  created_at DATE NOT NULL,
  customer_id INT
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2026_q1 PARTITION OF orders
  FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');
```

### Example — A typical mid-size SaaS architecture

```
Frontend (React/Next.js)
      │
      ▼
Backend API (Node.js + Prisma)
      │
      ├──▶ PostgreSQL (Primary) ──replicates──▶ Read Replicas (reporting/analytics)
      ├──▶ Redis (caching, sessions, rate limiting)
      └──▶ Elasticsearch / full-text search (optional, for heavy search workloads)
```

### MongoDB Comparison

| MongoDB Concept          | PostgreSQL Equivalent                                     |
| ------------------------ | --------------------------------------------------------- |
| Replica Set              | Primary + Read Replicas (streaming replication)           |
| Sharding                 | Table partitioning / Citus (distributed PostgreSQL)       |
| Change Streams           | `LISTEN`/`NOTIFY`, logical replication, or Debezium (CDC) |
| Atlas connection pooling | PgBouncer / built-in pool (e.g., `pg.Pool`)               |

### Real-world Use Case

- **Read replicas**: route heavy reporting queries away from the primary database to avoid slowing down live transactions.
- **Caching**: product pages, user sessions — anything read far more often than it changes.
- **Partitioning**: massive `orders`/`logs` tables partitioned by month/year for faster queries and easier archival.
- **PgBouncer**: essential once you have many app server instances, each opening multiple connections — avoids exhausting PostgreSQL's connection limit.

### Practice Exercises

1. Sketch (on paper) the architecture for an e-commerce backend handling 10,000 orders/day — where would you add caching? Read replicas?
2. Research PgBouncer and explain, in your own words, why connection pooling matters at scale.
3. Design a partitioning strategy for a `logs` table that grows by millions of rows per month.

### Interview Questions

- How would you scale a PostgreSQL database as traffic grows? (Indexing → caching → read replicas → partitioning → sharding, roughly in that order of typical adoption.)
- What is the difference between vertical and horizontal scaling for a database?
- When would you introduce a caching layer like Redis, and what are the risks (cache invalidation)?
- What is CDC (Change Data Capture) and when might you use it? (Streaming database changes to other systems — e.g., syncing to a search index or data warehouse.)

### Common Mistakes

- ❌ Reaching for sharding/read replicas prematurely, before exhausting simpler wins like indexing and caching.
- ❌ Caching data without a clear invalidation strategy, leading to stale/inconsistent reads.
- ❌ Ignoring connection limits until production breaks under load — plan pooling early.

## ✅ Part 4 Checklist

- [ ] Node.js + PostgreSQL (`pg`, connection pooling, transactions)
- [ ] SQL Injection & Security
- [ ] Pagination, Filtering & Searching
- [ ] Prisma ORM
- [ ] Raw SQL vs ORM
- [ ] Database Migrations
- [ ] Real-World Database Architecture

# Part 5 — Projects

> Build each project as an actual database in PostgreSQL. Don't just read the schemas — create them, insert sample data, and run the queries yourself. Each project deliberately reuses and combines concepts from Parts 0-4.

## 5.1 Project 1: Employee Management System

**Difficulty:** 🟢 Beginner-Intermediate | **Concepts used:** CRUD, JOINs, constraints, aggregates, self-joins

### Requirements

- Track employees, their departments, and their managers.
- Support salary reports per department.
- Support an org-chart-style manager hierarchy.

### Database Schema

```sql
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  budget NUMERIC(12,2) DEFAULT 0
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  salary NUMERIC(10,2) CHECK (salary > 0),
  hired_at DATE NOT NULL DEFAULT CURRENT_DATE,
  department_id INTEGER REFERENCES departments(id) ON DELETE SET NULL,
  manager_id INTEGER REFERENCES employees(id) ON DELETE SET NULL
);

CREATE INDEX idx_employees_department_id ON employees(department_id);
CREATE INDEX idx_employees_manager_id ON employees(manager_id);
```

### Tables & Relationships

- `departments` 1—N `employees` (a department has many employees)
- `employees` self-referencing 1—N (`manager_id` → `employees.id`) for the reporting hierarchy

### Sample Data

```sql
INSERT INTO departments (name, budget) VALUES
('Engineering', 5000000), ('Sales', 2000000), ('HR', 800000);

INSERT INTO employees (first_name, last_name, email, salary, hired_at, department_id, manager_id) VALUES
('Vikram', 'Rao', 'vikram@co.com', 180000, '2018-01-10', 1, NULL),      -- CTO, no manager
('Aditi', 'Sharma', 'aditi@co.com', 95000, '2020-03-15', 1, 1),
('Rahul', 'Verma', 'rahul@co.com', 88000, '2021-06-01', 1, 1),
('Priya', 'Nair', 'priya@co.com', 92000, '2019-11-20', 2, NULL),        -- Head of Sales
('Kabir', 'Singh', 'kabir@co.com', 65000, '2022-02-14', 2, 4),
('Meera', 'Iyer', 'meera@co.com', 58000, '2023-04-05', 3, NULL);
```

### Important SQL Queries

```sql
-- 1. Full org chart with manager names
SELECT e.first_name || ' ' || e.last_name AS employee,
       m.first_name || ' ' || m.last_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- 2. Average salary per department, only departments with 2+ employees
SELECT d.name, COUNT(e.id) AS headcount, ROUND(AVG(e.salary), 2) AS avg_salary
FROM departments d
JOIN employees e ON e.department_id = d.id
GROUP BY d.name
HAVING COUNT(e.id) >= 2;

-- 3. Employees earning more than their manager (data quality check)
SELECT e.first_name, e.salary, m.first_name AS manager, m.salary AS manager_salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;

-- 4. Rank employees by salary within their department (window function)
SELECT first_name, department_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dept_rank
FROM employees;

-- 5. Departments over budget (total salary paid vs budget)
SELECT d.name, d.budget, SUM(e.salary) AS total_paid
FROM departments d
JOIN employees e ON e.department_id = d.id
GROUP BY d.id, d.name, d.budget
HAVING SUM(e.salary) > d.budget * 0.5; -- flag if payroll exceeds 50% of budget
```

### Real-world Use Cases

- HR dashboards (headcount, payroll cost per department).
- Org-chart visualization tools.
- Manager-employee 1:1 tracking systems.

### Optimization Opportunities

- Index `manager_id` and `department_id` (already added above) since they're used constantly in JOINs.
- Consider a **materialized view** for the department salary summary if this dashboard is queried very frequently.
- Add a recursive CTE (from 2.3) to get the _full_ management chain N levels deep, not just direct manager.

## 5.2 Project 2: E-commerce Database

**Difficulty:** 🟡 Intermediate | **Concepts used:** M:N relationships, transactions, JSONB, window functions, subqueries

### Requirements

- Customers can place orders containing multiple products.
- Products have varying category-specific attributes.
- Track inventory and prevent overselling.
- Support "best-selling products" and "customer lifetime value" reports.

### Database Schema

```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  price NUMERIC(10,2) CHECK (price > 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  category_id INTEGER REFERENCES categories(id),
  attributes JSONB DEFAULT '{}'  -- flexible per-category specs
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending','paid','shipped','cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE order_items (
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price_at_purchase NUMERIC(10,2) NOT NULL, -- denormalized snapshot (see 2.9)
  PRIMARY KEY (order_id, product_id)
);

CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);
```

### Tables & Relationships

- `categories` 1—N `products`
- `customers` 1—N `orders`
- `orders` M—N `products` via `order_items` (junction table with its own attributes: `quantity`, `price_at_purchase`)

### Sample Data

```sql
INSERT INTO categories (name) VALUES ('Electronics'), ('Clothing');

INSERT INTO products (name, price, stock, category_id, attributes) VALUES
('Laptop', 65000, 10, 1, '{"ram": "16GB", "cpu": "i7"}'),
('T-Shirt', 599, 100, 2, '{"size": "M", "color": "blue"}'),
('Mouse', 799, 50, 1, '{"dpi": 1600, "wireless": true}');

INSERT INTO customers (name, email) VALUES ('Aditi Sharma', 'aditi@mail.com'), ('Rahul Verma', 'rahul@mail.com');
```

### Important SQL Queries

```sql
-- 1. Place an order SAFELY (transaction + row lock to prevent overselling)
BEGIN;
  SELECT stock FROM products WHERE id = 1 FOR UPDATE;   -- lock the row
  UPDATE products SET stock = stock - 2 WHERE id = 1 AND stock >= 2;
  INSERT INTO orders (customer_id, status) VALUES (1, 'paid') RETURNING id; -- e.g. returns 1
  INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
    VALUES (1, 1, 2, 65000);
COMMIT;

-- 2. Best-selling products (by quantity sold)
SELECT p.name, SUM(oi.quantity) AS total_sold
FROM order_items oi
JOIN products p ON p.id = oi.product_id
GROUP BY p.name
ORDER BY total_sold DESC
LIMIT 5;

-- 3. Customer lifetime value (total spend per customer)
SELECT c.name, SUM(oi.quantity * oi.price_at_purchase) AS lifetime_value
FROM customers c
JOIN orders o ON o.customer_id = c.id
JOIN order_items oi ON oi.order_id = o.id
WHERE o.status != 'cancelled'
GROUP BY c.name
ORDER BY lifetime_value DESC;

-- 4. Products low on stock (below 5 units) needing restock
SELECT name, stock FROM products WHERE stock < 5;

-- 5. Products with a specific JSONB attribute (e.g., wireless electronics)
SELECT name FROM products WHERE category_id = 1 AND attributes @> '{"wireless": true}';

-- 6. Monthly revenue trend using a window function
SELECT
  DATE_TRUNC('month', o.created_at) AS month,
  SUM(oi.quantity * oi.price_at_purchase) AS revenue,
  SUM(SUM(oi.quantity * oi.price_at_purchase)) OVER (ORDER BY DATE_TRUNC('month', o.created_at)) AS running_total
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
GROUP BY month
ORDER BY month;
```

### Real-world Use Cases

- Amazon/Flipkart-style checkout flow (transaction + inventory lock).
- Admin dashboards (best sellers, low stock alerts, revenue trends).
- Flexible product catalogs across wildly different categories (JSONB attributes).

### Optimization Opportunities

- `price_at_purchase` is intentionally **denormalized** onto `order_items` so historical orders remain accurate even if `products.price` changes later.
- Add a `GIN` index on `attributes` for fast category-specific filtering.
- Consider a materialized view for "best-selling products," refreshed hourly, if this dashboard is hit frequently.
- Use `FOR UPDATE SKIP LOCKED` if processing orders via a background worker queue.

## 5.3 Project 3: Blog / Social Media Database

**Difficulty:** 🟡 Intermediate-Advanced | **Concepts used:** M:N tags, recursive CTEs (comments), views, full-text search

### Requirements

- Users write posts, which can have multiple tags.
- Users can comment on posts, and **reply to other comments** (nested/threaded).
- Support liking posts.
- Support searching posts by keyword.

### Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  search_vector TSVECTOR GENERATED ALWAYS AS (to_tsvector('english', title || ' ' || body)) STORED
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id),
  parent_comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE, -- NULL = top-level comment
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE likes (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (post_id, user_id)  -- prevents a user liking the same post twice
);

CREATE INDEX idx_posts_search ON posts USING GIN (search_vector);
CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_comments_parent ON comments(parent_comment_id);
```

### Tables & Relationships

- `users` 1—N `posts`, 1—N `comments`
- `posts` M—N `tags` via `post_tags`
- `posts` M—N `users` via `likes` (a like is essentially a junction row with metadata)
- `comments` self-referencing 1—N (`parent_comment_id`) for threaded replies

### Sample Data

```sql
INSERT INTO users (username, email) VALUES ('aditi_dev', 'aditi@mail.com'), ('rahul_codes', 'rahul@mail.com');
INSERT INTO posts (user_id, title, body) VALUES
(1, 'Learning SQL', 'Today I learned about JOINs and they finally click!');
INSERT INTO tags (name) VALUES ('sql'), ('learning'), ('postgresql');
INSERT INTO post_tags (post_id, tag_id) VALUES (1,1), (1,2), (1,3);
INSERT INTO comments (post_id, user_id, parent_comment_id, body) VALUES
(1, 2, NULL, 'Great post!'),
(1, 1, 1, 'Thanks, glad it helped!');  -- a reply to comment 1
```

### Important SQL Queries

```sql
-- 1. Get a post with its tags (aggregated into an array)
SELECT p.title, ARRAY_AGG(t.name) AS tags
FROM posts p
JOIN post_tags pt ON pt.post_id = p.id
JOIN tags t ON t.id = pt.tag_id
GROUP BY p.id, p.title;

-- 2. Recursive CTE: fetch a full threaded comment tree for a post
WITH RECURSIVE comment_tree AS (
  SELECT id, parent_comment_id, body, 1 AS depth
  FROM comments WHERE post_id = 1 AND parent_comment_id IS NULL

  UNION ALL

  SELECT c.id, c.parent_comment_id, c.body, ct.depth + 1
  FROM comments c
  JOIN comment_tree ct ON c.parent_comment_id = ct.id
)
SELECT * FROM comment_tree ORDER BY depth;

-- 3. Most liked posts
SELECT p.title, COUNT(l.user_id) AS like_count
FROM posts p
LEFT JOIN likes l ON l.post_id = p.id
GROUP BY p.id, p.title
ORDER BY like_count DESC;

-- 4. Full-text search across posts
SELECT title, ts_rank(search_vector, query) AS rank
FROM posts, to_tsquery('english', 'sql & learning') query
WHERE search_vector @@ query
ORDER BY rank DESC;

-- 5. Posts by users the current user hasn't interacted with (NOT EXISTS)
SELECT p.title FROM posts p
WHERE NOT EXISTS (
  SELECT 1 FROM likes l WHERE l.post_id = p.id AND l.user_id = 1
);

-- 6. Convenience view: post feed with author + like/comment counts
CREATE VIEW post_feed AS
SELECT p.id, p.title, u.username AS author,
  (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS like_count,
  (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count
FROM posts p JOIN users u ON u.id = p.user_id;
```

### Real-world Use Cases

- Reddit/Twitter/Instagram-style threaded comments (recursive CTE).
- Tag-based content discovery (M:N tags).
- Search bar over post content (full-text search).

### Optimization Opportunities

- Denormalize `like_count`/`comment_count` directly onto `posts` (updated via triggers or app logic) if the `post_feed` view's subqueries become too slow at scale.
- Use a `GIN` index (already added) for full-text search performance.
- Paginate the comment tree with keyset pagination for posts with thousands of comments.

## 5.4 Project 4: Job Portal

**Difficulty:** 🟡🟠 Intermediate-Advanced | **Concepts used:** Complex filtering, many-to-many skills matching, views, aggregate reporting

### Requirements

- Companies post jobs requiring specific skills.
- Candidates have profiles with their own skills.
- Candidates apply to jobs; track application status.
- Support matching candidates to jobs based on overlapping skills.

### Database Schema

```sql
CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  website VARCHAR(200)
);

CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  resume_summary TEXT
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE candidate_skills (
  candidate_id INTEGER REFERENCES candidates(id) ON DELETE CASCADE,
  skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
  proficiency VARCHAR(20) CHECK (proficiency IN ('beginner','intermediate','expert')),
  PRIMARY KEY (candidate_id, skill_id)
);

CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  company_id INTEGER REFERENCES companies(id) ON DELETE CASCADE,
  title VARCHAR(150) NOT NULL,
  min_salary NUMERIC(10,2),
  max_salary NUMERIC(10,2),
  location VARCHAR(100),
  posted_at TIMESTAMPTZ DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

CREATE TABLE job_skills (
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE,
  PRIMARY KEY (job_id, skill_id)
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  candidate_id INTEGER REFERENCES candidates(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'submitted'
    CHECK (status IN ('submitted','reviewed','interview','rejected','hired')),
  applied_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (job_id, candidate_id) -- can't apply to the same job twice
);

CREATE INDEX idx_jobs_location ON jobs(location);
CREATE INDEX idx_applications_job_id ON applications(job_id);
CREATE INDEX idx_applications_candidate_id ON applications(candidate_id);
```

### Tables & Relationships

- `companies` 1—N `jobs`
- `candidates` M—N `skills` via `candidate_skills`
- `jobs` M—N `skills` via `job_skills`
- `jobs` M—N `candidates` via `applications` (with extra `status` attribute)

### Sample Data

```sql
INSERT INTO companies (name, website) VALUES ('TechCorp', 'techcorp.com');
INSERT INTO skills (name) VALUES ('SQL'), ('Node.js'), ('React'), ('Python');
INSERT INTO jobs (company_id, title, min_salary, max_salary, location) VALUES
(1, 'Backend Developer', 800000, 1500000, 'Remote');
INSERT INTO job_skills (job_id, skill_id) VALUES (1,1), (1,2);

INSERT INTO candidates (name, email) VALUES ('Aditi Sharma', 'aditi@mail.com');
INSERT INTO candidate_skills (candidate_id, skill_id, proficiency) VALUES
(1, 1, 'expert'), (1, 2, 'intermediate'), (1, 3, 'beginner');
```

### Important SQL Queries

```sql
-- 1. Jobs matching a candidate's skills, ranked by number of matching skills
SELECT j.title, c.name AS company, COUNT(js.skill_id) AS matching_skills
FROM jobs j
JOIN companies c ON c.id = j.company_id
JOIN job_skills js ON js.job_id = j.id
WHERE js.skill_id IN (SELECT skill_id FROM candidate_skills WHERE candidate_id = 1)
  AND j.is_active = true
GROUP BY j.id, j.title, c.name
ORDER BY matching_skills DESC;

-- 2. Candidates who have ALL required skills for a job (relational division pattern)
SELECT c.name
FROM candidates c
WHERE NOT EXISTS (
  SELECT skill_id FROM job_skills WHERE job_id = 1
  EXCEPT
  SELECT skill_id FROM candidate_skills WHERE candidate_id = c.id
);

-- 3. Application funnel report (count per status)
SELECT status, COUNT(*) FROM applications GROUP BY status;

-- 4. Jobs with salary range and location filters (typical search API query)
SELECT * FROM jobs
WHERE location = 'Remote'
  AND min_salary >= 800000
  AND is_active = true
ORDER BY posted_at DESC
LIMIT 20;

-- 5. Companies with the most active job postings
SELECT c.name, COUNT(j.id) AS active_jobs
FROM companies c
JOIN jobs j ON j.company_id = c.id AND j.is_active = true
GROUP BY c.name
ORDER BY active_jobs DESC;

-- 6. Time-to-hire analytics (days between application and hire status, conceptually — needs a status_changed_at in a real system)
SELECT candidate_id, job_id, applied_at FROM applications WHERE status = 'hired';
```

### Real-world Use Cases

- LinkedIn/Indeed-style job matching engines.
- Recruiter dashboards showing application funnels.
- Skill-gap analysis for candidates ("you're missing these 2 skills for this role").

### Optimization Opportunities

- The "relational division" query (#2) is a classic hard SQL interview pattern — understand it deeply (find rows in A that have a _complete_ matching set in B).
- Index `(job_id, candidate_id)` is already covered by the `UNIQUE` constraint on `applications`.
- Consider full-text search (4.3) on `jobs.title`/`resume_summary` for a real search experience.

## 5.5 Project 5: SaaS Application

**Difficulty:** 🔴 Advanced | **Concepts used:** Multi-tenancy, RLS, transactions, JSONB, subscription billing, isolation levels

### Requirements

- Multiple **organizations (tenants)** use the same application, each with multiple users.
- Each organization has a subscription plan and usage limits.
- Data must be strictly isolated between tenants (no org can ever see another org's data).
- Track usage events for billing (e.g., API calls, storage used).

### Database Schema

```sql
CREATE TABLE organizations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  plan VARCHAR(20) DEFAULT 'free' CHECK (plan IN ('free','pro','enterprise')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  email VARCHAR(150) NOT NULL,
  role VARCHAR(20) DEFAULT 'member' CHECK (role IN ('owner','admin','member')),
  UNIQUE (organization_id, email)
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE, -- tenant key on EVERY table
  name VARCHAR(150) NOT NULL,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE usage_events (
  id BIGSERIAL PRIMARY KEY,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  event_type VARCHAR(50) NOT NULL,      -- e.g. 'api_call', 'storage_mb'
  quantity NUMERIC(10,2) NOT NULL,
  recorded_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  organization_id INTEGER UNIQUE REFERENCES organizations(id) ON DELETE CASCADE, -- 1:1
  plan VARCHAR(20) NOT NULL,
  monthly_price NUMERIC(10,2),
  renews_at DATE,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active','past_due','cancelled'))
);

-- Multi-tenant indexing pattern: ALWAYS lead composite indexes with organization_id
CREATE INDEX idx_projects_org ON projects(organization_id);
CREATE INDEX idx_usage_org_type ON usage_events(organization_id, event_type);

-- Row-Level Security: enforce tenant isolation at the DATABASE level, not just app code
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON projects
  USING (organization_id = current_setting('app.current_org_id')::int);
```

### Tables & Relationships

- `organizations` 1—N `users`, 1—N `projects`, 1—N `usage_events`
- `organizations` 1—1 `subscriptions`
- **Every tenant-owned table carries an `organization_id`** — the core multi-tenancy pattern

### Sample Data

```sql
INSERT INTO organizations (name, plan) VALUES ('Acme Inc', 'pro'), ('Beta LLC', 'free');
INSERT INTO users (organization_id, email, role) VALUES (1, 'owner@acme.com', 'owner'), (2, 'owner@beta.com', 'owner');
INSERT INTO subscriptions (organization_id, plan, monthly_price, renews_at) VALUES
(1, 'pro', 4999, '2026-09-30'), (2, 'free', 0, NULL);
INSERT INTO projects (organization_id, name, settings) VALUES
(1, 'Website Redesign', '{"theme": "dark", "notifications": true}');
```

### Important SQL Queries

```sql
-- 1. Set tenant context for the session (app sets this per-request based on the logged-in user's org)
SET app.current_org_id = '1';
SELECT * FROM projects; -- RLS automatically filters to only org 1's projects

-- 2. Monthly usage per organization (for billing)
SELECT organization_id, event_type, SUM(quantity) AS total_usage
FROM usage_events
WHERE recorded_at >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY organization_id, event_type;

-- 3. Organizations approaching their plan's API call limit (business logic example)
SELECT o.name, SUM(ue.quantity) AS api_calls
FROM organizations o
JOIN usage_events ue ON ue.organization_id = o.id AND ue.event_type = 'api_call'
WHERE o.plan = 'free' AND ue.recorded_at >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY o.name
HAVING SUM(ue.quantity) > 8000; -- e.g., free plan limit is 10,000

-- 4. Revenue by plan (MRR - Monthly Recurring Revenue)
SELECT plan, COUNT(*) AS num_orgs, SUM(monthly_price) AS mrr
FROM subscriptions
WHERE status = 'active'
GROUP BY plan;

-- 5. Safely upgrading a plan (transaction, since it touches 2 tables)
BEGIN;
  UPDATE organizations SET plan = 'enterprise' WHERE id = 1;
  UPDATE subscriptions SET plan = 'enterprise', monthly_price = 19999 WHERE organization_id = 1;
COMMIT;

-- 6. Querying project settings stored as JSONB
SELECT name FROM projects WHERE settings @> '{"notifications": true}';
```

### Real-world Use Cases

- Multi-tenant SaaS platforms (Slack, Notion, Linear-style products) — this exact `organization_id`-on-every-table pattern is industry standard.
- Usage-based billing systems (metering API calls, storage, seats).
- Row-Level Security is used by real SaaS companies as a _defense-in-depth_ layer, so even a buggy query can't leak cross-tenant data.

### Optimization Opportunities

- Every tenant-scoped table's indexes should **lead with `organization_id`** — since virtually every query filters by tenant first.
- For very large SaaS platforms, consider **partitioning `usage_events` by month** (as shown in 4.7) since it grows unboundedly.
- Use **RLS + parameterized session variables** (as shown above) as a safety net in addition to application-level tenant filtering — never rely on application code alone for tenant isolation in a security-sensitive SaaS product.
- Materialize monthly usage summaries (view/materialized view) instead of recomputing from raw `usage_events` on every billing dashboard load.

## ✅ Part 5 Checklist

- [ ] Project 1: Employee Management System
- [ ] Project 2: E-commerce Database
- [ ] Project 3: Blog / Social Media Database
- [ ] Project 4: Job Portal
- [ ] Project 5: SaaS Application

# Part 6 — Interview Preparation

## 6.1 Conceptual Questions Bank

Use these to test yourself out loud — explaining concepts clearly is as important as knowing them.

**Fundamentals**

1. What's the difference between SQL and NoSQL, and when would you choose each?
2. What are the differences between `DELETE`, `TRUNCATE`, and `DROP`?
3. What is the difference between a Primary Key and a Unique Key?
4. What is a composite key?
5. Explain `NOT NULL` vs `DEFAULT` vs `CHECK` constraints.

**Joins & Queries** 6. Explain all types of JOINs with a real example for each. 7. What is the difference between `WHERE` and `HAVING`? 8. What is a correlated subquery? Give an example. 9. When would you use a CTE instead of a subquery? 10. What's the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`? 11. How do you find duplicate rows in a table? (`GROUP BY` all columns `HAVING COUNT(*) > 1`) 12. How do you find the 2nd/Nth highest salary? (Classic — know multiple approaches: `LIMIT`/`OFFSET`, `DENSE_RANK()`, subquery with `MAX`)

**Design & Theory** 13. Explain normalization with examples of 1NF, 2NF, 3NF. 14. When would you denormalize a schema? 15. How do you design a many-to-many relationship? 16. What is ACID? Explain each property with an example. 17. What are isolation levels, and what anomalies does each prevent? 18. What is MVCC and how does PostgreSQL use it?

**Performance** 19. How does indexing improve performance, and what's the trade-off? 20. Walk me through how you'd debug a slow query. 21. What is the N+1 query problem and how do you solve it? 22. What is the difference between `EXPLAIN` and `EXPLAIN ANALYZE`?

**Applied/Backend** 23. How do you prevent SQL injection? 24. What's the difference between using an ORM and raw SQL — pros and cons of each? 25. How would you implement pagination for an API with millions of rows? 26. What is a database migration, and why is it necessary? 27. How would you design a multi-tenant SaaS database schema?

## 6.2 Query Writing Challenges

Try to solve these **without looking at the answer first**. Use the schemas from Part 5's projects.

**Easy**

1. Get all employees hired in the last 12 months.
2. Get the total number of products per category.
3. Find all customers who have never placed an order.

**Medium** 4. Find the 2nd highest salary in the `employees` table (without using `LIMIT`/`OFFSET`).

   <details><summary>Hint</summary>Try `DENSE_RANK()` or a subquery with `MAX(salary) WHERE salary < (SELECT MAX(salary) ...)`.</details>
5. Find departments where the average salary is above the company-wide average salary.
6. For each customer, find their most recent order date.
7. Find all products that have never been ordered.
8. Write a query to detect duplicate email addresses in a `users` table.

**Hard** 9. Find the top 3 highest-paid employees **in each department** (window function + outer filter). 10. Find customers who have ordered **every** product in a given category (relational division — see Project 4's "candidates with ALL required skills" pattern). 11. Compute a running 7-day total of daily order revenue (window function with a frame). 12. Write a recursive CTE to find all descendants of a given category in a `categories(id, parent_id)` table. 13. Find pairs of employees in the same department with the smallest salary difference between them.

**Sample Answer — Query #4 (2nd highest salary), two approaches:**

```sql
-- Approach A: DENSE_RANK
SELECT name, salary FROM (
  SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) ranked
WHERE rnk = 2;

-- Approach B: subquery with MAX
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

**Sample Answer — Query #9 (Top 3 per department):**

```sql
SELECT name, department_id, salary FROM (
  SELECT name, department_id, salary,
         ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rn
  FROM employees
) ranked
WHERE rn <= 3;
```

## 6.3 System Design Style DB Questions

These test your ability to reason about schema design and trade-offs out loud — common in mid/senior interviews.

1. **"Design a database for a ride-sharing app (like Uber)."**
   - Think about: `riders`, `drivers`, `rides`, `vehicles`, `payments`, `ratings`. Where would you denormalize (e.g., snapshotting the fare rate at ride time)? How would you handle a driver's real-time location (probably not in the relational DB at all — a separate fast store)?

2. **"Design a database for a hotel booking system, and explain how you'd prevent double-booking the same room on the same dates."**
   - Think about: `rooms`, `bookings` with date ranges, a `CHECK`/exclusion constraint (PostgreSQL's `EXCLUDE USING gist` on overlapping date ranges), and transactions with row locking.

3. **"How would you design a notification system that needs to scale to millions of users?"**
   - Think about: write-heavy `notifications` table, partitioning by date, read replicas for the "unread notifications" feed, and whether some of this even belongs in PostgreSQL vs a queue/cache.

4. **"A reporting dashboard query that joins 6 tables is timing out. Walk me through your debugging process."**
   - `EXPLAIN ANALYZE` → look for missing indexes / bad join order → consider a materialized view → consider a read replica for reporting traffic → consider pre-aggregating data on a schedule.

5. **"How would you migrate a live production table with 100 million rows to add a new required column, with zero downtime?"**
   - Add the column as nullable first → backfill in small batches (to avoid long locks) → add the `NOT NULL` constraint only once fully backfilled → deploy application code changes last.

**How to approach these in an interview:**

1. Clarify requirements and scale (ask questions — don't assume).
2. Identify entities and relationships out loud.
3. Sketch the schema (tables + key columns + relationships).
4. Discuss indexes for the main access patterns.
5. Discuss trade-offs (normalization vs denormalization, consistency vs performance).
6. Mention how you'd validate/optimize (EXPLAIN ANALYZE, monitoring).

# ✅ Full Progress Checklist

## Part 0 — Foundations

- [ ] SQL & Relational Database Fundamentals
- [ ] SQL vs NoSQL
- [ ] PostgreSQL Setup
- [ ] Databases, Tables, Rows, Columns

## Part 1 — Beginner

- [ ] Primary Keys & Foreign Keys
- [ ] Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)
- [ ] CRUD Operations
- [ ] SELECT & Filtering (WHERE)
- [ ] ORDER BY, LIMIT, DISTINCT
- [ ] NULL Handling
- [ ] Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)
- [ ] GROUP BY and HAVING

## Part 2 — Intermediate

- [ ] INNER JOIN
- [ ] LEFT / RIGHT JOIN
- [ ] FULL JOIN
- [ ] CROSS JOIN
- [ ] SELF JOIN
- [ ] Subqueries (scalar, correlated, in FROM)
- [ ] CTEs (WITH clause)
- [ ] Recursive CTEs
- [ ] UNION / UNION ALL
- [ ] EXISTS / NOT EXISTS
- [ ] CASE Expressions
- [ ] Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)
- [ ] Database Relationships (1:1, 1:N, M:N)
- [ ] Normalization (1NF, 2NF, 3NF)
- [ ] Denormalization
- [ ] Database Design & ER Diagrams

## Part 3 — Advanced

- [ ] Indexes (B-tree, GIN, composite)
- [ ] Query Optimization techniques
- [ ] EXPLAIN / EXPLAIN ANALYZE
- [ ] Transactions (BEGIN/COMMIT/ROLLBACK, SAVEPOINT)
- [ ] ACID Properties
- [ ] Isolation Levels (Read Committed, Repeatable Read, Serializable)
- [ ] Locks & Concurrency (MVCC, FOR UPDATE, deadlocks)
- [ ] Views
- [ ] Materialized Views
- [ ] PostgreSQL JSON/JSONB

## Part 4 — Industry Ready

- [ ] Node.js + PostgreSQL (pg library, connection pooling)
- [ ] SQL Injection & Security (parameterized queries, RLS, least privilege)
- [ ] Pagination (offset & keyset/cursor)
- [ ] Filtering & Searching (including full-text search)
- [ ] Prisma ORM (schema, migrations, client queries)
- [ ] Raw SQL vs ORM trade-offs
- [ ] Database Migrations
- [ ] Real-World Database Architecture (replicas, pooling, caching, partitioning)

## Part 5 — Projects

- [ ] Project 1: Employee Management System
- [ ] Project 2: E-commerce Database
- [ ] Project 3: Blog / Social Media Database
- [ ] Project 4: Job Portal
- [ ] Project 5: SaaS Application

## Part 6 — Interview Preparation

- [ ] Reviewed Conceptual Questions Bank
- [ ] Solved all Easy query challenges
- [ ] Solved all Medium query challenges
- [ ] Solved all Hard query challenges
- [ ] Practiced explaining System Design style DB questions out loud

# 🏆 Final Skills Checklist

By the end of this guide, you should be able to confidently say:

- [ ] I can design a normalized relational schema from a set of requirements.
- [ ] I can write JOINs of every type without hesitation, and know when to use each.
- [ ] I can write subqueries, CTEs, and recursive CTEs for hierarchical data.
- [ ] I can use window functions to solve ranking/running-total/top-N-per-group problems.
- [ ] I understand normalization deeply enough to explain 1NF/2NF/3NF and when to deliberately denormalize.
- [ ] I can read an `EXPLAIN ANALYZE` plan and identify performance issues.
- [ ] I can design and use indexes appropriately, understanding their write-performance trade-off.
- [ ] I understand ACID, isolation levels, and how PostgreSQL's MVCC handles concurrency.
- [ ] I can use transactions correctly, including handling rollbacks and partial failures.
- [ ] I can use PostgreSQL's JSONB to bring MongoDB-like flexibility into a relational schema when appropriate.
- [ ] I can connect a Node.js application to PostgreSQL safely, using parameterized queries and connection pooling.
- [ ] I understand and can prevent SQL injection.
- [ ] I can implement efficient pagination, filtering, and search for a real API.
- [ ] I can use Prisma ORM for schema definition, migrations, and type-safe queries.
- [ ] I know when to reach for raw SQL instead of an ORM.
- [ ] I can reason about database migrations safely, including zero-downtime schema changes.
- [ ] I can discuss real-world database architecture: replication, caching, partitioning, and multi-tenancy.
- [ ] I have built and can explain all 5 portfolio-style project schemas from memory.
- [ ] I am comfortable answering SQL interview questions, both conceptual and query-writing.

**🎉 If you've checked everything above, you are genuinely industry-ready for SQL in Full Stack / Backend roles.**

# 📚 Additional Resources

- **Official PostgreSQL Docs**: https://www.postgresql.org/docs/
- **Practice platforms**: [SQLZoo](https://sqlzoo.net), [LeetCode Database Problems](https://leetcode.com/studyplan/top-sql-50/), [PGExercises](https://pgexercises.com), [Mode SQL Tutorial](https://mode.com/sql-tutorial/)
- **Schema design/ER diagramming**: [dbdiagram.io](https://dbdiagram.io), [drawSQL](https://drawsql.app)
- **Prisma Docs**: https://www.prisma.io/docs
- **node-postgres (`pg`) Docs**: https://node-postgres.com
- **PostgreSQL Exercises for JOINs specifically**: [PGExercises - Joins](https://pgexercises.com/questions/joins/)
- **Use The Index, Luke** (deep dive on indexing): https://use-the-index-luke.com

## 🎯 Suggested Weekly Pace

| Week | Focus                                                      |
| ---- | ---------------------------------------------------------- |
| 1    | Part 0 + Part 1 (Foundations & Beginner)                   |
| 2    | Part 2 — JOINs, Subqueries, CTEs                           |
| 3    | Part 2 — Window Functions, Design Theory + start Project 1 |
| 4    | Part 3 — Indexes, Optimization, Transactions, ACID         |
| 5    | Part 3 — Isolation, Locks, Views, JSONB + Project 2        |
| 6    | Part 4 — Node.js, Security, Pagination                     |
| 7    | Part 4 — Prisma, Migrations, Architecture + Project 3 & 4  |
| 8    | Project 5 (SaaS) + full Interview Preparation review       |

_Good luck — you already understand data modeling from MongoDB. Now you're adding the relational, transactional, and analytical superpowers of SQL to your toolkit. Happy querying! 🐘_
