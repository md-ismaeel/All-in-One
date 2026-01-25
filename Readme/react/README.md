<<<<<<< HEAD
# React Interview Questions & Answers

Comprehensive guide to 50+ React interview questions organized by difficulty level with detailed explanations, code examples, and best practices.

## Table of Contents

1. [Basic Level Questions](#basic-level-questions)
2. [Moderate Level Questions](#moderate-level-questions)
3. [Advanced Level Questions](#advanced-level-questions)
4. [Performance & Optimization Questions](#performance--optimization-questions)
5. [Testing & Best Practices](#testing--best-practices)

## Basic Level Questions

### 1. What is React and how does it work?

**Answer:**

React is an open-source JavaScript library used for building user interfaces, mainly for single-page applications. It is developed and maintained by Facebook. React helps developers create fast, dynamic, and interactive web applications using reusable components and a Virtual DOM for efficient rendering.

**How it works:**

- React creates a Virtual DOM representation of the actual DOM
- When state changes, React re-renders components and updates the Virtual DOM
- React compares (diffs) the new Virtual DOM with the previous one
- Only the changed elements are updated in the actual DOM

**Example:**

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

**What is a Virtual DOM?**
The Virtual DOM is an in-memory representation of the actual DOM (Document Object Model)
that React uses to optimize updates and minimize direct DOM manipulation.

### 2. What are the differences between functional and class components?

**Answer:**

| Aspect                | Functional              | Class                                       |
| --------------------- | ----------------------- | ------------------------------------------- |
| **Syntax**            | Regular JS functions    | ES6 class extending React.Component         |
| **State**             | Use useState hook       | this.state                                  |
| **Lifecycle**         | useEffect hook          | componentDidMount, componentDidUpdate, etc. |
| **Performance**       | Slightly faster         | Slightly slower                             |
| **Modern Preference** | Recommended (Hooks era) | Older approach                              |

**Example:**

```
// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 3. What are props and state? How are they different?

**Answer:**

**Props (Properties):**

- Read-only data passed from parent to child
- Cannot be modified by the child component
- Used to pass data and callbacks down the component tree

**State:**

- State in React is a built-in object that stores dynamic data for a component. It represents information that can change over time, like user input, API data, or UI updates. When the state changes, React automatically re-renders the component to update the UI.

| Feature         | Props           | State              |
| --------------- | --------------- | ------------------ |
| **Passed from** | Parent to Child | Within component   |
| **Mutable**     | No              | Yes                |
| **Scope**       | Passed down     | Local to component |

**Example:**

```
function Parent() {
  const [age, setAge] = useState(25);

  return <Child name="John" age={age} updateAge={setAge} />;
}

function Child({ name, age, updateAge }) {
  return (
    <div>
      <p>Name (prop): {name}</p>
      <p>Age (prop): {age}</p>
      <button onClick={() => updateAge(age + 1)}>Birthday</button>
    </div>
  );
}
```

### 4. What is JSX, and why is it used in React?

**Answer:**
JSX is a syntax extension that allows you to write HTML-like code in JavaScript. It's not valid JavaScript, so it needs to be compiled into regular JavaScript function calls.

**Why use JSX:**

- Makes code more readable and intuitive
- Looks like HTML, familiar to developers
- Prevents injection attacks (escapes values)
- Better error and warning messages

**Example:**

```
// JSX
const element = <h1>Hello, {name}!</h1>;

// Compiles to:
const element = React.createElement('h1', null, `Hello, ${name}!`);

// JSX with attributes
const card = (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
```

### 5. How do you create a simple React component?

**Answer:**
React components can be created as functional or class-based. Functional components are the modern standard.

**Example:**

```
// Simple Functional Component
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Component with props
function UserCard({ name, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// Usage
export default function App() {
  return (
    <div>
      <Greeting />
      <UserCard name="John" email="john@example.com" />
    </div>
  );
}
```

### 6. What is the Virtual DOM, and why is it important?

**Answer:**
The Virtual DOM is an in-memory representation of the actual DOM. React uses it to optimize updates by batching changes and minimizing direct DOM manipulation.

**Why it's important:**

- **Performance**: Direct DOM manipulation is slow; Virtual DOM updates are faster
- **Batching**: Multiple updates are batched together
- **Diffing Algorithm**: Only changed elements are updated in the real DOM
- **Abstraction**: Developers don't need to worry about low-level DOM operations

**Example:**

```
function App() {
  const [count, setCount] = useState(0);

  // When state changes:
  // 1. New Virtual DOM is created
  // 2. Compared with previous Virtual DOM
  // 3. Only the count element is updated in the real DOM
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 7. What is the purpose of the key prop in React lists?

**Answer:**
The `key` prop helps React identify which elements have changed, been added, or removed. It helps maintain component state during list re-renders.

**Why it's important:**

- Helps React match elements across re-renders
- Preserves component state in lists
- Improves performance
- Prevents bugs with form inputs and animations

**Example:**

```
// Without key (Bad)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}

// With key (Good)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Using unique ID (Best practice)
const todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build Project' },
];
```

### 8. How do you handle events in React?

**Answer:**
React events are similar to DOM events but use camelCase naming convention and pass event objects as parameters.

**Example:**

```
function EventDemo() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} placeholder="Type..." />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

### 9. What are default props in React?

**Answer:**
Default props are default values assigned to props if they are not provided by the parent component.

**Example:**

```
// Using defaultProps (Functional Component)
function Greeting({ name = 'Guest', age = 18 }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}

// Or using defaultProps property
Greeting.defaultProps = {
  name: 'Guest',
  age: 18,
};

// Class Component
class Greeting extends React.Component {
  static defaultProps = {
    name: 'Guest',
    age: 18,
  };

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Usage
<Greeting /> // Uses default props
<Greeting name="John" /> // Uses provided props
```

### 10. What is conditional rendering in React?

**Answer:**
Conditional rendering is rendering different content based on specific conditions. It's similar to if/else statements in JavaScript.

**Methods:**

1. If/else statements
2. Ternary operator
3. Logical AND (&&)
4. Switch statements

**Example:**

```
function UserStatus({ isLoggedIn, user }) {
  // Method 1: If/else
  if (isLoggedIn) {
    return <h1>Welcome back, {user.name}!</h1>;
  }
  return <h1>Please log in</h1>;
}

// Method 2: Ternary operator
function LoginButton({ isLoggedIn }) {
  return isLoggedIn ? <button>Logout</button> : <button>Login</button>;
}

// Method 3: Logical AND
function Messages({ unreadCount }) {
  return (
    <div>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages</p>}
    </div>
  );
}

// Method 4: Switch statement
function Greeting({ timeOfDay }) {
  switch (timeOfDay) {
    case 'morning':
      return <h1>Good Morning!</h1>;
    case 'evening':
      return <h1>Good Evening!</h1>;
    default:
      return <h1>Hello!</h1>;
  }
}
```

## Moderate Level Questions

### 11. What are React Hooks? Can you explain useState and useEffect with examples?

React Hooks are special functions that let you use state and other React features
in functional components without writing a class.

- useState: A hook that allows functional components to hold and update state.
  It returns the current state and a function to update it.

- useEffect: A hook that lets functional components perform side effects,
  such as fetching data, subscribing to events, or updating the DOM,
  and run code in response to state or prop changes.

**Example:**

```
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  // useState Hook
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect Hook
  useEffect(() => {
    // Run on mount and when userId changes
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });

    // Cleanup function (runs on unmount)
    return () => {
      console.log('Cleaning up');
    };
  }, [userId]); // Dependency array

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 12. What is the difference between controlled and uncontrolled components?

**Answer:**

**Controlled Components:**

- Form data is handled by React state
- Value is set by the component's state
- More predictable and easier to manipulate
- React is the "single source of truth"

**Uncontrolled Components:**

- Form data is handled by the DOM
- Access value using refs
- Works like traditional HTML form elements
- Less React-like but simpler in some cases

**Example:**

```
// Controlled Component
function ControlledForm() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Uncontrolled Component
function UncontrolledForm() {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 13. What is React Router, and how does client-side routing work?

**Answer:**
React Router is a popular library for handling navigation and routing in single-page applications (SPAs). Client-side routing updates the UI without full page reloads.

**How it works:**

- Intercepts URL changes
- Updates browser history
- Renders appropriate components based on URL
- No server requests for route changes

**Example:**

```
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserDetail() {
  const { id } = useParams();
  return <h1>User: {id}</h1>;
}
```

### 14. What is the Context API, and when should you use it instead of Redux?

**Answer:**
Context API provides a way to pass data through component trees without manually passing props at every level.

**When to use Context API:**

- Simple state management
- Avoiding prop drilling
- Theming (dark/light mode)
- Authentication state
- Small to medium applications

**When to use Redux:**

- Large, complex applications
- Multiple independent state slices
- Need for time-travel debugging
- Complex state transformations
- Team already familiar with Redux

**Example:**

```
import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
function useTheme() {
  return useContext(ThemeContext);
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
```

### 15. What is prop drilling, and how can it be avoided?

**Answer:**
Prop drilling is passing props through many levels of components even if intermediate components don't use them. It makes code harder to maintain and track data flow.

**Solutions:**

1. Context API
2. State management library (Redux)
3. Component composition
4. Custom hooks

**Example:**

```
// Problem: Prop Drilling
function App() {
  const [user, setUser] = useState({ name: 'John' });
  return <Level1 user={user} />;
}

function Level1({ user }) {
  return <Level2 user={user} />;
}

function Level2({ user }) {
  return <Level3 user={user} />;
}

function Level3({ user }) {
  return <h1>{user.name}</h1>;
}

// Solution: Using Context API
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John' });
  return (
    <UserContext.Provider value={user}>
      <Level1 />
    </UserContext.Provider>
  );
}

function Level1() {
  return <Level2 />;
}

function Level2() {
  return <Level3 />;
}

function Level3() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}
```

### 16. What is React.memo, and how does it help with performance optimization?

**Answer:**
React.memo is a higher-order component that memoizes a component. It prevents unnecessary re-renders if props haven't changed.

**When to use:**

- Pure functional components
- Expensive re-render operations
- Props don't change frequently
- Component receives same props repeatedly

**Example:**

```
// Without React.memo
function UserCard({ name, email }) {
  console.log('UserCard rendered');
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// With React.memo
const UserCardMemo = React.memo(UserCard);

// With custom comparison
const UserCardMemo = React.memo(
  UserCard,
  (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
  }
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UserCardMemo name="John" email="john@example.com" />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
// UserCard only renders once; count changes don't trigger re-render
```

### 17. What is the difference between useMemo and useCallback?

**Answer:**

**useMemo:**

- useMemo is a React Hook that memoizes (caches) the result of a computation.
It only recalculates the value when one of the dependencies changes.

Use it when:

- You have expensive calculations (e.g., filtering, sorting, heavy loops).

- You want to avoid recalculating values on every render.


Returns:
➡️ A memoized value (not a function).

**useCallback:**

- useCallback is a React Hook that memoizes (caches) a function so that it is not recreated on every render.

Use it when:

- You pass a function as a prop to child components that rely on referential equality (e.g., React.memo).

- You want to prevent unnecessary re-renders caused by function recreation.


Returns:
➡️ A memoized function.

**Example:**

```
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useMemo: Memoize value
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value');
    return count * 2;
  }, [count]); // Only recompute when count changes

  // useCallback: Memoize function
  const memoizedCallback = useCallback(() => {
    console.log('Callback with text:', text);
  }, [text]); // Only recreate when text changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child callback={memoizedCallback} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Child({ callback }) {
  console.log('Child rendered');
  return <button onClick={callback}>Call parent</button>;
}

export default React.memo(App);
```

### 18. What is a Higher-Order Component (HOC), and how is it used?

**Answer:**
A Higher-Order Component is a function that takes a component and returns a new component with additional functionality. It's an advanced pattern for code reuse.

**Common use cases:**

- Props manipulation
- State abstraction
- Code reuse across components
- Authentication/authorization
- Theme provision

**Example:**

```
// HOC that adds theme
function withTheme(Component) {
  return function ThemedComponent(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <Component
        {...props}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  };
}

// Component using HOC
function MyComponent({ theme, toggleTheme }) {
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Apply HOC
const ThemedMyComponent = withTheme(MyComponent);

export default ThemedMyComponent;
```

### 19. How does React handle forms, and what are controlled inputs?

**Answer:**
React handles forms differently from vanilla HTML. Controlled inputs keep the input value in React state, making React the source of truth.

**Key differences:**

- Input value is controlled by state
- onChange handler updates state
- Form submission is handled by React
- More predictable and easier to validate

**Example:**

```
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Send to server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        Remember me
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
```

## Advanced Level Questions

### 20. How does React handle re-renders, and how can you optimize unnecessary re-renders?

**Answer:**
React re-renders a component when its state or props change. Unnecessary re-renders can impact performance and should be optimized.

**Optimization techniques:**

1. React.memo for functional components
2. useMemo for expensive computations
3. useCallback for function props
4. Code splitting and lazy loading
5. shouldComponentUpdate in class components
6. Proper key usage in lists
7. Lifting state appropriately

**Example:**

```
function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize callback to prevent child re-renders
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Child onIncrement={handleClick} />
      <p>Count: {count}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

// Wrapped with React.memo to prevent re-renders
const Child = React.memo(function Child({ onIncrement }) {
  console.log('Child rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

// Using useMemo for expensive calculation
function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sortedItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}
```

### 21. What is reconciliation in React?

**Answer:**
Reconciliation is the algorithm React uses to determine what has changed and needs to be updated. When a component's state changes, React needs to figure out which parts of the DOM to update.

**Process:**

1. Render the new JSX
2. Create new Virtual DOM
3. Compare with previous Virtual DOM (diffing)
4. Calculate minimal changes needed
5. Update actual DOM with only the changed parts

**Key principles:**

- Different element types produce different trees
- Keys help identify elements across re-renders
- React batches updates for performance

**Example:**

```
function List({ items }) {
  // React needs to reconcile items when the array changes
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Original: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
// Updated:  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
// React's reconciliation process:
// 1. Item 1 and 2 are still there, no changes needed
// 2. Item 3 is new, add it to DOM
// 3. Only one DOM insertion, not three re-renders
```

### 22. How does React's diffing algorithm work?

**Answer:**
React's diffing algorithm compares the new Virtual DOM with the previous one to determine the minimal changes needed for the actual DOM.

**Algorithm principles:**

1. **Element type comparison**: Different types create different trees
2. **DOM element attributes**: Changed attributes are updated
3. **Children comparison**: Recursively compares child elements
4. **Key-based identification**: Keys help match elements across renders

**Complexity:**

- Without optimization: O(n³)
- React's algorithm: O(n) using heuristics

**Example:**

```
// Case 1: Element type changed (full tree rebuild)
// Before: <div><Counter /></div>
// After:  <span><Counter /></span>
// Result: Old div is destroyed, new span is created

// Case 2: Same element type, different attributes
// Before: <input value="hi" />
// After:  <input value="hello" />
// Result: Only the 'value' attribute is updated

// Case 3: Child lists with keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Before: [{ id: 1, text: 'A' }, { id: 2, text: 'B' }]
// After:  [{ id: 2, text: 'B' }, { id: 1, text: 'A' }]
// Without keys: All children are recreated
// With keys: Items are reordered without recreation
```

### 23. What is React.lazy and Suspense? How does lazy loading work in React?

**Answer:**
React.lazy enables code splitting by lazy-loading components. Suspense allows you to show a fallback while the component is loading.

**Benefits:**

- Smaller initial bundle size
- Faster initial page load
- Components loaded on demand
- Better performance for large apps

**Example:**

```
import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>

      <Suspense fallback={<p>Loading dashboard...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

// Lazy loading with route-based code splitting
import { BrowserRouter, Routes, Route, Suspense, lazy } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### 24. What are error boundaries, and how do they work?

**Answer:**
Error boundaries are React components that catch JavaScript errors in child components during rendering, lifecycle methods, or constructors. They prevent the entire app from crashing.

**What error boundaries catch:**

- Rendering errors
- Lifecycle method errors
- Constructor errors
- Errors in child components

**What they don't catch:**

- Event handler errors (use try/catch)
- Asynchronous code
- Server-side rendering
- Errors in the error boundary itself

**Example:**

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error);
    console.log('Error info:', errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <MainContent />
      <Footer />
    </ErrorBoundary>
  );
}

// Functional component with error handling
function RiskyComponent() {
  if (Math.random() > 0.5) {
    throw new Error('Random error!');
  }
  return <h1>Everything is fine!</h1>;
}
```

### 25. How do you handle authentication and protected routes in React?

**Answer:**
Authentication is handled by verifying user credentials and storing tokens. Protected routes restrict access to authenticated users only.

**Process:**

1. User logs in with credentials
2. Server returns authentication token
3. Token is stored (localStorage, sessionStorage, or cookies)
4. Token is sent with API requests
5. Protected routes check authentication before rendering

**Example:**

```
import { useState, useContext, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
}

// Login Component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// App Router
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
```

### 26. What are render props, and how are they different from HOCs?

**Answer:**
Render props is a pattern where a component takes a function as a prop that returns React elements. It's an alternative to HOCs for sharing component logic.

**Render Props vs HOC:**

| Feature         | Render Props                | HOC                         |
| --------------- | --------------------------- | --------------------------- |
| **Syntax**      | Function prop               | Wrapping function           |
| **Readability** | Clear data flow             | Less obvious                |
| **Nesting**     | Can lead to nesting         | Wrapper hell                |
| **Naming**      | Requires component wrapping | Can cause naming collisions |

**Example:**

```
// Render Props Pattern
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

// Usage
function App() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <p>Mouse is at ({x}, {y})</p>
      )}
    </MouseTracker>
  );
}

// Alternative with 'render' prop
class DataFetcher extends React.Component {
  state = { data: null, loading: true };

  componentDidMount() {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    return this.props.render(this.state);
  }
}

// Usage
<DataFetcher
  render={({ data, loading }) => (
    loading ? <p>Loading...</p> : <p>{data}</p>
  )}
/>
```

### 27. How does server-side rendering (SSR) differ from client-side rendering (CSR) in React?

**Answer:**

**Client-Side Rendering (CSR):**

- React app runs in the browser
- Initial HTML is mostly empty
- JavaScript downloads and executes
- Components render in the browser
- Faster subsequent navigation

**Server-Side Rendering (SSR):**

- React renders on the server
- Full HTML sent to browser
- Browser receives complete page
- Initial page load is faster
- Better SEO

| Aspect            | CSR                     | SSR            |
| ----------------- | ----------------------- | -------------- |
| **Initial Load**  | Slower                  | Faster         |
| **SEO**           | Worse                   | Better         |
| **JS Payload**    | Large                   | Can be smaller |
| **Interactivity** | Slower (after JS loads) | Fast           |
| **Server Load**   | None                    | High           |

**Example:**

```
// Client-Side Rendering (Standard React/Create React App)
// index.jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Server-Side Rendering (Next.js)
// pages/index.jsx
export default function Home({ data }) {
  return <h1>{data.title}</h1>;
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

// Or with Static Generation
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 // Revalidate every 60 seconds
  };
}
```

### 28. What are React Fiber and Concurrent Mode?

**Answer:**
React Fiber is the reconciliation engine that powers React. Concurrent Mode allows React to pause, stop, and resume work to avoid blocking the main thread.

**React Fiber:**

- Internal architecture for rendering
- Enables incremental rendering
- Improves performance and responsiveness
- Introduced in React 16

**Concurrent Mode (Experimental):**

- Allows rendering to be interruptible
- Prioritizes urgent updates
- Improves responsiveness for large apps
- Uses time slicing to split work into chunks

**Example:**

```
import { startTransition, useTransition, useDeferredValue } from 'react';

function SearchResults({ query }) {
  // useTransition: Mark state update as non-urgent
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;

    // Mark this state update as non-urgent
    startTransition(() => {
      setResults(performExpensiveSearch(value));
    });
  };

  return (
    <div>
      <input onChange={handleSearch} />
      {isPending && <p>Searching...</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

// useDeferredValue: Defer expensive computations
function DeferredSearch({ query }) {
  const deferredQuery = useDeferredValue(query);

  // deferredQuery is updated after more urgent updates
  const results = useMemo(() => {
    return expensiveSearch(deferredQuery);
  }, [deferredQuery]);

  return <ul>{results.map(r => <li key={r.id}>{r}</li>)}</ul>;
}
```

### 29. How do you test React components? What are the commonly used testing libraries?

**Answer:**
Testing React components involves unit tests, integration tests, and end-to-end tests. Common libraries include Jest, React Testing Library, and Enzyme.

**Common testing libraries:**

- **Jest**: Test runner and assertion library
- **React Testing Library**: Encourages testing user behavior
- **Enzyme**: Component testing utilities
- **Cypress**: End-to-end testing
- **Playwright**: Cross-browser testing

**Example:**

```
// Component to test
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// Testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter Component', () => {
  test('renders initial count as 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');

    fireEvent.click(button);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementBtn = screen.getByText('Decrement');

    fireEvent.click(decrementBtn);

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  test('handles multiple clicks', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText('Increment');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });
});

// Async testing with useEffect
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  return user ? <h1>{user.name}</h1> : <p>Loading...</p>;
}

test('loads and displays user data', async () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  const userName = await screen.findByText('John');
  expect(userName).toBeInTheDocument();
});
```

## Performance & Optimization Questions

### 30. Explain useMemo in detail with practical examples.

**Answer:**
useMemo is a React hook that memoizes a computed value and only recalculates it when dependencies change. It's useful for optimizing expensive computations.

**When to use:**

- Heavy calculations (sorting, filtering, complex transformations)
- Preventing unnecessary recalculations
- Passing computed values to child components
- Creating stable references for dependencies

**When NOT to use:**

- Simple calculations (just return the value)
- Every computation (premature optimization)
- Replacing proper component structure

**Performance Impact:**

- Saves computation time
- Adds memory overhead
- Only beneficial for expensive operations (>1ms)

**Example:**

```
import { useMemo, useState } from 'react';

