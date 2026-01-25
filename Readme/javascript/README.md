# JavaScript Interview Questions and Answers

A comprehensive guide to JavaScript interview questions organized by difficulty level, from basic to advanced concepts.

## 📚 Table of Contents

- [Basic Level Questions](#basic-level-questions)
- [Moderate Level Questions](#moderate-level-questions)
- [Advanced Level Questions](#advanced-level-questions)

## Basic Level Questions

### 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language that runs in browsers and server environments (Node.js). It's dynamically typed, supports object-oriented and functional programming paradigms, and is primarily used for web development to create interactive user interfaces and handle client-side logic.and update web pages without reloading. In browsers, JavaScript is executed by JavaScript engines such as V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari).

### 2. What are the different data types in JavaScript?

JavaScript has 8 data types:

**Primitive Types:**

- `string` - Text data ("hello")
- `number` - Integers and floats (42, 3.14)
- `boolean` - true/false values
- `undefined` - Variable declared but not assigned
- `null` - Intentional absence of value
- `symbol` - Unique identifiers (ES6+)
- `bigint` - Large integers (ES2020+)

**Non-primitive:**

- `object` - Complex data structures (arrays, objects, functions)

### 3. What is the difference between let, const, and var?

let, const, and var are three different keywords used to declare variables in JavaScript.

- **var**: old way to declare variables, it has function and global scope
- **let**: new way to declare variables, it has block scope and can be re-assignable
- **const**: new way to declare variables, it has block scope and cannot be re-assignable

```
var a = 1; // Function scoped
let b = 2; // Block scoped, re-assignable
const c = 3; // Block scoped, constant
```

### 4. What are template literals and how do you use them?

Template literals are strings enclosed in backticks (` that allow string interpolation and multi-line strings using the `${expression}`) syntax.

```
const name = 'John';
const age = 30;

// Template literal with interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old`;

// Multi-line strings
const multiline = `This is
a multi-line
string`;

// Expression evaluation
const result = `2 + 2 = ${2 + 2}`;
```

### 5. What is the difference between == and ===?

- **== (loose equality)**: Compares values with type coercion
- **=== (strict equality)**: Compares values and types without coercion

```
5 == "5" // true (string converted to number)
5 === "5" // false (different types)
null == undefined // true
null === undefined // false
```

### 6. How do arrow functions differ from regular functions?

Arrow functions are a concise syntax for defining functions with some key differences from regular functions:

```
// Regular function
function add(a, b) {
return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Key differences:
// 1. Arrow functions have implicit return for single expressions
const multiply = (a, b) => a \* b; // No curly braces needed

// 2. 'this' is lexically inherited, not dynamically bound
const obj = {
name: 'John',
regularFunc: function() {
console.log(this.name); // 'John'
},
arrowFunc: () => {
console.log(this.name); // undefined (this refers to parent scope)
}
};

// 3. Arrow functions cannot be used as constructors
// new arrowFunc() // Error

// 4. Arrow functions don't have 'arguments' object
const regularFunc = function() {
console.log(arguments); // Works
};

const arrowFunc = () => {
console.log(arguments); // Error
};

// 5. Single parameter doesn't need parentheses
const square = x => x \* x;
```

### 7. What is hoisting in JavaScript?

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (either global or function scope) before code execution.

Variables declared with var are hoisted and automatically initialized with undefined.

Function declarations are fully hoisted — you can call them before they are defined in the code.

let and const are also hoisted, but not initialized, so accessing them before declaration causes a ReferenceError (they are in a "temporal dead zone").

```
console.log(x); // undefined (not error)
var x = 5;

// Function hoisting
sayHello(); // Works fine
function sayHello() {
console.log("Hello!");
}
```

`let` and `const` are hoisted but not initialized (temporal dead zone).

### 8. What are truthy and falsy values?

Falsy values are values that evaluate to `false` when converted to a boolean. All other values are truthy.

**Falsy values:**

- `false`
- `0` and `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values:** Everything else (non-empty strings, non-zero numbers, objects, arrays, etc.)

```
if (0) console.log('falsy');
if (1) console.log('truthy');

if ("") console.log('falsy');
if ("hello") console.log('truthy');

if (null) console.log('falsy');
if ({}) console.log('truthy'); // Objects are truthy, even empty ones
if ([]) console.log('truthy'); // Arrays are truthy, even empty ones
```

### 9. How do you clone an object or array?

```
// Shallow copy of object
const shallowCopy = { ...originalObject };
const shallowCopy2 = Object.assign({}, originalObject);

// Shallow copy of array
const shallowArray = [...originalArray];
const shallowArray2 = originalArray.slice();

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObject));
const deepCopy2 = structuredClone(originalObject); // Modern approach
```

### 10. What is the spread operator and rest parameters?

The spread operator (`...`) allows iterables to be expanded in places where zero or more elements are expected. Rest parameters collect multiple arguments into an array.

```
// Spread operator - expanding arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread operator - copying objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Spread operator - function arguments
const numbers = [5, 6, 7];
Math.max(...numbers); // 7

// Rest parameters - collecting function arguments
function sum(...numbers) {
return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Rest with other parameters
function greet(greeting, ...names) {
console.log(`${greeting} ${names.join(' and ')}`);
}

greet('Hello', 'Alice', 'Bob'); // 'Hello Alice and Bob'
```

### 11. What is a pure function?

A **pure function** is a function that always produces the same output for the same input and has no side effects. It doesn't modify external state, variables, or data outside its scope.

**Key Characteristics:**

1. **Deterministic**: Same input always produces the same output
2. **No Side Effects**: Doesn't modify external state or variables
3. **No Dependencies**: Only depends on its input parameters
4. **Predictable**: Behavior is consistent and testable

**Pure Function Example:**

```
// ✅ PURE - Always returns same output for same input
function add(a, b) {
return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always 5)

// ✅ PURE - No side effects
function calculateDiscount(price, discountPercent) {
return price \* (1 - discountPercent / 100);
}

const originalPrice = 100;
console.log(calculateDiscount(originalPrice, 10)); // 90
console.log(originalPrice); // 100 (unchanged)
```

**Impure Function Example:**

```
// ❌ IMPURE - Modifies external variable
let count = 0;

function addToCount(a) {
count += a; // SIDE EFFECT - modifying global state
return count;
}

console.log(addToCount(5)); // 5
console.log(addToCount(5)); // 10 (different output for same input!)

// ❌ IMPURE - Makes API call (external dependency)
function getUserData(userId) {
const data = fetch(`/api/users/${userId}`); // SIDE EFFECT
return data;
}

// ❌ IMPURE - Modifies input object
function addProperty(obj) {
obj.newProp = 'value'; // SIDE EFFECT - mutating parameter
return obj;
}

const user = { name: 'John' };
addProperty(user);
console.log(user); // { name: 'John', newProp: 'value' } (modified)
```

**Benefits of Pure Functions:**

1. **Easier to test**: Predictable behavior with no external dependencies
2. **Easier to reason about**: Output only depends on input
3. **Easier to parallelize**: No shared state conflicts
4. **Cacheable**: Results can be safely cached (memoization)
5. **Refactoring friendly**: Can be moved/renamed without side effects

**Real-world Examples:**

```
// Pure function - Array transformation
function doubleNumbers(numbers) {
return numbers.map(n => n \* 2); // Returns new array
}

const original = [1, 2, 3];
const result = doubleNumbers(original);
console.log(result); // [2, 4, 6]
console.log(original); // [1, 2, 3] (unchanged)

// Pure function - Object transformation
function updateUser(user, newData) {
return { ...user, ...newData }; // Returns new object
}

const currentUser = { name: 'John', age: 30 };
const updatedUser = updateUser(currentUser, { age: 31 });
console.log(updatedUser); // { name: 'John', age: 31 }
console.log(currentUser); // { name: 'John', age: 30 } (unchanged)

// Pure function - String operations
function capitalize(str) {
return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('hello')); // 'Hello'
```

## Moderate Level Questions

### 12. What is the difference between map, filter, and reduce?

Map, filter, and reduce are array methods that help manipulate arrays in different ways:

- **map()**: Transforms each element using a function and returns a new array
- **filter()**: Creates a new array with elements that pass a test
- **reduce()**: Reduces array to a single value by applying a function

```
const numbers = [1, 2, 3, 4, 5];

// map - transform elements
const doubled = numbers.map(n => n \* 2); // [2, 4, 6, 8, 10]

// filter - select elements
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - combine into single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// Combining all three
const result = numbers
.filter(n => n % 2 === 0) // [2, 4]
.map(n => n \* 2) // [4, 8]
.reduce((acc, n) => acc + n, 0); // 12
```

### 13. What are Promises and how do they work?

A Promise represents an eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected.

```
const promise = new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Success!');
// or reject(new Error('Failed!'));
}, 1000);
});

promise
.then(result => console.log(result))
.catch(error => console.error(error));
```

### 14. What is async/await and how is it different from Promises?

`async/await` provides a cleaner syntax for handling asynchronous operations, making asynchronous code look synchronous.

```
async function fetchData() {
try {
const response = await fetch('/api/data');
const data = await response.json();
return data;
} catch (error) {
console.error('Fetch failed:', error);
}
}
```

### 15. What is the event loop in JavaScript?

The event loop manages asynchronous operations in JavaScript's single-threaded environment:

1. **Call Stack**: Executes synchronous code
2. **Web APIs**: Handle async operations (setTimeout, fetch, etc.)
3. **Callback Queue**: Stores completed async callbacks
4. **Event Loop**: Moves callbacks from queue to stack when stack is empty

### 16. What is closure and give a practical example?

A closure is when an inner function has access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing.

```
function outerFunction(x) {
return function innerFunction(y) {
return x + y; // Accesses x from outer scope
};
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
```

### 17. What is the 'this' keyword and how does it work?

The `this` keyword refers to the object that is executing the current code. Its value depends on how a function is called.

### 18. What is the difference between call, apply, and bind?

All three methods invoke functions with a specific `this` context:

- **call()**: Invokes function immediately, passes arguments individually
- **apply()**: Invokes function immediately, passes arguments as an array
- **bind()**: Returns new function with fixed `this` context, doesn't invoke immediately

```
function greet(greeting, punctuation) {
console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'John' };

// call - immediate, individual arguments
greet.call(person, 'Hello', '!'); // "Hello, John!"

// apply - immediate, array arguments
greet.apply(person, ['Hi', '?']); // "Hi, John?"

// bind - returns function, individual arguments
const boundGreet = greet.bind(person, 'Hey');
boundGreet('...'); // "Hey, John..."
```

### 19. What is destructuring in JavaScript?

Destructuring allows unpacking values from arrays or objects into distinct variables in a concise way.

```
// Array destructuring
const [a, b, c] = [1, 2, 3];
console.log(a); // 1

const [x, , z] = [1, 2, 3]; // Skip middle element
console.log(z); // 3

// Object destructuring
const { name, age } = { name: 'John', age: 30 };
console.log(name); // 'John'

// Renaming in destructuring
const { name: personName } = { name: 'John' };
console.log(personName); // 'John'

// Default values
const { name = 'Anonymous' } = {};
console.log(name); // 'Anonymous'

// Nested destructuring
const { address: { city } } = { address: { city: 'New York' } };
console.log(city); // 'New York'

// Destructuring in function parameters
function greet({ name, age }) {
console.log(`${name} is ${age} years old`);
}
greet({ name: 'John', age: 30 });
```

### 20. What are higher-order functions?

Higher-order functions are functions that take other functions as arguments or return functions.

```
// Function that takes another function as argument
function filterBy(array, predicate) {
return array.filter(predicate);
}

// Function that returns another function
function createMultiplier(multiplier) {
return function(number) {
return number \* multiplier;
};
}

const double = createMultiplier(2);
console.log(double(5)); // 10

// Map, filter, reduce are examples of higher-order functions
const numbers = [1, 2, 3, 4];
numbers.map(n => n \* 2); // Passing function to map
```

### 21. What is the prototype chain?

The prototype chain is a mechanism where JavaScript objects inherit properties and methods from other objects. Each object has an internal `[[Prototype]]` property pointing to another object.

```
function Animal(name) {
this.name = name;
}

Animal.prototype.speak = function() {
console.log(`${this.name} makes a sound`);
};

function Dog(name) {
Animal.call(this, name);
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
console.log(`${this.name} barks`);
};

const dog = new Dog('Rex');
dog.speak(); // "Rex makes a sound" (inherited from Animal)
dog.bark(); // "Rex barks"
```

### 22. What is null and undefined?

- **undefined**: Variable is declared but not assigned a value, or function doesn't return anything explicitly
- **null**: Intentional assignment representing "no value" or "empty"

```
let a; // undefined
let b = null; // null
console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (quirk in JavaScript)
```

### 23. Explain the concept of prototypal inheritance in JavaScript.

Objects can inherit properties and methods from other objects through the prototype chain. Every object has a `__proto__` property pointing to its prototype.

### 24. What are the different ways to define a function in JavaScript?

1. **Function Declaration**: `function myFunc() {}`
2. **Function Expression**: `const myFunc = function() {}`
3. **Arrow Function**: `const myFunc = () => {}`
4. **Method Definition**: `const obj = { myFunc() {} }`
5. **Constructor Function**: `function MyFunc() { this.prop = value; }`
6. **Generator Function**: `function* myFunc() { yield value; }`

### 25. What is event bubbling and event capturing in JavaScript?

- **Event Capturing (Trickling)**: Event starts from root and goes down to target
- **Event Bubbling**: Event starts from target and bubbles up to root

```
element.addEventListener('click', handler, true); // Capturing phase
element.addEventListener('click', handler, false); // Bubbling phase (default)
```

### 26. Explain the concept of AJAX in JavaScript.

AJAX (Asynchronous JavaScript and XML) allows making HTTP requests to servers without page refresh. Modern implementations use `fetch()` or `XMLHttpRequest`.

```
fetch('/api/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

### 27. What is the "typeof" operator used for?

`typeof` returns a string indicating the type of a variable.

```
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (JavaScript quirk)
typeof {}; // "object"
typeof function(){}; // "function"
```

### 28. How does JavaScript handle errors and exceptions?

JavaScript uses `try-catch-finally` blocks for error handling:

```
try {
// Code that might throw an error
riskyOperation();
} catch (error) {
// Handle the error
console.error('Error occurred:', error.message);
} finally {
// Always executes
cleanup();
}

// Throwing custom errors
throw new Error('Custom error message');
```

### 29. Explain the concept of event-driven programming in JavaScript.

JavaScript uses an event-driven model where code execution is triggered by events (user interactions, system events, etc.) rather than sequential execution.

```
button.addEventListener('click', handleClick);
window.addEventListener('load', initializeApp);
document.addEventListener('DOMContentLoaded', setupPage);
```

### 30. What is the purpose of the "async" and "await" keywords?

`async/await` provides a cleaner syntax for handling asynchronous operations, making asynchronous code look synchronous.

```
async function fetchData() {
try {
const response = await fetch('/api/data');
const data = await response.json();
return data;
} catch (error) {
console.error('Fetch failed:', error);
}
}
```

## Advanced Level Questions

### 31. What is the difference between a deep copy and a shallow copy?

- **Shallow Copy**: Copies only the first level properties
- **Deep Copy**: Copies all levels, including nested objects

```
// Shallow copy
const shallowCopy = { ...originalObject };
const shallowCopy2 = Object.assign({}, originalObject);

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObject));
const deepCopy2 = structuredClone(originalObject); // Modern approach
```

### 32. How does JavaScript handle memory management?

JavaScript uses automatic memory management through garbage collection:

- **Allocation**: Memory allocated when creating variables/objects
- **Usage**: Reading/writing to allocated memory
- **Release**: Garbage collector automatically frees unused memory

Common memory leaks: global variables, forgotten timers, closures holding references, detached DOM nodes.

### 33. What are generators and iterators?

Generators are functions that can pause and resume, yielding multiple values over time. Iterators are objects that implement `.next()` method.

```
// Generator function
function\* numberGenerator() {
yield 1;
yield 2;
yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Using in for...of loop
for (const num of numberGenerator()) {
console.log(num); // 1, 2, 3
}
```

### 34. What is currying and partial application?

**Currying**: Transforms a function with multiple arguments into a sequence of functions, each taking one argument.

**Partial Application**: Creates a new function by pre-filling some arguments of an existing function.

```
// Currying
function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) {
return fn.apply(this, args);
} else {
return (...nextArgs) => curried(...args, ...nextArgs);
}
};
}

function add(a, b, c) {
return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6

// Partial application
function partial(fn, ...prefilledArgs) {
return (...laterArgs) => fn(...prefilledArgs, ...laterArgs);
}

const add5 = partial(add, 5);
console.log(add5(3, 2)); // 10
```

### 35. What are WeakMap and WeakSet?

WeakMap and WeakSet are collections that hold weak references to objects, allowing them to be garbage collected.

```
// WeakMap - keys must be objects
const weakMap = new WeakMap();
const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

console.log(weakMap.get(obj1)); // 'value1'
console.log(weakMap.has(obj1)); // true

// When obj1 is garbage collected, entry is removed from weakMap

// WeakSet - values must be objects
const weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

// Use cases:
// 1. Private data storage
// 2. DOM node metadata
// 3. Cache for DOM elements that may be removed
```

### 36. How do you implement debouncing and throttling?

**Debouncing**: Delays function execution until after specified time has passed without new invocations.

**Throttling**: Limits function execution to at most once per specified time interval.

```
// Debouncing
function debounce(fn, delay) {
let timeoutId;
return function(...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => fn(...args), delay);
};
}

// Usage: Search input
const searchInput = document.querySelector('#search');
const handleSearch = debounce((e) => {
console.log('Searching for:', e.target.value);
}, 300);

searchInput.addEventListener('input', handleSearch);

// Throttling
function throttle(fn, interval) {
let lastCall = 0;
return function(...args) {
const now = Date.now();
if (now - lastCall >= interval) {
fn(...args);
lastCall = now;
}
};
}

// Usage: Window resize
const handleResize = throttle(() => {
console.log('Window resized');
}, 1000);

window.addEventListener('resize', handleResize);
```

### 37. How does JavaScript handle memory leaks?

Common causes of memory leaks in JavaScript:

1. **Global variables**: Accidental globals persist in memory
2. **Forgotten timers**: `setInterval()` callbacks not cleared
3. **Detached DOM nodes**: References to removed DOM elements
4. **Circular references**: Objects referencing each other
5. **Closures**: Inner functions holding references to outer scope

```
// Memory leak example
let globalVar = [];
function leak() {
globalVar.push(new Array(1000000)); // Grows indefinitely
}

// Fix: Use let/const in function scope
function noLeak() {
let localVar = [];
localVar.push(new Array(1000000));
} // localVar is garbage collected

// Forgotten timer leak
const timerId = setInterval(() => {
console.log('Running');
}, 1000);
// clearInterval(timerId); // Must be called to prevent memory leak
```

### 38. What are Web Workers and when should you use them?

Web Workers allow running JavaScript in background threads separate from the main thread, enabling parallel processing without blocking UI.

```
// main.js
const worker = new Worker('worker.js');

// Send data to worker
worker.postMessage({ number: 10 });

// Receive result from worker
worker.onmessage = (event) => {
console.log('Result from worker:', event.data);
};

// --- worker.js (in separate file)
self.onmessage = (event) => {
const result = event.data.number \* 2;
self.postMessage(result); // Send result back
};

// Use cases:
// 1. Heavy computations (data processing, sorting)
// 2. Image/video processing
// 3. Complex calculations
// 4. Keeping UI responsive during intensive tasks
```

### 39. What is the difference between microtasks and macrotasks?

Microtasks have higher priority than macrotasks in the event loop.

**Microtasks** (higher priority):

- Promises (`.then()`, `.catch()`, `.finally()`)
- `MutationObserver`
- `queueMicrotask()`

**Macrotasks** (lower priority):

- `setTimeout()`
- `setInterval()`
- `setImmediate()` (Node.js)
- I/O operations
- DOM events

```
console.log('Start');

// Macrotask
setTimeout(() => {
console.log('setTimeout');
}, 0);

// Microtask
Promise.resolve()
.then(() => {
console.log('Promise 1');
})
.then(() => {
console.log('Promise 2');
});

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 2
// setTimeout

// Execution order:
// 1. Synchronous code (Start, End)
// 2. All microtasks (Promises)
// 3. Next macrotask (setTimeout)
```

### 40. What is memoization and its benefits?

Memoization is a technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

```
function memoize(fn) {
const cache = {};
return function(...args) {
const key = JSON.stringify(args);
if (cache[key]) {
console.log('From cache');
return cache[key];
}
const result = fn.apply(this, args);
cache[key] = result;
return result;
};
}

// Fibonacci with memoization
const fibonacci = memoize(function(n) {
if (n < 2) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Computed efficiently
console.log(fibonacci(10)); // From cache

// Benefits:
// 1. Improved performance for recursive functions
// 2. Reduced computation time for repeated calls
// 3. Better user experience
// 4. Efficient handling of expensive operations
```

### 41. What is the difference between "slice" and "splice" in JavaScript arrays?

- **slice()**: Returns new array with selected elements, doesn't modify original
- **splice()**: Modifies original array by removing/adding elements

```
const arr = [1, 2, 3, 4, 5];

// slice - doesn't modify original
const sliced = arr.slice(1, 3); // [2, 3]
console.log(arr); // [1, 2, 3, 4, 5] - unchanged

// splice - modifies original
const spliced = arr.splice(1, 2, 'new'); // [2, 3]
console.log(arr); // [1, 'new', 4, 5] - modified
```

### 42. What is the purpose of the "arguments" object in JavaScript?

`arguments` is an array-like object containing function parameters. Not available in arrow functions.

```
function sum() {
let total = 0;
for (let i = 0; i < arguments.length; i++) {
total += arguments[i];
}
return total;
}

console.log(sum(1, 2, 3, 4)); // 10

// Modern alternative: rest parameters
function modernSum(...numbers) {
return numbers.reduce((a, b) => a + b, 0);
}
```

### 43. What are the different ways to define methods in JavaScript objects?

1. **Method Definition**: `obj = { method() {} }`
2. **Function Expression**: `obj = { method: function() {} }`
3. **Arrow Function**: `obj = { method: () => {} }`
4. **Dynamic Assignment**: `obj.method = function() {}`

### 44. Explain the event loop and how it handles asynchronous operations.

The event loop manages the call stack, web APIs, callback queue, and microtask queue to handle asynchronous operations without blocking the main thread. It continuously checks if the call stack is empty, and if so, moves callbacks from the queue to the stack.

### 45. What is event delegation and why is it useful?

Event delegation uses event bubbling to handle events on parent elements instead of individual child elements. This is efficient for dynamic content.

```
document.getElementById('parent').addEventListener('click', function(e) {
if (e.target.classList.contains('child-button')) {
console.log('Button clicked:', e.target.textContent);
}
});

// Benefits:
// 1. Reduced memory usage (one listener vs many)
// 2. Works for dynamically added elements
// 3. Cleaner code
```

### 46. What is the purpose of the "map" method in JavaScript?

`map()` creates a new array by calling a function on every element of the original array.

```
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num \* 2);
console.log(doubled); // [2, 4, 6, 8]

const users = [{name: 'John'}, {name: 'Jane'}];
const names = users.map(user => user.name);
```

### 47. How do you handle errors in promises?

Error handling in promises can be done using `.catch()` or try-catch with async/await:

```
// Using .catch()
promise
.then(result => processResult(result))
.catch(error => handleError(error));

// Using async/await
async function handlePromise() {
try {
const result = await promise;
processResult(result);
} catch (error) {
handleError(error);
}
}
```

### 48. What is the purpose of the "reduce" method in JavaScript?

`reduce()` executes a reducer function on each array element, resulting in a single output value.

```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

const objects = [{a: 1}, {b: 2}, {c: 3}];
const merged = objects.reduce((acc, obj) => ({...acc, ...obj}), {});
```

### 49. What are the different types of loops in JavaScript?

1. **for loop**: `for (let i = 0; i < 10; i++) {}`
2. **while loop**: `while (condition) {}`
3. **do-while loop**: `do {} while (condition)`
4. **for...in loop**: Iterates over object properties
5. **for...of loop**: Iterates over iterable values
6. **forEach()**: Array method for iteration

### 50. What is the purpose of the "forEach" method in JavaScript?

`forEach()` executes a function for each array element. Unlike `map()`, it doesn't return a new array.

```
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
console.log(`Index ${index}: ${num}`);
});
```

### 51. What are the different ways to manipulate the DOM in JavaScript?

- **Selecting Elements**: `getElementById()`, `querySelector()`, `querySelectorAll()`
- **Creating Elements**: `createElement()`, `createTextNode()`
- **Modifying Content**: `innerHTML`, `textContent`, `setAttribute()`
- **Styling**: `element.style.property`, `classList.add/remove/toggle()`
- **Events**: `addEventListener()`, `removeEventListener()`

### 52. What is the purpose of the "localStorage" and "sessionStorage" objects?

Both provide client-side storage:

- **localStorage**: Persistent storage until manually cleared
- **sessionStorage**: Storage cleared when tab/window closes

```
// localStorage
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

