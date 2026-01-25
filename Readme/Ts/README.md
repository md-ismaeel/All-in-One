# TypeScript Interview Questions & Answers

Comprehensive guide to essential TypeScript interview questions with detailed explanations and practical code examples.

---

## Basic Level Questions

### 1. What is TypeScript and why should you use it?

**Answer:**
TypeScript is a superset of JavaScript that adds static typing and other features. It compiles to plain JavaScript and can be used in any JavaScript environment.

**Why use TypeScript:**

- **Type Safety**: Catch errors at compile-time instead of runtime
- **Better IDE Support**: Autocomplete and intelligent code navigation
- **Self-Documentation**: Types serve as documentation
- **Refactoring Safety**: Easier to refactor large codebases
- **Reduced Bugs**: Type checking prevents many common errors

**Example:**
```
// JavaScript (runtime error)
function add(a, b) {
return a + b;
}
add("5", 3); // "53" - unexpected result

// TypeScript (compile-time error)
function add(a: number, b: number): number {
return a + b;
}
add("5", 3); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

### 2. What are the basic types in TypeScript?

**Answer:**
TypeScript includes primitive types and special types for more specific type checking.

**Basic Types:**

```
// Primitives
const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const nothing: null = null;
const undefined_value: undefined = undefined;

// Any (avoid when possible)
let anything: any = "can be anything";
anything = 123;
anything = true;

// Unknown (safer than any)
let unknown_value: unknown = "something";
// unknown_value.toUpperCase(); // ❌ Error: Type 'unknown' has no property 'toUpperCase'
if (typeof unknown_value === 'string') {
unknown_value.toUpperCase(); // ✅ OK
}

// Union types
let value: string | number = "hello";
value = 42; // ✅ OK
// value = true; // ❌ Error

// Literal types
let direction: "up" | "down" | "left" | "right" = "up";
let status: 1 | 2 | 3 = 1;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["John", "Jane"];
const mixed: (string | number)[] = ["hello", 42];

// Tuple
const tuple: [string, number, boolean] = ["hello", 42, true];

// Void (for functions that don't return anything)
function greet(): void {
console.log("Hello!");
}

// Never (function never returns)
function throwError(message: string): never {
throw new Error(message);
}
```

---

### 3. What are interfaces and how do you use them?

**Answer:**
Interfaces define the structure and shape of objects. They are used to enforce a contract for object properties and methods.

**Example:**
```
// Basic interface
interface User {
id: number;
name: string;
email: string;
}

const user: User = {
id: 1,
name: "John",
email: "john@example.com"
};

// Optional properties
interface Product {
id: number;
title: string;
description?: string; // Optional
price: number;
}

// Readonly properties
interface Config {
readonly apiUrl: string;
readonly timeout: number;
}

// Methods in interfaces
interface Calculator {
add(a: number, b: number): number;
subtract(a: number, b: number): number;
}

const calc: Calculator = {
add: (a, b) => a + b,
subtract: (a, b) => a - b
};

// Extending interfaces
interface Employee extends User {
department: string;
salary: number;
}

const employee: Employee = {
id: 1,
name: "John",
email: "john@example.com",
department: "Engineering",
salary: 100000
};

// Merging interfaces
interface Window {
title: string;
}

interface Window {
id: number;
}

// The above two interfaces merge into one
const w: Window = {
title: "My App",
id: 1
};
```

---

### 4. What is the difference between interface and type alias?

**Answer:**

Both interfaces and type aliases can define object shapes, but they have key differences.

| Feature           | Interface          | Type             |
| ----------------- | ------------------ | ---------------- |
| **Merging**       | Yes, automatically | No               |
| **Extension**     | `extends`          | `&` intersection |
| **Primitives**    | No                 | Yes              |
| **Union Types**   | No                 | Yes              |
| **Computed Keys** | No                 | Yes              |

**Example:**
```
// Interface - for object shapes
interface Person {
name: string;
age: number;
}

// Type - for anything
type PersonType = {
name: string;
age: number;
};

// Interface can extend another interface
interface Employee extends Person {
department: string;
}

// Type can use union
type Status = "active" | "inactive" | "pending";

// Type for primitives
type Age = number;
type Email = string;

// Type with union
type Result = string | number | boolean;

// Type with intersection
type Admin = Person & {
permissions: string[];
};

// Interface merging
interface Config {
apiUrl: string;
}

interface Config {
timeout: number;
}

const config: Config = {
apiUrl: "http://api.example.com",
timeout: 5000
}; // Both properties required

