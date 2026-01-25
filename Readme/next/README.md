# Next.js Interview Questions & Answers

Comprehensive guide to commonly asked Next.js interview questions organized by difficulty level with detailed explanations and code examples.

---

## Basic Level Questions

### 1. What is Next.js and what are its key features?

**Answer:**
Next.js is a React framework built on top of Node.js that provides a production-ready solution for building full-stack web applications. It simplifies React development with built-in features for routing, API routes, and optimization.

**Key features:**

- File-based routing system
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes for backend functionality
- Built-in CSS and image optimization
- Automatic code splitting
- Fast refresh for development
- TypeScript support out of the box

**Example:**

```
// pages/index.js
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// pages/about.js - Automatically creates /about route
export default function About() {
  return <h1>About Page</h1>;
}

// pages/api/hello.js - Creates /api/hello endpoint
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API' });
}
```

---

### 2. Explain Next.js routing. How does it differ from React Router?

**Answer:**
Next.js uses file-based routing where the file structure automatically determines routes. This differs from React Router which requires manual route configuration.

**Next.js File-Based Routing:**

- Routes are created automatically based on file structure in the `pages` directory
- No need to configure routes manually
- Supports dynamic routes with `[param].js`
- API routes can be created in `pages/api`

**React Router:**

- Manual route configuration required
- More flexible for complex routing scenarios
- Requires explicit Route components

**Example:**

```
// Next.js File Structure:
pages/
  ├── index.js                 // Route: /
  ├── about.js                 // Route: /about
  ├── blog/
  │   ├── index.js             // Route: /blog
  │   └── [slug].js            // Route: /blog/[slug]
  └── api/
      └── posts.js             // Route: /api/posts

// pages/blog/[slug].js - Dynamic route
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Blog Post: {slug}</h1>;
}

// Accessing dynamic route:
// /blog/hello-world -> slug = "hello-world"
// /blog/react-guide -> slug = "react-guide"
```

---

### 3. What is the difference between static generation (SSG) and server-side rendering (SSR)?

**Answer:**

**Static Site Generation (SSG):**

- Page is pre-rendered at build time
- HTML is generated during build and reused for every request
- Fastest performance (no server computation needed)
- Best for content that doesn't change frequently

**Server-Side Rendering (SSR):**

- Page is rendered on every request
- Server computes HTML for each request
- Slightly slower than SSG
- Best for dynamic content or personalized pages

| Feature          | SSG                  | SSR                    |
| ---------------- | -------------------- | ---------------------- |
| **Build Time**   | Slower               | None                   |
| **Request Time** | Fast                 | Slower                 |
| **Data**         | Static               | Dynamic                |
| **Updates**      | Rebuild needed       | Immediate              |
| **Use Case**     | Blogs, documentation | E-commerce, dashboards |

**Example:**

```
// SSG with getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 60, // ISR: Revalidate every 60 seconds
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}

// SSR with getServerSideProps
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/user');
  const user = await res.json();

  return {
    props: { user },
  };
}

export default function UserProfile({ user }) {
  return <h1>Welcome, {user.name}!</h1>;
}
```

---

### 4. What are API routes in Next.js?

**Answer:**
API routes allow you to build a full-stack application by creating API endpoints within Next.js. Any file inside `pages/api` becomes an API route accessible at `/api/[filename]`.

**Features:**

- Easy to create REST endpoints
- No need for separate backend server
- Can access database directly
- Supports middleware
- Supports all HTTP methods

**Example:**

```
// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ users: [] });
  } else if (req.method === 'POST') {
    // Handle POST request
    const { name, email } = req.body;
    res.status(201).json({ id: 1, name, email });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

// pages/api/users/[id].js - Dynamic API route
export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    res.status(200).json({ id, name: 'John', email: 'john@example.com' });
  } else if (req.method === 'PUT') {
    res.status(200).json({ id, ...req.body });
  } else if (req.method === 'DELETE') {
    res.status(204).end();
  }
}

// Using API route from client
async function fetchUsers() {
  const res = await fetch('/api/users');
  const data = await res.json();
  console.log(data.users);
}

async function createUser(name, email) {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email }),
  });
  return await res.json();
}
```

---

### 5. What is the App Router in Next.js 13+?

**Answer:**
The App Router is the new routing system introduced in Next.js 13 as an alternative to the Pages Router. It provides better organization, nested routing, and layout management.

**Key differences from Pages Router:**

