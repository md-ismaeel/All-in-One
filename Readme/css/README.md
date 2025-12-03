# CSS Interview Questions & Answers

Comprehensive guide to commonly asked CSS interview questions with detailed explanations and code examples for technical interviews.

---

## Table of Contents

- [Basic CSS Questions (1-15)](#basic-css-questions)
- [Intermediate CSS Questions (16-30)](#intermediate-css-questions)
- [Advanced CSS Questions (31-45)](#advanced-css-questions)

---

## BASIC CSS QUESTIONS

### 1. What is CSS, and what are its three ways of implementation?

**Answer:**
CSS (Cascading Style Sheets) is used to style HTML elements. There are three ways to implement CSS:

**1. Inline CSS** - Directly in HTML element
**2. Internal CSS** - In `<style>` tag in `<head>`
**3. External CSS** - Separate CSS file linked via `<link>` tag

**Example:**

```
<!-- Method 1: Inline CSS (Not recommended) -->
<h1 style="color: blue; font-size: 24px;">Inline Style</h1>

<!-- Method 2: Internal CSS (OK for small projects) -->
<head>
  <style>
    h1 {
      color: blue;
      font-size: 24px;
    }
  </style>
</head>

<!-- Method 3: External CSS (Best practice) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```
/* styles.css - External CSS */
h1 {
  color: blue;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  color: #333;
}
```

---

### 2. What is CSS specificity, and how does it work?

**Answer:**
CSS specificity determines which style rule is applied when multiple rules target the same element. Higher specificity wins.

**Specificity Calculation:**

- **Inline styles:** 1000 points
- **ID selectors:** 100 points each
- **Classes, attributes, pseudo-classes:** 10 points each
- **Elements, pseudo-elements:** 1 point each

**Example:**

```
/* Specificity: 1 (element) */
p {
  color: blue;
}

/* Specificity: 10 (class) - Wins over element */
.intro {
  color: red;
}

/* Specificity: 100 (ID) - Wins over class */
#main-paragraph {
  color: green;
}

/* Specificity: 110 (ID + class) */
#main-paragraph.intro {
  color: purple;
}

/* Specificity: 1000 (inline) - Always wins */
<p style="color: yellow;">This will be yellow</p>

/* !important overrides everything (use sparingly) */
p {
  color: blue !important; /* Specificity: ∞ */
}
```

---

### 3. What is the CSS Box Model?

**Answer:**
The CSS Box Model describes the structure of HTML elements from inside to outside: content, padding, border, margin.

**Components:**

- **Content:** Actual element content
- **Padding:** Space inside the border
- **Border:** Line around padding
- **Margin:** Space outside the border

**Example:**

```
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
  background: lightblue;
}

/* box-sizing affects width calculation */
.box-border {
  box-sizing: border-box; /* Width includes padding and border */
}

.box-content {
  box-sizing: content-box; /* Width is just content (default) */
}

/* Total width: 200 + 40 (padding) + 4 (border) + 60 (margin) = 304px */
```

---

### 4. What are CSS selectors? Name different types.

**Answer:**
CSS selectors are patterns used to select and style HTML elements.

| Selector             | Example         | Selects                          |
| -------------------- | --------------- | -------------------------------- |
| **Element**          | `p`             | All `<p>` elements               |
| **Class**            | `.intro`        | All elements with class="intro"  |
| **ID**               | `#main`         | Element with id="main"           |
| **Attribute**        | `[type="text"]` | Input with type="text"           |
| **Descendant**       | `div p`         | All `<p>` inside `<div>`         |
| **Child**            | `div > p`       | Direct `<p>` children of `<div>` |
| **Adjacent Sibling** | `h1 + p`        | `<p>` immediately after `<h1>`   |
| **General Sibling**  | `h1 ~ p`        | All `<p>` after `<h1>`           |
| **Pseudo-class**     | `a:hover`       | Link on hover                    |
| **Pseudo-element**   | `p::first-line` | First line of paragraph          |

**Example:**