// Bad: Recalculates on every render
function DataProcessor({ items, searchTerm }) {
  // This runs every render - expensive!
  const filteredItems = items
    .filter(item => item.name.includes(searchTerm))
    .sort((a, b) => a.price - b.price)
    .map(item => ({ ...item, formatted: true }));

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name} - {item.price}</li>
      ))}
    </ul>
  );
}

// Good: Only recalculates when items or searchTerm changes
function DataProcessorOptimized({ items, searchTerm }) {
  const filteredItems = useMemo(() => {
    console.log('Recalculating filtered items...');
    return items
      .filter(item => item.name.includes(searchTerm))
      .sort((a, b) => a.price - b.price)
      .map(item => ({ ...item, formatted: true }));
  }, [items, searchTerm]); // Dependencies

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name} - {item.price}</li>
      ))}
    </ul>
  );
}

// Complex example: Expensive calculation
function Analytics({ data }) {
  const statistics = useMemo(() => {
    console.log('Computing statistics...');

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const average = total / data.length;
    const max = Math.max(...data.map(d => d.value));
    const min = Math.min(...data.map(d => d.value));

    // Simulate expensive operation
    let processedData = data;
    for (let i = 0; i < 1000000; i++) {
      processedData = processedData.map(d => d);
    }

    return { total, average, max, min, processedData };
  }, [data]);

  return (
    <div>
      <p>Total: {statistics.total}</p>
      <p>Average: {statistics.average}</p>
      <p>Max: {statistics.max}</p>
      <p>Min: {statistics.min}</p>
    </div>
  );
}