| Feature        | Pages Router | App Router                     |
| -------------- | ------------ | ------------------------------ |
| **Directory**  | `pages/`     | `app/`                         |
| **Layouts**    | Per-page     | Shared across routes           |
| **Structure**  | Flat files   | Folder-based with `page.js`    |
| **Default**    | Client       | Server Components (by default) |
| **API Routes** | `pages/api/` | `route.js` in app folder       |

**Example:**

```
// App Router file structure:
app/
  ├── layout.js              // Root layout
  ├── page.js                // Route: /
  ├── about/
  │   └── page.js            // Route: /about
  ├── blog/
  │   ├── layout.js          // Nested layout for /blog/*
  │   ├── page.js            // Route: /blog
  │   └── [slug]/
  │       └── page.js        // Route: /blog/[slug]
  └── api/
      ├── users/
      │   └── route.js       // Route: /api/users

// app/layout.js - Root layout
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// app/blog/layout.js - Nested layout
export default function BlogLayout({ children }) {
  return (
    <div className="blog-container">
      <Sidebar />
      {children}
    </div>
  );
}

// app/blog/[slug]/page.js - Dynamic route
export default function BlogPost({ params }) {
  return <h1>Blog: {params.slug}</h1>;
}
```

---

### 6. What are Server Components and Client Components in Next.js?

**Answer:**
Server Components and Client Components allow you to build applications with a mix of server-side and client-side rendering for optimal performance.

**Server Components (default in App Router):**

- Render on the server
- Have direct access to databases and secrets
- No JavaScript sent to browser
- Great for data fetching and sensitive operations

**Client Components:**

- Render in the browser
- Can use hooks (useState, useEffect)
- Can handle interactivity
- Require JavaScript to be sent to browser

**Example:**

```
// app/page.js - Server Component (default)
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    headers: {
      authorization: process.env.SECRET_KEY, // Safe on server
    },
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>{data.title}</h1>
      <ClientComponent data={data} />
    </div>
  );
}

// 'use client' directive marks this as Client Component
'use client';

import { useState } from 'react';

export function ClientComponent({ data }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{data.description}</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
```

---

### 7. What is Image Optimization in Next.js?

**Answer:**
Next.js provides the `Image` component which automatically optimizes images for performance including lazy loading, responsive sizes, and modern formats.

**Features:**

- Automatic lazy loading
- Responsive image sizes
- Support for modern formats (WebP, AVIF)
- Prevents Cumulative Layout Shift (CLS)
- Automatic placeholder support

**Example:**

```
import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      {/* With fixed dimensions */}
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={200}
        height={200}
      />

      {/* Responsive with fill */}
      <div style={{ position: 'relative', width: 300, height: 300 }}>
        <Image
          src="/landscape.jpg"
          alt="Landscape"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* With priority for above-the-fold images */}
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={1200}
        height={600}
        priority
      />

      {/* With blur placeholder */}
      <Image
        src="/picture.jpg"
        alt="Picture"
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="data:image/png;base64,..."
      />
    </div>
  );
}
```

---

### 8. How do you handle environment variables in Next.js?

**Answer:**
Next.js has built-in support for environment variables. You can load environment variables from `.env.local`, `.env.development`, `.env.production`, etc.

**Variable Prefix Rules:**

- Variables without prefix: Only available on server
- `NEXT_PUBLIC_` prefix: Available on both client and server

**Example:**

```bash
# .env.local
DATABASE_URL=postgresql://localhost/mydb
API_SECRET=secret-key-123
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=MyApp
```

```
// pages/api/data.js - Server-side
export default function handler(req, res) {
  const dbUrl = process.env.DATABASE_URL; // Works on server
  const apiSecret = process.env.API_SECRET; // Works on server
  const publicUrl = process.env.NEXT_PUBLIC_API_URL; // Works

  res.json({ message: 'Success' });
}

// pages/index.js - Client-side
export default function Home() {
  // Only NEXT_PUBLIC_* variables are available
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Works
  const secret = process.env.API_SECRET; // undefined on client

  return <h1>API: {apiUrl}</h1>;
}

// Accessing in getServerSideProps (server-side)
export async function getServerSideProps() {
  const dbUrl = process.env.DATABASE_URL; // Available

  return {
    props: { data: 'value' },
  };
}
```

---

### 9. What is Incremental Static Regeneration (ISR)?