```
/* Element selector */
h1 { color: blue; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#header { background-color: navy; }

/* Attribute selector */
input[type="email"] { border: 1px solid blue; }

/* Descendant selector */
div p { margin: 10px; }

/* Child selector */
ul > li { list-style: none; }

/* Pseudo-classes */
a:hover { color: red; }
li:first-child { font-weight: bold; }
input:focus { outline: 2px solid blue; }

/* Pseudo-elements */
p::first-line { font-weight: bold; }
p::before { content: "→ "; }
```

---

### 5. What is the difference between margin and padding?

**Answer:**

| Property    | Location       | Background | Collapsible    | Negative |
| ----------- | -------------- | ---------- | -------------- | -------- |
| **Margin**  | Outside border | No         | Yes (vertical) | Yes      |
| **Padding** | Inside border  | Yes        | No             | No       |

**Example:**

```
.box-margin {
  width: 200px;
  margin: 20px; /* 20px space outside the box */
  background: lightblue;
}

.box-padding {
  width: 200px;
  padding: 20px; /* 20px space inside the box */
  background: lightgreen;
}

/* Margin collapse example */
.parent {
  background: yellow;
}

.child {
  margin-top: 20px; /* Collapses: moves parent down */
}

/* Negative margin */
.overlap {
  margin-top: -10px; /* Overlaps with element above */
}
```

---

### 6. What is the display property? Explain different values.

**Answer:**
The display property controls how an element is rendered on the page.

| Value          | Behavior                           |
| -------------- | ---------------------------------- |
| `block`        | Full width, starts new line        |
| `inline`       | Only takes needed width, same line |
| `inline-block` | Inline but respects width/height   |
| `flex`         | Flexible box layout                |
| `grid`         | Grid layout                        |
| `none`         | Hidden from DOM                    |

**Example:**

```
/* Block - takes full width */
.block {
  display: block;
  width: 100%;
}

/* Inline - only takes needed width */
.inline {
  display: inline;
}

/* Inline-block - inline but with dimensions */
.inline-block {
  display: inline-block;
  width: 100px;
  height: 100px;
}

/* Flex container */
.flex {
  display: flex;
  justify-content: space-between;
}

/* Grid container */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Hidden */
.hidden {
  display: none;
}

.invisible {
  visibility: hidden; /* Takes space but hidden */
}
```

---

### 7. What is CSS Flexbox? How does it work?

**Answer:**
Flexbox (Flexible Box Layout) is a 1D layout module for creating flexible, responsive layouts.

**Key concepts:**

- **Flex Container:** Parent with `display: flex`
- **Flex Items:** Children of flex container
- **Main Axis:** Primary axis (horizontal by default)
- **Cross Axis:** Secondary axis (vertical by default)

**Example:**

```
/* Flex container */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 200px;
}

/* Flex items */
.flex-item {
  flex: 1;
  background: lightblue;
  padding: 20px;
}

/* Specific flex items */
.item-grow {
  flex: 2; /* Grows twice as much */
}

.item-shrink {
  flex: 0 0 100px; /* grow shrink basis */
}

/* Responsive flex */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-wrap > div {
  flex: 1 1 200px;
}
```

---

### 8. What is CSS Grid? How does it work?

**Answer:**
CSS Grid is a 2D layout system for creating grid-based designs. Unlike Flexbox (1D), Grid handles rows and columns.

**Key concepts:**

- **Grid Container:** Parent with `display: grid`
- **Grid Items:** Children of grid container
- **Tracks:** Rows or columns
- **Gap:** Space between items

**Example:**

```
/* Basic grid */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  height: 100vh;
}

/* Different column sizes */
.grid-mixed {
  display: grid;
  grid-template-columns: 200px 1fr 150px;
}

/* Repeat function */
.grid-repeat {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

/* Auto-fit responsive */
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Named areas */
.grid-areas {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content ad"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }

/* Item spanning */
.span-2 {
  grid-column: span 2;
}
```

---

### 9. What are CSS transitions and animations?

**Answer:**

**Transitions:**

- Smooth change from one state to another
- Triggered by state change (hover, focus)

**Animations:**

- Complex, keyframe-based animations
- Can loop and run continuously

**Example:**