// With multiple dependencies
function FilterAndSort({ items, sortBy, filterBy }) {
  const processed = useMemo(() => {
    let result = items.filter(item =>
      filterBy ? item.type === filterBy : true
    );

    if (sortBy === 'name') {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      result = result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [items, sortBy, filterBy]);

  return <ItemList items={processed} />;
}
```

### 31. Explain useCallback in detail with practical examples.

**Answer:**
useCallback memoizes a function and returns the same function reference if dependencies haven't changed. It's useful for optimizing child components that depend on function props.

**When to use:**

- Passing functions to memoized child components
- Functions used in dependency arrays (useEffect, useMemo)
- Preventing unnecessary child re-renders
- Creating stable function references

**When NOT to use:**

- Callback defined once and never passed as prop
- Simple callbacks (premature optimization)
- Functions without dependencies

**Example:**

```
import { useCallback, useState, memo } from 'react';

// Bad: Creates new function on every render, causes child re-render
function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['a', 'b', 'c']);

  // New function created every render!
  const handleAddItem = () => {
    setItems(prev => [...prev, 'new']);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Child items={items} onAddItem={handleAddItem} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Child re-renders even though onAddItem logic hasn't changed
const Child = memo(function Child({ items, onAddItem }) {
  console.log('Child rendered');
  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
});

// Good: useCallback keeps function reference stable
function ParentOptimized() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['a', 'b', 'c']);

  // Same function reference as long as items doesn't change
  const handleAddItem = useCallback(() => {
    setItems(prev => [...prev, 'new']);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildOptimized items={items} onAddItem={handleAddItem} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Advanced: useCallback with dependencies
function FormHandler() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleNameChange = useCallback((e) => {
    setUser(prev => ({ ...prev, name: e.target.value }));
  }, []); // No dependencies needed for this simple case

  const handleEmailChange = useCallback((e) => {
    setUser(prev => ({ ...prev, email: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Submitting:', user);
    // Submit logic
  }, [user]); // Depends on user state

  return (
    <form onSubmit={handleSubmit}>
      <input value={user.name} onChange={handleNameChange} placeholder="Name" />
      <input value={user.email} onChange={handleEmailChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// useCallback with API calls
function SearchComponent({ apiUrl }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = useCallback((searchQuery) => {
    fetch(`${apiUrl}?q=${searchQuery}`)
      .then(res => res.json())
      .then(data => setResults(data));
  }, [apiUrl]); // Recreate if apiUrl changes

  return (
    <div>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <ul>
        {results.map(result => <li key={result.id}>{result.name}</li>)}
      </ul>
    </div>
  );
}
```

### 32. What is React.memo and how does it optimize performance?

**Answer:**
React.memo is a higher-order component that memoizes a component and prevents re-renders if props haven't changed. It performs shallow comparison of props by default.

**Benefits:**

- Prevents unnecessary re-renders
- Improves performance for expensive components
- Easy to implement
- Works with any component

**Drawbacks:**

- Shallow comparison only (doesn't work with complex nested objects)
- Adds extra comparison overhead (minimal but real)
- Can hide performance issues if used incorrectly

**When to use:**

- Pure functional components (same props = same output)
- Expensive components (calculations, animations)
- Components that receive same props frequently
- Large lists of components

**Example:**

```
import { memo, useState, useCallback } from 'react';

// Basic React.memo
const UserCard = memo(function UserCard({ name, email }) {
  console.log('UserCard rendered');
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
});

// Usage in parent
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* UserCard only re-renders if name or email props change */}
      <UserCard name="John" email="john@example.com" />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

// Custom comparison with React.memo
const ProductItem = memo(
  function ProductItem({ product, onSelect }) {
    console.log('ProductItem rendered:', product.id);
    return (
      <div onClick={() => onSelect(product.id)}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    // Return false if props are different (re-render)
    return (
      prevProps.product.id === nextProps.product.id &&
      prevProps.product.name === nextProps.product.name &&
      prevProps.product.price === nextProps.product.price
    );
  }
);

// Problem: Object props prevent memo from working
function ListBad() {
  const [selectedId, setSelectedId] = useState(null);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ];

  return (
    <div>
      {products.map(product => (
        // New product object created each render - memo doesn't help!
        <ProductItem
          key={product.id}
          product={product}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
}

// Solution: Memoize dependencies with useMemo and useCallback
function ListGood() {
  const [selectedId, setSelectedId] = useState(null);

  const products = useMemo(() => [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ], []);

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

// Complex example: Memoized list with optimizations
const OptimizedListItem = memo(({ item, onDelete, onEdit }) => {
  console.log('ListItem rendered:', item.id);
  return (
    <div className="list-item">
      <span>{item.name}</span>
      <button onClick={() => onEdit(item.id)}>Edit</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
});

function OptimizedList({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleEdit = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      {items.map(item => (
        <OptimizedListItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}
```

### 33. What is the relationship between useMemo, useCallback, and React.memo?

**Answer:**
These three tools work together to optimize React performance by preventing unnecessary re-renders and recalculations.

**How they work together:**

| Tool            | Purpose                      | Used With                                 |
| --------------- | ---------------------------- | ----------------------------------------- |
| **React.memo**  | Prevent component re-renders | Memoized child components                 |
| **useCallback** | Prevent function recreation  | Pass to React.memo children               |
| **useMemo**     | Prevent value recalculation  | Dependency arrays, expensive computations |

**Optimization Pattern:**

1. Wrap child component with React.memo
2. Memoize functions with useCallback
3. Memoize values with useMemo
4. Pass as props to memoized children

**Example:**

```
import { memo, useMemo, useCallback, useState } from 'react';

// Child component optimized with React.memo
const FilteredList = memo(function FilteredList({ items, onItemClick, filters }) {
  console.log('FilteredList rendered');

  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          onClick={() => onItemClick(item.id)}
          style={{ opacity: filters.includes(item.id) ? 1 : 0.5 }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Data: Use useMemo to keep stable reference
  const items = useMemo(() => [
    { id: 1, name: 'Item A', category: 'food' },
    { id: 2, name: 'Item B', category: 'drink' },
    { id: 3, name: 'Item C', category: 'food' },
  ], []);

  // Filter dependent on searchTerm
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Callback: Use useCallback to keep stable reference
  const handleItemClick = useCallback((id) => {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  }, []);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />

      {/* FilteredList only re-renders if:
          - filteredItems reference changes (searchTerm or items)
          - handleItemClick reference changes (never, because useCallback)
          - selectedIds reference changes (when selection changes)
      */}
      <FilteredList
        items={filteredItems}
        onItemClick={handleItemClick}
        filters={selectedIds}
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

// Anti-pattern: Using memoization incorrectly
function BadOptimization() {
  // ❌ BAD: Memoizing everything blindly
  const data = useMemo(() => ({ name: 'John' }), []);
  const handler = useCallback(() => console.log('click'), []);

  // This component doesn't need optimization
  return <SimpleButton onClick={handler} data={data} />;
}

// Pattern: Selective optimization
function GoodOptimization() {
  // ✅ GOOD: Only memoize when needed
  const [count, setCount] = useState(0);

  // Only memoize expensive operations
  const expensiveValue = useMemo(() => {
    return complexCalculation(); // Only if this is expensive
  }, []);

  // Only memoize callbacks passed to optimized children
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only if ExpensiveChild is React.memo

  return <ExpensiveChild value={expensiveValue} onClick={handleClick} />;
}
```

### 34. How do you identify performance bottlenecks in React applications?

**Answer:**
Identifying performance issues involves profiling, measuring, and analyzing render patterns.

**Tools:**

- React DevTools Profiler
- Chrome DevTools Performance tab
- console.time() / console.timeEnd()
- Performance Observer API
- Lighthouse
- Web Vitals

**Common bottlenecks:**

- Unnecessary re-renders
- Large bundle size
- Expensive computations
- Unoptimized images
- Network requests
- Long tasks blocking main thread

**Example:**

```
// Method 1: console.time
function SlowComponent() {
  console.time('slow-render');

  const result = expensiveCalculation();

  console.timeEnd('slow-render');

  return <div>{result}</div>;
}

// Method 2: React Profiler component
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <YourComponent />
    </Profiler>
  );
}

// Method 3: Track render count
function useRenderCount(componentName) {
  const renders = useRef(0);

  useEffect(() => {
    renders.current++;
    console.log(`${componentName} rendered ${renders.current} times`);
  });

  return renders.current;
}

function Component() {
  const count = useRenderCount('Component');
  return <div>Renders: {count}</div>;
}

// Method 4: Performance metrics
function measurePerformance() {
  const perfData = performance.getEntriesByType('measure');
  perfData.forEach(entry => {
    console.log(`${entry.name}: ${entry.duration}ms`);
  });
}

// Method 5: Identify unnecessary re-renders
function WhyDidYouRender() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <p>{count}</p>
      <p>{text}</p>
      {/* If this component re-renders when text changes,
          it's an unnecessary re-render */}
      <CountDisplay count={count} />
    </div>
  );
}
```

### 35. What are best practices for optimizing React applications?

**Answer:**
Optimization best practices help maintain performance as applications grow.

**Key practices:**

1. Profile before optimizing
2. Use React DevTools Profiler
3. Split code with React.lazy and Suspense
4. Optimize images and assets
5. Memoize expensive computations
6. Use proper key props in lists
7. Avoid inline functions/objects in props
8. Implement virtualization for long lists
9. Use Web Workers for heavy computations
10. Monitor Core Web Vitals

**Example:**

```
// 1. Code splitting
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}

// 2. Image optimization
function OptimizedImage() {
  return (
    <picture>
      <source srcSet="/image.webp" type="image/webp" />
      <img src="/image.jpg" alt="description" loading="lazy" />
    </picture>
  );
}

// 3. List virtualization with react-window
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index]}</div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// 4. Debouncing API calls
import { useCallback } from 'react';

function SearchInput() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      fetchResults(value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input onChange={handleChange} value={query} />;
}

// 5. Component structure optimization
// BAD: Props change frequently
function BadParent() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');

  return (
    <div>
      {/* All props change when count changes, forcing re-render */}
      <ExpensiveChild count={count} filter={filter} />
    </div>
  );
}

// GOOD: Split state based on where it's used
function GoodParent() {
  return (
    <div>
      <CounterSection />
      <FilterSection />
    </div>
  );
}

function CounterSection() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

function FilterSection() {
  const [filter, setFilter] = useState('');
  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
}
```

## Testing & Best Practices

### 36. What is the best way to structure a React project?

**Answer:**
Proper project structure improves maintainability, scalability, and collaboration. Here's a recommended structure:

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Header.jsx
│   ├── features/         # Feature-specific components
│   │   ├── Auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx
│   │       └── Widgets/
│   └── layouts/          # Layout components
│       ├── MainLayout.jsx
│       └── AuthLayout.jsx
├── pages/                # Page components
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   └── NotFound.jsx
├── hooks/                # Custom hooks
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useLocalStorage.js
├── services/             # API and external services
│   ├── api.js
│   ├── auth.js
│   └── analytics.js
├── utils/                # Utility functions
│   ├── helpers.js
│   ├── validators.js
│   └── constants.js
├── context/              # React Context
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── store/                # Redux or state management
│   ├── slices/
│   └── store.js
├── styles/               # Global styles
│   └── globals.css
├── App.jsx
└── main.jsx
```

### 37. What are common React anti-patterns to avoid?

**Answer:**

**Common anti-patterns:**

1. **Mutating state directly**

```
// ❌ Bad
state.count = state.count + 1;

// ✅ Good
setState(prev => ({ ...prev, count: prev.count + 1 }));
```

2. **Using array index as key**

```
// ❌ Bad
{items.map((item, index) => <Item key={index} />)}

// ✅ Good
{items.map(item => <Item key={item.id} />)}
```

3. **Fetching in render**

```
// ❌ Bad
function Component() {
  const data = fetch('/api/data'); // Fetches on every render!
  return <div>{data}</div>;
}

// ✅ Good
function Component() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  return <div>{data}</div>;
}
```

4. **Prop drilling too deeply**

```
// ❌ Bad - Prop drilling through 5+ levels

// ✅ Good - Use Context API or state management
```

5. **Not cleaning up side effects**

```
// ❌ Bad
useEffect(() => {
  const interval = setInterval(() => {}, 1000);
});

// ✅ Good
useEffect(() => {
  const interval = setInterval(() => {}, 1000);
  return () => clearInterval(interval);
}, []);
```

### 38. How do you prevent memory leaks in React?

**Answer:**

**Common causes of memory leaks:**

- Uncleared timers (setInterval, setTimeout)
- Unsubscribed event listeners
- Unaborted API requests
- Unreleased resources

**Solutions:**

```
// 1. Clean up timers
function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);
}

// 2. Remove event listeners
function ScrollListener() {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// 3. Abort fetch requests
function DataFetcher() {
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/data', { signal: controller.signal })
      .then(r => r.json())
      .catch(e => console.log(e));

    return () => controller.abort();
  }, []);
}

// 4. Unsubscribe from subscriptions
function SubscriptionComponent() {
  useEffect(() => {
    const subscription = observable.subscribe(handleNext);
    return () => subscription.unsubscribe();
  }, []);
}
```

### 39. What is the useRef hook and when should you use it?

**Answer:**
useRef returns a mutable ref object that persists across renders and doesn't cause re-renders when updated.

**Use cases:**

- Accessing DOM elements directly
- Storing mutable values
- Keeping previous values
- Managing focus and text selection
- Triggering animations

**Example:**

```
// Accessing DOM elements
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}

// Storing mutable values
function Stopwatch() {
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <p>{count}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

// Keeping previous values
function Component({ count }) {
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return <div>Now: {count}, before: {prevCountRef.current}</div>;
}
```

### 40. What are custom hooks and how do you create them?

**Answer:**
Custom hooks are JavaScript functions that use React hooks. They allow you to reuse stateful logic across components.

**Rules for custom hooks:**

- Name must start with "use"
- Can only call other hooks
- Can only be called from React components or other hooks

**Example:**

```
// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{user.name}</h1>;
}

// Custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit, errors, setErrors };
}

// Usage
function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    (values) => console.log('Submitted:', values)
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### 41. What is the React DevTools and how do you use it?

**Answer:**
React DevTools is a browser extension that helps debug and profile React applications.

**Features:**

- Inspect component hierarchy
- View and edit props and state
- Track component re-renders
- Profile performance
- Highlight component updates

**Common use cases:**

- Debugging component state
- Understanding component relationships
- Performance profiling
- Finding why components re-render
- Inspecting component props

### 42. What is code splitting and how does it improve performance?

**Answer:**
Code splitting breaks your application into smaller chunks loaded on demand, reducing initial bundle size and improving performance.

**Benefits:**

- Smaller initial bundle
- Faster page load
- Better caching
- Parallel loading

**Strategies:**

```
// 1. Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

// 2. Component-based code splitting
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<p>Loading chart...</p>}>
      <HeavyChart />
    </Suspense>
  );
}

// 3. Dynamic imports
async function loadModule() {
  const module = await import('./myModule');
  module.default();
}
```

### 43. What is the difference between controlled and uncontrolled components (revisited)?

**Answer:**
This is an important concept worth revisiting with more detail.

**Controlled Components:**

- React state is the single source of truth
- Every keystroke updates state
- Value is explicitly set
- Predictable and easier to test

**Uncontrolled Components:**

- DOM is the source of truth
- Use ref to access values
- Works like traditional HTML
- Less React-y but sometimes simpler

**When to use each:**

- **Controlled**: Forms with validation, dependent fields, multiple inputs
- **Uncontrolled**: Simp
=======
# React Interview Questions & Answers

Comprehensive guide to 50+ React interview questions organized by difficulty level with detailed explanations, code examples, and best practices.

## Table of Contents

1. [Basic Level Questions](#basic-level-questions)
2. [Moderate Level Questions](#moderate-level-questions)
3. [Advanced Level Questions](#advanced-level-questions)
4. [Performance & Optimization Questions](#performance--optimization-questions)
5. [Testing & Best Practices](#testing--best-practices)

## Basic Level Questions

### 1. What is React and how does it work?

**Answer:**

React is an open-source JavaScript library used for building user interfaces, mainly for single-page applications. It is developed and maintained by Facebook. React helps developers create fast, dynamic, and interactive web applications using reusable components and a Virtual DOM for efficient rendering.

**How it works:**

- React creates a Virtual DOM representation of the actual DOM
- When state changes, React re-renders components and updates the Virtual DOM
- React compares (diffs) the new Virtual DOM with the previous one
- Only the changed elements are updated in the actual DOM

**Example:**

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

**What is a Virtual DOM?**
The Virtual DOM is an in-memory representation of the actual DOM (Document Object Model)
that React uses to optimize updates and minimize direct DOM manipulation.

### 2. What are the differences between functional and class components?

**Answer:**

| Aspect                | Functional              | Class                                       |
| --------------------- | ----------------------- | ------------------------------------------- |
| **Syntax**            | Regular JS functions    | ES6 class extending React.Component         |
| **State**             | Use useState hook       | this.state                                  |
| **Lifecycle**         | useEffect hook          | componentDidMount, componentDidUpdate, etc. |
| **Performance**       | Slightly faster         | Slightly slower                             |
| **Modern Preference** | Recommended (Hooks era) | Older approach                              |

**Example:**

```
// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 3. What are props and state? How are they different?

**Answer:**

**Props (Properties):**

- Read-only data passed from parent to child
- Cannot be modified by the child component
- Used to pass data and callbacks down the component tree

**State:**

- State in React is a built-in object that stores dynamic data for a component. It represents information that can change over time, like user input, API data, or UI updates. When the state changes, React automatically re-renders the component to update the UI.

| Feature         | Props           | State              |
| --------------- | --------------- | ------------------ |
| **Passed from** | Parent to Child | Within component   |
| **Mutable**     | No              | Yes                |
| **Scope**       | Passed down     | Local to component |

**Example:**

```
function Parent() {
  const [age, setAge] = useState(25);

  return <Child name="John" age={age} updateAge={setAge} />;
}

function Child({ name, age, updateAge }) {
  return (
    <div>
      <p>Name (prop): {name}</p>
      <p>Age (prop): {age}</p>
      <button onClick={() => updateAge(age + 1)}>Birthday</button>
    </div>
  );
}
```

### 4. What is JSX, and why is it used in React?

**Answer:**
JSX is a syntax extension that allows you to write HTML-like code in JavaScript. It's not valid JavaScript, so it needs to be compiled into regular JavaScript function calls.

**Why use JSX:**

- Makes code more readable and intuitive
- Looks like HTML, familiar to developers
- Prevents injection attacks (escapes values)
- Better error and warning messages

**Example:**

```
// JSX
const element = <h1>Hello, {name}!</h1>;

// Compiles to:
const element = React.createElement('h1', null, `Hello, ${name}!`);

// JSX with attributes
const card = (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
```

### 5. How do you create a simple React component?

**Answer:**
React components can be created as functional or class-based. Functional components are the modern standard.

**Example:**

```
// Simple Functional Component
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Component with props
function UserCard({ name, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// Usage
export default function App() {
  return (
    <div>
      <Greeting />
      <UserCard name="John" email="john@example.com" />
    </div>
  );
}
```

### 6. What is the Virtual DOM, and why is it important?

**Answer:**
The Virtual DOM is an in-memory representation of the actual DOM. React uses it to optimize updates by batching changes and minimizing direct DOM manipulation.

**Why it's important:**

- **Performance**: Direct DOM manipulation is slow; Virtual DOM updates are faster
- **Batching**: Multiple updates are batched together
- **Diffing Algorithm**: Only changed elements are updated in the real DOM
- **Abstraction**: Developers don't need to worry about low-level DOM operations

**Example:**

```
function App() {
  const [count, setCount] = useState(0);

  // When state changes:
  // 1. New Virtual DOM is created
  // 2. Compared with previous Virtual DOM
  // 3. Only the count element is updated in the real DOM
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 7. What is the purpose of the key prop in React lists?

**Answer:**
The `key` prop helps React identify which elements have changed, been added, or removed. It helps maintain component state during list re-renders.

**Why it's important:**

- Helps React match elements across re-renders
- Preserves component state in lists
- Improves performance
- Prevents bugs with form inputs and animations

**Example:**

```
// Without key (Bad)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}

// With key (Good)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Using unique ID (Best practice)
const todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build Project' },
];
```

### 8. How do you handle events in React?

**Answer:**
React events are similar to DOM events but use camelCase naming convention and pass event objects as parameters.

**Example:**

```
function EventDemo() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} placeholder="Type..." />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

### 9. What are default props in React?

**Answer:**
Default props are default values assigned to props if they are not provided by the parent component.

**Example:**

```
// Using defaultProps (Functional Component)
function Greeting({ name = 'Guest', age = 18 }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}

// Or using defaultProps property
Greeting.defaultProps = {
  name: 'Guest',
  age: 18,
};

// Class Component
class Greeting extends React.Component {
  static defaultProps = {
    name: 'Guest',
    age: 18,
  };

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Usage
<Greeting /> // Uses default props
<Greeting name="John" /> // Uses provided props
```

### 10. What is conditional rendering in React?

**Answer:**
Conditional rendering is rendering different content based on specific conditions. It's similar to if/else statements in JavaScript.

**Methods:**

1. If/else statements
2. Ternary operator
3. Logical AND (&&)
4. Switch statements

**Example:**

```
function UserStatus({ isLoggedIn, user }) {
  // Method 1: If/else
  if (isLoggedIn) {
    return <h1>Welcome back, {user.name}!</h1>;
  }
  return <h1>Please log in</h1>;
}

// Method 2: Ternary operator
function LoginButton({ isLoggedIn }) {
  return isLoggedIn ? <button>Logout</button> : <button>Login</button>;
}

// Method 3: Logical AND
function Messages({ unreadCount }) {
  return (
    <div>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages</p>}
    </div>
  );
}

// Method 4: Switch statement
function Greeting({ timeOfDay }) {
  switch (timeOfDay) {
    case 'morning':
      return <h1>Good Morning!</h1>;
    case 'evening':
      return <h1>Good Evening!</h1>;
    default:
      return <h1>Hello!</h1>;
  }
}
```

## Moderate Level Questions

### 11. What are React Hooks? Can you explain useState and useEffect with examples?

React Hooks are special functions that let you use state and other React features
in functional components without writing a class.

- useState: A hook that allows functional components to hold and update state.
  It returns the current state and a function to update it.

- useEffect: A hook that lets functional components perform side effects,
  such as fetching data, subscribing to events, or updating the DOM,
  and run code in response to state or prop changes.

**Example:**

```
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  // useState Hook
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect Hook
  useEffect(() => {
    // Run on mount and when userId changes
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });

    // Cleanup function (runs on unmount)
    return () => {
      console.log('Cleaning up');
    };
  }, [userId]); // Dependency array

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 12. What is the difference between controlled and uncontrolled components?

**Answer:**

**Controlled Components:**

- Form data is handled by React state
- Value is set by the component's state
- More predictable and easier to manipulate
- React is the "single source of truth"

**Uncontrolled Components:**

- Form data is handled by the DOM
- Access value using refs
- Works like traditional HTML form elements
- Less React-like but simpler in some cases

**Example:**

```
// Controlled Component
function ControlledForm() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Uncontrolled Component
function UncontrolledForm() {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 13. What is React Router, and how does client-side routing work?

**Answer:**
React Router is a popular library for handling navigation and routing in single-page applications (SPAs). Client-side routing updates the UI without full page reloads.

**How it works:**

- Intercepts URL changes
- Updates browser history
- Renders appropriate components based on URL
- No server requests for route changes

**Example:**

```
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserDetail() {
  const { id } = useParams();
  return <h1>User: {id}</h1>;
}
```

### 14. What is the Context API, and when should you use it instead of Redux?

**Answer:**
Context API provides a way to pass data through component trees without manually passing props at every level.

**When to use Context API:**

- Simple state management
- Avoiding prop drilling
- Theming (dark/light mode)
- Authentication state
- Small to medium applications

**When to use Redux:**

- Large, complex applications
- Multiple independent state slices
- Need for time-travel debugging
- Complex state transformations
- Team already familiar with Redux

**Example:**

```
import { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
function useTheme() {
  return useContext(ThemeContext);
}

// Usage
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
```

### 15. What is prop drilling, and how can it be avoided?

**Answer:**
Prop drilling is passing props through many levels of components even if intermediate components don't use them. It makes code harder to maintain and track data flow.

**Solutions:**

1. Context API
2. State management library (Redux)
3. Component composition
4. Custom hooks

**Example:**

```
// Problem: Prop Drilling
function App() {
  const [user, setUser] = useState({ name: 'John' });
  return <Level1 user={user} />;
}

function Level1({ user }) {
  return <Level2 user={user} />;
}

function Level2({ user }) {
  return <Level3 user={user} />;
}

function Level3({ user }) {
  return <h1>{user.name}</h1>;
}

// Solution: Using Context API
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John' });
  return (
    <UserContext.Provider value={user}>
      <Level1 />
    </UserContext.Provider>
  );
}

function Level1() {
  return <Level2 />;
}

function Level2() {
  return <Level3 />;
}

function Level3() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}
```

### 16. What is React.memo, and how does it help with performance optimization?

**Answer:**
React.memo is a higher-order component that memoizes a component. It prevents unnecessary re-renders if props haven't changed.

**When to use:**

- Pure functional components
- Expensive re-render operations
- Props don't change frequently
- Component receives same props repeatedly

**Example:**

```
// Without React.memo
function UserCard({ name, email }) {
  console.log('UserCard rendered');
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// With React.memo
const UserCardMemo = React.memo(UserCard);

// With custom comparison
const UserCardMemo = React.memo(
  UserCard,
  (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
  }
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UserCardMemo name="John" email="john@example.com" />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
// UserCard only renders once; count changes don't trigger re-render
```

### 17. What is the difference between useMemo and useCallback?

**Answer:**

**useMemo:**

- Memoizes a computed value
- Prevents expensive computations on every render
- Returns the memoized value

**useCallback:**

- Memoizes a function
- Prevents function recreation on every render
- Returns the memoized function
- Useful for optimizing child components that use the function as a prop

**Example:**

```
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useMemo: Memoize value
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value');
    return count * 2;
  }, [count]); // Only recompute when count changes

  // useCallback: Memoize function
  const memoizedCallback = useCallback(() => {
    console.log('Callback with text:', text);
  }, [text]); // Only recreate when text changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child callback={memoizedCallback} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Child({ callback }) {
  console.log('Child rendered');
  return <button onClick={callback}>Call parent</button>;
}

export default React.memo(App);
```

### 18. What is a Higher-Order Component (HOC), and how is it used?

**Answer:**
A Higher-Order Component is a function that takes a component and returns a new component with additional functionality. It's an advanced pattern for code reuse.

**Common use cases:**

- Props manipulation
- State abstraction
- Code reuse across components
- Authentication/authorization
- Theme provision

**Example:**

```
// HOC that adds theme
function withTheme(Component) {
  return function ThemedComponent(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <Component
        {...props}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  };
}

// Component using HOC
function MyComponent({ theme, toggleTheme }) {
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Apply HOC
const ThemedMyComponent = withTheme(MyComponent);

export default ThemedMyComponent;
```

### 19. How does React handle forms, and what are controlled inputs?

**Answer:**
React handles forms differently from vanilla HTML. Controlled inputs keep the input value in React state, making React the source of truth.

**Key differences:**

- Input value is controlled by state
- onChange handler updates state
- Form submission is handled by React
- More predictable and easier to validate

**Example:**

```
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Send to server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        Remember me
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
```

## Advanced Level Questions

### 20. How does React handle re-renders, and how can you optimize unnecessary re-renders?

**Answer:**
React re-renders a component when its state or props change. Unnecessary re-renders can impact performance and should be optimized.

**Optimization techniques:**

1. React.memo for functional components
2. useMemo for expensive computations
3. useCallback for function props
4. Code splitting and lazy loading
5. shouldComponentUpdate in class components
6. Proper key usage in lists
7. Lifting state appropriately

**Example:**

```
function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize callback to prevent child re-renders
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Child onIncrement={handleClick} />
      <p>Count: {count}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

// Wrapped with React.memo to prevent re-renders
const Child = React.memo(function Child({ onIncrement }) {
  console.log('Child rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

// Using useMemo for expensive calculation
function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sortedItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}
```

### 21. What is reconciliation in React?

**Answer:**
Reconciliation is the algorithm React uses to determine what has changed and needs to be updated. When a component's state changes, React needs to figure out which parts of the DOM to update.

**Process:**

1. Render the new JSX
2. Create new Virtual DOM
3. Compare with previous Virtual DOM (diffing)
4. Calculate minimal changes needed
5. Update actual DOM with only the changed parts

**Key principles:**

- Different element types produce different trees
- Keys help identify elements across re-renders
- React batches updates for performance

**Example:**

```
function List({ items }) {
  // React needs to reconcile items when the array changes
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Original: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
// Updated:  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
// React's reconciliation process:
// 1. Item 1 and 2 are still there, no changes needed
// 2. Item 3 is new, add it to DOM
// 3. Only one DOM insertion, not three re-renders
```

### 22. How does React's diffing algorithm work?

**Answer:**
React's diffing algorithm compares the new Virtual DOM with the previous one to determine the minimal changes needed for the actual DOM.

**Algorithm principles:**

1. **Element type comparison**: Different types create different trees
2. **DOM element attributes**: Changed attributes are updated
3. **Children comparison**: Recursively compares child elements
4. **Key-based identification**: Keys help match elements across renders

**Complexity:**

- Without optimization: O(n³)
- React's algorithm: O(n) using heuristics

**Example:**

```
// Case 1: Element type changed (full tree rebuild)
// Before: <div><Counter /></div>
// After:  <span><Counter /></span>
// Result: Old div is destroyed, new span is created

// Case 2: Same element type, different attributes
// Before: <input value="hi" />
// After:  <input value="hello" />
// Result: Only the 'value' attribute is updated

// Case 3: Child lists with keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Before: [{ id: 1, text: 'A' }, { id: 2, text: 'B' }]
// After:  [{ id: 2, text: 'B' }, { id: 1, text: 'A' }]
// Without keys: All children are recreated
// With keys: Items are reordered without recreation
```

### 23. What is React.lazy and Suspense? How does lazy loading work in React?

**Answer:**
React.lazy enables code splitting by lazy-loading components. Suspense allows you to show a fallback while the component is loading.

**Benefits:**

- Smaller initial bundle size
- Faster initial page load
- Components loaded on demand
- Better performance for large apps

**Example:**

```
import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>

      <Suspense fallback={<p>Loading dashboard...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

// Lazy loading with route-based code splitting
import { BrowserRouter, Routes, Route, Suspense, lazy } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### 24. What are error boundaries, and how do they work?

**Answer:**
Error boundaries are React components that catch JavaScript errors in child components during rendering, lifecycle methods, or constructors. They prevent the entire app from crashing.

**What error boundaries catch:**

- Rendering errors
- Lifecycle method errors
- Constructor errors
- Errors in child components

**What they don't catch:**

- Event handler errors (use try/catch)
- Asynchronous code
- Server-side rendering
- Errors in the error boundary itself

**Example:**

```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error);
    console.log('Error info:', errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <MainContent />
      <Footer />
    </ErrorBoundary>
  );
}

// Functional component with error handling
function RiskyComponent() {
  if (Math.random() > 0.5) {
    throw new Error('Random error!');
  }
  return <h1>Everything is fine!</h1>;
}
```

### 25. How do you handle authentication and protected routes in React?

**Answer:**
Authentication is handled by verifying user credentials and storing tokens. Protected routes restrict access to authenticated users only.

**Process:**

1. User logs in with credentials
2. Server returns authentication token
3. Token is stored (localStorage, sessionStorage, or cookies)
4. Token is sent with API requests
5. Protected routes check authentication before rendering

**Example:**

```
import { useState, useContext, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return children;
}

// Login Component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// App Router
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
```

### 26. What are render props, and how are they different from HOCs?

**Answer:**
Render props is a pattern where a component takes a function as a prop that returns React elements. It's an alternative to HOCs for sharing component logic.

**Render Props vs HOC:**

| Feature         | Render Props                | HOC                         |
| --------------- | --------------------------- | --------------------------- |
| **Syntax**      | Function prop               | Wrapping function           |
| **Readability** | Clear data flow             | Less obvious                |
| **Nesting**     | Can lead to nesting         | Wrapper hell                |
| **Naming**      | Requires component wrapping | Can cause naming collisions |

**Example:**

```
// Render Props Pattern
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

// Usage
function App() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <p>Mouse is at ({x}, {y})</p>
      )}
    </MouseTracker>
  );
}

// Alternative with 'render' prop
class DataFetcher extends React.Component {
  state = { data: null, loading: true };

  componentDidMount() {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    return this.props.render(this.state);
  }
}

// Usage
<DataFetcher
  render={({ data, loading }) => (
    loading ? <p>Loading...</p> : <p>{data}</p>
  )}
/>
```

### 27. How does server-side rendering (SSR) differ from client-side rendering (CSR) in React?

**Answer:**

**Client-Side Rendering (CSR):**

- React app runs in the browser
- Initial HTML is mostly empty
- JavaScript downloads and executes
- Components render in the browser
- Faster subsequent navigation

**Server-Side Rendering (SSR):**

- React renders on the server
- Full HTML sent to browser
- Browser receives complete page
- Initial page load is faster
- Better SEO

| Aspect            | CSR                     | SSR            |
| ----------------- | ----------------------- | -------------- |
| **Initial Load**  | Slower                  | Faster         |
| **SEO**           | Worse                   | Better         |
| **JS Payload**    | Large                   | Can be smaller |
| **Interactivity** | Slower (after JS loads) | Fast           |
| **Server Load**   | None                    | High           |

**Example:**

```
// Client-Side Rendering (Standard React/Create React App)
// index.jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Server-Side Rendering (Next.js)
// pages/index.jsx
export default function Home({ data }) {
  return <h1>{data.title}</h1>;
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

// Or with Static Generation
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 // Revalidate every 60 seconds
  };
}
```

### 28. What are React Fiber and Concurrent Mode?

**Answer:**
React Fiber is the reconciliation engine that powers React. Concurrent Mode allows React to pause, stop, and resume work to avoid blocking the main thread.

**React Fiber:**

- Internal architecture for rendering
- Enables incremental rendering
- Improves performance and responsiveness
- Introduced in React 16

**Concurrent Mode (Experimental):**

- Allows rendering to be interruptible
- Prioritizes urgent updates
- Improves responsiveness for large apps
- Uses time slicing to split work into chunks

**Example:**

```
import { startTransition, useTransition, useDeferredValue } from 'react';

function SearchResults({ query }) {
  // useTransition: Mark state update as non-urgent
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;

    // Mark this state update as non-urgent
    startTransition(() => {
      setResults(performExpensiveSearch(value));
    });
  };

  return (
    <div>
      <input onChange={handleSearch} />
      {isPending && <p>Searching...</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

// useDeferredValue: Defer expensive computations
function DeferredSearch({ query }) {
  const deferredQuery = useDeferredValue(query);

  // deferredQuery is updated after more urgent updates
  const results = useMemo(() => {
    return expensiveSearch(deferredQuery);
  }, [deferredQuery]);

  return <ul>{results.map(r => <li key={r.id}>{r}</li>)}</ul>;
}
```

### 29. How do you test React components? What are the commonly used testing libraries?

**Answer:**
Testing React components involves unit tests, integration tests, and end-to-end tests. Common libraries include Jest, React Testing Library, and Enzyme.

**Common testing libraries:**

- **Jest**: Test runner and assertion library
- **React Testing Library**: Encourages testing user behavior
- **Enzyme**: Component testing utilities
- **Cypress**: End-to-end testing
- **Playwright**: Cross-browser testing

**Example:**

```
// Component to test
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// Testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter Component', () => {
  test('renders initial count as 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');

    fireEvent.click(button);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementBtn = screen.getByText('Decrement');

    fireEvent.click(decrementBtn);

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  test('handles multiple clicks', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText('Increment');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });
});

