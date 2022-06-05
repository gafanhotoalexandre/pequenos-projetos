import { useRoutes } from "react-router-dom";

// pages
import { Home } from '../pages/Home';
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About />},
    { path: '/contact', element: <Contact />},

    { path: '*', element: <NotFound /> },
  ]);
}