```
/* CSS Transition */
.button {
  background: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}

/* CSS Animation */
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slide-in 0.5s ease forwards;
}

/* Bounce animation */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bouncing {
  animation: bounce 1s ease-in-out infinite;
}

/* Rotate animation */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: rotate 1s linear infinite;
}
```

---

### 10. What is responsive design in CSS?

**Answer:**
Responsive design ensures websites look good on all devices using flexible layouts, flexible images, and media queries.

**Techniques:**

1. Mobile-first approach
2. Flexible layouts with percentages
3. Media queries for different screen sizes
4. Flexible images
5. Viewport meta tag

**Example:**

```
/* Mobile-first */
* {
  box-sizing: border-box;
}

.grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column on mobile */
  gap: 20px;
}

img {
  max-width: 100%;
  height: auto;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}

/* Print */
@media print {
  .no-print {
    display: none;
  }
}
```

---

### 11. What are CSS custom properties (CSS variables)?

**Answer:**
CSS custom properties allow you to define reusable values accessible throughout stylesheets.

**Syntax:** `--variable-name: value`

**Example:**

```
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing: 8px;
  --font-family: Arial, sans-serif;
}

body {
  font-family: var(--font-family);
  background: var(--primary-color);
}

.button {
  padding: calc(var(--spacing) * 2);
  background: var(--primary-color);
  transition: 0.3s;
}

.button:hover {
  background: var(--secondary-color);
}

/* Fallback */
.box {
  color: var(--custom, blue);
}

/* Scoped variables */
.dark-theme {
  --primary-color: #1a1a1a;
}

/* Media query variables */
@media (max-width: 768px) {
  :root {
    --spacing: 6px;
  }
}
```

---

### 12. What are pseudo-classes and pseudo-elements?

**Answer:**

**Pseudo-classes (`:`):** Style elements based on state
**Pseudo-elements (`::`):** Create virtual elements to style specific parts

**Example:**

```
/* Pseudo-classes */
a:hover { color: red; }
a:visited { color: purple; }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:nth-child(2) { color: gray; }
input:checked { background: green; }
a:not(.external) { text-decoration: underline; }

/* Pseudo-elements */
p::before { content: "→ "; }
p::after { content: " ←"; }
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
p::selection { background: yellow; }

/* Tooltip example */
.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  background: black;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover::after {
  opacity: 1;
}
```

---

### 13. What is the position property? Explain different values.

**Answer:**
The position property defines how an element is positioned in a document.

| Value      | Behavior                      |
| ---------- | ----------------------------- |
| `static`   | Default, normal flow          |
| `relative` | Relative to normal position   |
| `absolute` | Relative to positioned parent |
| `fixed`    | Relative to viewport          |
| `sticky`   | Fixed when scrolled past      |

**Example:**

```
/* Static - default */
.static {
  position: static; /* Default behavior */
}

/* Relative - moves relative to normal position */
.relative {
  position: relative;
  top: 20px;
  left: 10px;
}

/* Absolute - removed from flow */
.container {
  position: relative; /* Must have positioned parent */
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
}

/* Fixed - stays in viewport */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
}

/* Sticky - fixed when scrolled */
.sticky-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}
```

---

### 14. What is z-index and stacking context?

**Answer:**
Z-index controls the stacking order of positioned elements. Higher values appear on top. Stacking context is created by positioned elements with z-index.

**Example:**

```
/* Z-index only works with positioned elements */
.box-1 {
  position: relative;
  z-index: 1;
  background: red;
}

.box-2 {
  position: relative;
  z-index: 2; /* Appears on top of box-1 */
  background: blue;
}

/* Stacking context */
.parent-1 {
  position: relative;
  z-index: 1;
}

.parent-2 {
  position: relative;
  z-index: 2;
}

/* Child of parent-1 cannot be on top of parent-2 */
.parent-1 .child {
  position: relative;
  z-index: 9999; /* Still behind parent-2 */
}

/* New stacking context */
.new-context {
  position: relative;
  z-index: 1;
  opacity: 0.9; /* Creates new stacking context */
}

/* Modal example */
.backdrop {
  position: fixed;
  z-index: 998;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  z-index: 999; /* On top of backdrop */
}
```

---

### 15. What is the overflow property?

