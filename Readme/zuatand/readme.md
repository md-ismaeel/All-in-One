# Zustand Guide for React Developers

A comprehensive guide to Zustand state management for developers who already know React.

## Table of Contents

1. [What is Zustand?](#what-is-zustand)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Core Concepts](#core-concepts)
5. [Creating Stores](#creating-stores)
6. [Using Stores](#using-stores)
7. [Advanced Patterns](#advanced-patterns)
8. [Best Practices](#best-practices)
9. [Performance Optimization](#performance-optimization)
10. [Common Use Cases](#common-use-cases)
11. [Comparison with Other Libraries](#comparison-with-other-libraries)
12. [Troubleshooting](#troubleshooting)

## What is Zustand?

Zustand is a lightweight state management library for React that provides:

- **Minimal boilerplate**: Unlike Redux, no actions, reducers, or dispatch needed
- **Simple API**: Create stores with a single function
- **Excellent TypeScript support**: Full type inference
- **Small bundle size**: Only 2KB (compared to Redux ~50KB)
- **Immer integration**: Built-in immutable updates
- **DevTools support**: React DevTools integration available
- **No provider hell**: Optional context providers

**Why Zustand over alternatives?**

| Feature | Zustand | Redux | Recoil | Context API |
|---------|---------|-------|--------|-------------|
| Bundle Size | 2KB | 50KB | 20KB | Built-in |
| Boilerplate | Minimal | Lots | Medium | None |
| Learning Curve | Very Easy | Steep | Medium | Easy |
| Async Handling | Simple | Complex | Medium | Complex |
| DevTools | Yes | Yes | Basic | No |
| Performance | Excellent | Good | Good | Poor |

## Installation

```bash
npm install zustand
# or
yarn add zustand
# or
pnpm add zustand
```

Optional DevTools support:
```bash
npm install zustand-devtools
```

## Quick Start

### Basic Counter Store

```tsx
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
```

### Using in a Component

```tsx
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Core Concepts

### 1. Stores

A Zustand store is a JavaScript function that returns an object with state and actions.

```tsx
const useMyStore = create((set) => ({
  // State
  myState: 'value',
  
  // Actions
  myAction: () => set({ myState: 'new value' }),
}));
```

### 2. `set` Function

Updates state. Always pass an object with the properties you want to update.

```tsx
// Direct update
set({ count: 5 });

// Function form (recommended for deriving from current state)
set((state) => ({ count: state.count + 1 }));

// Replacing entire state
set(
  { count: 0, name: 'John' },
  true // Replace mode
);
```

### 3. Hooks

Zustand stores are hooks. Use them in components to access and subscribe to state.

```tsx
const count = useCounterStore((state) => state.count);
const increment = useCounterStore((state) => state.increment);

// Or destructure
const { count, increment } = useCounterStore();
```

### 4. Selectors (Subscriptions)

Only subscribe to the parts of state you need to improve performance.

```tsx
// Good - only subscribes to count changes
const count = useCounterStore((state) => state.count);

// Avoid - subscribes to entire store
const store = useCounterStore();
const count = store.count;
```

## Creating Stores

### Simple Store

```tsx
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  clearUser: () => set({ user: null }),
}));
```

### Store with TypeScript

```tsx
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: false,
  
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  clearUser: () => set({ user: null }),
}));
```

### Store with Async Actions

```tsx
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  
  fetchUser: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
```

### Store with Immer Middleware

Zustand includes Immer for simpler immutable updates:

```tsx
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useUserStore = create<UserStore>()(
  immer((set) => ({
    users: [],
    
    // Can mutate draft directly with Immer
    addUser: (user) => set((state) => {
      state.users.push(user);
    }),
    
    updateUser: (id, updates) => set((state) => {
      const user = state.users.find(u => u.id === id);
      if (user) Object.assign(user, updates);
    }),
    
    removeUser: (id) => set((state) => {
      state.users = state.users.filter(u => u.id !== id);
    }),
  }))
);
```

### Multiple Middleware

```tsx
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      immer((set) => ({
        // store definition
      })),
      { name: 'user-storage' }
    )
  )
);
```

## Using Stores

### Basic Usage

```tsx
function MyComponent() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### Selective Subscriptions (Performance)

