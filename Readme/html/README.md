# HTML Interview Questions & Answers

Comprehensive guide to commonly asked HTML interview questions with detailed explanations and code examples.

---

## Table of Contents

1. [Basic HTML Questions](#basic-html)
2. [Intermediate HTML Questions](#intermediate-html)
3. [Advanced HTML Questions](#advanced-html)
4. [Best Practices & Tips](#best-practices)

---

## Basic HTML

### 1. What is HTML, and what is its purpose?

**Answer:**
HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides structure and content to web documents, defining elements like headings, paragraphs, links, images, and forms.

**Purpose:**

- Define the structure of web content
- Create semantic markup for better accessibility
- Enable browser interpretation of content
- Support multimedia and interactive elements

**Example:**
```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  <main>
    <p>This is the main content of the page.</p>
  </main>
  <footer>
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

### 2. What are semantic HTML elements, and why are they important?

**Answer:**
Semantic HTML elements clearly describe their purpose and meaning to both browsers and developers. They improve code readability, accessibility, and SEO.

**Common semantic elements:**

- `<header>` - Header section
- `<nav>` - Navigation menu
- `<main>` - Main content
- `<article>` - Self-contained content
- `<section>` - Thematic grouping
- `<aside>` - Sidebar content
- `<footer>` - Footer section
- `<figure>` and `<figcaption>` - Images with captions

**Why important:**

- Better accessibility for screen readers
- Improved SEO
- Clearer code structure
- Better for mobile devices

**Example:**
```

<!-- Non-semantic (Bad) -->
<div class="header">
  <div class="nav">
    <a href="/">Home</a>
  </div>
</div>

<!-- Semantic (Good) -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<!-- Article with semantic elements -->
<article>
  <header>
    <h2>Article Title</h2>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
  </header>
  <p>Article content goes here...</p>
  <footer>
    <p>By Author Name</p>
  </footer>
</article>
```

---

### 3. What is the difference between block and inline elements?

**Answer:**

**Block Elements:**

- Take up full available width
- Start on a new line
- Respect all margins and padding
- Examples: `<div>`, `<p>`, `<h1>`, `<section>`, `<header>`

**Inline Elements:**

- Take up only necessary width
- Do not start on a new line
- Only horizontal margins are respected
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`

**Inline-Block:**

- Combination of both
- Flows inline but respects all margins/padding
- Examples: `<button>`, `<input>`

**Example:**
```

<!-- Block Elements -->
<div style="border: 1px solid black;">Block Element</div>
<p style="border: 1px solid black;">Paragraph - also block</p>

<!-- Inline Elements -->

<span style="border: 1px solid black;">Inline Element</span>
<strong style="border: 1px solid black;">Strong - also inline</strong>

<!-- They behave differently -->
<div style="background: lightblue;">
  This is a block element that takes full width.
</div>
<div style="background: lightgreen;">
  This div starts on a new line.
</div>

<span style="background: lightyellow;">Inline</span>
<span style="background: lightcoral;">stays on same line</span>
```

---

### 4. What are data attributes (data-\*), and how do you use them?

**Answer:**
Data attributes (data-\*) allow you to store custom data in HTML elements. They're useful for storing information that doesn't have a semantic HTML element.

**Benefits:**

- Store custom data without cluttering the DOM
- Accessible via JavaScript
- Valid HTML5
- Useful for frameworks and libraries

**Example:**
```

<!-- Storing custom data -->
<div class="product" data-product-id="123" data-price="29.99" data-rating="4.5">
  <h3>Product Name</h3>
  <p class="price" data-currency="USD">$29.99</p>
</div>

<!-- JavaScript access -->
<script>
  const product = document.querySelector('.product');
  
  // Accessing data attributes
  const productId = product.dataset.productId; // "123"
  const price = product.dataset.price; // "29.99"
  const rating = product.dataset.rating; // "4.5"
  
  // Setting data attributes
  product.dataset.inStock = true;
  
  // Removing data attributes
  delete product.dataset.rating;
</script>

<!-- Practical example: Product list -->
<ul id="products">
  <li data-id="1" data-category="electronics" data-price="99">Laptop</li>
  <li data-id="2" data-category="electronics" data-price="299">Monitor</li>
  <li data-id="3" data-category="books" data-price="15">Book</li>
</ul>

<script>
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function() {
      console.log(\`Product ID: \${this.dataset.id}\`);
      console.log(\`Category: \${this.dataset.category}\`);
      console.log(\`Price: $\${this.dataset.price}\`);
    });
  });
</script>

```

---

### 5. What is the difference between `<div>` and `<section>`?

**Answer:**

**`<div>`:**

- Generic container with no semantic meaning
- Used for layout and styling purposes
- Purely presentational
- No meaning to screen readers or search engines

**`<section>`:**

- Semantic element representing thematic grouping
- Indicates content is related
- Better for accessibility and SEO
- Should be used when there's a logical relationship between content

**When to use:**

- Use `<section>` for grouping related content
- Use `<div>` for layout and styling when no semantic meaning applies

**Example:**
```

<!-- Using div (no semantic meaning) -->
<div class="container">
  <div class="header">
    <h1>My Blog</h1>
  </div>
  <div class="sidebar">
    <!-- sidebar content -->
  </div>
</div>

<!-- Using semantic elements (better) -->
<section id="hero">
  <h2>Welcome to My Blog</h2>
  <p>Read my latest articles</p>
</section>

<section id="recent-posts">
  <h2>Recent Posts</h2>
  <article>
    <h3>Post Title</h3>
    <p>Post excerpt...</p>
  </article>
</section>

<!-- Multiple sections on a page -->
<main>
  <section id="about">
    <h2>About Us</h2>
    <p>Company information...</p>
  </section>
  
  <section id="services">
    <h2>Services</h2>
    <p>Services offered...</p>
  </section>
  
  <section id="contact">
    <h2>Contact Us</h2>
    <form>
      <!-- form fields -->
    </form>
  </section>
</main>
```

---

### 6. What is the HTML meta tag, and what are some common uses?

**Answer:**
The meta tag provides metadata about an HTML document. It's placed in the `<head>` section and doesn't render on the page.

**Common meta tags:**

| Tag           | Purpose                                 |
| ------------- | --------------------------------------- |
| `charset`     | Specify character encoding              |
| `viewport`    | Control layout on mobile                |
| `description` | Page description for search engines     |
| `keywords`    | Keywords for search engines             |
| `author`      | Author of the page                      |
| `robots`      | Instructions for search engine crawlers |

**Example:**
```

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO meta tags -->
  <meta name="description" content="This is a description of my website for search engines">
  <meta name="keywords" content="HTML, CSS, JavaScript, Web Development">
  <meta name="author" content="John Doe">
  
  <!-- Search engine robots -->
  <meta name="robots" content="index, follow">
  
  <!-- Social media meta tags (Open Graph) -->
  <meta property="og:title" content="My Website">
  <meta property="og:description" content="Welcome to my website">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <title>My Website</title>
</head>
<body>
  <!-- Page content -->
</body>
</html>
```

---

### 7. What is HTML form validation? How do you validate forms?

**Answer:**
Form validation ensures users enter correct data. There are two types: client-side and server-side validation.

**HTML5 validation attributes:**

- `required` - Field is mandatory
- `type` - Input type (email, number, date, etc.)
- `pattern` - Regular expression pattern
- `min/max` - Minimum/maximum values
- `minlength/maxlength` - String length constraints

**Example:**
```

<form id="registration-form">
  <!-- Required field -->
  <label>
    Username:
    <input type="text" name="username" required>
  </label>
  
  <!-- Email validation -->
  <label>
    Email:
    <input type="email" name="email" required>
  </label>
  
  <!-- Number validation with range -->
  <label>
    Age:
    <input type="number" name="age" min="18" max="100" required>
  </label>
  
  <!-- Pattern validation -->
  <label>
    Phone:
    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required>
  </label>
  
  <!-- Password with length requirement -->
  <label>
    Password:
    <input type="password" name="password" minlength="8" required>
  </label>
  
  <!-- URL validation -->
  <label>
    Website:
    <input type="url" name="website">
  </label>
  
  <!-- Date validation -->
  <label>
    Birth Date:
    <input type="date" name="birthdate" required>
  </label>
  
  <button type="submit">Register</button>
</form>

<script>
  const form = document.getElementById('registration-form');
  
  form.addEventListener('submit', function(e) {
    // HTML5 validation runs automatically
    if (!form.checkValidity()) {
      e.preventDefault();
      alert('Please fix the form errors');
    }
  });
  
  // Custom JavaScript validation
  const email = form.querySelector('input[name="email"]');
  email.addEventListener('blur', function() {
    if (!this.value.includes('@')) {
      this.setCustomValidity('Invalid email address');
    } else {
      this.setCustomValidity('');
    }
  });
</script>

```

---

### 8. What is the purpose of the `<head>` section in HTML?

**Answer:**
The `<head>` section contains metadata and links to resources for the HTML document. Content in `<head>` doesn't display on the page.

**What goes in `<head>`:**

- `<title>` - Page title (shown in browser tab)
- `<meta>` - Metadata (charset, viewport, description)
- `<link>` - External resources (CSS, favicon)
- `<style>` - Internal CSS
- `<script>` - JavaScript files or code
- `<base>` - Base URL for relative URLs

**Example:**
```

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required metadata -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  
  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Favicon -->
  <link rel="icon" href="favicon.ico">
  
  <!-- Internal CSS -->
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
  
  <!-- External JavaScript (defer loading) -->
  <script src="script.js" defer></script>
  
  <!-- Base URL -->
  <base href="https://example.com/">
</head>
<body>
  <!-- Page content displayed here -->
</body>
</html>
```

---

### 9. What are HTML entities? Give some examples.

**Answer:**
HTML entities are special character codes used to display reserved characters and symbols in HTML.

**Common entities:**

| Entity      | Code               | Character |
| ----------- | ------------------ | --------- |
| \`&lt;\`    | Less than          | <         |
| \`&gt;\`    | Greater than       | >         |
| \`&amp;\`   | Ampersand          | &         |
| \`&quot;\`  | Double quote       | "         |
| \`&apos;\`  | Apostrophe         | '         |
| \`&nbsp;\`  | Non-breaking space |           |
| \`&copy;\`  | Copyright          | ©         |
| \`&reg;\`   | Registered         | ®         |
| \`&euro;\`  | Euro               | €         |
| \`&#8594;\` | Right arrow        | →         |

**Example:**
```

<!-- Using HTML entities -->
<p>5 &lt; 10</p> <!-- Displays: 5 < 10 -->
<p>A &amp; B</p> <!-- Displays: A & B -->
<p>&quot;Hello&quot;</p> <!-- Displays: "Hello" -->

<!-- Copyright symbol -->
<footer>
  &copy; 2025 My Company. All rights reserved.
</footer>

<!-- Special symbols -->
<p>Price: &euro;50</p> <!-- Displays: Price: €50 -->
<p>Registered: &reg;</p> <!-- Displays: Registered: ® -->

<!-- Non-breaking space -->
<p>Price:&nbsp;&nbsp;&nbsp;$50</p> <!-- Displays: Price:   $50 -->

<!-- Arrows -->
<p>Right Arrow: &#8594;</p> <!-- Displays: Right Arrow: → -->
<p>Left Arrow: &#8592;</p> <!-- Displays: Left Arrow: ← -->
```

---

### 10. What is accessibility in HTML, and how do you improve it?

**Answer:**
Accessibility (a11y) ensures web content is usable by everyone, including people with disabilities. WCAG guidelines provide standards.

**Accessibility techniques:**

- Semantic HTML elements
- Alt text for images
- ARIA labels and roles
- Keyboard navigation
- Color contrast
- Form labels

**Example:**
```

<!-- Inaccessible (Bad) -->
<div onclick="openMenu()">Menu</div>
<img src="logo.png">
<div class="button">Submit</div>

<!-- Accessible (Good) -->

<button aria-label="Open Menu">☰</button>
<img src="logo.png" alt="Company Logo">
<button type="submit">Submit</button>

<!-- Comprehensive accessible example -->
<header>
  <nav aria-label="Main Navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h1>Welcome</h1>
    <img src="banner.jpg" alt="Welcome banner showing our office">
    <p>Content here...</p>
  </section>
  
  <!-- Accessible form -->
  <form>
    <fieldset>
      <legend>Contact Information</legend>
      
      <label for="name">Name:</label>
      <input id="name" type="text" name="name" required>
      
      <label for="email">Email:</label>
      <input id="email" type="email" name="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" required aria-describedby="char-count"></textarea>
      <span id="char-count">Maximum 500 characters</span>
    </fieldset>
    
    <button type="submit">Send Message</button>
  </form>
  
  <!-- Skip links for keyboard navigation -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div id="main-content">
    <!-- Main content -->
  </div>
</main>

<style>
  /* Hide but keep for screen readers */
  .skip-link {
    position: absolute;
    left: -9999px;
  }
  
  .skip-link:focus {
    left: 0;
  }
</style>

```

---

## Intermediate HTML

### 11. What is ARIA, and how do you use it for accessibility?

**Answer:**
ARIA (Accessible Rich Internet Applications) provides additional semantic information to assistive technologies when HTML alone isn't sufficient.

**Key ARIA attributes:**

| Attribute            | Purpose                            |
| -------------------- | ---------------------------------- |
| \`aria-label\`       | Provides accessible name           |
| \`aria-labelledby\`  | Links to label element             |
| \`aria-describedby\` | Provides description               |
| \`aria-live\`        | Announces dynamic updates          |
| \`aria-hidden\`      | Hides from screen readers          |
| \`aria-expanded\`    | Indicates expanded/collapsed state |
| \`aria-selected\`    | Indicates selection state          |
| \`role\`             | Defines element purpose            |

**Example:**
```

<!-- Using ARIA labels -->

<button aria-label="Close menu">×</button>

<!-- ARIA for dynamic content -->
<div aria-live="polite" aria-atomic="true" id="notification">
  <!-- Updates announced to screen readers -->
</div>

<!-- ARIA for complex components -->
<div role="tablist">
  <button 
    role="tab" 
    aria-selected="true" 
    aria-controls="panel1"
  >
    Tab 1
  </button>
  <button 
    role="tab" 
    aria-selected="false" 
    aria-controls="panel2"
  >
    Tab 2
  </button>
</div>

<div id="panel1" role="tabpanel">Content 1</div>
<div id="panel2" role="tabpanel" hidden>Content 2</div>

<!-- Accessible menu -->
<nav aria-label="Main menu">
  <button aria-expanded="false" aria-controls="menu">Menu</button>
  <ul id="menu" hidden>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

---

### 12. What is the picture element, and when do you use it?

**Answer:**
The \`<picture>\` element allows serving different images based on device characteristics, providing responsive images.

**Example:**
```

<!-- Picture element for responsive images -->
<picture>
  <source media="(min-width: 1024px)" srcset="desktop-large.jpg">
  <source media="(min-width: 768px)" srcset="tablet.jpg">
  <source media="(min-width: 480px)" srcset="mobile.jpg">
  <img src="mobile-small.jpg" alt="Responsive image">
</picture>

<!-- Picture with different formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpg">
  <img src="image.jpg" alt="Image">
</picture>

<!-- Art direction -->
<picture>
  <source media="(min-width: 800px)" srcset="landscape.jpg">
  <source media="(min-width: 400px)" srcset="portrait.jpg">
  <img src="mobile.jpg" alt="Landscape on desktop, portrait on mobile">
</picture>
```

---

### 13. What are input types in HTML5, and why are they important?

**Answer:**
HTML5 introduced new input types that provide native validation and better user experience on different devices.

**Common HTML5 input types:**

| Type               | Purpose          | Use Case           |
| ------------------ | ---------------- | ------------------ |
| \`email\`          | Email validation | Contact forms      |
| \`number\`         | Numeric input    | Age, quantity      |
| \`tel\`            | Telephone        | Phone numbers      |
| \`url\`            | URL validation   | Website links      |
| \`date\`           | Date picker      | Birth date, events |
| \`time\`           | Time picker      | Appointments       |
| \`datetime-local\` | Date and time    | Event scheduling   |
| \`color\`          | Color picker     | Design tools       |
| \`range\`          | Slider           | Volume, brightness |
| \`file\`           | File upload      | Document upload    |
| \`search\`         | Search input     | Search bars        |
| \`password\`       | Password field   | Login forms        |

**Example:**
```

<form>
  <!-- Email input with validation -->
  <input type="email" placeholder="your@email.com" required>
  
  <!-- Number input with range -->
  <input type="number" min="1" max="100" placeholder="Enter a number">
  
  <!-- Date picker -->
  <input type="date">
  
  <!-- Time picker -->
  <input type="time">
  
  <!-- Color picker -->
  <input type="color" value="#FF0000">
  
  <!-- Range slider -->
  <input type="range" min="0" max="100" value="50">
  
  <!-- File upload -->
  <input type="file" accept="image/*">
  
  <!-- Search -->
  <input type="search" placeholder="Search...">
  
  <button type="submit">Submit</button>
</form>
```

---

### 14. What is the difference between `<strong>` and `<bold>` (or `<b>`)?

**Answer:**

**\`<strong>\`:**

- Semantic element
- Indicates importance
- Screen readers emphasize it
- Used for important content

**\`<b>\`:**

- Non-semantic element
- Just visual formatting (bold)
- No semantic meaning
- Used for stylistic purposes only

**Best Practice:** Use \`<strong>\` for important content, use \`<b>\` only for styling when semantic meaning doesn't apply.

**Example:**
```

<!-- Strong (semantic) - for important content -->
<p><strong>Warning:</strong> This action cannot be undone.</p>

<!-- Bold (non-semantic) - for styling -->
<p>This is a <b>stylistically offset</b> word.</p>

<!-- Similarly with emphasis -->
<p>This is <em>emphasized</em> (semantic)</p>
<p>This is <i>italicized</i> (non-semantic)</p>
```

---

### 15. What are forms, and what is the difference between `<fieldset>` and `<datalist>`?

**Answer:**

**\`<fieldset>\`:**

- Groups related form controls
- Creates visual grouping with border
- Used with \`<legend>\` to provide title
- Improves accessibility

**\`<datalist>\`:**

- Provides predefined options for input
- Creates autocomplete functionality
- Linked to input via \`list\` attribute
- User can still enter custom values

**Example:**
```

<!-- Fieldset for grouping -->
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input id="name" type="text" required>
    
    <label for="email">Email:</label>
    <input id="email" type="email" required>
  </fieldset>
  
  <fieldset>
    <legend>Address Information</legend>
    <label for="address">Address:</label>
    <input id="address" type="text" required>
  </fieldset>
</form>

<!-- Datalist for autocomplete -->
<form>
  <label for="country">Choose Country:</label>
  <input id="country" type="text" list="countries">
  
  <datalist id="countries">
    <option value="United States">
    <option value="Canada">
    <option value="Mexico">
    <option value="United Kingdom">
    <option value="Germany">
  </datalist>
</form>
```

---

### 16. What is the \`<canvas>\` element, and how is it different from \`<svg>\`?

**Answer:**

**\`<canvas>\`:**

- Raster-based drawing
- Pixel-by-pixel manipulation
- Good for animations and games
- Lower accessibility
- Requires JavaScript to draw

**\`<svg>\`:**

- Vector-based graphics
- Resolution-independent
- Better for icons and logos
- Better accessibility
- Can be styled with CSS

**Example:**
```

<!-- Canvas - raster drawing -->

<canvas id="canvas" width="400" height="300"></canvas>

<script>
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  
  // Draw a circle
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, Math.PI * 2);
  ctx.fill();
</script>

<!-- SVG - vector graphics -->
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" fill="blue"/>
  <rect x="50" y="50" width="100" height="100" fill="green" opacity="0.5"/>
</svg>
```

---

## Advanced HTML

### 17. What is the \`<template>\` element, and when do you use it?

**Answer:**
The \`<template>\` element holds HTML that won't be rendered immediately but can be instantiated later via JavaScript.

**Use cases:**

- Reusable HTML components
- Dynamic content generation
- Framework templates (Vue, React, Angular)

**Example:**
```

<!-- Template element -->
<template id="card-template">
  <div class="card">
    <img class="card-image" src="/placeholder.svg" alt="">
    <h3 class="card-title"></h3>
    <p class="card-description"></p>
    <button class="card-button">Learn More</button>
  </div>
</template>

<div id="cards-container"></div>

<script>
  const template = document.getElementById('card-template');
  const container = document.getElementById('cards-container');
  
  const cards = [
    { image: 'img1.jpg', title: 'Card 1', description: 'Description 1' },
    { image: 'img2.jpg', title: 'Card 2', description: 'Description 2' },
  ];
  
  cards.forEach(card => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.card-image').src = card.image;
    clone.querySelector('.card-title').textContent = card.title;
    clone.querySelector('.card-description').textContent = card.description;
    container.appendChild(clone);
  });
</script>

```

---

### 18. What is Web Components, and how does it relate to HTML?

**Answer:**
Web Components is a set of features that allow creating reusable custom HTML elements using HTML, CSS, and JavaScript.

**Key technologies:**

- Custom Elements
- Shadow DOM
- HTML Templates
- ES Modules

**Example:**
```

<!-- Define a custom element -->
<script>
  class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
      this.shadowRoot.innerHTML = \`
        <style>
          button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        </style>

        <button><slot></slot></button>
      \`;
    }

}

customElements.define('my-button', MyButton);
</script>

<!-- Use the custom element -->

<my-button>Click me</my-button>
```

---

### 19. What is the difference between \`defer\` and \`async\` attributes in script tags?

**Answer:**

| Attribute | Execution          | Order          | Use Case                   |
| --------- | ------------------ | -------------- | -------------------------- |
| \`defer\` | After HTML parsing | Preserved      | When script depends on DOM |
| \`async\` | While parsing      | Not guaranteed | Independent scripts        |
| None      | Blocks parsing     | Sequential     | Critical scripts           |

**Example:**
```

<!-- Blocks HTML parsing until downloaded and executed -->
<script src="script1.js"></script>

<!-- Downloads in parallel, executes when ready (may interrupt parsing) -->
<script src="script2.js" async></script>

<!-- Downloads in parallel, executes after HTML parsing -->
<script src="script3.js" defer></script>

<!-- Multiple deferred scripts execute in order -->
<script src="analytics.js" defer></script>
<script src="app.js" defer></script>

```

---

### 20. What is the \`<noscript>\` tag, and when do you use it?

**Answer:**
The \`<noscript>\` tag defines content to display if JavaScript is disabled in the browser.

**Use cases:**

- Provide fallback content
- Show message to users with JS disabled
- Redirect to alternative pages

**Example:**
```

<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Required</title>
</head>
<body>
  <noscript>
    <div style="text-align: center; padding: 50px;">
      <h2>JavaScript is Required</h2>
      <p>This website requires JavaScript to function properly.</p>
      <p>Please enable JavaScript in your browser settings.</p>
    </div>
  </noscript>
  
  <!-- Main content that needs JavaScript -->
  <div id="app"></div>
  
  <script src="app.js"></script>
</body>
</html>
```

---

## Best Practices

### 21. HTML Best Practices Summary

**1. Use Semantic HTML**
```

<!-- Good -->
<header>
  <nav>Menu</nav>
</header>
<main>
  <article>Content</article>
</main>
<footer>Footer</footer>

<!-- Avoid -->
<div id="header">
  <div id="nav">Menu</div>
</div>
```

**2. Provide Descriptive Meta Tags**
```

<meta name="description" content="Clear, concise description">
<meta name="keywords" content="relevant, keywords">
<meta property="og:image" content="social-media-preview.jpg">
```

**3. Use Alt Text for Images**
```

<!-- Good -->
<img src="logo.jpg" alt="Company logo">

<!-- Avoid -->
<img src="image.jpg">
```

**4. Properly Label Form Elements**
```

<!-- Good -->

<label for="email">Email:</label>
<input id="email" type="email">

<!-- Avoid -->
<input type="email" placeholder="Email">
```

**5. Use Proper Heading Hierarchy**
```

<!-- Good -->
<h1>Page Title</h1>
<h2>Section 1</h2>
<h3>Subsection</h3>

<!-- Avoid -->
<h1>Page Title</h1>
<h3>Section (skipped h2)</h3>
```

**6. Validate Your HTML**

- Use W3C HTML Validator
- Check for broken links
- Verify accessibility

**7. Keep HTML Clean**

- Minimize nesting
- Use consistent formatting
- Add comments for complex sections
- Remove unnecessary attributes

---

## Key Interview Tips

- **SEO Knowledge:** Understand meta tags and semantic HTML
- **Accessibility:** Know ARIA, alt text, and keyboard navigation
- **Forms:** Master input types, validation, and accessibility
- **Performance:** Understand script loading (async/defer)
- **Web Standards:** Know W3C guidelines and HTML5 features
- **Mobile First:** Understand viewport and responsive design
- **Best Practices:** Follow current standards and accessibility guidelines

---

## Summary

Master HTML fundamentals, semantic markup, accessibility, and best practices. HTML is the foundation of web development, and strong HTML knowledge is essential for every web developer.

**Key Takeaways:**

- Use semantic HTML for better accessibility and SEO
- Always provide alt text for images
- Label form elements properly
- Validate your HTML regularly
- Stay updated with HTML5 features
- Prioritize accessibility in all projects