**Answer:**
The overflow property defines what happens when content exceeds the element's box.

| Value     | Behavior                   |
| --------- | -------------------------- |
| `visible` | Content overflows outside  |
| `hidden`  | Content is clipped         |
| `scroll`  | Scrollbars always shown    |
| `auto`    | Scrollbars shown if needed |

**Example:**

```
/* Visible - default */
.visible {
  overflow: visible;
}

/* Hidden - clips content */
.hidden {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

/* Scroll - always show scrollbars */
.scroll {
  width: 200px;
  height: 200px;
  overflow: scroll;
}

/* Auto - show scrollbars if needed */
.auto {
  width: 200px;
  height: 200px;
  overflow: auto;
}

/* Separate X and Y */
.xy {
  overflow-x: hidden;
  overflow-y: auto;
}

/* Text overflow */
.text-truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multiline text truncate */
.multiline-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## INTERMEDIATE CSS QUESTIONS

### 16. What is CSS Float? How do you clear floats?

**Answer:**
Float removes an element from the normal flow, allowing text to wrap around it. This was traditionally used for layouts before Flexbox and Grid.

**Example:**

```
/* Float element */
.float-left {
  float: left;
  width: 300px;
  margin-right: 20px;
}

.float-right {
  float: right;
  width: 300px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Clear specific side */
.clear-left {
  clear: left;
}

.clear-right {
  clear: right;
}

.clear-both {
  clear: both;
}

/* Overflow method */
.overflow-clear {
  overflow: auto;
}

/* Modern alternative: use Flexbox instead */
.modern-layout {
  display: flex;
  gap: 20px;
}
```

---

### 17. What is CSS Transform? Give examples.

**Answer:**
Transform applies 2D or 3D transformations to elements without affecting the document flow.

**Methods:**

- `translate()` - Move element
- `rotate()` - Rotate element
- `scale()` - Resize element
- `skew()` - Distort element
- `matrix()` - Apply multiple transforms

**Example:**

```
/* Translate - move element */
.translate {
  transform: translate(50px, 100px);
  transform: translateX(50px);
  transform: translateY(100px);
}

/* Rotate - rotate element */
.rotate {
  transform: rotate(45deg);
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
}

/* Scale - resize element */
.scale {
  transform: scale(1.5);
  transform: scaleX(1.5);
  transform: scaleY(0.5);
}

/* Skew - distort element */
.skew {
  transform: skew(20deg, 10deg);
  transform: skewX(20deg);
  transform: skewY(10deg);
}

/* Multiple transforms */
.combined {
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.origin {
  transform-origin: center;
  transform: rotate(45deg);
}

/* 3D transforms */
. 3d {
  transform: perspective(1000px) rotateX(45deg);
}

/* Smooth transitions with transform */
.smooth {
  transition: transform 0.3s ease;
}

.smooth:hover {
  transform: scale(1.1) rotate(5deg);
}
```

---

### 18. What is the calc() function? How do you use it?

**Answer:**
The `calc()` function performs mathematical calculations in CSS.

**Supported operators:** `+`, `-`, `*`, `/`

**Example:**

```
/* Basic calculations */
.width-calc {
  width: calc(100% - 20px);
  height: calc(100vh - 60px);
}

/* With variables */
:root {
  --spacing: 10px;
}

.padding {
  padding: calc(var(--spacing) * 2);
}

/* Responsive sizing */
.responsive {
  width: calc(100% - 40px);
  margin: 0 auto;
  max-width: 1200px;
}

/* Complex calculations */
.complex {
  width: calc((100% - 40px) / 3);
  height: calc(100vh - 100px - 20px);
}

/* With multiple units */
.units {
  width: calc(80% + 10px);
  font-size: calc(1rem + 0.5vw);
}

/* Grid with calc */
.grid {
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 40px) / 3));
  gap: 20px;
}

/* Flexbox with calc */
.flex {
  display: flex;
  gap: 10px;
}

.flex > div {
  width: calc(25% - 7.5px);
}
```

---

### 19. What is CSS Cascade and Inheritance?

**Answer:**

**Cascade:** Rules are applied based on:

1. Importance (!important)
2. Specificity (IDs > classes > elements)
3. Source order (later rules override earlier)

**Inheritance:** Some properties are inherited from parent to child.

**Example:**

```
/* Cascade example */
h1 { color: blue; }
h1 { color: red; } /* This wins - later rule */

