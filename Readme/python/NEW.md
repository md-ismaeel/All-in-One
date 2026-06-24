# Python for JavaScript Developers - Beginner's Guide

Learn Python fast because you already know JavaScript. No fluff, just practical examples.

## Table of Contents
1. [Quick Setup](#quick-setup)
2. [Syntax Basics](#syntax-basics)
3. [Variables & Data Types](#variables--data-types)
4. [Strings](#strings)
5. [Lists & Dictionaries](#lists--dictionaries)
6. [Control Flow](#control-flow)
7. [Loops](#loops)
8. [Functions](#functions)
9. [File Operations](#file-operations)
10. [Run Shell Commands](#run-shell-commands)
11. [Common Patterns](#common-patterns)

---

## Quick Setup

### Install Python
```bash
# Check version
python3 --version

# Install (macOS with brew)
brew install python3

# Install (Ubuntu)
sudo apt-get install python3 python3-pip
```

### Create Virtual Environment
```bash
# Create
python3 -m venv venv

# Activate (Mac/Linux)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# You'll see (venv) in terminal - now install packages here
pip install requests  # Example
```

### Install Packages
```bash
pip install requests  # HTTP library
pip freeze > requirements.txt  # Save dependencies
pip install -r requirements.txt  # Install from file
```

---

## Syntax Basics

**Key Difference**: Python cares about indentation. No curly braces!

```python
# JavaScript
if (x > 5) {
  console.log("Greater");
}

# Python - note the colon and indentation
if x > 5:
    print("Greater")
```

**Comments:**
```python
# Single line
"""Multi-line comment"""
```

**Print (like console.log):**
```python
print("Hello")
print("x =", x)
print(f"x = {x}")  # f-string (best)
```

---

## Variables & Data Types

No `const`, `let`, or `var`—just use `name = value`.

```python
name = "Alice"      # String
age = 25            # Integer
price = 19.99       # Float
active = True       # Boolean (capitalized!)

# Check type
print(type(age))    # <class 'int'>

# Convert types
age = int("25")     # String to int
text = str(25)      # Int to string
num = float("3.14") # String to float
```

**JavaScript vs Python:**

| JavaScript | Python |
|-----------|--------|
| `const name = "Alice"` | `name = "Alice"` |
| `true/false` | `True/False` (capitalized) |
| `console.log()` | `print()` |
| `typeof x` | `type(x)` |

---

## Strings

```python
name = "Alice"

# Concatenation
greeting = "Hello, " + name

# f-strings (best way)
greeting = f"Hello, {name}!"
greeting = f"2 + 2 = {2 + 2}"

# String methods
print(name.upper())           # "ALICE"
print(name.lower())           # "alice"
print(name.replace("A", "B")) # "Blice"
print(name.split("l"))        # ["A", "ice"]
print(" hello ".strip())      # "hello"

# String slicing
print(name[0])       # "A"
print(name[1:3])     # "li"
print(name[-1])      # "e" (last character)
print(name[::-1])    # "ecilA" (reverse)

# Multiline string
text = """Line 1
Line 2
Line 3"""
```

---

## Lists & Dictionaries

### Lists (Like JavaScript Arrays)

```python
# Create
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3]

# Access
print(fruits[0])      # "apple"
print(fruits[-1])     # "cherry" (last item)

# Modify
fruits.append("orange")          # Add to end
fruits.insert(0, "grape")        # Insert at position
fruits.remove("apple")           # Remove item
fruits.pop()                     # Remove last item
fruits.sort()                    # Sort in place

# Slice
print(numbers[1:3])   # [2, 3] - items 1 to 3
print(numbers[::-1])  # [3, 2, 1] - reverse

# Loop
for fruit in fruits:
    print(fruit)

# Get length
print(len(fruits))

# List comprehension (create lists easily)
squares = [x ** 2 for x in range(5)]  # [0, 1, 4, 9, 16]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]
```

### Dictionaries (Like JavaScript Objects)

```python
# Create
user = {"name": "Alice", "age": 25, "city": "NYC"}

# Access (note: use brackets, not dot notation)
print(user["name"])    # "Alice"

# Add/modify
user["email"] = "alice@example.com"  # Add
user["age"] = 26                     # Modify

# Safe access (no error if missing)
email = user.get("email")            # Returns value or None
city = user.get("city", "Unknown")   # Default if missing

# Check if key exists
if "name" in user:
    print("Has name")

# Delete
del user["email"]

# Loop through items
for key, value in user.items():
    print(f"{key}: {value}")

# Get all keys, values
print(user.keys())    # dict_keys(['name', 'age', 'city'])
print(user.values())  # dict_values(['Alice', 26, 'NYC'])

# Dict comprehension
numbers_squared = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4, ...}
```

### Tuple (Immutable List)

```python
# Create - can't change it
point = (10, 20)
person = ("Alice", 25)

# Access
print(point[0])  # 10

# Unpacking
x, y = point
name, age = person
print(name, age)  # Alice 25

# Can't modify
# point[0] = 5  # ERROR!
```

---

## Control Flow

### If / Else

```python
age = 18

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")

# Comparison operators (same as JS)
if x > 5 and y < 10:
    print("Both conditions true")

if x == 5 or x == 10:
    print("x is 5 or 10")

if not is_admin:
    print("Not admin")

# Ternary (one-liner)
status = "Adult" if age >= 18 else "Minor"
```

### Check None, True/False

```python
x = None

if x is None:
    print("x is None")

if x is not None:
    print("x has a value")

# None, 0, empty list/dict are falsy
if []:      # False
    print("Never runs")

if [1, 2]:  # True
    print("Runs - list has items")
```

---

## Loops

### For Loop

```python
# Loop through list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")  # 0: apple, 1: banana, ...

# Loop numbers
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 5):
    print(i)  # 1, 2, 3, 4

# Loop with step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
```

### While Loop

```python
count = 0
while count < 5:
    print(count)
    count += 1

# Loop until user quits
while True:
    command = input("Command (q to quit): ")
    if command == "q":
        break
    print(f"You said: {command}")
```

### break & continue

```python
# break - exit loop
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - skip this iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4
```

---

## Functions

### Basic Function

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # "Hello, Alice!"

# Default parameters
def greet_user(name="Guest"):
    return f"Hello, {name}!"

print(greet_user())        # "Hello, Guest!"
print(greet_user("Bob"))   # "Hello, Bob!"

# Return multiple values
def get_user():
    return ("Alice", 25)

name, age = get_user()
print(name, age)  # Alice 25
```

### *args (Variable Arguments)

```python
# Add any number of arguments
def add_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(add_all(1, 2, 3))         # 6
print(add_all(1, 2, 3, 4, 5))   # 15
```

### **kwargs (Keyword Arguments)

```python
# Accept named arguments
def create_user(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

create_user(name="Alice", age=25, email="alice@example.com")
# name: Alice
# age: 25
# email: alice@example.com
```

### Lambda Functions

```python
# Anonymous one-liner functions
add = lambda x, y: x + y
print(add(5, 3))  # 8

# Useful with map/filter
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16]

evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]
```

---

## File Operations

### Read a File

```python
# Read entire file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines at once
with open("data.txt", "r") as f:
    lines = f.readlines()
```

### Write to a File

```python
# Create/overwrite file
with open("output.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("Line 2\n")

# Append to file
with open("output.txt", "a") as f:
    f.write("Line 3\n")
```

### Work with JSON

```python
import json

# Read JSON
with open("data.json", "r") as f:
    data = json.load(f)
    print(data)

# Write JSON
user = {"name": "Alice", "age": 25}
with open("user.json", "w") as f:
    json.dump(user, f, indent=2)
```

### Work with CSV

```python
import csv

# Read CSV
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row)

# Write CSV
data = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30}
]

with open("output.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "age"])
    writer.writeheader()
    writer.writerows(data)
```

---

## Run Shell Commands

### Execute Commands

```python
import subprocess

# Run command and get output
result = subprocess.run(["ls", "-la"], capture_output=True, text=True)
print(result.stdout)      # Output
print(result.stderr)      # Errors
print(result.returncode)  # 0 = success

# Run with shell (string command)
result = subprocess.run("echo Hello && pwd", shell=True, capture_output=True, text=True)
print(result.stdout)
```

### Check Files & Directories

```python
import os

if os.path.exists("myfile.txt"):
    print("File exists")

if os.path.isdir("myfolder"):
    print("It's a directory")

if os.path.isfile("myfile.txt"):
    print("It's a file")

# List files
for item in os.listdir("."):
    print(item)
```

### Environment Variables

```python
import os

# Get environment variable
api_key = os.getenv("API_KEY")
api_key = os.getenv("API_KEY", "default_value")  # With default

# Set environment variable
os.environ["MY_VAR"] = "my_value"

print(os.environ["MY_VAR"])
```

---

## Common Patterns

### Check Type & Handle Errors

```python
try:
    age = int(input("Enter age: "))
    print(f"You are {age} years old")
except ValueError:
    print("Please enter a number!")
except Exception as e:
    print(f"Error: {e}")
finally:
    print("Done!")

# Check type
if isinstance(age, int):
    print("It's an integer")
```

### Read & Process File

```python
with open("users.txt", "r") as f:
    for line in f:
        user_data = line.strip().split(",")
        name, age = user_data[0], user_data[1]
        print(f"{name} is {age}")
```

### API Request (HTTP)

```python
import requests

# GET request
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
if response.status_code == 200:
    data = response.json()
    print(data)

# POST request
payload = {"name": "Alice", "age": 25}
response = requests.post("https://api.example.com/users", json=payload)
print(response.status_code)
```

### Loop with Counter

```python
# Get index while looping
items = ["apple", "banana", "cherry"]
for index, item in enumerate(items):
    print(f"{index}: {item}")
    # 0: apple
    # 1: banana
    # 2: cherry
```

### Create a Simple Script

```python
#!/usr/bin/env python3
"""My simple script"""

import sys
import os

def main():
    # Your code here
    print("Hello!")

if __name__ == "__main__":
    main()
```

---

## Quick Reference

| Task | Python | JavaScript |
|------|--------|-----------|
| Print | `print(x)` | `console.log(x)` |
| Variable | `x = 5` | `let x = 5` |
| String format | `f"x = {x}"` | `` `x = ${x}` `` |
| List | `[1, 2, 3]` | `[1, 2, 3]` |
| Dict/Object | `{"a": 1}` | `{a: 1}` |
| Loop | `for x in list:` | `for (let x of list)` |
| Function | `def f(x):` | `function f(x)` |
| If/Else | `if x:` | `if (x)` |
| Null/None | `None` | `null` |
| Boolean | `True/False` | `true/false` |
| And/Or | `and/or` | `&&/\|\|` |

---

## Next Steps

1. **Practice Basic Syntax**: Run these examples in a Python file
2. **Learn a Library**: Try `requests` for HTTP or `json` for data
3. **Build a Script**: Automate something on your computer
4. **Then Study**: DSA, async Python, frameworks

### Useful Libraries

```bash
pip install requests      # HTTP requests
pip install python-dotenv # Environment variables
pip install pytest        # Testing
```

---

**Start coding! Python clicks fast once you get the syntax. Good luck! 🚀**
