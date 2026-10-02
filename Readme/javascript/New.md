# JavaScript — Intermediate Level Curriculum

A structured learning path covering the JavaScript concepts an intermediate developer needs to work confidently on real projects, and to move on to React, Next.js, and Node.js. Engine internals, JIT/AST details, and other expert-level material are intentionally left out — they belong in a separate Advanced/Expert track.

**Legend:** 🔥 Must Know &nbsp;|&nbsp; ⭐ Important &nbsp;|&nbsp; 📌 Good to Know

## Table of Contents

1. [Functions](#1-functions-) 🔥
2. [Scope & Execution](#2-scope--execution-) 🔥
3. [Objects](#3-objects-) 🔥
4. [Arrays](#4-arrays-) 🔥
5. [Object-Oriented Programming](#5-object-oriented-programming-) 🔥
6. [`this`, `call`/`apply`/`bind`](#6-this-call-apply-bind-) 🔥
7. [Asynchronous JavaScript](#7-asynchronous-javascript-) 🔥
8. [The Event Loop](#8-the-event-loop-) 🔥
9. [DOM & Events](#9-dom--events-) ⭐
10. [JavaScript Modules](#10-javascript-modules-) ⭐
11. [Error Handling](#11-error-handling-) ⭐
12. [Modern JavaScript Syntax](#12-modern-javascript-syntax-) 🔥
13. [Map / Set / WeakMap / WeakSet](#13-map--set--weakmap--weakset-) ⭐
14. [Regular Expressions](#14-regular-expressions-) 📌
15. [JSON & API Data](#15-json--api-data-) 🔥
16. [Browser Storage](#16-browser-storage-) ⭐
17. [Practical Performance](#17-practical-performance-) ⭐

---

## 1. Functions 🔥

### What is it?

A function is a reusable block of code. Intermediate JavaScript is really about knowing the *different shapes* functions come in and what each shape is good for: **function expressions**, **arrow functions**, functions with **default** and **rest parameters**, functions used as **callbacks**, functions that take/return other functions (**higher-order functions**), functions that "remember" their birth scope (**closures**), functions that run once and disappear (**IIFEs**), functions that call themselves (**recursion**), and functions with no side effects (**pure functions**).

### Why do we need it?

Different problems call for different function shapes. Callbacks let async code know "what to do when done." Closures let you build private state without classes. Higher-order functions let you avoid repeating loops. Pure functions make code predictable and testable. Knowing which tool fits which job is what separates "I can write JS" from "I can write good JS."

### Syntax

```js
// Function declaration (hoisted)
function add(a, b) { return a + b; }

// Function expression (not hoisted)
const subtract = function (a, b) { return a - b; };

// Arrow function
const multiply = (a, b) => a * b;

// Default parameters
function greet(name = 'Guest') { return `Hello, ${name}`; }

// Rest parameters (collects args into an array)
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }

// Spread syntax (expands an array/object)
const nums = [1, 2, 3];
console.log(Math.max(...nums));

// IIFE
(function () { console.log('runs immediately'); })();

// Closure
function counter() {
  let count = 0;
  return () => ++count;
}

// Recursion
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
```

### Example

```js
// Higher-order function: takes a function as an argument
function withLogging(fn) {
  return function (...args) {
    console.log('Calling with', args);
    return fn(...args);
  };
}

const loggedAdd = withLogging((a, b) => a + b);
console.log(loggedAdd(2, 3));

// Closure: private counter, impossible to modify from outside directly
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    value: () => count,
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.value());

// Pure vs impure
function pureAdd(a, b) { return a + b; }          // pure: no side effects
let total = 0;
function impureAdd(a) { total += a; return total; } // impure: mutates outside state
```

### Output

```
Calling with [ 2, 3 ]
5
2
```

### Real-world usage

- **Callbacks/higher-order functions**: `array.map(fn)`, event handlers, `setTimeout(fn, ms)`.
- **Closures**: private state in modules, memoization caches, `debounce`/`throttle` implementations.
- **Default/rest/spread**: writing flexible APIs (`function fetchData(url, options = {})`).
- **IIFE**: isolating code from the global scope (common before ES modules existed, still seen in bundled libraries).
- **Pure functions**: reducers in Redux, utility/helper functions, anything you want to unit test easily.
- **Recursion**: tree/DOM traversal, recursive data structures (JSON, linked lists).

### Common mistakes

- Using `arguments` inside an arrow function — arrow functions don't have their own `arguments`; use rest parameters instead.
- Forgetting that default parameters are evaluated **every call**, not once: `function f(arr = []) {}` gives a fresh array each time (this is usually what you want, unlike other languages).
- Writing "impure" functions that mutate arguments (`arr.push(...)`) and being surprised the caller's array changed too.
- Infinite recursion from a missing or wrong base case.
- Rest parameters must be **last**: `function f(...rest, a)` is a syntax error.

### Interview Question

**Q: What's the difference between a function declaration and a function expression, and why does it matter for hoisting?**
A: Function declarations are hoisted with their full body, so they can be called before they appear in the code. Function expressions (including arrow functions) are hoisted only as a variable — the variable is `undefined` (or in the temporal dead zone for `let`/`const`) until the line with the assignment runs, so calling them earlier throws an error.

### Practice

1. Write a `once(fn)` higher-order function that ensures `fn` can only ever run one time, no matter how many times the returned function is called.
2. Write a closure-based `createBankAccount(balance)` that exposes `deposit`, `withdraw`, and `getBalance`, without exposing the raw `balance` variable.
3. Convert a function that uses `arguments` into one that uses rest parameters.
4. Write a recursive function `sumDigits(n)` that adds up the digits of a number.
5. Identify and fix the impurity in: `function addItem(cart, item) { cart.push(item); return cart; }`.

---

## 2. Scope & Execution 🔥

### What is it?

Scope determines *where* a variable is visible. JavaScript has **global scope**, **function scope**, and **block scope**, and resolves variable names using **lexical scope** (based on where code is written, not where it's called) via the **scope chain**. Before any code runs, the JS engine sets up an **execution context** and pushes it onto the **call stack**; declarations are processed first, which produces the behavior known as **hoisting**, and the gap between hoisting and initialization for `let`/`const` is called the **Temporal Dead Zone (TDZ)**.

### Why do we need it?

Understanding scope tells you which variables a piece of code can see, why `var` inside a loop misbehaves, why you get "Cannot access 'x' before initialization," and how JavaScript finds the right variable when the same name exists in multiple places. This is the mental model behind closures, module isolation, and most "wait, why did that log `undefined`?" bugs.

### Syntax

```js
var globalVar = 'I am global';       // global scope

function outer() {
  var functionScoped = 'function';   // function scope

  if (true) {
    let blockScoped = 'block';       // block scope
    const alsoBlockScoped = 'block'; // block scope
  }
  // blockScoped is not visible here
}

// Hoisting
console.log(hoistedVar);  // undefined (declaration hoisted, not the value)
var hoistedVar = 1;

console.log(inTDZ);       // ReferenceError
let inTDZ = 2;
```

### Example

```js
const x = 'outer';

function scopeChainDemo() {
  const y = 'inner';
  function innermost() {
    // Looks up the scope chain: innermost -> scopeChainDemo -> global
    console.log(x, y);
  }
  innermost();
}
scopeChainDemo();

// Classic var-in-loop bug vs let fix
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 0);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 0);
}
```

### Output

```
outer inner
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

### Real-world usage

- **Lexical scope / closures**: module patterns, private helper variables, memoization.
- **Block scope (`let`/`const`)**: loop counters used in callbacks (React's `useEffect` cleanup timers, event handlers created in a loop).
- **Execution context / call stack**: understanding stack traces in error messages and "Maximum call stack size exceeded" errors from runaway recursion.
- **Hoisting/TDZ awareness**: avoiding bugs from using a variable before its `let`/`const` declaration, and understanding why some linters warn about "used before defined."

### Common mistakes

- Using `var` inside loops that create callbacks/closures, then being surprised every callback sees the same final value.
- Believing hoisting "moves the whole line" — only the declaration is hoisted, not the assigned value.
- Assuming `const` means "immutable value" — it only means the *binding* can't be reassigned; `const arr = []; arr.push(1);` is legal.
- Shadowing an outer variable by accident with the same name in an inner block, then reading the wrong one.

### Interview Question

**Q: What will this log, and why?**
```js
console.log(a);
console.log(b);
var a = 1;
let b = 2;
```
A: `undefined` then a `ReferenceError`. `var a` is hoisted and initialized to `undefined`, so logging it before assignment gives `undefined`. `let b` is hoisted but not initialized — it sits in the Temporal Dead Zone until its declaration line runs, so accessing it earlier throws.

### Practice

1. Predict the output of a `for (var i ...)` loop with `setTimeout` inside, then fix it two different ways (using `let`, and using an IIFE).
2. Write a function with three nested inner functions and explain, in your own words, how the scope chain resolves a variable used in the innermost one.
3. Explain why `typeof undeclaredVar` doesn't throw, but `console.log(undeclaredVar)` does.
4. Give an example where shadowing causes a real bug, then fix it.

---

## 3. Objects 🔥

### What is it?

Objects are collections of key/value pairs. The intermediate-level object toolkit covers **creating** objects, adding **methods**, pulling values out with **destructuring**, merging with **spread**, safely reading nested values with **optional chaining** (`?.`) and **nullish coalescing** (`??`), listing contents with `Object.keys()/values()/entries()`, merging with `Object.assign()`, and knowing the difference between a **shallow copy** and a **deep copy** (including the modern `structuredClone()`).

### Why do we need it?

Almost all real data — API responses, component props, config — arrives as objects. You need to read from them safely (a missing nested field shouldn't crash your app), copy them without accidentally sharing references, and transform them into arrays for iteration.

### Syntax

```js
// Creation
const user = { name: 'Ana', age: 28 };
const user2 = new Object();

// Methods
const person = {
  name: 'Sam',
  greet() { return `Hi, I'm ${this.name}`; },
};

// Destructuring
const { name, age = 18 } = user;
const { name: userName } = user; // rename while destructuring

// Spread
const updated = { ...user, age: 29 };

// Optional chaining & nullish coalescing
const city = user.address?.city ?? 'Unknown';

// Object.keys / values / entries
Object.keys(user);    // ['name', 'age']
Object.values(user);  // ['Ana', 28]
Object.entries(user); // [['name','Ana'], ['age',28]]

// Object.assign
const merged = Object.assign({}, user, { age: 30 });

// structuredClone (deep copy)
const deepCopy = structuredClone(user);
```

### Example

```js
const order = {
  id: 1,
  customer: { name: 'Ana', address: { city: 'Lisbon' } },
};

// Shallow copy shares nested references
const shallow = { ...order };
shallow.customer.name = 'Maria';
console.log(order.customer.name); // 'Maria' -- original mutated too!

// Deep copy is fully independent
const deep = structuredClone(order);
deep.customer.name = 'Julia';
console.log(order.customer.name); // still 'Maria', unaffected

// Safe nested access
console.log(order.customer?.address?.zip ?? 'No zip on file');
```

### Output

```
Maria
Maria
No zip on file
```

### Real-world usage

- **Destructuring**: pulling props in React components (`function Card({ title, price }) {}`), unpacking config objects.
- **Spread**: updating state immutably (`setState({ ...state, loading: true })`).
- **Optional chaining/nullish coalescing**: safely reading API responses where fields may be missing (`response?.data?.items ?? []`).
- **Object.entries()**: turning an object into an array so you can `.map()`/`.filter()` it (e.g., rendering a settings object as a list).
- **Deep vs shallow copy**: avoiding "spooky action at a distance" bugs when updating nested state in frameworks that rely on immutability.

### Common mistakes

- Using `{ ...obj }` (spread) or `Object.assign({}, obj)` expecting a *deep* copy — both are shallow; nested objects/arrays are still shared.
- Using `JSON.parse(JSON.stringify(obj))` for deep copies and being surprised it silently drops functions, `undefined`, `Date` objects (converts to strings), and `Map`/`Set`. Prefer `structuredClone()`.
- Chaining `?.` but forgetting `??` still needs to handle `0` or `''` correctly — `??` (unlike `||`) only falls back on `null`/`undefined`, which is usually what you want.
- Forgetting that `Object.keys()` only returns **own enumerable** properties, not inherited ones.

### Interview Question

**Q: What's the difference between `??` and `||` when providing a default value?**
A: `||` falls back whenever the left side is falsy (`0`, `''`, `false`, `null`, `undefined`, `NaN`). `??` only falls back when the left side is `null` or `undefined`. So `0 || 10` gives `10`, but `0 ?? 10` gives `0` — important when `0` or `''` are valid values.

### Practice

1. Write a function that safely reads `user.profile.settings.theme`, defaulting to `'light'` if any part of the path is missing.
2. Given `{ a: 1, b: 2, c: 3 }`, use `Object.entries()` to produce `['a=1', 'b=2', 'c=3']`.
3. Demonstrate, with code, the difference between a shallow copy and `structuredClone()` on an object with a nested array.
4. Rewrite `Object.assign({}, defaults, userOptions)` using object spread syntax.

---

## 4. Arrays 🔥

### What is it?

Arrays are ordered lists, and JavaScript gives you a rich set of built-in methods to transform them: `map()`, `filter()`, `reduce()`, `find()`, `findIndex()`, `some()`, `every()`, `forEach()`, `sort()`, `slice()`, `splice()`, `flat()`, `flatMap()`, and `Array.from()`.

### Why do we need it?

These methods replace hand-written `for` loops with clear, declarative, chainable operations — "give me a new array of just the even numbers doubled" reads and debugs far more easily as `.filter().map()` than a manual loop with an accumulator.

### Syntax

```js
const nums = [5, 2, 8, 1, 9];

nums.map(n => n * 2);
nums.filter(n => n > 3);
nums.reduce((acc, n) => acc + n, 0);
nums.find(n => n > 5);
nums.findIndex(n => n > 5);
nums.some(n => n > 8);
nums.every(n => n > 0);
nums.forEach(n => console.log(n));
[...nums].sort((a, b) => a - b);
nums.slice(1, 3);
nums.splice(1, 2, 'x', 'y');
[1, [2, 3], [4, [5]]].flat();       // one level deep by default
[1, [2, 3], [4, [5]]].flat(Infinity);
[1, 2, 3].flatMap(n => [n, n * 2]);
Array.from({ length: 3 }, (_, i) => i * 2); // [0, 2, 4]
```

### Example: which methods mutate the original array

| Method | Mutates original? | Returns |
|---|---|---|
| `map()` | ❌ No | new array |
| `filter()` | ❌ No | new array |
| `reduce()` | ❌ No | single value |
| `find()` / `findIndex()` | ❌ No | element / index |
| `some()` / `every()` | ❌ No | boolean |
| `forEach()` | ❌ No (but callback can mutate elements) | `undefined` |
| `slice()` | ❌ No | new array |
| `flat()` / `flatMap()` | ❌ No | new array |
| `sort()` | ✅ **Yes** | the same array, sorted in place |
| `splice()` | ✅ **Yes** | array of removed elements |

```js
const original = [3, 1, 2];
const sorted = original.sort();
console.log(original); // [1, 2, 3] -- original was mutated!
console.log(original === sorted); // true, same array reference

const safeSorted = [...original].sort(); // copy first if you need the original untouched
```

### Output

```
[ 1, 2, 3 ]
true
```

### Real-world usage

- `map()`/`filter()`: transforming API data into UI-ready shapes, rendering lists in React (`items.map(item => <li>{item.name}</li>)`).
- `reduce()`: totals, grouping items by category, building lookup objects from arrays.
- `find()`/`some()`/`every()`: form validation ("does every field pass validation?"), searching a list for a matching record.
- `flat()`/`flatMap()`: normalizing nested API responses (e.g., an array of arrays of comments).
- `Array.from()`: converting array-like values (`NodeList`, `arguments`, a `Set`) into real arrays, or generating sequences.

### Common mistakes

- Calling `.sort()` or `.splice()` directly on state in React/Redux (mutates in place) instead of copying first with `[...arr]`.
- Sorting numbers with the default `.sort()` (no comparator) — it sorts **as strings**, so `[10, 2, 1].sort()` gives `[1, 10, 2]`, not `[1, 2, 10]`.
- Using `forEach()` when you actually want a new array — `forEach()` always returns `undefined`; use `map()` instead.
- Confusing `find()` (returns the element) with `findIndex()` (returns the index) or `filter()` (returns an array of all matches, not just one).

### Interview Question

**Q: Why does `[10, 1, 2].sort()` return `[1, 10, 2]`?**
A: `Array.prototype.sort()` converts elements to strings and compares them lexicographically by default. `"10"` sorts before `"2"` alphabetically. To sort numbers correctly, pass a comparator: `.sort((a, b) => a - b)`.

### Practice

1. Given an array of order objects, use `reduce()` to compute the total revenue.
2. Use `filter()` + `map()` to get the names of all users older than 18, in one chain.
3. Write a function that flattens a deeply nested array using `flat(Infinity)`, then again manually with recursion.
4. Given `[1,2,3,4,5]`, explain (without running it) what `arr.splice(2,1)` returns and what `arr` looks like afterward.
5. Fix this buggy React-style state update: `state.items.sort((a,b) => a - b); setItems(state.items);`

---

## 5. Object-Oriented Programming 🔥

### What is it?

Object-Oriented Programming (OOP) organizes code around **objects** that bundle data (**properties**) and behavior (**methods**). JavaScript implements OOP through **classes** (syntax sugar over prototypes), **constructors** that build new **instances**, and the four classic pillars: **encapsulation**, **abstraction**, **inheritance**, and **polymorphism** — plus JS-specific mechanics: `extends`/`super`, **static methods**, **getters/setters**, **private fields**, the **prototype**/**prototype chain**, **prototypal inheritance**, and the modern preference for **composition over inheritance**.

Below, every concept gets its own short, practical example, as requested — without diving into engine internals.

### Why do we need it?

OOP gives you a way to model real-world things (a `User`, a `Product`, a `ShoppingCart`) as self-contained units, avoid duplicating logic, and control what other parts of your code are allowed to touch. React, Node.js frameworks, and most libraries you'll use are built on these ideas even when you're writing functional-style code on top of them.

### Syntax & per-concept examples

**Objects & instances** — an object is a single "thing"; a class is a blueprint; an instance is an object built from that blueprint.
```js
class Product {}
const p1 = new Product(); // p1 is an instance of Product
```

**Classes & constructors** — `constructor()` runs when you create a new instance and sets up its initial state.
```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const laptop = new Product('Laptop', 1200);
```

**Methods & properties** — properties store data; methods define behavior.
```js
class Product {
  constructor(name, price) {
    this.name = name;   // property
    this.price = price; // property
  }
  getLabel() {           // method
    return `${this.name}: $${this.price}`;
  }
}
console.log(new Product('Mouse', 20).getLabel()); // "Mouse: $20"
```

**Encapsulation** — bundling data with the methods that operate on it, and hiding internal details.
```js
class BankAccount {
  #balance = 0; // hidden from outside
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// acc.#balance -> SyntaxError, truly private
```

**Abstraction** — exposing a simple interface while hiding complexity.
```js
class EmailService {
  send(to, message) {
    this.#connect();
    this.#authenticate();
    this.#transmit(to, message); // caller doesn't need to know these steps
  }
  #connect() { /* ... */ }
  #authenticate() { /* ... */ }
  #transmit() { /* ... */ }
}
```

**Inheritance, `extends`, `super`** — one class reusing/extending another's behavior.
```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);        // calls Animal's constructor
    this.breed = breed;
  }
  speak() { return `${super.speak()}, specifically a bark`; }
}
console.log(new Dog('Rex', 'Lab').speak());
```

**Polymorphism** — different classes responding to the same method call in their own way.
```js
class Cat extends Animal {
  speak() { return `${this.name} meows`; }
}
[new Dog('Rex'), new Cat('Milo')].forEach(a => console.log(a.speak()));
```

**Static methods** — belong to the class itself, not to instances (utility/factory functions).
```js
class MathUtils {
  static square(n) { return n * n; }
}
console.log(MathUtils.square(4)); // 16, no instance needed
```

**Getters & setters** — run code when a property is read or assigned, while keeping normal property syntax.
```js
class Circle {
  constructor(radius) { this.radius = radius; }
  get area() { return Math.PI * this.radius ** 2; }
  set diameter(d) { this.radius = d / 2; }
}
const c = new Circle(5);
console.log(c.area);   // computed on read
c.diameter = 20;
console.log(c.radius); // 10
```

**Private fields** — `#field` is only accessible inside the class body.
```js
class Counter {
  #count = 0;
  increment() { return ++this.#count; }
}
```

**Prototype & prototype chain** — every object links to another object (its prototype); lookups walk up this chain until found or `null`.
```js
function Vehicle(type) { this.type = type; }
Vehicle.prototype.describe = function () { return `A ${this.type}`; };
const car = new Vehicle('car');
console.log(car.describe());        // found on Vehicle.prototype
console.log(car.__proto__ === Vehicle.prototype); // true
```

**Prototypal inheritance** — the mechanism `class`/`extends` compile down to; objects inheriting directly from other objects.
```js
const animal = { speak() { return `${this.name} makes a sound`; } };
const dog = Object.create(animal); // dog's prototype is `animal`
dog.name = 'Rex';
console.log(dog.speak()); // inherited method, "Rex makes a sound"
```

**Composition vs inheritance** — building behavior by combining small, focused pieces instead of a deep class hierarchy.
```js
const canFly = (obj) => ({ ...obj, fly: () => console.log(`${obj.name} flies`) });
const canSwim = (obj) => ({ ...obj, swim: () => console.log(`${obj.name} swims`) });

const duck = canSwim(canFly({ name: 'Duck' }));
duck.fly();  // "Duck flies"
duck.swim(); // "Duck swims"
// A "Duck extends Bird extends Animal" hierarchy would struggle to also give a
// Penguin `swim` without `fly` -- composition mixes in only what's needed.
```

### Output (combined run of the inheritance/polymorphism example)

```
Rex makes a sound
Milo meows
```

### Real-world usage

- **Classes**: modeling domain entities (`User`, `Order`, `Invoice`) in backend code; React class components (legacy, still seen in older codebases).
- **Encapsulation/private fields**: hiding internal cache/state in a service class so consumers can't corrupt it.
- **Inheritance**: shared base classes for things that are genuinely "is-a" relationships (e.g., `HttpError extends Error`).
- **Static methods**: factory functions (`User.fromJSON(data)`), utility namespaces.
- **Getters/setters**: computed properties that look like plain fields (`invoice.total`), validation on assignment.
- **Composition over inheritance**: the modern default in JS/React — small reusable functions/hooks combined, rather than deep class hierarchies.

### Common mistakes

- Forgetting to call `super(...)` in a subclass constructor before using `this` — throws a `ReferenceError`.
- Reaching for inheritance when composition would be simpler and more flexible (deep hierarchies become hard to change).
- Assuming private fields (`#field`) can be accessed like `this['#field']` — they can't; they're not normal string-keyed properties.
- Confusing `Object.create(proto)` (sets the prototype) with `Object.assign({}, proto)` (copies properties, no live link).
- Overriding a method in a subclass and forgetting `super.method()` when you actually wanted to extend, not replace, the parent's behavior.

### Interview Question

**Q: What is the difference between classical inheritance (as in Java/C++) and JavaScript's prototypal inheritance?**
A: Classical inheritance copies behavior from a class blueprint at instantiation. JavaScript objects instead hold a live link to a **prototype object**, and property/method lookups walk up this chain at runtime. `class`/`extends` in modern JS is syntax sugar over this same prototype mechanism — there's no separate "class" concept at runtime.

### Practice

1. Build a `Shape` base class with `area()`, and `Circle`/`Rectangle` subclasses that override it — call `area()` polymorphically on an array of mixed shapes.
2. Add a private `#id` field and a static `generateId()` method to a `User` class.
3. Rewrite a two-level inheritance hierarchy (`Bird extends Animal`, `Penguin extends Bird`) using composition instead, and explain which version handles a "can't fly" penguin more cleanly.
4. Use `Object.create()` to build a `car` object that inherits a `drive()` method from a `vehicle` prototype object, without using `class` at all.
5. Add a `get`/`set` pair to a `Temperature` class that keeps Celsius and Fahrenheit in sync.

---

## 6. `this`, `call`/`apply`/`bind` 🔥

### What is it?

`this` refers to "the object executing the current code," and its value is determined by **how a function is called**, not where it's defined — except for arrow functions, which don't have their own `this` at all and instead use the `this` from their surrounding (lexical) scope. `call()`, `apply()`, and `bind()` let you explicitly control what `this` is.

### Why do we need it?

`this` is one of the most common sources of confusion in JS because the same function can behave differently depending on how it's invoked. Knowing the rules removes the guesswork — critical for event handlers, class methods passed as callbacks, and working with any library that relies on `this`.

### Syntax & output-based examples

**`this` in objects** — refers to the object the method was called on.
```js
const user = {
  name: 'Ana',
  greet() { console.log(this.name); },
};
user.greet(); // "Ana"
```

**`this` in regular functions** — depends on the call site; in non-strict mode it's the global object, in strict mode / modules it's `undefined`.
```js
function show() { console.log(this); }
show(); // undefined (in strict mode / ES modules) or the global object otherwise
```

**`this` in arrow functions** — lexical; inherited from where the arrow function was *written*, not how it's called.
```js
const user2 = {
  name: 'Sam',
  greet: () => console.log(this.name),
};
user2.greet(); // undefined -- `this` here is the outer (module/global) scope, not user2
```

**`this` in classes** — refers to the instance, same rule as object methods.
```js
class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(this.name); }
}
new Person('Lee').greet(); // "Lee"
```

**`this` with constructor functions** — refers to the newly created object when called with `new`.
```js
function Car(model) { this.model = model; }
const car = new Car('Civic');
console.log(car.model); // "Civic"
```

**A classic gotcha — losing `this` when passing a method as a callback:**
```js
class Timer {
  constructor() { this.seconds = 0; }
  tick() { this.seconds++; console.log(this.seconds); }
}
const t = new Timer();
setTimeout(t.tick, 1000); // TypeError: Cannot read properties of undefined
// `tick` is called plain, detached from `t`, so `this` is undefined (strict mode)
```

**`call()` — invoke immediately, pass args individually:**
```js
function introduce(greeting) { console.log(`${greeting}, I'm ${this.name}`); }
const person = { name: 'Nora' };
introduce.call(person, 'Hi'); // "Hi, I'm Nora"
```

**`apply()` — invoke immediately, pass args as an array:**
```js
introduce.apply(person, ['Hello']); // "Hello, I'm Nora"
```

**`bind()` — returns a new function with `this` permanently fixed:**
```js
const boundIntroduce = introduce.bind(person);
boundIntroduce('Hey'); // "Hey, I'm Nora"

// Fixing the Timer bug above:
setTimeout(t.tick.bind(t), 1000); // logs 1, correctly bound to t
```

### Output

```
Ana
undefined
undefined
Lee
Civic
Hi, I'm Nora
Hello, I'm Nora
Hey, I'm Nora
```

### Real-world usage

- **Class methods as event handlers**: React class components historically required `this.handleClick = this.handleClick.bind(this)` in the constructor for this exact reason.
- **`call`/`apply`**: borrowing array methods on array-like objects (`Array.prototype.slice.call(arguments)`), function composition utilities.
- **Arrow functions**: the modern fix for `this` issues — using an arrow function as a class field or callback automatically captures the surrounding `this`.
- **`bind`**: creating pre-configured functions (`const double = multiply.bind(null, 2)`), fixing detached method references.

### Common mistakes

- Destructuring or passing a method off an object (`const { greet } = user; greet();`) and losing its `this` binding.
- Defining event handlers or class methods as arrow functions when you actually need dynamic `this` (e.g., a method meant to be shared across multiple instances via the prototype).
- Confusing `call`/`apply` argument order — `call` takes args individually, `apply` takes a single array.
- Assuming `bind()` mutates the original function — it doesn't; it returns a **new** function.

### Interview Question

**Q: Why does this code log `undefined` instead of the button's label?**
```js
class Button {
  constructor(label) { this.label = label; }
  onClick() { console.log(this.label); }
}
const btn = new Button('Submit');
element.addEventListener('click', btn.onClick);
```
A: `btn.onClick` is passed as a bare function reference, detached from `btn`. When the browser calls it, `this` is no longer `btn` (it's `undefined` in strict mode, or the DOM element in non-strict mode). Fix with `btn.onClick.bind(btn)`, an arrow-function wrapper (`() => btn.onClick()`), or by making `onClick` an arrow class field.

### Practice

1. Predict the output of calling a plain function, an object method, and an arrow function version of the same logic, all logging `this`.
2. Fix the `Timer` bug above using three different techniques: `.bind()`, an arrow-function wrapper, and an arrow class field.
3. Use `apply()` to find the max of an array of numbers without the spread operator.
4. Write `myBind`, a simplified re-implementation of `Function.prototype.bind`, using `call` internally.

---

## 7. Asynchronous JavaScript 🔥

### What is it?

Asynchronous JavaScript lets code keep running while waiting on something slow (a timer, a network request) instead of freezing the whole program. JavaScript evolved through three styles: **callbacks** → **Promises** (with states, `.then()/.catch()/.finally()`, chaining, and combinators like `Promise.all()`) → **`async`/`await`** (syntax sugar over Promises).

### Why do we need it?

JavaScript is single-threaded — it can only do one thing at a time. Without async patterns, a network request or a timer would freeze the entire page/app until it finished. Async code lets you say "start this, and continue once it's done," without blocking everything else.

### Syntax

```js
// Synchronous vs asynchronous
console.log('1');
setTimeout(() => console.log('2 (async)'), 0);
console.log('3');
// Logs: 1, 3, 2 (async) -- the timer callback runs later, not immediately

// Callback style
function loadUser(id, callback) {
  setTimeout(() => callback(null, { id, name: 'Ana' }), 500);
}
loadUser(1, (err, user) => console.log(user));

// Callback hell (nested, hard to read)
loadUser(1, (err, user) => {
  loadOrders(user.id, (err, orders) => {
    loadOrderDetails(orders[0].id, (err, details) => {
      console.log(details); // deeply nested "pyramid of doom"
    });
  });
});

// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 500); // or reject(new Error('failed'))
});
promise
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log('cleanup'));

// Promise chaining
loadUserPromise(1)
  .then(user => loadOrdersPromise(user.id))
  .then(orders => loadOrderDetailsPromise(orders[0].id))
  .then(details => console.log(details))
  .catch(err => console.error('Something failed:', err));

// Promise combinators
Promise.all([p1, p2, p3]);        // rejects if ANY rejects; resolves with all values
Promise.allSettled([p1, p2, p3]); // never rejects; reports each result's status
Promise.race([p1, p2, p3]);       // settles as soon as the FIRST one settles
Promise.any([p1, p2, p3]);        // resolves as soon as the FIRST one fulfills

// async/await
async function getUser() {
  try {
    const response = await fetch('/api/user/1');
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Failed to load user:', err);
  }
}
```

### Example

```js
async function loadDashboard() {
  try {
    const [user, posts] = await Promise.all([
      fetch('/api/user').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
    ]);
    console.log(user, posts);
  } catch (err) {
    console.error('Dashboard failed to load:', err);
  }
}
```

### Output

```
1
3
2 (async)
```

### Real-world usage

- **`fetch()` + async/await**: the standard way to call APIs in modern frontend and Node.js code.
- **`Promise.all()`**: loading multiple independent resources in parallel (user profile + notifications + settings) instead of one after another.
- **`Promise.allSettled()`**: batch operations where you want to know which succeeded/failed without one failure aborting everything (e.g., uploading multiple files).
- **`Promise.race()`**: implementing timeouts (race a fetch against a timer).
- **`try/catch` with `await`**: handling network errors, validation errors, and failed API calls gracefully instead of crashing.

### Common mistakes

- Forgetting `await` on an async call, then trying to use the Promise object itself as if it were the resolved value.
- Using `Promise.all()` when one request failing should not cancel the others — `Promise.allSettled()` is usually the right tool there.
- Not handling rejections at all ("unhandled promise rejection"), especially inside `async` functions without a `try/catch`.
- Writing `await` inside a `.map()` callback expecting it to wait for each iteration — `map()` doesn't await; use `Promise.all(items.map(async item => ...))` or a `for...of` loop instead.
- Mixing `.then()` chains with `async/await` in the same function unnecessarily, making the code harder to follow.

### Interview Question

**Q: What's the difference between `Promise.all()` and `Promise.allSettled()`?**
A: `Promise.all()` resolves with an array of values only if *every* promise fulfills — if any one rejects, the whole thing rejects immediately, and you don't get access to results from the ones that succeeded. `Promise.allSettled()` always resolves once every promise has settled (whether fulfilled or rejected), giving you an array of `{status, value}` or `{status, reason}` objects for each — useful when you want to know the outcome of everything rather than fail-fast.

### Practice

1. Rewrite a 3-level-deep callback pyramid using Promise chaining, then again using `async/await`.
2. Write an async function that fetches two URLs in parallel with `Promise.all()` and handles a failure from either one.
3. Implement a `fetchWithTimeout(url, ms)` using `Promise.race()`.
4. Use `Promise.allSettled()` to upload an array of 5 files and log which ones succeeded vs. failed.
5. Explain, without running it, what happens if you forget the `await` before `fetch(...)` inside an `async` function.

---

## 8. The Event Loop 🔥

### What is it?

The event loop is the mechanism that lets single-threaded JavaScript handle asynchronous work. Four pieces cooperate: the **call stack** (runs your synchronous code), **Web APIs / runtime APIs** (the browser or Node.js handles timers, network requests, etc. outside JS), the **callback/task queue** (holds completed macrotask callbacks like `setTimeout`), and the **microtask queue** (holds Promise callbacks, which run with higher priority). The **event loop** itself repeatedly checks: "Is the call stack empty? If so, run all pending microtasks, then take one task from the macrotask queue."

### Why do we need it?

This is the concept behind *why* `setTimeout(fn, 0)` doesn't run immediately, why `Promise.then()` callbacks run before `setTimeout` callbacks even with a 0ms delay, and why a long synchronous loop freezes your UI. Interview questions about "predict the output" almost always test this.

### Syntax / mental model

```
Call Stack        <- runs synchronous code, one frame at a time
   |
   v (when stack is empty)
Microtask Queue    <- Promise .then/.catch/.finally, queueMicrotask() -- ALL drained before next step
   |
   v (when microtasks are empty)
Macrotask Queue    <- setTimeout, setInterval, I/O, UI events -- ONE task run per loop tick
```

### Example 1 — classic ordering

```js
console.log('1: sync start');

setTimeout(() => console.log('2: macrotask (setTimeout)'), 0);

Promise.resolve().then(() => console.log('3: microtask (promise)'));

console.log('4: sync end');
```

**Output:**
```
1: sync start
4: sync end
3: microtask (promise)
2: macrotask (setTimeout)
```
*Why:* synchronous code always finishes first. Then, before the engine looks at the macrotask queue, it drains the **entire** microtask queue. Only then does it run one macrotask.

### Example 2 — async/await is still Promise-based

```js
console.log('A');

async function run() {
  console.log('B');
  await null; // pauses here, rest of the function becomes a microtask
  console.log('C');
}
run();

console.log('D');
```

**Output:**
```
A
B
D
C
```
*Why:* everything before the first `await` runs synchronously (that's why `B` logs before `D`). The code *after* `await` is scheduled as a microtask, so it waits for the current synchronous run (`D`) to finish first.

### Example 3 — microtasks can starve macrotasks... briefly

```js
setTimeout(() => console.log('timeout'), 0);

Promise.resolve()
  .then(() => console.log('microtask 1'))
  .then(() => console.log('microtask 2'));

console.log('sync');
```

**Output:**
```
sync
microtask 1
microtask 2
timeout
```
*Why:* each `.then()` schedules a new microtask; the engine keeps draining the microtask queue completely (even newly added ones) before touching the macrotask queue.

### Real-world usage

- Explains why UI updates can feel "stuck" behind a chain of `.then()` calls, and why chaining too many microtasks can delay rendering.
- Debugging race conditions: knowing that `await` yields back to the event loop helps explain why state can change between two `await` lines.
- Understanding `setTimeout(fn, 0)` as "run this as soon as possible, but only after the current call stack **and** all pending microtasks are done" — not "immediately."

### Common mistakes

- Assuming `setTimeout(fn, 0)` runs before or in the middle of synchronous code — it never does; it waits for the stack to fully clear.
- Assuming all Promise `.then()` callbacks run in one single microtask "batch" processed instantly — each `.then()` adds a **new** microtask, so long chains can still delay a macrotask, just not by much.
- Thinking `async` functions run on a separate thread — they don't; JS is still single-threaded, `await` just yields control back to the event loop.
- Writing a tight synchronous loop (e.g., processing a huge array) and being surprised the whole page freezes — nothing else (including rendering) can run until the call stack clears.

### Interview Question

**Q: Why does this log `'end'` before `'promise'` and `'timeout'`, and why does `'promise'` come before `'timeout'`?**
```js
console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');
```
A: Synchronous code (`start`, `end`) always runs first because it's already on the call stack. Once the stack is empty, the engine drains the microtask queue completely — so the Promise's `.then()` callback (`promise`) runs before the event loop moves on to process the macrotask queue, where the `setTimeout` callback (`timeout`) is waiting.

### Practice

1. Without running it, write down the exact output order of three `console.log`s mixed with a `setTimeout(fn, 0)` and a `Promise.resolve().then(fn)`.
2. Add a second `.then()` to the same promise and predict how the order changes relative to the `setTimeout`.
3. Explain what happens to UI responsiveness if you replace an `await fetch(...)` with a synchronous loop that runs for 5 seconds.
4. Predict the output of an `async` function that has two `console.log`s with an `await` between them, called alongside a plain synchronous `console.log` right after it's invoked.

---

## 9. DOM & Events ⭐

### What is it?

The DOM (Document Object Model) is the browser's live, tree-shaped representation of your HTML, which JavaScript can read and modify. This section covers selecting elements (`querySelector()`, `querySelectorAll()`, `getElementById()`), creating/modifying elements, `classList`, attributes, listening for events with `addEventListener()`, and how events travel through the tree (**bubbling**, **capturing**, **delegation**), plus `preventDefault()`/`stopPropagation()`.

### Why do we need it?

Any interactive web page — form validation, click handlers, dynamic content — requires reading and updating the DOM and responding to user actions. Even in React/Vue apps, understanding the underlying DOM event model helps you debug things the framework abstracts away.

### Syntax

```js
// Selecting
const el = document.getElementById('app');
const first = document.querySelector('.item');
const all = document.querySelectorAll('.item'); // NodeList, not a live collection

// Creating & modifying
const li = document.createElement('li');
li.textContent = 'New item';
document.querySelector('ul').appendChild(li);

// classList & attributes
li.classList.add('active');
li.classList.toggle('hidden');
li.setAttribute('data-id', '42');
li.getAttribute('data-id');

// Events
button.addEventListener('click', (event) => {
  console.log('Clicked!', event.target);
});

// Bubbling vs capturing
parent.addEventListener('click', handler, { capture: true }); // capturing phase
child.addEventListener('click', handler);                     // bubbling phase (default)

// Event delegation
list.addEventListener('click', (event) => {
  if (event.target.matches('li')) {
    console.log('Item clicked:', event.target.textContent);
  }
});

// preventDefault / stopPropagation
form.addEventListener('submit', (event) => {
  event.preventDefault();     // stop the browser's default form submission
});
child.addEventListener('click', (event) => {
  event.stopPropagation();    // stop the event from bubbling further up
});
```

### Example

```html
<ul id="list">
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>
```
```js
// One listener handles all current AND future <li> items -- event delegation
document.getElementById('list').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`You clicked: ${event.target.textContent}`);
  }
});
```

### Output

```
You clicked: Bananas   // after clicking the "Bananas" item
```

### Real-world usage

- **Event delegation**: efficiently handling clicks on a dynamically-growing list (chat messages, table rows) with a single listener on the parent, rather than one listener per row.
- **`preventDefault()`**: stopping a form from reloading the page so you can submit it via `fetch()` instead.
- **`stopPropagation()`**: preventing a click on a modal's close button from also triggering a "click outside to close" handler on the backdrop.
- **`classList`**: toggling UI states (active tab, open menu, error styling) without manually managing className strings.

### Common mistakes

- Attaching a listener to every individual list item instead of using delegation — wastes memory and misses items added later.
- Forgetting `querySelectorAll()` returns a **static** NodeList — it won't automatically include elements added to the DOM afterward.
- Confusing `stopPropagation()` (stops the event from continuing to bubble/capture) with `preventDefault()` (stops the browser's default action) — they solve different problems and are often needed together but are not interchangeable.
- Checking `event.target` when you meant `event.currentTarget` — `target` is whatever was actually clicked (could be a child element), `currentTarget` is the element the listener is attached to.

### Interview Question

**Q: What is event delegation and why is it useful?**
A: Event delegation relies on event bubbling — instead of attaching a listener to every child element, you attach one listener to a common parent and check `event.target` to determine which child triggered it. This is more memory-efficient and automatically works for elements added to the DOM later, since the listener lives on the (unchanging) parent, not the (changing) children.

### Practice

1. Build a to-do list where clicking a "delete" button (added dynamically) removes its item, using event delegation on the parent list.
2. Demonstrate the difference between the bubbling and capturing phase with three nested `div`s and `console.log`s.
3. Write a form handler that calls `preventDefault()` and submits the data with `fetch()` instead of a full page reload.
4. Explain why `document.querySelectorAll('.item').forEach(...)` works but you can't call `.forEach()` directly on the result of `document.getElementsByClassName('item')`.

---

## 10. JavaScript Modules ⭐

### What is it?

Modules let you split code into separate files and explicitly control what's shared between them, using `export`/`import` (ES Modules — the modern standard) or `require()`/`module.exports` (CommonJS — the older Node.js standard, still common in many codebases).

### Why do we need it?

Without modules, every file's variables live in one shared global space, causing naming collisions and making it impossible to know what a file depends on. Modules give each file its own scope and an explicit, readable list of what it needs and what it provides.

### Syntax

```js
// --- ES Modules ---
// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; } // one default export per file

// app.js
import multiply, { PI, add } from './math.js';
import * as math from './math.js'; // import everything as a namespace object

// Dynamic import (loads on demand, returns a Promise)
button.addEventListener('click', async () => {
  const { showModal } = await import('./modal.js');
  showModal();
});

// --- CommonJS (Node.js) ---
// math.js
function add(a, b) { return a + b; }
module.exports = { add };
module.exports.PI = 3.14159;

// app.js
const { add, PI } = require('./math.js');
```

### Example

```js
// utils.js
export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}
export default class Logger {
  log(msg) { console.log(`[LOG] ${msg}`); }
}

// main.js
import Logger, { formatCurrency } from './utils.js';
const logger = new Logger();
logger.log(formatCurrency(19.999)); // "[LOG] $20.00"
```

### Output

```
[LOG] $20.00
```

### Real-world usage

- **Named exports**: exporting multiple utility functions/constants from a helpers file.
- **Default exports**: exporting the "main thing" a file provides (a component, a class).
- **Dynamic `import()`**: code-splitting in frameworks like React/Next.js — loading a heavy component or library only when needed, improving initial load time.
- **CommonJS**: still the default in many existing Node.js packages and older backend codebases, even though ESM is now standard for new projects.

### Common mistakes

- Mixing `require()` and `import` in the same file without the build tool/runtime configured to support both — this causes hard-to-debug errors.
- Forgetting that ESM `import`s are **hoisted** and must be at the top level (can't be inside an `if` block) — use dynamic `import()` when conditional loading is needed.
- Having two default exports in one file, or forgetting the file extension in relative imports (`./math` vs `./math.js`) in environments that require it.
- Circular imports between two modules — usually a sign the code needs restructuring.

### Interview Question

**Q: What's the difference between a named export and a default export, and can you have both in one file?**
A: A named export (`export const x`) must be imported with the exact same name (or renamed with `as`), and a file can have any number of them. A default export (`export default x`) is imported under whatever name you choose and a file can have at most one. Yes, a single file can freely mix one default export with multiple named exports.

### Practice

1. Split a set of math helper functions into their own module using named exports, then import only two of them into another file.
2. Convert a small CommonJS module (`module.exports`/`require`) into ES Module syntax.
3. Use a dynamic `import()` to load a "chart" module only when a user clicks a "Show Chart" button.
4. Explain, in your own words, why `import` statements can't be placed inside an `if` block but `require()` calls can.

---

## 11. Error Handling ⭐

### What is it?

Error handling is how you deal with things going wrong: `try`/`catch`/`finally` blocks, throwing your own errors with `throw`, the built-in `Error` object (and custom error subclasses), and handling errors from Promises and `async`/`await`.

### Why do we need it?

Things fail — networks drop, users enter bad input, files are missing. Without structured error handling, one failure crashes the whole app (or fails silently, which is worse). Good error handling produces clear, actionable failures instead of confusing behavior.

### Syntax

```js
// try / catch / finally
try {
  riskyOperation();
} catch (error) {
  console.error('Something went wrong:', error.message);
} finally {
  console.log('This always runs, error or not');
}

// throw
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

// Custom errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}
throw new ValidationError('Email is required', 'email');

// Promise errors
fetchUser()
  .then(user => console.log(user))
  .catch(err => console.error('Fetch failed:', err));

// async/await errors
async function loadUser() {
  try {
    const user = await fetchUser();
    return user;
  } catch (err) {
    console.error('Failed to load user:', err);
    throw err; // re-throw if the caller needs to know too
  }
}
```

### Example

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateAge(age) {
  if (typeof age !== 'number') throw new ValidationError('Age must be a number', 'age');
  if (age < 0) throw new ValidationError('Age cannot be negative', 'age');
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation failed on "${error.field}": ${error.message}`);
  } else {
    console.log('Unexpected error:', error);
  }
}
```

### Output

```
Validation failed on "age": Age cannot be negative
```

### Real-world usage

- **Custom error classes**: distinguishing a `ValidationError` from a `NetworkError` from an `AuthError` so calling code can react differently to each.
- **`try/catch` with `await`**: gracefully handling failed API calls and showing the user a friendly message instead of a blank/broken screen.
- **`finally`**: closing a loading spinner, releasing a lock, or cleaning up resources regardless of success or failure.
- **Re-throwing**: logging an error at a low level while still letting a higher-level handler (e.g., a global error boundary) decide what the user sees.

### Common mistakes

- Catching an error and doing nothing with it ("swallowing" errors), which hides real bugs.
- Forgetting that a rejected Promise inside an `async` function *must* be caught with `try/catch` (or `.catch()` on the call site) — otherwise it becomes an unhandled rejection.
- Throwing plain strings or objects instead of `Error` instances, losing the stack trace that makes debugging possible.
- Using `try/catch` around large blocks of unrelated code, making it unclear which line actually failed.

### Interview Question

**Q: What's the benefit of creating a custom `Error` subclass instead of always throwing `new Error('message')`?**
A: A custom error class (e.g., `class ValidationError extends Error`) lets calling code distinguish error types with `instanceof` and attach extra structured data (like which field failed validation), so different failures can be handled differently — rather than parsing a generic error's message string to guess what went wrong.

### Practice

1. Write a `parseJSON(str)` function that catches a malformed-JSON error and re-throws a more descriptive custom error.
2. Create a `NetworkError` and a `ValidationError` class, both extending `Error`, and write a `catch` block that handles each differently using `instanceof`.
3. Write an async function that retries a failing operation up to 3 times before giving up, using `try/catch` in a loop.
4. Explain what happens if you `throw` inside a `.then()` callback versus inside an `async` function, in terms of how the error is caught.

---

## 12. Modern JavaScript Syntax 🔥

### What is it?

This is the "everyday modern JS toolkit" — the syntax that has replaced older patterns and that you'll see in virtually every current codebase: `let`/`const`, arrow functions, template literals, destructuring, spread/rest, default parameters, optional chaining, nullish coalescing, logical assignment operators, modules, classes, and private fields. Most of these are covered in depth in earlier sections — this section ties them together as the modern baseline.

### Why do we need it?

Recognizing and using this syntax fluently is table-stakes for reading modern codebases, tutorials, and library documentation — including virtually all React/Next.js/Node.js code you'll encounter.

### Syntax

```js
let count = 0;
const PI = 3.14159;

const add = (a, b) => a + b;

const name = 'Ana';
const message = `Hello, ${name}! Today is ${new Date().toDateString()}`;

const { id, ...rest } = { id: 1, name: 'A', age: 2 };
const [first, ...others] = [1, 2, 3];

function greet(name = 'Guest') { return `Hi, ${name}`; }

const city = user?.address?.city ?? 'Unknown';

// Logical assignment operators (ES2021)
let config = {};
config.timeout ??= 5000; // assign only if null/undefined
config.retries ||= 3;    // assign only if falsy
config.debug &&= false;  // assign only if currently truthy

class Counter {
  #count = 0;
  increment() { return ++this.#count; }
}
```

### Example

```js
let settings = { theme: null, retries: 0 };

settings.theme ??= 'dark';   // theme was null -> becomes 'dark'
settings.retries ||= 3;      // retries was 0 (falsy) -> becomes 3
console.log(settings);
```

### Output

```
{ theme: 'dark', retries: 3 }
```

### Real-world usage

This syntax shows up everywhere: React component props via destructuring, template literals for building class names and messages, spread for immutable state updates, and optional chaining/nullish coalescing for safely handling API data — this is simply how idiomatic modern JavaScript is written.

### Common mistakes

- Using `||=` when you actually meant `??=` — `||=` will overwrite legitimate falsy values like `0` or `''`.
- Still reaching for `var` out of habit — prefer `const` by default, `let` when reassignment is needed.
- Overusing destructuring to the point that code becomes hard to trace back to its source object.

### Interview Question

**Q: What's the difference between `??=` and `||=`?**
A: `x ??= y` assigns `y` to `x` only if `x` is currently `null` or `undefined`. `x ||= y` assigns `y` to `x` if `x` is currently *any* falsy value (`0`, `''`, `false`, `null`, `undefined`, `NaN`). Use `??=` when `0`/`''`/`false` are valid existing values you don't want overwritten.

### Practice

1. Rewrite an old ES5 snippet (using `var`, `function() {}`, string concatenation) into modern syntax (`const`/`let`, arrow functions, template literals).
2. Use logical assignment operators to set defaults on a config object without overwriting an explicitly-set `false` or `0`.
3. Destructure a nested API response object to pull out three specific fields with default values.

---

## 13. Map / Set / WeakMap / WeakSet ⭐

### What is it?

`Map` and `Set` are built-in collection types: `Map` stores key/value pairs (keys can be *any* type, not just strings), and `Set` stores unique values. `WeakMap`/`WeakSet` are similar but only accept **objects** as keys/values and don't prevent garbage collection — entries disappear automatically once nothing else references the key.

### Why do we need it?

Plain objects only allow string/symbol keys and inherit properties from `Object.prototype`, which can cause subtle bugs. Arrays don't automatically prevent duplicates. `Map`/`Set` solve both problems cleanly, and `WeakMap`/`WeakSet` solve the specific problem of attaching data to objects without causing memory leaks.

### Syntax

```js
// Map
const map = new Map();
map.set('name', 'Ana');
map.set(42, 'numeric key');
map.get('name');   // 'Ana'
map.has(42);        // true
map.delete(42);
map.size;            // 1
for (const [key, value] of map) { console.log(key, value); }

// Set
const set = new Set([1, 2, 2, 3]); // duplicates auto-removed
set.add(4);
set.has(2);          // true
set.delete(1);
[...set];             // [2, 3, 4]

// WeakMap (keys must be objects; entries can be garbage collected)
const cache = new WeakMap();
let obj = { id: 1 };
cache.set(obj, 'metadata');
obj = null; // the WeakMap entry can now be garbage collected

// WeakSet (values must be objects)
const visited = new WeakSet();
visited.add(obj);
```

### Example

```js
const wordCount = new Map();
const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];

for (const word of words) {
  wordCount.set(word, (wordCount.get(word) || 0) + 1);
}
console.log([...wordCount.entries()]);

const uniqueWords = new Set(words);
console.log(uniqueWords.size);
```

### Output

```
[ [ 'apple', 3 ], [ 'banana', 2 ], [ 'cherry', 1 ] ]
3
```

### When to use Map/Set instead of objects/arrays

- Use **`Map`** instead of an object when keys aren't simple strings (e.g., objects or numbers as keys), when key order matters and must be preserved reliably, or when you need frequent additions/removals and a `.size` property.
- Use **`Set`** instead of an array when you need to guarantee uniqueness and want fast `.has()` lookups (`O(1)` vs. an array's `O(n)` `.includes()`).
- Use **`WeakMap`/`WeakSet`** when you need to associate data with objects (e.g., caching computed results per DOM node) without preventing those objects from being garbage collected when no longer used elsewhere.

### Common mistakes

- Trying to `JSON.stringify()` a `Map` or `Set` directly — they don't serialize like plain objects/arrays; convert with `Object.fromEntries(map)` or `[...set]` first.
- Using object property access syntax (`map.name`) instead of `.get()`/`.set()` on a `Map` — plain property access won't work as expected.
- Trying to iterate a `WeakMap`/`WeakSet` — they're intentionally not iterable (you can't list their keys) precisely because entries can vanish at any time.
- Using a regular object as a cache keyed by DOM elements or other objects, unintentionally keeping them alive forever (a memory leak) — this is exactly the case `WeakMap` solves.

### Interview Question

**Q: Why would you choose a `WeakMap` over a `Map` for caching data associated with DOM elements?**
A: A `Map` holds a strong reference to its keys, so if you use DOM elements as keys, they can never be garbage collected even after being removed from the page — causing a memory leak. A `WeakMap` holds weak references, so once a DOM element is removed and nothing else references it, both the element and its cached entry are automatically garbage collected.

### Practice

1. Use a `Map` to count word frequency in a sentence.
2. Use a `Set` to remove duplicate values from an array of numbers in one line.
3. Explain why `{ [someObject]: 'value' }` doesn't do what a beginner might expect, and how `Map` fixes it.
4. Write a small `WeakMap`-based cache that stores an expensive computed result per input object.

---

## 14. Regular Expressions 📌

### What is it?

Regular expressions (regex) are patterns used to match, test, and manipulate text — created with the `/pattern/flags` literal syntax or `new RegExp()`, used with `.test()`, `.match()`, and `.replace()`.

### Why do we need it?

Regex handles common text tasks — validating an email format, extracting a substring, replacing all occurrences of a pattern — far more concisely than manual character-by-character string logic.

### Syntax

```js
// Creating a regex
const pattern = /hello/i;             // literal syntax, `i` = case-insensitive
const pattern2 = new RegExp('hello', 'i');

// Common flags
// g - global (find all matches, not just the first)
// i - case-insensitive
// m - multiline

// test() -- returns true/false
/\d+/.test('Order #1234'); // true

// match() -- returns matches (or null)
'Order #1234'.match(/\d+/); // ['1234']
'a1 b2 c3'.match(/\d/g);     // ['1', '2', '3']

// replace()
'2024-01-15'.replace(/-/g, '/'); // '2024/01/15'
```

### Example — common validation patterns

```js
const isValidEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
const isValidPhone = (str) => /^\d{3}-\d{3}-\d{4}$/.test(str);
const hasOnlyLetters = (str) => /^[a-zA-Z]+$/.test(str);

console.log(isValidEmail('ana@example.com')); // true
console.log(isValidEmail('not-an-email'));    // false
console.log(isValidPhone('555-123-4567'));    // true

// Extracting data
const text = 'Contact us at support@company.com or sales@company.com';
console.log(text.match(/[\w.-]+@[\w.-]+/g));
```

### Output

```
true
false
true
[ 'support@company.com', 'sales@company.com' ]
```

### Real-world usage

- Form validation (emails, phone numbers, postal codes, password strength).
- Cleaning/normalizing input (trimming extra whitespace, removing special characters).
- Search-and-replace operations (formatting dates, redacting sensitive data patterns).
- Parsing simple structured text out of logs or user input.

### Common mistakes

- Forgetting the `g` flag when you want *all* matches, not just the first (`.match()` without `g` returns match details for only the first occurrence, with extra info).
- Over-relying on regex for deeply structured formats (like fully validating an email per spec, or parsing HTML/JSON) — regex is best for simple, well-defined patterns, not complete grammars.
- Forgetting to escape special characters (`.`, `*`, `+`, `(`, `)`) when they should be matched literally.
- Not anchoring a pattern (`^`...`$`) when validating a whole string, causing it to match if the valid pattern appears *anywhere* inside a longer invalid string.

### Interview Question

**Q: Why does `/^\d+$/.test('123abc')` return `false` but `/\d+/.test('123abc')` return `true`?**
A: Without anchors, `/\d+/` matches if the pattern is found *anywhere* in the string — and `'123abc'` does contain digits. With `^` and `$` anchors, the pattern must match the *entire* string from start to end, and `'123abc'` isn't entirely digits, so it fails.

### Practice

1. Write a regex to validate a basic email format and test it against 5 example strings.
2. Extract all hashtags (`#word`) from a sample tweet-like string using `.match()`.
3. Use `.replace()` with a regex to convert `'John_Doe_Smith'` into `'John Doe Smith'`.
4. Write a regex that checks a password has at least one uppercase letter, one number, and is 8+ characters long.

---

## 15. JSON & API Data 🔥

### What is it?

JSON (JavaScript Object Notation) is the standard text format for exchanging data with APIs. `JSON.parse()` converts a JSON string into a JS object/array; `JSON.stringify()` does the reverse. This section also covers working with real API responses, handling API errors, and transforming that data into the shape your app needs.

### Why do we need it?

Virtually every API you'll ever call — REST or otherwise — sends and receives JSON. Knowing how to parse it, handle malformed/error responses, and reshape it into what your UI needs is a daily task.

### Syntax

```js
// Object -> JSON string
const user = { name: 'Ana', age: 28 };
const json = JSON.stringify(user); // '{"name":"Ana","age":28}'

// JSON string -> object
const parsed = JSON.parse(json);

// Pretty-printing
JSON.stringify(user, null, 2);

// Working with fetch()
async function getUsers() {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json(); // parses JSON automatically
  return data;
}
```

### Example

```js
async function loadAndTransformUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const rawUsers = await response.json();

    // Transform API data into the shape the UI needs
    const simplified = rawUsers.map(u => ({
      id: u.id,
      fullName: `${u.first_name} ${u.last_name}`,
      isActive: u.status === 'active',
    }));

    return simplified;
  } catch (error) {
    console.error('Could not load users:', error.message);
    return [];
  }
}
```

### Output

```
[
  { id: 1, fullName: 'Ana Silva', isActive: true },
  { id: 2, fullName: 'Ben Cole', isActive: false }
]
```

### Real-world usage

- Every REST API call: sending data (`JSON.stringify()` in a `fetch` body) and reading it back (`response.json()`).
- Persisting objects in `localStorage`, which only stores strings (`JSON.stringify()` in, `JSON.parse()` out).
- Reshaping snake_case/verbose API fields into the camelCase/simplified shape your components expect.
- Debugging: `JSON.stringify(data, null, 2)` for readable console/log output of complex objects.

### Common mistakes

- Calling `JSON.parse()` on data that isn't valid JSON (e.g., an empty string or an already-parsed object), which throws a `SyntaxError`.
- Forgetting `response.json()` itself returns a **Promise** and needs `await`.
- Not checking `response.ok` before parsing — `fetch()` does **not** reject on HTTP error statuses like 404/500, only on network failures; you must check `response.ok` (or `response.status`) yourself.
- Trying to `JSON.stringify()` a value with circular references, functions, `undefined`, or a `Map`/`Set` and being surprised what gets silently dropped or throws.

### Interview Question

**Q: Why doesn't `fetch()` throw an error for a 404 or 500 response?**
A: `fetch()` only rejects its promise on network-level failures (e.g., no connection, DNS failure). A 404 or 500 is still a *successful* HTTP exchange from `fetch()`'s point of view — the server responded, just with an error status. That's why you must explicitly check `response.ok` (true for 200–299) and throw your own error if it's false.

### Practice

1. Write a `safeJsonParse(str)` function that returns `null` instead of throwing on invalid JSON.
2. Write an async function that fetches from an API, checks `response.ok`, and throws a descriptive error if it isn't.
3. Given a raw API response with nested/snake_case fields, write a transform function that flattens and renames them to camelCase.
4. Explain what `JSON.stringify({ a: undefined, b: () => {}, c: 1 })` outputs, and why.

---

## 16. Browser Storage ⭐

### What is it?

Browser storage lets you persist data on the user's device: `localStorage` (persists until explicitly cleared), `sessionStorage` (cleared when the tab closes), and cookies (small, sent to the server with every request, with more configuration options around expiry and access).

### Why do we need it?

Not everything needs a server round-trip — remembering a user's theme preference, an unsubmitted draft, or a shopping cart between page loads is often better handled client-side.

### Syntax

```js
// localStorage -- persists across browser restarts
localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');     // 'dark'
localStorage.removeItem('theme');
localStorage.clear();

// Storing objects (must serialize/deserialize manually)
localStorage.setItem('user', JSON.stringify({ name: 'Ana' }));
const user = JSON.parse(localStorage.getItem('user'));

// sessionStorage -- cleared when the tab is closed, same API
sessionStorage.setItem('draftText', 'Hello...');

// Cookies -- basic read/write via document.cookie (a single string of all cookies)
document.cookie = 'sessionId=abc123; max-age=3600; path=/';
console.log(document.cookie); // "sessionId=abc123; otherCookie=value"
```

### Example

```js
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}
function loadTheme() {
  return localStorage.getItem('theme') || 'light';
}

saveTheme('dark');
console.log(loadTheme());
```

### Output

```
dark
```

### When to use each

- **`localStorage`**: user preferences, cached non-sensitive data, "remember me" style settings that should survive closing the browser.
- **`sessionStorage`**: temporary state that should reset per-tab, like a multi-step form's in-progress data or a one-time "seen this modal" flag for the current visit.
- **Cookies**: data the *server* also needs to see on every request (session tokens, auth), or when you need fine-grained expiry control — cookies are automatically sent with HTTP requests, unlike `localStorage`/`sessionStorage`.

### Common mistakes

- Storing sensitive data (passwords, full auth tokens) in `localStorage` — it's readable by any JS running on the page, making it vulnerable to XSS attacks; sensitive tokens are often better as `httpOnly` cookies.
- Forgetting `localStorage`/`sessionStorage` only store strings — you must `JSON.stringify()` objects before saving and `JSON.parse()` after reading.
- Assuming storage always succeeds — it can throw (e.g., storage quota exceeded, private browsing restrictions), so wrap access in `try/catch` for production code.
- Confusing `sessionStorage`'s "per tab" lifetime with `localStorage`'s "until cleared" lifetime, leading to data disappearing (or persisting) unexpectedly.

### Interview Question

**Q: What's the key difference between `localStorage` and `sessionStorage`, and why might you choose a cookie over either?**
A: Both share the same key/value string API, but `localStorage` persists indefinitely (until explicitly cleared), while `sessionStorage` is wiped when the tab/window closes. Cookies differ from both in that they're automatically sent to the server with every HTTP request and support an expiry date — making them the right choice when the server itself needs to read the stored value (e.g., session authentication).

### Practice

1. Write `saveJSON(key, value)` and `loadJSON(key)` helpers that handle the `JSON.stringify`/`parse` step and gracefully return `null` on failure.
2. Build a "remember my theme" feature using `localStorage` that applies the saved theme on page load.
3. Explain, without testing it, whether data saved in `sessionStorage` in one browser tab is visible in a second tab of the same site.
4. List two reasons you might choose a cookie over `localStorage` for storing a login token.

---

## 17. Practical Performance ⭐

### What is it?

A set of everyday techniques for keeping an app responsive: **debouncing** (wait for a pause in activity before running), **throttling** (run at most once per interval), **memoization** (cache expensive results), **event delegation** (fewer listeners, see Section 9), avoiding unnecessary DOM operations, and a basic, practical sense of **Big-O** ("how does this scale as the input grows?").

### Why do we need it?

A search box that fires an API call on every keystroke, or a scroll handler that runs expensive work 60 times a second, will feel sluggish or rack up unnecessary work. These techniques are the standard, low-effort fixes.

### Syntax

```js
// Debounce -- waits for a pause in calls before running
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
const debouncedSearch = debounce((query) => searchAPI(query), 300);
searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));

// Throttle -- runs at most once per interval
function throttle(fn, interval) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn(...args);
    }
  };
}
window.addEventListener('scroll', throttle(() => console.log('scroll handled'), 200));

// Memoization -- cache results of expensive pure function calls
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
const slowSquare = (n) => { for (let i = 0; i < 1e8; i++); return n * n; };
const fastSquare = memoize(slowSquare);
```

### Example

```js
const expensiveCalc = memoize((n) => {
  console.log('Computing...');
  return n * n;
});

console.log(expensiveCalc(5)); // "Computing..." then 25
console.log(expensiveCalc(5)); // just 25, from cache -- no "Computing..." log
```

### Output

```
Computing...
25
25
```

### Real-world usage

- **Debounce**: search-as-you-type inputs, resize handlers that recalculate layout, autosave in a text editor.
- **Throttle**: scroll-position tracking, infinite-scroll "load more" triggers, mouse-move-based drag handlers.
- **Memoization**: caching expensive computations (React's `useMemo`/`useCallback` are built on this idea), avoiding redundant API calls for the same input.
- **Avoiding unnecessary DOM operations**: batching DOM updates instead of updating one element at a time in a loop (which triggers repeated layout recalculations).
- **Basic Big-O sense**: recognizing that a nested loop over the same array (`O(n²)`) will get slow with large lists, and that a `Map`/`Set` lookup (`O(1)`) is often a better fit than an array `.includes()` (`O(n)`) inside a loop.

### Common mistakes

- Using debounce when throttle is actually needed (or vice versa) — debounce delays until activity *stops*; throttle guarantees regular execution *during* ongoing activity. A search box wants debounce; a scroll-position tracker usually wants throttle.
- Memoizing a function whose arguments are objects/arrays without a stable cache key — `JSON.stringify` as a cache key can be slow or unreliable for very large/complex objects.
- Forgetting to clean up debounce/throttle timers (or event listeners generally) when a component unmounts, causing memory leaks or stale callbacks.
- Optimizing prematurely — reaching for memoization/throttling before confirming there's an actual performance problem, adding complexity for no measurable benefit.

### Interview Question

**Q: What's the difference between debouncing and throttling, and when would you use each?**
A: Debouncing delays execution until a pause in activity — the function only runs once no new calls have come in for the specified delay (ideal for search-as-you-type, where you want to wait until the user stops typing). Throttling guarantees the function runs at most once per fixed interval regardless of how many times it's triggered (ideal for scroll or resize handlers, where you want steady, periodic updates during continuous activity, not just at the end).

### Practice

1. Implement `debounce` and `throttle` from scratch (no libraries) and write a small test harness that logs how many times each fires during rapid calls.
2. Add memoization to a recursive Fibonacci function and compare performance with/without it for `n = 35`.
3. Identify the Big-O of a function that checks for duplicate values using a nested loop, then rewrite it using a `Set` and state the new Big-O.
4. Describe a real UI scenario where you'd choose throttle over debounce, and one where you'd choose debounce over throttle.

---

## What's Next

With this Intermediate curriculum solid, the natural next steps are:

- **React**: closures, `this`, array methods, destructuring, and the event loop directly explain how hooks, props, and state updates behave.
- **Node.js**: modules, async/await, JSON, and error handling are used constantly in backend code.
- **Next.js**: builds on both of the above, adding server/client execution contexts on top of the JS fundamentals here.

Topics intentionally left out of this guide — JS engine internals, JIT/AST internals, garbage collector implementation, `Atomics`/`SharedArrayBuffer` internals, advanced metaprogramming (`Proxy`/`Reflect` deep dives), generator internals, and advanced memory profiling — belong in a separate **Advanced/Expert** track once you're comfortable with everything above.