.class { color: green; }
#id { color: yellow; } /* This wins - higher specificity */

/* !important overrides cascade */
h1 { color: blue !important; } /* This wins */

/* Inherited properties */
body {
  font-family: Arial;
  color: #333;
  line-height: 1.6;
}

/* Children inherit these */
p {
  /* Inherits font-family, color, line-height */
}

/* Non-inherited properties */
div {
  border: 1px solid black; /* Not inherited */
  margin: 20px; /* Not inherited */
}

/* Force inheritance */
.inherit-all {
  all: inherit;
}

/* Reset to initial */
.reset-all {
  all: initial;
}

/* Unset - remove all declarations */
.unset-all {
  all: unset;
}
```

---

### 20. What is BEM (Block Element Modifier) CSS methodology?

**Answer:**
BEM is a naming convention for CSS classes to write modular, reusable CSS.

**Structure:**

- **Block:** Standalone component
- **Element:** Part of a block
- **Modifier:** Variation of block/element

**Format:** `.block__element--modifier`

**Example:**

```
/* Block */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Elements */
.card__header {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.card__title {
  margin: 0;
  font-size: 24px;
}

.card__body {
  padding: 20px;
}

.card__footer {
  padding: 20px;
  background: #f9f9f9;
}

/* Modifiers */
.card--featured {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid gold;
}

.card__header--dark {
  background: navy;
  color: white;
}

.card__body--small {
  padding: 10px;
}

/* HTML Usage */
/*
<div class="card card--featured">
  <div class="card__header card__header--dark">
    <h2 class="card__title">Title</h2>
  </div>
  <div class="card__body">Content</div>
  <div class="card__footer">Footer</div>
</div>
*/
```

---

### 21. What are CSS Preprocessors? (SCSS, LESS)

**Answer:**
Preprocessors extend CSS with variables, nesting, mixins, and functions. Popular ones include Sass/SCSS and Less.

**Example (SCSS):**

```scss
/* Variables */
$primary-color: #3498db;
$spacing-unit: 8px;

/* Nesting */
.navbar {
  background: $primary-color;

  &:hover {
    background: darken($primary-color, 10%);
  }

  .nav-item {
    padding: $spacing-unit * 2;

    &--active {
      font-weight: bold;
    }
  }
}

/* Mixins */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  @include flex-center;
  height: 100vh;
}

/* Functions */
@function rem($pixels) {
  @return $pixels / 16 * 1rem;
}

body {
  font-size: rem(16);
}

/* Inheritance */
.button-base {
  padding: rem(10) rem(20);
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  @extend .button-base;
  background: $primary-color;
  color: white;
}
```

---

### 22. What is pointer-events in CSS?

**Answer:**
The pointer-events property controls whether an element responds to pointer events (clicks, hovers).

**Example:**

```
/* None - element ignores pointer events */
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Auto - default behavior */
.enabled {
  pointer-events: auto;
}

/* Overlay that doesn't block clicks */
.overlay {
  pointer-events: none;
}

.overlay .interactive {
  pointer-events: auto;
}

/* Disable link */
a.disabled {
  pointer-events: none;
  color: gray;
  cursor: not-allowed;
}

/* Click-through overlay */
.modal-backdrop {
  pointer-events: none;
}

.modal-backdrop.active {
  pointer-events: auto;
}
```

---

### 23. What is the difference between em, rem, px, and other units?

**Answer:**
CSS units define sizes relative to different references.

| Unit        | Relative to               | Use case                |
| ----------- | ------------------------- | ----------------------- |
| `px`        | Pixels                    | Fixed sizes             |
| `em`        | Parent font-size          | Responsive, local scope |
| `rem`       | Root font-size            | Responsive, global      |
| `%`         | Parent's dimension        | Flexible layouts        |
| `vw/vh`     | Viewport width/height     | Full-screen layouts     |
| `vmin/vmax` | Smallest/largest viewport | Responsive scaling      |

**Example:**

```
/* HTML: <html style="font-size: 16px"> */