// Type doesn't allow merging
// type ConfigType = { apiUrl: string };
// type ConfigType = { timeout: number }; // ❌ Error
```

---

### 5. What are generics and how are they used?

**Answer:**
Generics allow you to write reusable code that works with any type. They provide a way to pass types as parameters.

**Example:**
```
// Generic function
function identity<T>(value: T): T {
return value;
}

const result1 = identity<string>("hello"); // T = string
const result2 = identity<number>(42); // T = number

// Generic with multiple types
function pair<T, U>(first: T, second: U): [T, U] {
return [first, second];
}

const p = pair<string, number>("age", 25);

// Generic with constraints
function getLength<T extends { length: number }>(value: T): number {
return value.length;
}

getLength("hello"); // ✅ OK
getLength([1, 2, 3]); // ✅ OK
// getLength(123); // ❌ Error: number doesn't have length property

// Generic interfaces
interface Container<T> {
value: T;
getValue(): T;
setValue(value: T): void;
}

class Box<T> implements Container<T> {
value: T;

constructor(value: T) {
this.value = value;
}

getValue(): T {
return this.value;
}

setValue(value: T): void {
this.value = value;
}
}

const stringBox = new Box<string>("hello");
const numberBox = new Box<number>(42);

// Generic array helper
function getFirstElement<T>(array: T[]): T | undefined {
return array[0];
}

const first = getFirstElement([1, 2, 3]); // T = number

// Generic with default type
function wrap<T = string>(value: T): { value: T } {
return { value };
}

wrap("hello"); // T = string
wrap<number>(42); // T = number
```

---

### 6. How do you use enums in TypeScript?

**Answer:**
Enums allow you to define a set of named constants. They provide meaningful names for numeric or string values.

**Example:**
```
// Numeric enum
enum Direction {
Up = 0,
Down = 1,
Left = 2,
Right = 3
}

const dir: Direction = Direction.Up; // 0

// String enum
enum Color {
Red = "RED",
Green = "GREEN",
Blue = "BLUE"
}

const color: Color = Color.Red; // "RED"

// Heterogeneous enum (mixed)
enum Status {
Success = 1,
Error = "ERROR",
Pending = 2
}

// Computed enum
enum FileSize {
Small = 1024,
Medium = Small _ 2,
Large = Medium _ 2
}

// Const enum (erased at compile time)
const enum Level {
Low = "low",
High = "high"
}

const level: Level = Level.Low;

// Using enums
function respond(direction: Direction): void {
switch (direction) {
case Direction.Up:
console.log("Going up");
break;
case Direction.Down:
console.log("Going down");
break;
}
}