**Answer:**
ISR allows you to update static pages without rebuilding the entire site. Pages can be revalidated at runtime while still maintaining the performance benefits of static generation.

**How it works:**

1. Page is served from cache
2. After revalidation time, Next.js regenerates the page in background
3. New version is served on next request

**Example:**

```
// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);

  return {
    props: { post },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export async function getStaticPaths() {
  // Generate pages for popular posts at build time
  const posts = await fetchPopularPosts();

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug },
    })),
    fallback: 'blocking', // Generate other pages on demand
  };
}

export default function BlogPost({ post }) {
  return <h1>{post.title}</h1>;
}
```

---

### 10. How do you deploy a Next.js application?

**Answer:**
Next.js applications can be deployed to various platforms. Vercel (created by Next.js team) is the most popular option but other platforms are also supported.

**Popular deployment options:**

1. **Vercel** (Recommended)

   - Zero-config deployment
   - Automatic deployments on push
   - Built-in analytics and monitoring

2. **Docker/Self-hosted**

   - Full control over infrastructure
   - Requires manual setup

3. **AWS, Azure, GCP, Heroku**
   - Various deployment options
   - Different configuration needed

**Example:**

```bash
# Deploy to Vercel
npm i -g vercel
vercel

# Docker deployment
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# Build and run
docker build -t my-nextjs-app .
docker run -p 3000:3000 my-nextjs-app

# Deploy to Heroku
heroku login
heroku create my-nextjs-app
git push heroku main
```

---

## Moderate Level Questions

### 11. What is Middleware in Next.js?

**Answer:**
Middleware in Next.js allows you to run code before requests are completed. It runs at the edge, making it fast and ideal for authentication, redirects, and request modification.

**Use cases:**

- Authentication/authorization
- URL rewrites
- Request logging
- Rate limiting
- Redirects

**Example:**

```js
// middleware.js (root of project)
import { NextResponse } from "next/server";

export function middleware(request) {
  // Check authentication
  const token = request.cookies.get("token");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Add custom header
  const response = NextResponse.next();
  response.headers.set("X-Custom-Header", "custom-value");
  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
```

---

### 12. How do you implement authentication in Next.js?

**Answer:**
Authentication in Next.js can be implemented using middleware, API routes, and session management. NextAuth.js is a popular library for this.

**Approaches:**

1. NextAuth.js (recommended)
2. Manual JWT implementation
3. Third-party services (Auth0, Firebase)

**Example:**

```
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // Verify credentials
        const user = await verifyCredentials(
          credentials.email,
          credentials.password
        );
        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);

// pages/login.js
import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await signIn('credentials', {
      email: 'user@example.com',
      password: 'password',
      redirect: false,
    });

    if (result.ok) {
      // Login successful
    }
  }

  return <form onSubmit={handleSubmit}>...</form>;
}

// Protect routes
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'unauthenticated') return <p>Access Denied</p>;

  return <h1>Welcome, {session.user.name}!</h1>;
}
```

---

### 13. What are Dynamic Routes in Next.js?

**Answer:**
Dynamic routes allow you to create pages with dynamic URL segments. Use square brackets `[id]` for dynamic segments.

**Example:**

```
// pages/posts/[id].js - Single dynamic segment
export default function Post({ params }) {
  return <h1>Post ID: {params.id}</h1>;
}

// pages/posts/[id]/comments/[commentId].js - Nested dynamic routes
export default function Comment({ params }) {
  return (
    <div>
      <p>Post: {params.id}</p>
      <p>Comment: {params.commentId}</p>
    </div>
  );
}

// Catch-all routes using [...slug].js
// pages/docs/[...slug].js
export default function Docs({ params }) {
  // /docs/getting-started -> params.slug = ['getting-started']
  // /docs/api/auth -> params.slug = ['api', 'auth']
  const docPath = params.slug?.join('/') || 'index';
  return <h1>Documentation: {docPath}</h1>;
}

// Optional catch-all using [[...slug]].js
// pages/blog/[[...slug]].js
export default function Blog({ params }) {
  // /blog -> params.slug = undefined
  // /blog/hello -> params.slug = ['hello']
  if (!params.slug) return <h1>All Posts</h1>;
  return <h1>Post: {params.slug.join('/')}</h1>;
}
```

---

### 14. How do you handle redirects and rewrites in Next.js?

**Answer:**
Next.js provides multiple ways to handle redirects and rewrites in `next.config.js`, pages, or middleware.

