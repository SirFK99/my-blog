import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Home from './routes/home'; // Import your Home component
import About from './routes/About';
import BlogPost from './routes/blogPost';

// Define the route structure explicitly
const routes: RouteObject[] = [
  { path: "/", element: <Home /> }, // Homepage is the blog listing page
  { path: "/about", element: <About /> }, // About page
  { path: "/blog/:id", element: <BlogPost /> } // Individual blog post
];

const router = createBrowserRouter(routes);

export default router;