```tsx
// Only subscribes to count, not increment function
const count = useCounterStore((state) => state.count);

// Only subscribes to specific user properties
const userName = useUserStore((state) => state.user?.name);
const userEmail = useUserStore((state) => state.user?.email);
```

### Extracting Multiple Values (with memo)

```tsx
import { useMemo } from 'react';

function UserProfile() {
  const state = useUserStore(
    useMemo(() => (state) => ({
      name: state.user?.name,
      email: state.user?.email,
    }), [])
  );
  
  return <div>{state.name} - {state.email}</div>;
}
```

### Outside Components (Direct Access)

```tsx
// Get current state
const currentUser = useUserStore.getState().user;

// Update without component
useUserStore.getState().setUser(newUser);

// Subscribe outside component
const unsubscribe = useUserStore.subscribe(
  (state) => state.count,
  (count) => console.log('Count changed:', count)
);

// Unsubscribe
unsubscribe();
```

## Advanced Patterns

### Derived State

```tsx
const useUserStore = create((set) => ({
  firstName: 'John',
  lastName: 'Doe',
  
  // Derived state
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
}));
```

### Computed Selectors

```tsx
const selectFullName = (state) => `${state.firstName} ${state.lastName}`;

function UserGreeting() {
  const fullName = useUserStore(selectFullName);
  return <p>Hello, {fullName}!</p>;
}
```

### Combining Stores

```tsx
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

const useThemeStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));

function MyComponent() {
  const user = useUserStore((state) => state.user);
  const theme = useThemeStore((state) => state.theme);
  
  return <div className={theme}>{user?.name}</div>;
}
```

### Factory Pattern (Reusable Stores)

```tsx
const createUserStore = (initialUser = null) =>
  create((set) => ({
    user: initialUser,
    setUser: (user) => set({ user }),
  }));

const useUser1 = createUserStore();
const useUser2 = createUserStore();
```

### Partial State Updates

```tsx
const useStore = create((set) => ({
  count: 0,
  nested: { value: 0 },
  
  // Merge shallow by default
  increment: () => set((state) => ({
    count: state.count + 1,
    nested: { ...state.nested, value: state.nested.value + 1 },
  })),
}));
```

## Best Practices

### 1. Use Selectors for Performance

```tsx
// ✅ Good - only subscribes to count
const count = useCounterStore((state) => state.count);

// ❌ Bad - subscribes to entire store
const store = useCounterStore();
const count = store.count;
```

### 2. Keep State Flat

```tsx
// ✅ Good
const useStore = create((set) => ({
  userId: 1,
  userName: 'John',
  userEmail: 'john@example.com',
}));

// ❌ Avoid deep nesting
const useStore = create((set) => ({
  user: {
    profile: {
      personal: {
        name: 'John',
      },
    },
  },
}));
```

### 3. Separate Concerns

```tsx
// Separate stores for different concerns
const useAuthStore = create((set) => ({...}));
const useThemeStore = create((set) => ({...}));
const useNotificationStore = create((set) => ({...}));
```

### 4. Type Your Stores

```tsx
// Define clear interfaces
interface AuthStore {
  isLoggedIn: boolean;
  user: User | null;
  login: (credentials) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({...}));
```

### 5. Use Meaningful Action Names

```tsx
// ✅ Good
setIsLoading, fetchData, updateUser, clearErrors

// ❌ Avoid
set1, update, change, toggle
```

## Performance Optimization

### 1. Prevent Unnecessary Re-renders

```tsx
// ✅ Good - only re-renders when count changes
function Counter() {
  const count = useCounterStore((state) => state.count);
  return <div>{count}</div>;
}

// ❌ Bad - re-renders on every state change
function Counter() {
  const store = useCounterStore();
  return <div>{store.count}</div>;
}
```

### 2. Memoize Selectors

```tsx
const selectUserInfo = (state) => ({
  name: state.user.name,
  email: state.user.email,
});

function UserProfile() {
  const userInfo = useUserStore(selectUserInfo);
  return <div>{userInfo.name}</div>;
}
```

### 3. Use Shallow Comparison