// Async testing with useEffect
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  return user ? <h1>{user.name}</h1> : <p>Loading...</p>;
}

test('loads and displays user data', async () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  const userName = await screen.findByText('John');
  expect(userName).toBeInTheDocument();
});
```

## Performance & Optimization Questions

### 30. Explain useMemo in detail with practical examples.

**Answer:**
useMemo is a React hook that memoizes a computed value and only recalculates it when dependencies change. It's useful for optimizing expensive computations.

**When to use:**

- Heavy calculations (sorting, filtering, complex transformations)
- Preventing unnecessary recalculations
- Passing computed values to child components
- Creating stable references for dependencies

**When NOT to use:**

- Simple calculations (just return the value)
- Every computation (premature optimization)
- Replacing proper component structure

**Performance Impact:**

- Saves computation time
- Adds memory overhead
- Only beneficial for expensive operations (>1ms)

**Example:**

```
import { useMemo, useState } from 'react';

// Bad: Recalculates on every render
function DataProcessor({ items, searchTerm }) {
  // This runs every render - expensive!
  const filteredItems = items
    .filter(item => item.name.includes(searchTerm))
    .sort((a, b) => a.price - b.price)
    .map(item => ({ ...item, formatted: true }));

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name} - {item.price}</li>
      ))}
    </ul>
  );
}