// Reverse mapping (numeric enums only)
const name = Direction[0]; // "Up"
const value = Direction["Down"]; // 1
```

---

### 7. What are access modifiers in TypeScript?

**Answer:**
Access modifiers control the visibility and accessibility of class members (properties and methods).

**Modifiers:**

- **public** (default): Accessible from anywhere
- **private**: Accessible only within the class
- **protected**: Accessible within the class and subclasses
- **readonly**: Property cannot be changed after initialization

**Example:**
```
class Person {
// Public property (default)
public name: string;

// Private property (only accessible within this class)
private age: number;

// Protected property (accessible in this class and subclasses)
protected email: string;

// Readonly property
readonly id: number;

constructor(name: string, age: number, email: string, id: number) {
this.name = name;
this.age = age;
this.email = email;
this.id = id;
}

// Public method
public greet(): void {
console.log(\`Hello, I'm \${this.name}\`);
}

// Private method
private getAge(): number {
return this.age;
}

// Protected method
protected getEmail(): string {
return this.email;
}

public displayInfo(): void {
console.log(\`Age: \${this.getAge()}\`); // ✅ OK within class
}
}

class Employee extends Person {
public department: string;

constructor(name: string, age: number, email: string, id: number, dept: string) {
super(name, age, email, id);
this.department = dept;
}

public showEmail(): void {
console.log(\`Email: \${this.getEmail()}\`); // ✅ OK in subclass
}
}

const person = new Person("John", 30, "john@example.com", 1);
console.log(person.name); // ✅ OK - public
// console.log(person.age); // ❌ Error - private
// console.log(person.email); // ❌ Error - protected
// person.id = 2; // ❌ Error - readonly

// Parameter properties (shorthand)
class Point {
constructor(
public x: number,
public y: number,
private z: number = 0
) {}
}

const point = new Point(10, 20);
console.log(point.x); // 10
// console.log(point.z); // ❌ Error - private
```

---

### 8. How do you work with classes in TypeScript?

**Answer:**
Classes in TypeScript support inheritance, access modifiers, abstract classes, and other OOP features.

**Example:**
```
// Basic class
class Animal {
name: string;

constructor(name: string) {
this.name = name;
}

speak(): void {
console.log(\`\${this.name} makes a sound\`);
}
}

// Inheritance
class Dog extends Animal {
breed: string;

constructor(name: string, breed: string) {
super(name);
this.breed = breed;
}

speak(): void {
console.log(\`\${this.name} barks\`);
}

getInfo(): string {
return \`\${this.name} is a \${this.breed}\`;
}
}

// Abstract class
abstract class Shape {
abstract getArea(): number;

describe(): void {
console.log(\`Area: \${this.getArea()}\`);
}
}

class Circle extends Shape {
constructor(private radius: number) {
super();
}

getArea(): number {
return Math.PI \* this.radius \*\* 2;
}
}

// Getters and setters
class Person {
private \_age: number;

constructor(age: number) {
this.\_age = age;
}

get age(): number {
return this.\_age;
}

set age(value: number) {
if (value < 0) {
throw new Error("Age cannot be negative");
}
this.\_age = value;
}
}

const person = new Person(25);
console.log(person.age); // Uses getter
person.age = 30; // Uses setter

// Static members
class MathHelper {
static PI = 3.14159;

static calculateCircleArea(radius: number): number {
return this.PI \* radius \*\* 2;
}
}

console.log(MathHelper.PI);
console.log(MathHelper.calculateCircleArea(5));
```

---

### 9. What are type assertions and how do you use them?

**Answer:**
Type assertions tell the compiler to treat a value as a specific type. They are a way to override TypeScript's type inference.

**Example:**
```
// Type assertion with 'as'
const value: unknown = "hello";
const length1 = (value as string).length; // ✅ OK

// Type assertion with angle brackets
const length2 = (<string>value).length; // ✅ OK (not recommended in JSX)

// Asserting to more specific type
interface Dog {
breed: string;
}

interface Cat {
color: string;
}

function getAnimal(): Dog | Cat {
return { breed: "Labrador" } as Dog;
}

const dog = getAnimal() as Dog;
console.log(dog.breed);

// Double assertion (use cautiously)
const value2 = "hello" as unknown as number; // ⚠️ Type assertion side-step

// Type assertion vs casting
const num = "123";
const value3 = parseInt(num); // ✅ Actual conversion
const value4 = num as unknown as number; // ❌ Just assertion, not conversion

// Asserting with const
const config = {
apiUrl: "http://api.example.com",
timeout: 5000
} as const;

// typeof with type guard
function processValue(value: string | number) {
if (typeof value === "string") {
console.log(value.toUpperCase()); // Type narrowed to string
} else {
console.log(value \* 2); // Type narrowed to number
}
}
```

---

### 10. What are type guards and type narrowing?

**Answer:**
Type guards and type narrowing are techniques to refine variable types within conditional blocks.

**Example:**
```
type Result = string | number | boolean;

// typeof type guard
function processValue(value: Result): void {
if (typeof value === "string") {
console.log(value.toUpperCase()); // value is string
} else if (typeof value === "number") {
console.log(value \* 2); // value is number
} else {
console.log(!value); // value is boolean
}
}

// instanceof type guard
class Car {
drive(): void {
console.log("Driving");
}
}

class Bicycle {
pedal(): void {
console.log("Pedaling");
}
}

function travel(vehicle: Car | Bicycle): void {
if (vehicle instanceof Car) {
vehicle.drive(); // vehicle is Car
} else {
vehicle.pedal(); // vehicle is Bicycle
}
}

// in operator (property check)
interface Dog {
bark(): void;
}

interface Bird {
sing(): void;
}

function makeSound(animal: Dog | Bird): void {
if ("bark" in animal) {
animal.bark(); // animal is Dog
} else {
animal.sing(); // animal is Bird
}
}

// Custom type guard function
function isString(value: unknown): value is string {
return typeof value === "string";
}

function isNumber(value: unknown): value is number {
return typeof value === "number";
}

// User-defined type guards
interface Admin {
role: "admin";
permissions: string[];
}

interface User {
role: "user";
}

function isAdmin(user: Admin | User): user is Admin {
return user.role === "admin";
}

const currentUser: Admin | User = { role: "admin", permissions: ["read", "write"] };

if (isAdmin(currentUser)) {
console.log(currentUser.permissions); // currentUser is Admin
}

// Exhaustiveness check
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
switch (shape) {
case "circle":
return Math.PI \* 5 \*\* 2;
case "square":
return 25;
case "triangle":
return 25;
default:
const \_exhaustive: never = shape;
return \_exhaustive; // Error if case is missing
}
}
```

---

## Additional Important Questions

### 11. What are utility types in TypeScript?

**Answer:**
Utility types are built-in types that help create new types from existing types.

**Common utility types:**

| Utility         | Purpose                           |
| --------------- | --------------------------------- |
| `Partial<T>`    | Make all properties optional      |
| `Required<T>`   | Make all properties required      |
| `Readonly<T>`   | Make all properties readonly      |
| `Record<K, V>`  | Create object with specific keys  |
| `Pick<T, K>`    | Select properties from type       |
| `Omit<T, K>`    | Exclude properties from type      |
| `Exclude<T, U>` | Exclude types from union          |
| `Extract<T, U>` | Extract matching types from union |

**Example:**
```
interface User {
name: string;
email: string;
age: number;
}

// Partial - all properties optional
type PartialUser = Partial<User>; // { name?: string, email?: string, age?: number }

// Required - all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserPreview = Pick<User, 'name' | 'email'>;

// Omit - exclude specific properties
type UserWithoutAge = Omit<User, 'age'>;

// Record - create object with specific keys
type Status = 'pending' | 'approved' | 'rejected';
type StatusCount = Record<Status, number>; // { pending: number, approved: number, rejected: number }

// Exclude - exclude types from union
type NonString = Exclude<string | number | boolean, string>; // number | boolean

// Extract - extract matching types
type StringOrNumber = Extract<string | number | boolean, string | number>; // string | number

// Practical example
interface Product {
id: number;
name: string;
price: number;
description: string;
}

// API response - only some fields
type ProductResponse = Pick<Product, 'id' | 'name' | 'price'>;

// Update form - all optional
type ProductUpdate = Partial<Product>;

// Admin view - all fields required
type ProductAdmin = Required<ProductUpdate>;
```

---

### 12. What is TypeScript Conditional Types?

**Answer:**
Conditional types select one of two types based on a condition.

**Syntax:** `T extends U ? X : Y`

**Example:**
```
// Simple conditional type
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<42>; // false

// Conditional types with generics
type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number

// Distributed conditional types
type Unwrap<T> = T extends Promise<infer U> ? U : T;

type A1 = Unwrap<Promise<string>>; // string
type B1 = Unwrap<string | Promise<number>>; // string | number

// Practical use: API response type
type ApiResponse<T> = T extends { data: infer D } ? D : never;

type UserResponse = ApiResponse<{ data: { id: 1, name: 'John' } }>; // { id: 1, name: 'John' }

// Function return type
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type NumReturn = GetReturnType<() => number>; // number
```

---

### 13. How does TypeScript handle null and undefined?

**Answer:**
TypeScript has strict null checking to catch null/undefined errors at compile time.

**Strict Null Checks:**

- `strictNullChecks: true` in tsconfig.json
- null and undefined are separate types
- Cannot assign null/undefined without explicit types

**Example:**
```
// With strictNullChecks: true

// Type assignment
let value: string = 'hello';
// value = null; // ❌ Error

let nullable: string | null = null; // ✅ OK
let optional: string | undefined;

// Non-null assertion (use sparingly)
let value2: string | null = 'hello';
const length = value2!.length; // ! means "I know it's not null"

// Optional chaining
const user: { name?: string } = {};
console.log(user.name?.toUpperCase()); // undefined (no error)

// Nullish coalescing
const name = user.name ?? 'Unknown'; // Use ?? to provide default

// Type guard for null/undefined
function processValue(value: string | null) {
if (value === null) {
return 'Value is null';
}
return value.toUpperCase();
}

// Optional properties
interface User {
name: string;
email?: string; // Can be undefined
phone: string | null; // Can be null
}

const user1: User = {
name: 'John',
email: 'john@example.com',
phone: null
}; // ✅ OK
```

---

## Key Learning Resources for TypeScript

**For Beginners:**

- Official TypeScript Handbook
- TypeScript in 100 Seconds (YouTube)
- freeCodeCamp TypeScript course

**For Intermediate:**

- Advanced TypeScript Patterns
- TypeScript Deep Dive book
- Egghead.io courses

**For Advanced:**

- TypeScript generics mastery
- Conditional types and mappings
- Type inference deep dive

**Practice:**

- TypeScript Playground (official)
- TypeScript exercism
- Real project implementation

---

## Summary

TypeScript adds powerful type safety to JavaScript. Master these advanced concepts to write robust, maintainable code!