/* Pixels - fixed */
.px {
  font-size: 16px;
  padding: 10px;
}

/* em - relative to parent */
.parent {
  font-size: 20px;
}

.parent .child {
  font-size: 1.5em; /* 30px (1.5 * 20px) */
  margin: 1em; /* 30px (1 * 30px) */
}

/* rem - relative to root */
body {
  font-size: 16px;
}

.element {
  font-size: 1.5rem; /* 24px (1.5 * 16px) */
  margin: 1rem; /* 16px (1 * 16px) */
}

/* Percentage - relative to parent */
.container {
  width: 1000px;
}

.child {
  width: 50%; /* 500px */
}

/* Viewport units */
.full-viewport {
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
}

.responsive {
  font-size: calc(1rem + 1vw); /* Scales with viewport */
}

/* Flexible scaling */
.responsive-box {
  width: 80vmin; /* 80% of smallest viewport dimension */
}
```

---

### 24. What are vendor prefixes in CSS?

**Answer:**
Vendor prefixes are browser-specific prefixes for experimental or non-standard CSS features.

**Common prefixes:**

- `-webkit-` (Chrome, Safari, Opera)
- `-moz-` (Firefox)
- `-ms-` (Internet Explorer)
- `-o-` (Opera)

**Example:**

```
/* Transforms */
.transform {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* Flexbox (older syntax) */
.flex {
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
}

/* Gradients */
.gradient {
  background: -webkit-linear-gradient(to right, red, yellow);
  background: -moz-linear-gradient(to right, red, yellow);
  background: linear-gradient(to right, red, yellow);
}

/* Appearance */
.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Backface visibility */
.flip {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Modern approach: Use autoprefixer */
/* Just write standard CSS, autoprefixer adds prefixes automatically */
```

---

### 25. What is CSS Performance Optimization?

**Answer:**
Techniques to improve CSS performance and rendering speed.

**Optimization strategies:**

1. Minimize CSS file size
2. Reduce specificity
3. Avoid expensive properties
4. Use CSS containment
5. Optimize media queries

**Example:**

```
/* ❌ Inefficient */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ✅ Better */
html, body, section, article {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ❌ Avoid box-shadow on hover (expensive) */
div:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

/* ✅ Use transform instead */
div:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Use CSS containment */
.card {
  contain: layout style paint;
}

/* Lazy load background images */
.image {
  background: url('placeholder.jpg');
}

.image.loaded {
  background: url('high-res.jpg');
}

/* Use will-change sparingly */
.animated {
  will-change: transform;
}

.animated.active {
  transform: translateX(100px);
}
```

---

### 26. What is CSS Containment?

**Answer:**
CSS containment limits the scope of browser calculations to a specific element, improving performance.

**Values:**

- `layout` - Element has independent layout
- `style` - Styles don't affect outside
- `paint` - Paints are independent
- `size` - Size doesn't depend on children

**Example:**

```
/* Full containment */
.card {
  contain: layout style paint;
}

/* Layout containment */
.widget {
  contain: layout;
}

/* Paint containment */
.component {
  contain: paint;
}

/* Size containment */
.container {
  contain: size;
  width: 300px;
  height: 300px;
}

/* Strict containment (all) */
.isolated {
  contain: strict;
}
```

---

### 27. What are CSS accessibility considerations?

**Answer:**
Best practices for making CSS accessible to all users.

**Key considerations:**

1. Color contrast
2. Readable font sizes
3. Focus indicators
4. Keyboard navigation
5. Reduced motion

**Example:**

```
/* Color contrast */
body {
  background: white;
  color: #333; /* Good contrast */
}

/* Readable font sizes */
body {
  font-size: 16px;
  line-height: 1.6;
}

/* Focus indicators */
button:focus {
  outline: 3px solid #4A90E2;
  outline-offset: 2px;
}

input:focus {
  border-color: #4A90E2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}

/* Keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
}

.skip-link:focus {
  top: 0;
}

/* Remove default focus (if providing custom) */
:focus-visible {
  outline: 2px solid #4A90E2;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: more) {
  body {
    color: black;
    background: white;
  }
}

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #f0f0f0;
  }
}
```

---

## ADVANCED CSS QUESTIONS

### 28. What is CSS Filter? How do you use it?

**Answer:**
Filters apply graphical effects like blur, brightness, and saturation.

**Common filters:**

- `blur()` - Blur effect
- `brightness()` - Increase/decrease brightness
- `contrast()` - Increase/decrease contrast
- `grayscale()` - Make grayscale
- `invert()` - Invert colors
- `opacity()` - Change opacity
- `saturate()` - Increase/decrease saturation
- `sepia()` - Add sepia effect

**Example:**

```
/* Blur effect */
.blur {
  filter: blur(5px);
}

/* Brightness */
.bright {
  filter: brightness(150%);
}

.dark {
  filter: brightness(50%);
}

/* Contrast */
.contrast {
  filter: contrast(200%);
}

/* Grayscale */
.grayscale {
  filter: grayscale(100%);
}

/* Sepia */
.sepia {
  filter: sepia(100%);
}

/* Invert */
.invert {
  filter: invert(100%);
}

/* Hue rotation */
.hue-rotate {
  filter: hue-rotate(90deg);
}

/* Multiple filters */
.combined {
  filter: blur(2px) brightness(120%) contrast(150%);
}

/* Hover effect */
img:hover {
  filter: grayscale(0%) brightness(110%);
  transition: filter 0.3s ease;
}

/* Shadow effect */
.shadow {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}
```

---

### 29. What is CSS Mask and Clip-path?

**Answer:**

- **Clip-path:** Clips the element to a defined shape
- **Mask:** Uses an image or gradient to control visibility

**Example:**

```
/* Clip-path - basic shapes */
.clip-circle {
  clip-path: circle(50%);
}

.clip-ellipse {
  clip-path: ellipse(50% 75%);
}

.clip-polygon {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.clip-inset {
  clip-path: inset(10px 20px 30px 40px);
}

/* Responsive clip-path */
.hero-shape {
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 85%,
    0% 100%
  );
}

/* Mask with image */
.mask-image {
  mask-image: url('mask.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
}

/* Mask with gradient */
.fade-mask {
  mask-image: linear-gradient(to bottom, black, transparent);
}

/* Animated clip-path */
@keyframes clip-animate {
  0% { clip-path: circle(0%); }
  100% { clip-path: circle(50%); }
}

.animate-clip {
  animation: clip-animate 1s ease forwards;
}

/* Image hover effect */
.image-reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s ease;
}

.image-reveal:hover {
  clip-path: inset(0 0 0 0);
}
```

---

### 30. What is CSS Backdrop Filter?

**Answer:**
The backdrop-filter property applies graphical effects to the area behind an element (like glass morphism).

**Example:**

```
/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

/* Navigation bar */
.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
}

/* Modal with blur */
.modal {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

/* Card on image */
.card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px) brightness(110%);
  padding: 20px;
  border-radius: 10px;
}