// Good: Only recalculates when items or searchTerm changes
function DataProcessorOptimized({ items, searchTerm }) {
  const filteredItems = useMemo(() => {
    console.log('Recalculating filtered items...');
    return items
      .filter(item => item.name.includes(searchTerm))
      .sort((a, b) => a.price - b.price)
      .map(item => ({ ...item, formatted: true }));
  }, [items, searchTerm]); // Dependencies

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name} - {item.price}</li>
      ))}
    </ul>
  );
}

// Complex example: Expensive calculation
function Analytics({ data }) {
  const statistics = useMemo(() => {
    console.log('Computing statistics...');

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const average = total / data.length;
    const max = Math.max(...data.map(d => d.value));
    const min = Math.min(...data.map(d => d.value));

    // Simulate expensive operation
    let processedData = data;
    for (let i = 0; i < 1000000; i++) {
      processedData = processedData.map(d => d);
    }

    return { total, average, max, min, processedData };
  }, [data]);

  return (
    <div>
      <p>Total: {statistics.total}</p>
      <p>Average: {statistics.average}</p>
      <p>Max: {statistics.max}</p>
      <p>Min: {statistics.min}</p>
    </div>
  );
}

// With multiple dependencies
function FilterAndSort({ items, sortBy, filterBy }) {
  const processed = useMemo(() => {
    let result = items.filter(item =>
      filterBy ? item.type === filterBy : true
    );

    if (sortBy === 'name') {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      result = result.sort((a, b) => a.price - b.price);
    }

    return result;
  }, [items, sortBy, filterBy]);

  return <ItemList items={processed} />;
}
```

### 31. Explain useCallback in detail with practical examples.

**Answer:**
useCallback memoizes a function and returns the same function reference if dependencies haven't changed. It's useful for optimizing child components that depend on function props.

**When to use:**

- Passing functions to memoized child components
- Functions used in dependency arrays (useEffect, useMemo)
- Preventing unnecessary child re-renders
- Creating stable function references

**When NOT to use:**

- Callback defined once and never passed as prop
- Simple callbacks (premature optimization)
- Functions without dependencies

**Example:**

```
import { useCallback, useState, memo } from 'react';

