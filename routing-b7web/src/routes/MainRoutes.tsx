import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutSlug } from '../pages/AboutSlug';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../RequireAuth';


export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <RequireAuth><About /></RequireAuth> },
    { path: '/sobre/:slug', element: <AboutSlug /> },
    { path: '*', element: <NotFound /> },
  ]);
}