**Differences:**

- **Redirect**: Browser URL changes, visible to user
- **Rewrite**: Internal URL change, browser URL stays same

**Example:**

```js
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // HTTP 301
      },
      {
        source: "/blog/:slug",
        destination: "/articles/:slug",
        permanent: false, // HTTP 307
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://external-api.com/:path*",
      },
    ];
  },
};

// In middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/old-path") {
    return NextResponse.redirect(new URL("/new-path", request.url));
  }
}

// In pages
export async function getServerSideProps(context) {
  if (someCondition) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
```

---

### 15. What is the difference between `getStaticProps`, `getServerSideProps`, and `getStaticPaths`?

**Answer:**

| Function               | Timing       | Use Case              | Performance |
| ---------------------- | ------------ | --------------------- | ----------- |
| **getStaticProps**     | Build time   | Static content        | Fastest     |
| **getServerSideProps** | Request time | Dynamic content       | Slower      |
| **getStaticPaths**     | Build time   | Define dynamic routes | N/A         |

**Example:**

```
// getStaticProps - Build time rendering
export async function getStaticProps({ params }) {
  const data = await fetch('/api/data');
  return {
    props: { data },
    revalidate: 3600, // ISR: Revalidate every hour
  };
}

// getServerSideProps - Request time rendering
export async function getServerSideProps({ params, req, res }) {
  const data = await fetch('/api/data');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  return { props: { data } };
}

// getStaticPaths - Define dynamic routes for SSG
export async function getStaticPaths() {
  const posts = await fetch('/api/posts');
  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking', // 'blocking', true, or false
  };
}

export default function Post({ data }) {
  return <h1>{data.title}</h1>;
}
```

---

## Advanced Level Questions

### 16. What is the Next.js build process?

**Answer:**
The Next.js build process optimizes the application for production including code splitting, minification, and static optimization.

**Build steps:**

1. Compilation - TypeScript and JSX compilation
2. Minification - Reduce file sizes
3. Code splitting - Separate route bundles
4. Static optimization - Pre-render static pages
5. Image optimization - Process images

**Example:**

```bash
# Build command
npm run build

# Output includes:
# - ○ (Static) - Pre-rendered pages
# - ● (Dynamic) - Server-rendered pages
# - λ (Lambda) - API routes
# - ∞ (Revalidating) - ISR pages

# Next.js build analysis
npm run build -- --analyze
```

---

### 17. How do you optimize performance in Next.js?

**Answer:**
Next.js provides several built-in performance optimizations that can be further enhanced.

**Optimization techniques:**

1. Code splitting - Automatic per route
2. Image optimization - Use `next/image`
3. Font optimization - Built-in font loading
4. Script optimization - `next/script` for third-party scripts
5. Dynamic imports - Lazy load components
6. Caching - ISR and cache strategies

**Example:**

```
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Image from 'next/image';

// Dynamic imports for code splitting
const HeavyComponent = dynamic(
  () => import('../components/HeavyComponent'),
  { loading: () => <p>Loading...</p> }
);

// Third-party script optimization
export default function Page() {
  return (
    <div>
      <Script
        src="https://example.com/tracking.js"
        strategy="lazyOnload"
      />

      <Image
        src="/image.jpg"
        alt="Image"
        priority
        width={800}
        height={600}
      />

      <HeavyComponent />
    </div>
  );
}
```

---

### 18. What is `next/link` and how does it differ from HTML anchor tags?

**Answer:**
`next/link` is Next.js's built-in component for navigation. It enables client-side navigation without full page reloads and includes prefetching.

**Benefits:**

- Client-side navigation
- Automatic prefetching
- Code splitting
- No flash of loading content

**Example:**

```
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      {/* Prefetches /about on hover */}
      <Link href="/about">About</Link>

      {/* Dynamic routes */}
      <Link href={`/posts/${postId}`}>View Post</Link>

      {/* With query parameters */}
      <Link href={{ pathname: '/search', query: { q: 'next' } }}>
        Search
      </Link>

      {/* Disable prefetching */}
      <Link href="/heavy-page" prefetch={false}>
        Heavy Page
      </Link>

      {/* External links should use anchor tag */}
      <a href="https://external.com">External Link</a>
    </nav>
  );
}
```

---

### 19. How do you handle error handling in Next.js?

**Answer:**
Next.js provides multiple ways to handle errors including error boundaries, error pages, and try/catch in API routes.

