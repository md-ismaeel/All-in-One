# Python Learning Guide for JavaScript Developers

Welcome! Since you already know JavaScript and Node.js, learning Python will be much easier. This guide highlights the key differences and similarities to help you transition smoothly.

## Table of Contents
1. [Why Python?](#why-python)
2. [Setup](#setup)
3. [Core Concepts](#core-concepts)
4. [Key Differences from JavaScript](#key-differences-from-javascript)
5. [Common Tasks Comparison](#common-tasks-comparison)
6. [Learning Path](#learning-path)
7. [DevOps Essential Topics](#devops-essential-topics)
8. [Resources](#resources)

---

## Why Python?

Python is used for:
- **Web Development** (Django, Flask)
- **Data Science & Machine Learning** (NumPy, Pandas, TensorFlow)
- **Automation & Scripting**
- **Backend APIs** (FastAPI, Django REST)
- **Artificial Intelligence**

---

## Setup

### Install Python
```bash
# macOS (using Homebrew)
brew install python3

# Ubuntu/Debian
sudo apt-get install python3

# Windows
# Download from python.org or use Windows Subsystem for Linux (WSL)
```

### Verify Installation
```bash
python3 --version
```

### Package Manager (like npm)
```bash
# pip is Python's package manager (like npm)
pip3 install package_name

# Create virtual environment (like node_modules isolation)
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate  # Windows
```

---

## Core Concepts

### 1. Variables & Data Types

**JavaScript:**
```javascript
let name = "Alice";
let age = 25;
let isActive = true;
let scores = [90, 85, 95];
let user = { name: "Bob", age: 30 };
```

**Python:**
```python
name = "Alice"
age = 25
is_active = True  # capitalized!
scores = [90, 85, 95]
user = {"name": "Bob", "age": 30}
```

**Key Differences:**
- No `let`, `const`, or `var` - just assign directly
- `True`, `False`, `None` are capitalized
- Snake_case is conventional (not camelCase)
- Type hints are optional: `name: str = "Alice"`

### 2. Functions

**JavaScript:**
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const greet = (name) => `Hello, ${name}!`;
```

**Python:**
```python
def greet(name):
    return f"Hello, {name}!"
```

**Key Differences:**
- Use `def` instead of `function`
- Use f-strings for string interpolation
- **Indentation matters** (replaces curly braces)
- Return is explicit

### 3. Control Flow

**JavaScript:**
```javascript
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}
```

**Python:**
```python
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")
```

**Key Differences:**
- Use `elif` instead of `else if`
- No parentheses required around conditions
- **Indentation defines blocks** (no `{}`)

### 4. Loops

**JavaScript:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

array.forEach((item) => console.log(item));

for (const key in obj) {
  console.log(obj[key]);
}
```

**Python:**
```python
for i in range(5):
    print(i)

for item in array:
    print(item)

for key in obj:
    print(obj[key])
```

**Key Differences:**
- Use `in` instead of traditional C-style loops
- `range(5)` generates 0-4 (like array indexing)
- No `.forEach()` - just use simple `for` loops

### 5. Lists (Arrays)

**JavaScript:**
```javascript
let arr = [1, 2, 3];
arr.push(4);
arr.map(x => x * 2);
arr.filter(x => x > 2);
```

**Python:**
```python
arr = [1, 2, 3]
arr.append(4)
[x * 2 for x in arr]  # List comprehension
[x for x in arr if x > 2]  # Filter
```

**Key Differences:**
- Use `.append()` instead of `.push()`
- **List comprehensions** are powerful and Pythonic
- No `.map()` or `.filter()` - use comprehensions instead

### 6. Dictionaries (Objects)

**JavaScript:**
```javascript
const user = {
  name: "Alice",
  age: 25,
};

console.log(user.name);
user.email = "alice@example.com";
```

**Python:**
```python
user = {
    "name": "Alice",
    "age": 25,
}

print(user["name"])
# or
print(user.get("name"))  # safer

user["email"] = "alice@example.com"
```

**Key Differences:**
- Keys must be strings (usually)
- Use `dict["key"]` instead of `dict.key` (though `.get()` is safer)
- Use `in` to check if key exists

### 7. Classes & OOP

**JavaScript:**
```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const user = new User("Alice", 25);
```

**Python:**
```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name}"

user = User("Alice", 25)
```

**Key Differences:**
- Use `__init__` instead of `constructor`
- First parameter is always `self` (like `this`)
- No `new` keyword needed
- `__init__` is a "dunder method" (double underscore)

---

## Key Differences from JavaScript

| Feature | JavaScript | Python |
|---------|-----------|--------|
| **Variable Declaration** | `let`, `const`, `var` | No keyword needed |
| **Naming Convention** | camelCase | snake_case |
| **Block Delimiters** | `{}` | Indentation |
| **Truthiness** | truthy/falsy | `True`, `False`, `None` |
| **Null/Undefined** | `null`, `undefined` | `None` |
| **Arrays** | `[1, 2, 3]` | `[1, 2, 3]` (same) |
| **Objects** | `{key: value}` | `{"key": value}` |
| **String Interpolation** | `` `text ${var}` `` | `f"text {var}"` |
| **Comments** | `//` or `/* */` | `#` |
| **Async** | Promises, async/await | Async/await (similar) |
| **Package Manager** | npm, yarn | pip |
| **Type Checking** | Optional (TypeScript) | Optional (type hints) |

---

## Common Tasks Comparison

### Reading User Input

**JavaScript:**
```javascript
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Name: ", (name) => {
  console.log(`Hello, ${name}`);
});
```

**Python:**
```python
name = input("Name: ")
print(f"Hello, {name}")
```

### File Operations

**JavaScript:**
```javascript
const fs = require("fs");

const content = fs.readFileSync("file.txt", "utf8");
fs.writeFileSync("file.txt", "new content");
```

**Python:**
```python
# Reading
with open("file.txt", "r") as f:
    content = f.read()

# Writing
with open("file.txt", "w") as f:
    f.write("new content")
```

### HTTP Requests

**JavaScript:**
```javascript
const response = await fetch("https://api.example.com/users");
const data = await response.json();
```

**Python:**
```python
import requests

response = requests.get("https://api.example.com/users")
data = response.json()
```

### JSON Operations

**JavaScript:**
```javascript
const obj = JSON.parse('{"name": "Alice"}');
const json = JSON.stringify(obj);
```

**Python:**
```python
import json

obj = json.loads('{"name": "Alice"}')
json_str = json.dumps(obj)
```

### Working with Dates

**JavaScript:**
```javascript
const date = new Date();
console.log(date.toISOString());
```

**Python:**
```python
from datetime import datetime

date = datetime.now()
print(date.isoformat())
```

---

## Learning Path

### Phase 1: Fundamentals (1-2 weeks)
- [x] Variables and data types
- [x] Functions
- [x] Control flow (if/else, loops)
- [x] Lists and dictionaries
- [x] String operations

**Practice:** Write small scripts (calculator, to-do list, etc.)

### Phase 2: Intermediate (2-3 weeks)
- [x] Classes and OOP
- [x] File I/O
- [x] Error handling (try/except)
- [x] List comprehensions
- [x] Modules and imports

**Practice:** Build a small project (web scraper, note-taking app)

### Phase 3: Advanced (Varies)
Choose based on your goals:
- **Web:** Django, Flask
- **Data Science:** NumPy, Pandas, Matplotlib
- **Automation:** Selenium, scheduling
- **ML/AI:** TensorFlow, scikit-learn

---

## DevOps Essential Topics

As a DevOps professional, here are the critical Python skills and tools you need:

### 1. System Administration & Shell Integration

**Running System Commands:**
```python
import subprocess
import os

# Execute shell commands
result = subprocess.run(['ls', '-la'], capture_output=True, text=True)
print(result.stdout)

# Get environment variables
db_url = os.getenv("DATABASE_URL")

# Change working directory
os.chdir("/var/log")
```

**Key Differences from Node.js:**
- `subprocess` module (like Node's `child_process`)
- Direct environment variable access with `os.getenv()`
- No async/callback hell - can use `subprocess.run()` synchronously

### 2. Configuration Management & Infrastructure as Code

**Working with YAML (Ansible, Kubernetes):**
```python
import yaml

# Read YAML config
with open("config.yaml", "r") as f:
    config = yaml.safe_load(f)

# Write YAML
config["version"] = "2.0"
with open("config.yaml", "w") as f:
    yaml.dump(config, f)
```

**Working with JSON (Terraform, CloudFormation):**
```python
import json

with open("terraform.json", "r") as f:
    tf_config = json.load(f)

# Modify and write back
tf_config["resource"]["aws_instance"]["example"]["ami"] = "ami-12345"
with open("terraform.json", "w") as f:
    json.dump(tf_config, f, indent=2)
```

### 3. Container & Orchestration Automation

**Docker Interaction:**
```python
import docker

client = docker.from_env()

# List running containers
for container in client.containers.list():
    print(f"{container.name}: {container.status}")

# Run a container
container = client.containers.run(
    "ubuntu",
    command="echo hello",
    detach=True
)

# Execute commands in container
result = container.exec_run("apt-get update")
```

**Kubernetes Interaction:**
```python
from kubernetes import client, config

# Load kubeconfig
config.load_kube_config()

v1 = client.CoreV1Api()

# List pods
pods = v1.list_namespaced_pod(namespace="default")
for pod in pods.items:
    print(pod.metadata.name)

# Create deployment
body = {
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {"name": "my-app"},
    "spec": {
        "replicas": 3,
        "selector": {"matchLabels": {"app": "myapp"}},
        "template": {
            "metadata": {"labels": {"app": "myapp"}},
            "spec": {"containers": [{"name": "app", "image": "myapp:1.0"}]}
        }
    }
}
```

### 4. Monitoring, Logging & Observability

**Structured Logging:**
```python
import logging
import json

# Setup structured logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Log as JSON for log aggregation tools (ELK, Splunk, etc.)
log_data = {
    "event": "deployment_started",
    "service": "api-server",
    "version": "1.2.3",
    "timestamp": datetime.now().isoformat()
}
logger.info(json.dumps(log_data))
```

**Prometheus Metrics:**
```python
from prometheus_client import Counter, Histogram, start_http_server
import time

# Define metrics
requests_total = Counter("requests_total", "Total requests", ["method", "endpoint"])
request_duration = Histogram("request_duration_seconds", "Request duration")

# Use metrics
requests_total.labels(method="GET", endpoint="/api/users").inc()

@request_duration.time()
def process_request():
    time.sleep(1)

# Expose metrics on port 8000
start_http_server(8000)
```

### 5. Infrastructure Provisioning & Cloud Automation

**AWS Automation (boto3):**
```python
import boto3

# EC2 Management
ec2 = boto3.client("ec2")

# List instances
instances = ec2.describe_instances()
for reservation in instances["Reservations"]:
    for instance in reservation["Instances"]:
        print(instance["InstanceId"], instance["State"]["Name"])

# Create security group
sg = ec2.create_security_group(
    GroupName="web-sg",
    Description="Web server security group"
)

# Add SSH rule
ec2.authorize_security_group_ingress(
    GroupId=sg["GroupId"],
    IpPermissions=[{
        "IpProtocol": "tcp",
        "FromPort": 22,
        "ToPort": 22,
        "IpRanges": [{"CidrIp": "0.0.0.0/0"}]
    }]
)

# Launch instance
instances = ec2.run_instances(
    ImageId="ami-12345",
    MinCount=1,
    MaxCount=1,
    SecurityGroupIds=[sg["GroupId"]]
)
```

**Google Cloud Automation:**
```python
from google.cloud import compute_v1

compute_client = compute_v1.InstancesClient()

# List VMs
project_id = "my-project"
zone = "us-central1-a"
instances = compute_client.list(project=project_id, zone=zone)

for instance in instances:
    print(instance.name, instance.status)
```

### 6. CI/CD Pipeline Automation

**Working with Git:**
```python
import subprocess

def deploy_app(branch="main"):
    # Pull latest code
    subprocess.run(["git", "pull", "origin", branch], check=True)
    
    # Get current commit
    result = subprocess.run(
        ["git", "rev-parse", "HEAD"],
        capture_output=True,
        text=True,
        check=True
    )
    commit_hash = result.stdout.strip()
    
    print(f"Deploying commit: {commit_hash}")
    
    # Build and deploy
    run_build()
    push_to_registry(commit_hash)

def run_build():
    subprocess.run(["docker", "build", "-t", "myapp:latest", "."], check=True)

def push_to_registry(tag):
    subprocess.run(["docker", "push", f"myapp:{tag}"], check=True)
```

**Task Automation (Celery/APScheduler):**
```python
from apscheduler.schedulers.background import BackgroundScheduler
import time

def health_check():
    """Run periodic health checks"""
    print("Health check running...")
    # Check service status, update metrics, etc.

scheduler = BackgroundScheduler()
scheduler.add_job(health_check, "interval", minutes=5)
scheduler.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    scheduler.shutdown()
```

### 7. Database & Data Management

**Database Connections & Migrations:**
```python
import psycopg2
from psycopg2 import sql

# Connect to PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="mydb",
    user="user",
    password="password"
)

cursor = conn.cursor()

# Execute queries safely (prevent SQL injection)
cursor.execute(
    sql.SQL("SELECT * FROM {} WHERE id = %s"),
    [sql.Identifier("users"), 1]
)

results = cursor.fetchall()

# Backup database
import subprocess
subprocess.run([
    "pg_dump",
    "-h", "localhost",
    "-U", "user",
    "-d", "mydb",
    "-f", "backup.sql"
], check=True)

conn.close()
```

**Redis for Caching/Queues:**
```python
import redis

r = redis.Redis(host="localhost", port=6379)

# Cache operations
r.set("user:1", "Alice", ex=3600)  # Expires in 1 hour
user = r.get("user:1")

# Queue operations (for job processing)
r.lpush("tasks", '{"task": "send_email", "user_id": 1}')
task = r.rpop("tasks")
```

### 8. Testing & Quality Assurance

**Unit Testing:**
```python
import unittest
from unittest.mock import patch, MagicMock

def deploy_service(region):
    """Deploy service to AWS"""
    return f"Deployed to {region}"

class TestDeployment(unittest.TestCase):
    def test_deploy_to_region(self):
        result = deploy_service("us-east-1")
        self.assertEqual(result, "Deployed to us-east-1")
    
    @patch("subprocess.run")
    def test_docker_build(self, mock_run):
        # Mock external command
        mock_run.return_value.returncode = 0
        
        # Test that command was called correctly
        subprocess.run(["docker", "build", "."])
        mock_run.assert_called_once_with(["docker", "build", "."])

if __name__ == "__main__":
    unittest.main()
```

### 9. Error Handling & Resilience

**Retry Logic:**
```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10)
)
def connect_to_service(url):
    """Retry connection with exponential backoff"""
    response = requests.get(url)
    response.raise_for_status()
    return response

# Use it
try:
    result = connect_to_service("https://api.example.com")
except Exception as e:
    print(f"Failed after retries: {e}")
```

### 10. DevOps Tools & Frameworks

**Popular Python-based DevOps Tools:**

| Tool | Purpose | Usage |
|------|---------|-------|
| **Ansible** | Configuration management | `ansible-playbook deploy.yml` |
| **Terraform** | Infrastructure as Code | Python provisioning scripts |
| **Fabric** | Remote command execution | SSH automation |
| **Invoke** | Task execution | Build/deploy automation |
| **SaltStack** | Infrastructure automation | Event-driven automation |
| **Pulumi** | IaC in Python | Define infrastructure in Python |
| **Scrapy** | Web scraping | Monitor systems, gather metrics |
| **Paramiko** | SSH library | Remote execution |
| **Requests** | HTTP library | API interactions |
| **APScheduler** | Task scheduling | Cron-like jobs in Python |

---

## DevOps Learning Path

### Phase 1: Fundamentals (2-3 weeks)
- [x] Python basics (already covered above)
- [x] System administration (subprocess, file I/O)
- [x] Working with configuration files (YAML, JSON)
- [x] Environment variables and secrets

**Practice:** Write scripts to automate local tasks

### Phase 2: Cloud & Container Basics (3-4 weeks)
- [x] Docker automation (docker-py)
- [x] Kubernetes basics and Python client
- [x] AWS/GCP/Azure automation (boto3, google-cloud-python)
- [x] Infrastructure as Code principles

**Practice:** Automate container deployments, manage cloud resources

### Phase 3: Advanced DevOps (4+ weeks)
- [x] CI/CD pipeline design and automation
- [x] Monitoring and logging architecture
- [x] Database automation and backup strategies
- [x] Disaster recovery and high availability
- [x] Security automation (secrets management, scanning)

**Practice:** Build complete automation pipelines

---

## Resources

### Online Learning
- **Official Tutorial:** https://docs.python.org/3/tutorial/
- **Real Python:** https://realpython.com/ (excellent articles)
- **Coursera:** Python for Everybody (free)
- **Linux Academy / A Cloud Guru:** DevOps and cloud courses

### DevOps-Specific Resources
- **Ansible Documentation:** https://docs.ansible.com/
- **Kubernetes Python Client:** https://github.com/kubernetes-client/python
- **Boto3 (AWS SDK):** https://boto3.amazonaws.com/v1/documentation/api/latest/index.html
- **Docker SDK for Python:** https://docker-py.readthedocs.io/
- **Pulumi (IaC in Python):** https://www.pulumi.com/
- **Terraform:** https://www.terraform.io/ (use Python for automation)

### Practice & Hands-On
- **LeetCode:** https://leetcode.com/ (algorithm practice)
- **HackerRank:** https://www.hackerrank.com/
- **Build real projects:** Automate your own infrastructure
- **GitHub:** Study DevOps automation scripts and tools

### Documentation
- **Python Docs:** https://docs.python.org/3/
- **PEP 8 Style Guide:** https://pep8.org/ (how to write Pythonic code)
- **AWS Documentation:** https://docs.aws.amazon.com/
- **GCP Documentation:** https://cloud.google.com/docs
- **Azure Documentation:** https://docs.microsoft.com/en-us/azure/

### IDEs & Editors
- **VS Code** + Python extension
- **PyCharm** (community edition free)
- **Vim/Nano** (for remote server editing)
- **Jupyter Notebooks** (for quick prototyping)

---

## Quick Reference: Your First Python Script

```python
#!/usr/bin/env python3
"""
This is a docstring - explains what the file does
"""

def main():
    # Get user input
    name = input("What's your name? ")
    
    # Use f-strings for interpolation
    print(f"Hello, {name}!")
    
    # List and loop
    numbers = [1, 2, 3, 4, 5]
    doubled = [x * 2 for x in numbers]
    
    print(f"Doubled numbers: {doubled}")
    
    # Dictionary
    person = {
        "name": name,
        "age": 25,
        "city": "New York"
    }
    
    print(f"Person info: {person}")

if __name__ == "__main__":
    main()
```

**Run it:**
```bash
python3 script.py
```

---

## Tips for Success

1. **Embrace the indentation** - It might feel strange, but it makes Python code readable
2. **Use the REPL** - Run `python3` in terminal to test code interactively (like Node REPL)
3. **Write Pythonic code** - Use list comprehensions, context managers (`with`), etc.
4. **Read PEP 8** - Python's style guide (similar to style guides in JavaScript)
5. **Practice regularly** - Build small projects to cement your knowledge
6. **Use type hints** - Optional but helpful: `def add(a: int, b: int) -> int:`

---

**Good luck on your Python journey! 🐍**
// hello world