/* Frozen glass effect */
.frozen-glass {
  background: rgba(200, 200, 200, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
}

/* Hover effect */
.popup:hover {
  backdrop-filter: blur(5px);
  transition: backdrop-filter 0.3s ease;
}
```

---

### 31. What is CSS Scroll Behavior and Smooth Scrolling?

**Answer:**
CSS controls scrolling behavior for smooth, animated scrolling.

**Example:**

```
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Scroll snap */
.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

.scroll-item {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Horizontal scroll */
.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.horizontal-scroll > div {
  scroll-snap-align: start;
  min-width: 100vw;
}

/* Sticky positioning with scroll */
.header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}

/* Scroll margin */
.section {
  scroll-margin-top: 80px; /* Offset for fixed header */
}

/* Scroll padding */
html {
  scroll-padding-top: 80px;
}

/* Overflow behavior */
.overflow-anchor {
  overflow-anchor: auto;
}

.overflow-no-anchor {
  overflow-anchor: none;
}
```

---

### 32. What is CSS Subgrid?

**Answer:**
Subgrid allows nested grid items to align with parent grid.

**Example:**

```
/* Parent grid */
.parent-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

/* Child grid using subgrid */
.child-grid {
  display: grid;
  grid-column: 1 / 13;
  grid-template-columns: subgrid;
  gap: inherit;
}

.child-grid > div {
  grid-column: span 3;
}

/* Complex subgrid */
.card {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: auto 1fr auto;
  grid-column: span 4;
}

.card-header {
  grid-row: 1;
}

.card-body {
  grid-row: 2;
}

.card-footer {
  grid-row: 3;
}
```

---

### 33. What is CSS Feature Queries @supports?

**Answer:**
Feature queries check browser support for CSS features.

**Example:**

```
/* Check for support */
@supports (display: grid) {
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Fallback */
@supports not (display: grid) {
  .grid-layout {
    display: flex;
    flex-wrap: wrap;
  }
}

/* Multiple conditions */
@supports (display: flex) and (--custom: property) {
  .flex-layout {
    display: flex;
  }
}

/* OR condition */
@supports (display: grid) or (display: flex) {
  .layout {
    display: grid;
  }
}

/* Selector support */
@supports selector(:focus-visible) {
  :focus-visible {
    outline: 2px solid blue;
  }
}
```

---

### 34. What is the difference between static, relative, absolute, fixed, and sticky positioning?

**Answer:**
Already covered in question 13, but here's a comprehensive comparison:

| Property   | Document Flow | Position Relative To    |
| ---------- | ------------- | ----------------------- |
| `static`   | Yes           | N/A (default)           |
| `relative` | Yes           | Original position       |
| `absolute` | No            | Positioned parent       |
| `fixed`    | No            | Viewport                |
| `sticky`   | Yes           | Viewport (at threshold) |

---

### 35. What are important CSS best practices?

**Answer:**
Key practices for writing maintainable, performant CSS:

**Example:**

```
/* 1. Use meaningful class names */
.user-profile { }
.error-message { }
.primary-button { }

/* 2. Keep specificity low */
/* ❌ Avoid */
#header .nav .menu li a { }

/* ✅ Better */
.nav-link { }

/* 3. Organize with comments */
/* ============================================
   Header Styles
   ============================================ */

.header { }
.header__logo { }
.header__nav { }

/* 4. Group related rules */
.button {
  /* Layout */
  display: inline-block;
  padding: 10px 20px;

  /* Appearance */
  background: blue;
  color: white;
  border-radius: 4px;

  /* Interaction */
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 5. Use consistent units */
:root {
  --spacing-unit: 8px;
  --base-font-size: 16px;
}

/* 6. Mobile-first approach */
/* Mobile styles */
.container {
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 90%;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    width: 80%;
    max-width: 1200px;
  }
}

/* 7. Avoid magic numbers */
/* ❌ */
.element {
  margin-left: 17px;
}

/* ✅ */
.element {
  margin-left: var(--spacing-unit) * 2;
}

/* 8. DRY principle */
/* ❌ Repetitive */
.button-primary {
  padding: 10px 20px;
  border-radius: 4px;
}

.button-secondary {
  padding: 10px 20px;
  border-radius: 4px;
}

/* ✅ */
.button {
  padding: 10px 20px;
  border-radius: 4px;
}

.button--primary { }
.button--secondary { }

/* 9. Document complex code */
/* Using negative margin to align items
   This accounts for the border offset */
.special-alignment {
  margin-left: -4px;
}

/* 10. Use linters and formatters */
/* Install: postcss, stylelint
   Keep code consistent and catch errors */
```

---

## CSS Interview Tips

**For Interviews:**

1. Explain your thought process
2. Consider performance implications
3. Mention accessibility
4. Discuss browser compatibility
5. Show knowledge of modern techniques (Grid, Flexbox, Custom Properties)
6. Be ready to write code samples
7. Discuss responsive design strategies
8. Know when to use which layout method

---

## Key Learning Resources

- **Official:** MDN CSS Documentation, Can I Use
- **Blogs:** CSS Tricks, Smashing Magazine, Web.dev
- **YouTube:** Layout Land, CSS with Chris
- **Practice:** Build projects, recreate designs, CSS Art

---

**Happy Learning! Master these concepts and ace your CSS interviews.** ✅
