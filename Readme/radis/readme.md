# Redis Guide

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Core Concepts](#core-concepts)
- [Data Structures](#data-structures)
- [Basic Commands](#basic-commands)
- [Advanced Topics](#advanced-topics)
- [Best Practices](#best-practices)
- [Common Use Cases](#common-use-cases)
- [Performance Tips](#performance-tips)

## Introduction

**Redis** (Remote Dictionary Server) is an open-source, in-memory data structure store used as a database, cache, and message broker. It supports various data structures including strings, lists, sets, sorted sets, and hashes, making it incredibly versatile for modern applications.

### Why Redis?
- **Lightning-fast performance**: Data stored in RAM for microsecond-level latency
- **Persistent storage**: Optional persistence to disk for data durability
- **Atomic operations**: All operations are atomic, ensuring consistency
- **Multiple data structures**: Optimized for different use cases
- **Pub/Sub messaging**: Built-in support for message queues
- **High availability**: Replication and clustering support
- **Lua scripting**: Execute complex logic on the server side

## Installation

### Using Docker (Recommended)
```bash
docker run -d -p 6379:6379 redis:latest
```

### Using Homebrew (macOS)
```bash
brew install redis
brew services start redis
```

### Using APT (Ubuntu/Debian)
```bash
sudo apt-get install redis-server
sudo systemctl start redis-server
```

### Using Upstash (Serverless Redis)
```bash
# No installation needed - use a managed Redis instance
# Get connection details from Upstash dashboard
```

### Verify Installation
```bash
redis-cli ping
# Expected output: PONG
```

## Core Concepts

### Redis Database Model
- **In-Memory Store**: All data is stored in RAM by default
- **Key-Value Store**: Every piece of data is associated with a unique key
- **Single-threaded**: Processes commands one at a time, ensuring atomicity
- **No SQL**: Uses its own command protocol, not SQL

### Key Naming Conventions
```
user:1:profile         # User profile object
user:1:followers       # User's followers list
product:electronics    # Product category
session:abc123         # Session data
cache:homepage         # Cache entries
```

### Data Expiration
```
SET key value EX 3600   # Expires in 3600 seconds (1 hour)
SET key value PX 1800000  # Expires in 1800000 milliseconds (30 minutes)
TTL key                 # Get remaining time to live in seconds
PTTL key                # Get remaining time in milliseconds
EXPIRE key 3600         # Set expiration on existing key
PERSIST key             # Remove expiration from key
```

## Data Structures

### 1. **Strings**
Simple text or binary data. The most basic data structure.

```bash
SET username "john_doe"
GET username

APPEND username "_pro"           # Append to string
STRLEN username                  # Get string length
INCR counter                      # Increment integer
INCRBY counter 5                  # Increment by specific amount
DECR counter                      # Decrement integer
GETRANGE username 0 3             # Get substring
SETRANGE username 0 "JOHN"        # Set substring
```

**Use Case**: User sessions, cache, counters, feature flags

---

### 2. **Lists**
Ordered collections of strings. Elements can be added at head or tail.

```bash
LPUSH mylist "world"              # Add to head
LPUSH mylist "hello"              # Result: ["hello", "world"]

RPUSH mylist "!"                  # Add to tail
# Result: ["hello", "world", "!"]

LRANGE mylist 0 -1                # Get all elements
# Result: ["hello", "world", "!"]

LLEN mylist                        # Get list length
LPOP mylist                        # Remove and return from head
RPOP mylist                        # Remove and return from tail
LINDEX mylist 0                    # Get element at index
LSET mylist 0 "hi"                 # Set element at index
LTRIM mylist 0 1                   # Keep only elements 0-1
```

**Use Case**: Message queues, activity feeds, undo stacks

---

### 3. **Sets**
Unordered collections of unique strings.

```bash
SADD myset "apple"
SADD myset "banana"
SADD myset "cherry"
# Add multiple: SADD myset "a" "b" "c"

SMEMBERS myset                     # Get all members
SCARD myset                        # Get set size
SISMEMBER myset "apple"            # Check membership

SREM myset "banana"                # Remove member
SPOP myset                         # Remove and return random member

# Set operations
SADD set1 "a" "b" "c"
SADD set2 "b" "c" "d"
SUNION set1 set2                   # Union: ["a", "b", "c", "d"]
SINTER set1 set2                   # Intersection: ["b", "c"]
SDIFF set1 set2                    # Difference: ["a"]
```

**Use Case**: Tags, unique visitors, followers, blocked users

---

### 4. **Hashes**
Maps of field-value pairs. Like objects or dictionaries.

```bash
HSET user:1 name "John" age 30 city "NYC"

HGET user:1 name                   # Get single field
HGETALL user:1                     # Get all fields and values
HMGET user:1 name age              # Get multiple fields

HDEL user:1 city                   # Delete field
HEXISTS user:1 name                # Check if field exists
HLEN user:1                         # Get number of fields
HKEYS user:1                        # Get all field names
HVALS user:1                        # Get all values

HINCRBY user:1 age 1               # Increment field
```

**Use Case**: User profiles, database records, object storage

---

### 5. **Sorted Sets**
Collections of unique strings ordered by a score value.

```bash
ZADD leaderboard 100 "player1"
ZADD leaderboard 200 "player2"
ZADD leaderboard 150 "player3"

ZRANGE leaderboard 0 -1            # Get by rank (lowest to highest)
ZREVRANGE leaderboard 0 -1         # Reverse order (highest to lowest)
ZRANGE leaderboard 0 -1 WITHSCORES # Include scores

ZCARD leaderboard                  # Get number of members
ZCOUNT leaderboard 100 200         # Count members in score range
ZRANK leaderboard "player1"        # Get rank of member
ZREVRANK leaderboard "player1"     # Get reverse rank

ZREM leaderboard "player1"         # Remove member
ZINCRBY leaderboard 50 "player1"   # Increment score
ZREMRANGEBYRANK leaderboard 0 1    # Remove by rank range
ZREMRANGEBYSCORE leaderboard 100 150  # Remove by score range
```

**Use Case**: Leaderboards, ranked data, rate limiting, real-time statistics

---

## Basic Commands

### Key Management
```bash
KEYS *                             # Get all keys (avoid in production)
SCAN 0                             # Iterate keys safely
EXISTS key1 key2                   # Check key existence
DEL key1 key2                      # Delete keys
TYPE key                           # Get key data type
RENAME oldkey newkey               # Rename key
RANDOMKEY                          # Get random key
```

### Server Commands
```bash
PING                               # Test connection
ECHO "hello"                        # Echo message
DBSIZE                             # Get number of keys
FLUSHDB                            # Delete all keys in current DB
FLUSHALL                           # Delete all keys in all DBs
INFO                               # Server information
SELECT 0                           # Select database
SAVE                               # Save snapshot
BGSAVE                             # Background save
LASTSAVE                           # Last save timestamp
```

### Transactions
```bash
MULTI                              # Start transaction
SET key1 value1
SET key2 value2
EXEC                               # Execute all commands

DISCARD                            # Cancel transaction
WATCH key                          # Watch for changes
UNWATCH                            # Stop watching
```

## Advanced Topics

### Pub/Sub (Publish/Subscribe)

Publish messages to channels that subscribers are listening to.

```bash
# Subscriber
SUBSCRIBE notifications
SUBSCRIBE alerts
PSUBSCRIBE news:*                  # Pattern subscribe

# Publisher
PUBLISH notifications "User login"
PUBLISH alerts "Critical error"

# Unsubscribe
UNSUBSCRIBE notifications
```

### Pipelining

Send multiple commands at once to reduce latency.

```bash
# Using redis-cli
redis-cli --pipe < commands.txt

# Using client library
redis.pipeline()
  .set('key1', 'value1')
  .set('key2', 'value2')
  .get('key1')
  .exec()
```

### Lua Scripting

Execute complex logic atomically on the server.

```bash
EVAL "return {1,2,{3,'Hello World!'}}" 0

# With keys and arguments
EVAL "return redis.call('get', KEYS[1])" 1 mykey

# Script loading
SCRIPT LOAD "return redis.call('ping')"
EVALSHA <sha1> 0
```

### Transactions with WATCH

Implement optimistic locking.

```bash
WATCH mykey
value = GET mykey
MULTI
SET mykey value+1
EXEC
```

## Best Practices

### ✅ DO

1. **Use appropriate data structures**
   ```bash
   # Good: Use hash for user data
   HSET user:1 name "John" age 30
   
   # Avoid: Using strings for structured data
   SET user:1 '{"name":"John","age":30}'
   ```

2. **Set expiration times**
   ```bash
   SET session:abc123 user_data EX 3600
   ```

3. **Use meaningful key names**
   ```bash
   # Good
   user:1:profile
   product:electronics:items
   
   # Avoid
   u1, p1, data1
   ```

4. **Monitor memory usage**
   ```bash
   INFO memory
   ```

5. **Use connection pooling**
   ```javascript
   // Use connection pools with 10-20 connections
   const redis = new Redis({ maxRetriesPerRequest: null });
   ```

6. **Handle errors appropriately**
   ```javascript
   try {
     const value = await redis.get('key');
   } catch (error) {
     console.error('Redis error:', error);
   }
   ```

### ❌ DON'T

1. **Don't use KEYS in production** - Use SCAN instead
   ```bash
   # Bad
   KEYS *
   
   # Good
   SCAN 0
   ```

2. **Don't store large objects directly as strings**
   ```bash
   # Bad
   SET user JSON.stringify(largeObject)
   
   # Good
   HSET user field1 value1 field2 value2
   ```

3. **Don't rely on Redis for critical persistence without AOF**
   ```bash
   # Enable AOF persistence
   appendonly yes
   ```

4. **Don't ignore memory limits**
   ```bash
   # Configure maxmemory policy
   maxmemory-policy allkeys-lru
   ```

5. **Don't use blocking commands in high-traffic scenarios**
   ```bash
   # Use BRPOP carefully in production
   BRPOP queue 0
   ```

## Common Use Cases

### 1. **Caching**
```javascript
async function getUserProfile(userId) {
  const cached = await redis.get(`user:${userId}:profile`);
  if (cached) return JSON.parse(cached);
  
  const data = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
  await redis.setex(`user:${userId}:profile`, 3600, JSON.stringify(data));
  return data;
}
```

### 2. **Rate Limiting**
```javascript
async function checkRateLimit(userId) {
  const key = `ratelimit:${userId}`;
  const count = await redis.incr(key);
  
  if (count === 1) {
    await redis.expire(key, 60); // 60 second window
  }
  
  return count <= 100; // 100 requests per minute
}
```

### 3. **Session Management**
```javascript
async function createSession(userId) {
  const sessionId = crypto.randomUUID();
  const sessionData = { userId, createdAt: Date.now() };
  
  await redis.setex(
    `session:${sessionId}`,
    86400, // 24 hours
    JSON.stringify(sessionData)
  );
  
  return sessionId;
}
```

### 4. **Job Queue**
```javascript
// Producer
await redis.rpush('job:queue', JSON.stringify({
  type: 'email',
  to: 'user@example.com',
  subject: 'Welcome'
}));

// Consumer
const job = await redis.blpop('job:queue', 0);
processJob(JSON.parse(job[1]));
```

### 5. **Leaderboard**
```javascript
// Add score
await redis.zadd('leaderboard', score, `player:${playerId}`);

// Get top 10
const topPlayers = await redis.zrevrange('leaderboard', 0, 9, 'WITHSCORES');

// Get player rank
const rank = await redis.zrevrank('leaderboard', `player:${playerId}`);
```

### 6. **Real-time Analytics**
```javascript
// Increment daily active users
await redis.incr(`stats:dau:${date}`);

// Track unique visitors
await redis.sadd(`visitors:${date}`, userId);

// Get count
const uniqueVisitors = await redis.scard(`visitors:${date}`);
```

## Performance Tips

### 1. **Use Pipelining**
```javascript
// Instead of multiple await calls
const redis = require('redis');
const client = redis.createClient();

// Bad: 3 round trips
await client.set('key1', 'value1');
await client.set('key2', 'value2');
await client.set('key3', 'value3');

// Good: 1 round trip (pipelined)
const pipeline = client.multi();
pipeline.set('key1', 'value1');
pipeline.set('key2', 'value2');
pipeline.set('key3', 'value3');
await pipeline.exec();
```

### 2. **Optimize Data Structures**
```bash
# Strings: Fast for small values
SET key value

# Hashes: Use for objects (more efficient than strings)
HSET user:1 name "John" age 30

# Sets: Use for membership tests
SADD followers:1 user:2 user:3

# Sorted Sets: Use for rankings
ZADD scores 100 player:1
```

### 3. **Connection Pooling**
```javascript
const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  maxRetriesPerRequest: null,
  // Enable connection pooling
  enableReadyCheck: false
});
```

### 4. **Batch Operations**
```javascript
// Use MSET/MGET for multiple keys
await redis.mset(['key1', 'value1', 'key2', 'value2']);
const values = await redis.mget(['key1', 'key2']);
```

### 5. **Memory Management**
```bash
# Use appropriate expiration times
SET key value EX 3600

# Configure memory limits
# In redis.conf
maxmemory 256mb
maxmemory-policy allkeys-lru
```

## Troubleshooting

### Common Issues

**Connection Refused**
```bash
# Check if Redis is running
redis-cli ping

# Start Redis
redis-server
```

**High Memory Usage**
```bash
# Check memory stats
INFO memory

# Reduce TTL, use compression, or scale up
```

**Slow Commands**
```bash
# Check slow log
SLOWLOG GET 10

# Avoid blocking commands, use pipelining
```

**Data Loss**
```bash
# Enable persistence
# In redis.conf
save 900 1        # Save after 900 seconds if 1 key changed
appendonly yes    # Enable AOF
```

## Resources

- [Redis Official Documentation](https://redis.io/documentation)
- [Redis Commands Reference](https://redis.io/commands)
- [Redis Protocol Specification](https://redis.io/docs/reference/protocol-spec/)
- [Redis Best Practices](https://redis.io/docs/management/best-practices/)
- [Upstash Redis (Serverless)](https://upstash.com/docs)

---

**Last Updated**: 2026
**Version**: 1.0
