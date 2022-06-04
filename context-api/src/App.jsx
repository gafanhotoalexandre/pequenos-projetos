import { MainRoutes } from './routes/MainRoutes';

import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div>
      Context Api

      <Navbar />

      <main>
        <MainRoutes />
      </main>
    </div>
  );
}