**Methods:**

1. Custom error pages (`pages/_error.js`)
2. 404 page (`pages/404.js`)
3. Error boundaries (React)
4. Try/catch in API routes
5. Error middleware

**Example:**

```
// pages/_error.js
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

// pages/404.js
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

// pages/500.js
export default function ServerError() {
  return <h1>500 - Server Error</h1>;
}

// pages/api/users.js - Error handling
export default async function handler(req, res) {
  try {
    const users = await fetchUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
```

---

### 20. What is the difference between `useRouter` and `next/link`?

**Answer:**

**`next/link`:**

- Component for navigation
- Automatic prefetching
- Best for regular navigation
- Links are SEO-friendly

**`useRouter`:**

- Hook for programmatic navigation
- More control over navigation
- No prefetching by default
- Used in event handlers or complex logic

**Example:**

```
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  // With Link
  return (
    <div>
      <Link href="/about">Go to About</Link>

      {/* With useRouter (programmatic) */}
      <button onClick={() => router.push('/about')}>
        Go to About
      </button>

      {/* Replace history */}
      <button onClick={() => router.replace('/home')}>
        Replace History
      </button>

      {/* Back navigation */}
      <button onClick={() => router.back()}>Back</button>

      {/* Check current route */}
      {router.pathname === '/about' && <p>You are on About page</p>}

      {/* Get query parameters */}
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
```

---

## Additional Important Questions

### 21. What is the difference between pages and app directory in Next.js 13+?

**Answer:**
Next.js 13+ introduced the App Router as a modern alternative to the traditional Pages Router.

**Key differences:**

| Feature           | Pages              | App                         |
| ----------------- | ------------------ | --------------------------- |
| **Directory**     | `pages/`           | `app/`                      |
| **Routing**       | File-based         | Folder-based with `page.js` |
| **Layouts**       | Per-page           | Nested & shared             |
| **Default**       | Client             | Server                      |
| **Data Fetching** | getServerSideProps | Server Components           |
| **Middleware**    | `_middleware.js`   | `middleware.js`             |

**Example:**

```
// Pages Router (old)
pages/
  ├── index.js
  ├── posts/
  │   └── [id].js

// App Router (new)
app/
  ├── page.js
  ├── layout.js
  └── posts/
      ├── page.js
      └── [id]/
          └── page.js

// Migration benefits
// - Better code organization
// - Nested layouts
// - Server components by default
// - Better performance
```

---

### 22. How do you handle file uploads in Next.js?

**Answer:**
File uploads in Next.js can be handled using API routes and form data.

**Example:**

```
// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable();

    const [fields, files] = await form.parse(req);
    const uploadedFile = files.file?.[0];

    if (uploadedFile) {
      const data = fs.readFileSync(uploadedFile.filepath);
      fs.writeFileSync(\`./public/uploads/\${uploadedFile.originalFilename}\`, data);
      res.status(200).json({ success: true });
    }
  }
}

// pages/upload.js
import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('File uploaded!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
}
```

---

### 23. What are incremental static regeneration (ISR) best practices?

**Answer:**
ISR allows updating static pages without full rebuild, but requires careful planning.

**Best practices:**

1. Set appropriate revalidation times
2. Use background regeneration
3. Handle stale content gracefully
4. Monitor regeneration performance

**Example:**

```
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);

  return {
    props: { post },
    revalidate: 3600, // Revalidate every hour
  };
}

export async function getStaticPaths() {
  // Generate popular posts at build
  const popularPosts = await fetchPopularPosts();

  return {
    paths: popularPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: 'blocking', // Generate others on demand
  };
}

// On-demand revalidation
export async function revalidatePage(req, res) {
  const secret = process.env.REVALIDATE_SECRET;

  if (req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/blog/post-slug');
    return res.json({ revalidated: true });
  } catch (err) {
    res.status(500).send('Error revalidating');
  }
}
```

---

## Key Learning Resources for Next.js

**Official:**

- Next.js Official Documentation
- Next.js Learn (interactive tutorial)
- Vercel YouTube channel

**Community:**

- Next.js Discord community
- Awesome Next.js GitHub repository
- Frontend Masters Advanced Next.js

**Practice:**

- Build production-ready projects
- Deploy to Vercel for feedback
- Contribute to Next.js open source

---

## Summary

Next.js is a powerful React framework. Focus on understanding when to use SSG vs SSR, master the App Router, and build performant applications!