// Bad: Creates new function on every render, causes child re-render
function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['a', 'b', 'c']);

  // New function created every render!
  const handleAddItem = () => {
    setItems(prev => [...prev, 'new']);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Child items={items} onAddItem={handleAddItem} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Child re-renders even though onAddItem logic hasn't changed
const Child = memo(function Child({ items, onAddItem }) {
  console.log('Child rendered');
  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
});

// Good: useCallback keeps function reference stable
function ParentOptimized() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['a', 'b', 'c']);

  // Same function reference as long as items doesn't change
  const handleAddItem = useCallback(() => {
    setItems(prev => [...prev, 'new']);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildOptimized items={items} onAddItem={handleAddItem} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Advanced: useCallback with dependencies
function FormHandler() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleNameChange = useCallback((e) => {
    setUser(prev => ({ ...prev, name: e.target.value }));
  }, []); // No dependencies needed for this simple case

  const handleEmailChange = useCallback((e) => {
    setUser(prev => ({ ...prev, email: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Submitting:', user);
    // Submit logic
  }, [user]); // Depends on user state

  return (
    <form onSubmit={handleSubmit}>
      <input value={user.name} onChange={handleNameChange} placeholder="Name" />
      <input value={user.email} onChange={handleEmailChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// useCallback with API calls
function SearchComponent({ apiUrl }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = useCallback((searchQuery) => {
    fetch(`${apiUrl}?q=${searchQuery}`)
      .then(res => res.json())
      .then(data => setResults(data));
  }, [apiUrl]); // Recreate if apiUrl changes

  return (
    <div>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <ul>
        {results.map(result => <li key={result.id}>{result.name}</li>)}
      </ul>
    </div>
  );
}
```

### 32. What is React.memo and how does it optimize performance?

**Answer:**
React.memo is a higher-order component that memoizes a component and prevents re-renders if props haven't changed. It performs shallow comparison of props by default.

**Benefits:**

- Prevents unnecessary re-renders
- Improves performance for expensive components
- Easy to implement
- Works with any component

**Drawbacks:**

- Shallow comparison only (doesn't work with complex nested objects)
- Adds extra comparison overhead (minimal but real)
- Can hide performance issues if used incorrectly

**When to use:**

- Pure functional components (same props = same output)
- Expensive components (calculations, animations)
- Components that receive same props frequently
- Large lists of components

**Example:**

```
import { memo, useState, useCallback } from 'react';

// Basic React.memo
const UserCard = memo(function UserCard({ name, email }) {
  console.log('UserCard rendered');
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
});

// Usage in parent
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* UserCard only re-renders if name or email props change */}
      <UserCard name="John" email="john@example.com" />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

// Custom comparison with React.memo
const ProductItem = memo(
  function ProductItem({ product, onSelect }) {
    console.log('ProductItem rendered:', product.id);
    return (
      <div onClick={() => onSelect(product.id)}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    // Return false if props are different (re-render)
    return (
      prevProps.product.id === nextProps.product.id &&
      prevProps.product.name === nextProps.product.name &&
      prevProps.product.price === nextProps.product.price
    );
  }
);

// Problem: Object props prevent memo from working
function ListBad() {
  const [selectedId, setSelectedId] = useState(null);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ];

  return (
    <div>
      {products.map(product => (
        // New product object created each render - memo doesn't help!
        <ProductItem
          key={product.id}
          product={product}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
}

// Solution: Memoize dependencies with useMemo and useCallback
function ListGood() {
  const [selectedId, setSelectedId] = useState(null);

  const products = useMemo(() => [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ], []);

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

// Complex example: Memoized list with optimizations
const OptimizedListItem = memo(({ item, onDelete, onEdit }) => {
  console.log('ListItem rendered:', item.id);
  return (
    <div className="list-item">
      <span>{item.name}</span>
      <button onClick={() => onEdit(item.id)}>Edit</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
});

function OptimizedList({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleEdit = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      {items.map(item => (
        <OptimizedListItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}
```

### 33. What is the relationship between useMemo, useCallback, and React.memo?

**Answer:**
These three tools work together to optimize React performance by preventing unnecessary re-renders and recalculations.

**How they work together:**

| Tool            | Purpose                      | Used With                                 |
| --------------- | ---------------------------- | ----------------------------------------- |
| **React.memo**  | Prevent component re-renders | Memoized child components                 |
| **useCallback** | Prevent function recreation  | Pass to React.memo children               |
| **useMemo**     | Prevent value recalculation  | Dependency arrays, expensive computations |

**Optimization Pattern:**

1. Wrap child component with React.memo
2. Memoize functions with useCallback
3. Memoize values with useMemo
4. Pass as props to memoized children

**Example:**

```
import { memo, useMemo, useCallback, useState } from 'react';

// Child component optimized with React.memo
const FilteredList = memo(function FilteredList({ items, onItemClick, filters }) {
  console.log('FilteredList rendered');

  return (
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          onClick={() => onItemClick(item.id)}
          style={{ opacity: filters.includes(item.id) ? 1 : 0.5 }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Data: Use useMemo to keep stable reference
  const items = useMemo(() => [
    { id: 1, name: 'Item A', category: 'food' },
    { id: 2, name: 'Item B', category: 'drink' },
    { id: 3, name: 'Item C', category: 'food' },
  ], []);

  // Filter dependent on searchTerm
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Callback: Use useCallback to keep stable reference
  const handleItemClick = useCallback((id) => {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  }, []);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />

      {/* FilteredList only re-renders if:
          - filteredItems reference changes (searchTerm or items)
          - handleItemClick reference changes (never, because useCallback)
          - selectedIds reference changes (when selection changes)
      */}
      <FilteredList
        items={filteredItems}
        onItemClick={handleItemClick}
        filters={selectedIds}
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

// Anti-pattern: Using memoization incorrectly
function BadOptimization() {
  // ❌ BAD: Memoizing everything blindly
  const data = useMemo(() => ({ name: 'John' }), []);
  const handler = useCallback(() => console.log('click'), []);

  // This component doesn't need optimization
  return <SimpleButton onClick={handler} data={data} />;
}

// Pattern: Selective optimization
function GoodOptimization() {
  // ✅ GOOD: Only memoize when needed
  const [count, setCount] = useState(0);

  // Only memoize expensive operations
  const expensiveValue = useMemo(() => {
    return complexCalculation(); // Only if this is expensive
  }, []);

  // Only memoize callbacks passed to optimized children
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only if ExpensiveChild is React.memo

  return <ExpensiveChild value={expensiveValue} onClick={handleClick} />;
}
```

### 34. How do you identify performance bottlenecks in React applications?

**Answer:**
Identifying performance issues involves profiling, measuring, and analyzing render patterns.

**Tools:**

- React DevTools Profiler
- Chrome DevTools Performance tab
- console.time() / console.timeEnd()
- Performance Observer API
- Lighthouse
- Web Vitals

**Common bottlenecks:**

- Unnecessary re-renders
- Large bundle size
- Expensive computations
- Unoptimized images
- Network requests
- Long tasks blocking main thread

**Example:**

```
// Method 1: console.time
function SlowComponent() {
  console.time('slow-render');

  const result = expensiveCalculation();

  console.timeEnd('slow-render');

  return <div>{result}</div>;
}

// Method 2: React Profiler component
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <YourComponent />
    </Profiler>
  );
}

// Method 3: Track render count
function useRenderCount(componentName) {
  const renders = useRef(0);

  useEffect(() => {
    renders.current++;
    console.log(`${componentName} rendered ${renders.current} times`);
  });

  return renders.current;
}

function Component() {
  const count = useRenderCount('Component');
  return <div>Renders: {count}</div>;
}

// Method 4: Performance metrics
function measurePerformance() {
  const perfData = performance.getEntriesByType('measure');
  perfData.forEach(entry => {
    console.log(`${entry.name}: ${entry.duration}ms`);
  });
}

// Method 5: Identify unnecessary re-renders
function WhyDidYouRender() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <p>{count}</p>
      <p>{text}</p>
      {/* If this component re-renders when text changes,
          it's an unnecessary re-render */}
      <CountDisplay count={count} />
    </div>
  );
}
```

### 35. What are best practices for optimizing React applications?

**Answer:**
Optimization best practices help maintain performance as applications grow.

**Key practices:**

1. Profile before optimizing
2. Use React DevTools Profiler
3. Split code with React.lazy and Suspense
4. Optimize images and assets
5. Memoize expensive computations
6. Use proper key props in lists
7. Avoid inline functions/objects in props
8. Implement virtualization for long lists
9. Use Web Workers for heavy computations
10. Monitor Core Web Vitals

**Example:**

```
// 1. Code splitting
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}

// 2. Image optimization
function OptimizedImage() {
  return (
    <picture>
      <source srcSet="/image.webp" type="image/webp" />
      <img src="/image.jpg" alt="description" loading="lazy" />
    </picture>
  );
}

// 3. List virtualization with react-window
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index]}</div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// 4. Debouncing API calls
import { useCallback } from 'react';

function SearchInput() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      fetchResults(value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input onChange={handleChange} value={query} />;
}

// 5. Component structure optimization
// BAD: Props change frequently
function BadParent() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');

  return (
    <div>
      {/* All props change when count changes, forcing re-render */}
      <ExpensiveChild count={count} filter={filter} />
    </div>
  );
}

// GOOD: Split state based on where it's used
function GoodParent() {
  return (
    <div>
      <CounterSection />
      <FilterSection />
    </div>
  );
}

function CounterSection() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

function FilterSection() {
  const [filter, setFilter] = useState('');
  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
}
```

## Testing & Best Practices

### 36. What is the best way to structure a React project?

**Answer:**
Proper project structure improves maintainability, scalability, and collaboration. Here's a recommended structure:

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Header.jsx
│   ├── features/         # Feature-specific components
│   │   ├── Auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx
│   │       └── Widgets/
│   └── layouts/          # Layout components
│       ├── MainLayout.jsx
│       └── AuthLayout.jsx
├── pages/                # Page components
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   └── NotFound.jsx
├── hooks/                # Custom hooks
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useLocalStorage.js
├── services/             # API and external services
│   ├── api.js
│   ├── auth.js
│   └── analytics.js
├── utils/                # Utility functions
│   ├── helpers.js
│   ├── validators.js
│   └── constants.js
├── context/              # React Context
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── store/                # Redux or state management
│   ├── slices/
│   └── store.js
├── styles/               # Global styles
│   └── globals.css
├── App.jsx
└── main.jsx
```

### 37. What are common React anti-patterns to avoid?

**Answer:**

**Common anti-patterns:**

1. **Mutating state directly**

```
// ❌ Bad
state.count = state.count + 1;

// ✅ Good
setState(prev => ({ ...prev, count: prev.count + 1 }));
```

2. **Using array index as key**

```
// ❌ Bad
{items.map((item, index) => <Item key={index} />)}

// ✅ Good
{items.map(item => <Item key={item.id} />)}
```

3. **Fetching in render**

```
// ❌ Bad
function Component() {
  const data = fetch('/api/data'); // Fetches on every render!
  return <div>{data}</div>;
}

// ✅ Good
function Component() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  return <div>{data}</div>;
}
```

4. **Prop drilling too deeply**

```
// ❌ Bad - Prop drilling through 5+ levels

// ✅ Good - Use Context API or state management
```

5. **Not cleaning up side effects**

```
// ❌ Bad
useEffect(() => {
  const interval = setInterval(() => {}, 1000);
});

// ✅ Good
useEffect(() => {
  const interval = setInterval(() => {}, 1000);
  return () => clearInterval(interval);
}, []);
```

### 38. How do you prevent memory leaks in React?

**Answer:**

**Common causes of memory leaks:**

- Uncleared timers (setInterval, setTimeout)
- Unsubscribed event listeners
- Unaborted API requests
- Unreleased resources

**Solutions:**

```
// 1. Clean up timers
function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);
}

// 2. Remove event listeners
function ScrollListener() {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// 3. Abort fetch requests
function DataFetcher() {
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/data', { signal: controller.signal })
      .then(r => r.json())
      .catch(e => console.log(e));

    return () => controller.abort();
  }, []);
}

// 4. Unsubscribe from subscriptions
function SubscriptionComponent() {
  useEffect(() => {
    const subscription = observable.subscribe(handleNext);
    return () => subscription.unsubscribe();
  }, []);
}
```

### 39. What is the useRef hook and when should you use it?

**Answer:**
useRef returns a mutable ref object that persists across renders and doesn't cause re-renders when updated.

**Use cases:**

- Accessing DOM elements directly
- Storing mutable values
- Keeping previous values
- Managing focus and text selection
- Triggering animations

**Example:**

```
// Accessing DOM elements
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}

// Storing mutable values
function Stopwatch() {
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <p>{count}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

// Keeping previous values
function Component({ count }) {
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return <div>Now: {count}, before: {prevCountRef.current}</div>;
}
```

### 40. What are custom hooks and how do you create them?

**Answer:**
Custom hooks are JavaScript functions that use React hooks. They allow you to reuse stateful logic across components.

**Rules for custom hooks:**

- Name must start with "use"
- Can only call other hooks
- Can only be called from React components or other hooks

**Example:**

```
// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{user.name}</h1>;
}

// Custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit, errors, setErrors };
}

// Usage
function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    (values) => console.log('Submitted:', values)
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### 41. What is the React DevTools and how do you use it?

**Answer:**
React DevTools is a browser extension that helps debug and profile React applications.

**Features:**

- Inspect component hierarchy
- View and edit props and state
- Track component re-renders
- Profile performance
- Highlight component updates

**Common use cases:**

- Debugging component state
- Understanding component relationships
- Performance profiling
- Finding why components re-render
- Inspecting component props

### 42. What is code splitting and how does it improve performance?

**Answer:**
Code splitting breaks your application into smaller chunks loaded on demand, reducing initial bundle size and improving performance.

**Benefits:**

- Smaller initial bundle
- Faster page load
- Better caching
- Parallel loading

**Strategies:**

```
// 1. Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

// 2. Component-based code splitting
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<p>Loading chart...</p>}>
      <HeavyChart />
    </Suspense>
  );
}

// 3. Dynamic imports
async function loadModule() {
  const module = await import('./myModule');
  module.default();
}
```

### 43. What is the difference between controlled and uncontrolled components (revisited)?

**Answer:**
This is an important concept worth revisiting with more detail.

**Controlled Components:**

- React state is the single source of truth
- Every keystroke updates state
- Value is explicitly set
- Predictable and easier to test

**Uncontrolled Components:**

- DOM is the source of truth
- Use ref to access values
- Works like traditional HTML
- Less React-y but sometimes simpler

**When to use each:**

- **Controlled**: Forms with validation, dependent fields, multiple inputs
- **Uncontrolled**: Simp
>>>>>>> 1e420c8 (added pythin readmi file)
