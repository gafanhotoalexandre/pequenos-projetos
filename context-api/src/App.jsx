import { MainRoutes } from './routes/MainRoutes';

// components
import { Navbar } from './components/Navbar';

import './App.css';

export default function App() {
  return (
    <div className="App">
      Context Api

      <Navbar />

      <main>
        <MainRoutes />
      </main>
    </div>
  );
}