```tsx
import { shallow } from 'zustand/react/shallow';

// Subscribe to multiple values with shallow comparison
const { name, email } = useUserStore(
  (state) => ({
    name: state.user.name,
    email: state.user.email,
  }),
  shallow
);
```

### 4. Batch Updates

```tsx
// Batch multiple updates into one render
useUserStore.setState((state) => ({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
}));
```

## Common Use Cases

### Authentication Store

```tsx
const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      const user = await response.json();
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  logout: () => set({ user: null }),
}));
```

### Theme Store

```tsx
const useThemeStore = create((set) => ({
  theme: 'light',
  
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
  
  setTheme: (theme) => set({ theme }),
}));
```

### Todo List Store

```tsx
const useTodoStore = create((set) => ({
  todos: [],
  
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }],
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
  
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
}));
```

### Notifications Store

```tsx
const useNotificationStore = create((set) => ({
  notifications: [],
  
  addNotification: (message, type = 'info') => set((state) => ({
    notifications: [
      ...state.notifications,
      { id: Date.now(), message, type },
    ],
  })),
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
  
  clearAll: () => set({ notifications: [] }),
}));
```

## Comparison with Other Libraries

### Zustand vs Redux

| Aspect | Zustand | Redux |
|--------|---------|-------|
| Setup | Simple | Complex |
| Boilerplate | Minimal | Lots |
| Bundle Size | 2KB | 50KB |
| Async Handling | Native | Middleware |
| Learning Curve | Easy | Steep |

### Zustand vs Context API

| Aspect | Zustand | Context |
|--------|---------|---------|
| Performance | Excellent | Can cause re-renders |
| Boilerplate | Minimal | Minimal |
| Scalability | Excellent | Limited |
| DevTools | Yes | No |
| Bundle Impact | +2KB | None |

### Zustand vs Recoil

| Aspect | Zustand | Recoil |
|--------|---------|--------|
| Maturity | Stable | Experimental |
| Bundle Size | 2KB | 20KB |
| API | Simple | Complex |
| Atoms | N/A | Yes |
| DevTools | Yes | Limited |

## Troubleshooting

### Problem: Component doesn't update

```tsx
// ❌ Wrong - updates don't trigger re-renders
const store = useCounterStore();
store.increment(); // Won't update component

// ✅ Correct - use the returned action
const increment = useCounterStore((state) => state.increment);
increment(); // Triggers re-render
```

### Problem: State mutations

```tsx
// ❌ Wrong - direct mutation
set({ users: store.users.push(newUser) });

// ✅ Correct - create new array
set((state) => ({ users: [...state.users, newUser] }));

// ✅ Or with Immer
immer((set) => ({
  addUser: (user) => set((state) => {
    state.users.push(user);
  }),
}))
```

### Problem: Actions not working

```tsx
// ❌ Wrong - arrow function context
const useStore = create((set) => ({
  name: 'John',
  greet: () => console.log(this.name), // 'this' is undefined
}));

// ✅ Correct - use set or closure
const useStore = create((set, get) => ({
  name: 'John',
  greet: () => console.log(get().name),
}));
```

### Problem: Memory leaks

```tsx
// ✅ Always unsubscribe
const unsubscribe = useStore.subscribe(
  (state) => state.count,
  (count) => console.log(count)
);

// Clean up
useEffect(() => {
  return () => unsubscribe();
}, []);
```

## Advanced: Using `get` Parameter

```tsx
const useStore = create((set, get) => ({
  count: 0,
  doubled: 0,
  
  increment: () => set((state) => ({ count: state.count + 1 })),
  
  updateDoubled: () => {
    // Use get() to read current state
    const currentCount = get().count;
    set({ doubled: currentCount * 2 });
  },
  
  complexAction: () => {
    const state = get();
    if (state.count > 10) {
      set({ count: 0 });
    }
  },
}));
```

## Resources

- [Official Zustand Documentation](https://github.com/pmndrs/zustand)
- [Zustand Examples](https://github.com/pmndrs/zustand/tree/main/examples)
- [Zustand + TypeScript](https://github.com/pmndrs/zustand#typescript-guide)
- [Zustand Middleware](https://github.com/pmndrs/zustand#middleware)

---

Now you're ready to use Zustand effectively! Start with simple stores and gradually use more advanced patterns as your app grows.
