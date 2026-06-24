# Tailwind CSS: Complete Guide - Scratch to Advanced (v4)

A comprehensive guide to mastering Tailwind CSS from fundamentals to advanced techniques using the latest version (v4.0+).

## Table of Contents

1. [Introduction](#introduction)
2. [Installation & Setup](#installation--setup)
3. [Basics](#basics)
4. [Intermediate](#intermediate)
5. [Advanced](#advanced)
6. [Tailwind CSS v4 New Features](#tailwind-css-v4-new-features)
7. [Best Practices](#best-practices)
8. [Performance Optimization](#performance-optimization)
9. [Resources](#resources)

## Introduction

**Tailwind CSS** is a utility-first CSS framework that helps you build modern, responsive designs without leaving your HTML. Instead of writing custom CSS, you compose designs using pre-defined utility classes.

### Key Benefits

- **Rapid Development**: Build interfaces without switching between HTML and CSS files
- **Consistency**: Built-in design system prevents style inconsistencies
- **Customizable**: Extend and override utilities to match your brand
- **Performance**: Only ships CSS for utilities you actually use
- **Responsive**: Mobile-first, utility-based responsive design
- **Dark Mode**: First-class dark mode support
- **Accessibility**: Designed with a11y in mind

## Installation & Setup

### For Next.js Projects

```bash
# Using Tailwind's CLI
npx tailwindcss init -p

# Or with Next.js setup
npm install -D tailwindcss postcss autoprefixer
```

### Update `tailwind.config.js` (v3 style)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### For Tailwind CSS v4

In **v4**, configuration is simpler and CSS-first:

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
}
```

No need for `tailwind.config.js` unless you need advanced customization.

### Add to Your HTML/App

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

## Basics

### 1. Utility Classes

Build designs by combining utility classes directly in your markup:

```html
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 class="text-2xl font-bold text-gray-900">Title</h1>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click me
  </button>
</div>
```

### 2. Common Patterns

#### Flexbox Layout

```jsx
// Center content both horizontally and vertically
<div class="flex items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>

// Space between
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

// Column layout
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Grid Layout

```jsx
<div class="grid grid-cols-3 gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

#### Spacing

```jsx
// Padding
<div class="p-4">All sides</div>
<div class="px-4 py-2">Horizontal and vertical</div>

// Margin
<div class="m-4">All sides</div>
<div class="mx-auto">Center horizontally</div>

// Gap (for flex/grid)
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Text Styling

```jsx
<h1 class="text-4xl font-bold text-gray-900">Heading</h1>
<p class="text-base leading-relaxed text-gray-600">Paragraph</p>
<span class="text-sm font-semibold text-blue-600">Small text</span>
```

#### Colors

```jsx
<div class="bg-white text-gray-900">Content</div>
<div class="bg-blue-500 text-white">Blue background</div>
<div class="border-2 border-red-300">Border</div>
```

#### Common Utilities

```jsx
// Sizing
<div class="w-full h-screen">Full width and height</div>
<div class="w-64 h-64">Fixed size</div>

// Rounding
<div class="rounded">Default radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-full">Circular</div>

// Shadows
<div class="shadow">Small shadow</div>
<div class="shadow-lg">Large shadow</div>

// Display
<div class="hidden md:block">Hidden on mobile, visible on tablet+</div>
<div class="block md:flex">Block on mobile, flex on tablet+</div>
```

## Intermediate

### 1. Responsive Design

Tailwind uses a **mobile-first** breakpoint system:

```jsx
<div
  class="
  w-full          // Mobile: full width
  md:w-1/2        // Tablet: 50% width
  lg:w-1/3        // Desktop: 33% width
  xl:w-1/4        // Large desktop: 25% width
"
>
  Responsive content
</div>
```

**Breakpoints (Default)**:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### 2. Dark Mode

Enable dark mode in your config and use `dark:` prefix:

```jsx
<div class="bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
  Content that adapts to dark mode
</div>
```

**Enable in HTML**:

```html
<html class="dark"></html>
```

Or use system preference:

```javascript
// Automatically detect system preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}
```

### 3. Hover, Focus, and Other States

```jsx
<button
  class="
  bg-blue-500 text-white
  hover:bg-blue-600        // On hover
  focus:outline-none focus:ring-2 focus:ring-blue-400
  active:bg-blue-700
  disabled:opacity-50 disabled:cursor-not-allowed
"
>
  Interactive Button
</button>
```

**Available State Variants**:

- `hover:`, `focus:`, `active:`, `disabled:`
- `group-hover:` (for group interactions)
- `first:`, `last:`, `odd:`, `even:` (for children)

### 4. Customizing Theme

Extend or override Tailwind's default theme:

#### v3 Approach:

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
      },
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
```

#### v4 Approach (CSS-based):

```css
@import "tailwindcss";

@theme {
  --color-primary: rgb(59 130 246);
  --color-secondary: rgb(16 185 129);
  --font-sans: "Inter", sans-serif;
}
```

### 5. Extracting Components

Avoid class repetition by extracting reusable components:

```jsx
// Using @apply directive (v3/v4)
export function Button({ children, variant = 'primary' }) {
  return (
    <button className={`
      px-4 py-2 rounded font-medium transition
      ${variant === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
      }
    `}>
      {children}
    </button>
  )
}

// Or use CSS @apply
// button.css
@layer components {
  @apply px-4 py-2 rounded font-medium transition;

  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }

  .btn-secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300;
  }
}
```

### 6. Important Modifier

Override specificity when needed (use sparingly):

```jsx
<div class="!bg-white">Always white background</div>
```

## Advanced

### 1. Custom Plugins

Create reusable utilities:

```javascript
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

export default {
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
```

### 2. Custom Components with @layer

```css
@import "tailwindcss";

@layer components {
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }

  .badge {
    @apply inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium;
  }

  .badge-success {
    @apply bg-green-100 text-green-800;
  }
}
```

### 3. Arbitrary Values

When a predefined utility won't work, use arbitrary values:

```jsx
<div class="w-[520px] h-[322px] bg-[#1f2937]">
  Custom dimension and color
</div>

// With breakpoints
<div class="md:w-[calc(100%-2rem)]">
  Complex calculations
</div>
```

### 4. Dynamic Class Names (with Caution)

**⚠️ Never dynamically construct class names:**

```jsx
// ❌ BAD - Won't be included in CSS
const color = 'blue'
<div class={`text-${color}-500`}>Text</div>

// ✅ GOOD - Use ternary or predefined map
const colorMap = { blue: 'text-blue-500', red: 'text-red-500' }
<div class={colorMap[color]}>Text</div>

// ✅ GOOD - Use arbitrary values
<div class={`text-[${color}]`}>Text</div>
```

### 5. Content Configuration

Ensure Tailwind scans all your files:

```javascript
// tailwind.config.js v3
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
```

### 6. Performance: PurgeCSS

Tailwind automatically purges unused styles in production. For manual control:

```javascript
export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx}"],
    // Safelist specific patterns
    safelist: ["bg-blue-500", "text-gray-900"],
  },
};
```

### 7. Using Container Queries (v3.2+)

```jsx
<div class="@container">
  <div class="@md:flex @lg:grid @lg:grid-cols-2">
    Responsive to container, not viewport
  </div>
</div>
```

### 8. Advanced Selectors & Modifiers

```jsx
// Chaining modifiers
<button class="group/edit">
  <span class="group-hover/edit:text-blue-500">Hover me</span>
</button>

// Complex selectors
<div class="[&>*]:p-4">Children padding</div>
<div class="[&_span]:font-bold">All nested spans bold</div>

// Attribute selectors
<input type="text" class="[&:checked]:bg-blue-500" />
```

## Tailwind CSS v4 New Features

### 1. CSS-First Configuration

No more JavaScript config files for most cases:

```css
@import "tailwindcss";

@theme {
  --color-primary: rgb(59 130 246);
  --color-secondary: rgb(16 185 129);
  --font-sans: "Geist", sans-serif;
  --radius: 8px;
}
```

### 2. Enhanced Theme Variables

```css
@theme {
  --font-sans: "Inter", sans-serif;
  --font-serif: "Merriweather", serif;
  --color-brand: hsl(220 90% 56%);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### 3. Improved Performance

- Faster builds with new engine
- Better tree-shaking
- Reduced file size

### 4. Next.js 16 Integration

Perfect integration with Next.js 16:

```tsx
// app/layout.tsx with fonts
import { Geist, Geist_Mono } from "next/font/google";

const _geistSans = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

```css
/* globals.css */
@import "tailwindcss";

@theme inline {
  --font-sans: "Geist", "Geist Fallback";
  --font-mono: "Geist Mono", "Geist Mono Fallback";
}
```

### 5. Improved Type Safety

Better TypeScript integration with enhanced type definitions for custom theme values.

## Best Practices

### 1. Mobile-First Approach

Always start with mobile styles, then add responsive modifiers for larger screens:

```jsx
<div class="text-sm md:text-base lg:text-lg">Responsive text</div>
```

### 2. Avoid Over-Nesting with Tailwind

Keep your HTML readable:

```jsx
// ✅ Good - readable
<div class="flex items-center gap-4 p-4">
  <img class="w-12 h-12 rounded-full" src="avatar.jpg" />
  <div>
    <h3 class="font-bold">Name</h3>
    <p class="text-gray-500">Email</p>
  </div>
</div>

// ❌ Avoid - too many classes
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
```

### 3. Use Component Libraries

Extract repeated patterns into React components:

```jsx
export function Card({ children }) {
  return <div class="bg-white rounded-lg shadow-md p-6">{children}</div>;
}

export function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };
  return (
    <span class={`px-3 py-1 rounded-full text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

### 4. Limit Color Palette

Stick to 3-5 core colors for consistency:

```css
@theme {
  --color-primary: rgb(59 130 246);
  --color-secondary: rgb(168 85 247);
  --color-success: rgb(34 197 94);
  --color-danger: rgb(239 68 68);
}
```

### 5. Document Custom Utilities

Comment your custom additions:

```css
@layer components {
  /* Scrollbar hiding utility */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

### 6. Semantic Naming

Use meaningful class names when extracting components:

```css
/* ✅ Good */
.btn-primary
.card-header
.nav-link

/* ❌ Avoid */
.big-box
.color-thing
.flex-div
```

## Performance Optimization

### 1. Minimize CSS Output

**Development**: Full CSS for easier debugging
**Production**: Purged CSS with only used utilities

```javascript
// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // v4 automatically handles purging
};
```

### 2. Use CSS Variables Strategically

```css
@theme {
  --spacing-unit: 0.25rem;
  --color-primary: rgb(59 130 246);
}
```

### 3. Lazy Load Components

With Next.js dynamic imports:

```jsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div class="animate-pulse">Loading...</div>,
});
```

### 4. Tree Shake Unused Code

Tailwind v4 automatically removes unused utilities. Ensure proper content configuration.

## Common Utilities Reference

### Layout

```
flex | inline-flex | grid | inline-grid | block | inline-block | hidden
```

### Flexbox

```
flex-col | flex-row | gap-4 | items-center | justify-between | flex-wrap
```

### Grid

```
grid-cols-1 | grid-cols-2 | grid-cols-3 | gap-4 | col-span-2
```

### Spacing

```
p-4 | m-4 | px-4 | py-2 | mx-auto | mb-4 | mt-2
```

### Text

```
text-sm | text-base | text-lg | font-bold | font-semibold | leading-relaxed
```

### Colors

```
bg-white | text-gray-900 | border-blue-500 | hover:bg-blue-600
```

### Sizing

```
w-full | h-screen | w-64 | max-w-lg | min-h-96
```

### Rounding

```
rounded | rounded-lg | rounded-full
```

### Shadows

```
shadow | shadow-lg | shadow-xl | hover:shadow-lg
```

## Resources

### Official Documentation

- [Tailwind CSS Official Docs](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind UI Components](https://tailwindui.com)
- [Headless UI](https://headlessui.com)

### Learning Resources

- [Tailwind CSS YouTube Channel](https://www.youtube.com/@TailwindLabs)
- [Tailwind CSS Playground](https://play.tailwindcss.com)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Community

- [Tailwind CSS Discord](https://discord.gg/7NF8GNe)
- [Tailwind CSS GitHub](https://github.com/tailwindlabs/tailwindcss)

### Tools

- [Tailwind CSS IntelliSense VS Code Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind CSS Form Plugin](https://github.com/tailwindlabs/tailwindcss-forms)
- [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Quick Start Template

```jsx
// app/page.tsx
export default function Home() {
  return (
    <main class="min-h-screen bg-white">
      {/* Header */}
      <header class="bg-slate-900 text-white">
        <nav class="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <h1 class="text-2xl font-bold">MyApp</h1>
          <ul class="flex gap-6">
            <li>
              <a href="#" class="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section class="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 class="text-5xl font-bold mb-4 text-slate-900">
          Welcome to Tailwind
        </h2>
        <p class="text-xl text-slate-600 mb-8">
          Build modern UIs with utility-first CSS
        </p>
        <button class="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
          Get Started
        </button>
      </section>

      {/* Grid Section */}
      <section class="max-w-7xl mx-auto px-4 py-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              class="p-6 bg-slate-50 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 class="text-lg font-bold mb-2">Feature {item}</h3>
              <p class="text-slate-600">Description of feature {item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
```

## Conclusion

Tailwind CSS enables rapid, consistent, and maintainable web design. Start with utilities, extract components as patterns emerge, and scale with confidence. With v4's improvements, the framework is more powerful and performant than ever.

**Happy styling!** 🎨

_Last updated: February 2026 | Tailwind CSS v4_
