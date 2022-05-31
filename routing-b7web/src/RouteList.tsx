import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutSlug } from './pages/AboutSlug';
import { NotFound } from './pages/NotFound';
import { RequireAuth } from './RequireAuth';


export function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
            path="/sobre"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>}
          />

          <Route
            path="/sobre/:slug"
            element={<AboutSlug />}
          />

          <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