// sessionStorage
sessionStorage.setItem('key', 'value');
const value = sessionStorage.getItem('key');
```

### 53. How do you handle asynchronous operations in JavaScript?

Multiple approaches:

1. **Callbacks**: Functions passed as arguments
2. **Promises**: `.then()` and `.catch()` chains
3. **Async/Await**: Synchronous-looking asynchronous code
4. **Event Listeners**: For event-driven async operations

### 54. What is callback functions?

A callback is a function passed as an argument to another function and executed at a specific time or condition.

```
function processData(data, callback) {
const result = data.map(x => x \* 2);
callback(result);
}

processData([1, 2, 3], function(result) {
console.log(result); // [2, 4, 6]
});

// With async operations
function fetchData(url, callback) {
setTimeout(() => {
callback({ data: 'fetched' });
}, 1000);
}
```

### 55. What is event propagation in JavaScript?

Event propagation has three phases:

1. **Capturing Phase**: Event travels from root to target
2. **Target Phase**: Event reaches the target element
3. **Bubbling Phase**: Event bubbles back up to root

Use `stopPropagation()` to prevent further propagation.

### 56. What is the "instanceof" operator?

The `instanceof` operator checks if an object is an instance of a constructor or class.

```
class Animal {}
class Dog extends Animal {}

const dog = new Dog();
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
```

### 57. What is the purpose of the "in" operator?

The `in` operator checks if a property exists in an object.

```
const obj = { name: 'John', age: 30 };

console.log('name' in obj); // true
console.log('email' in obj); // false

// Works with inherited properties
console.log('toString' in obj); // true (inherited from Object)
```

## 📌 Summary

This comprehensive guide covers 58 JavaScript interview questions spanning from basic to advanced levels:

- **Basic Level** (Questions 1-11): Fundamentals of JavaScript
- **Moderate Level** (Questions 12-30): Core concepts and patterns
- **Advanced Level** (Questions 31-57): Complex topics and optimization techniques

Use this guide for interview preparation, learning, or as a reference for JavaScript concepts!
