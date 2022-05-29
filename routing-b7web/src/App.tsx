import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

export default function App() {
  return (
    <div className="w-[750px] mx-auto my-4">
      <header>
        <h1 className="text-center">Título do Site</h1>
      </header>

      <hr />

      <main className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>

      <hr />

      <footer className="text-center">
        Todos os Direitos Reservados
      </footer>
    </div>
  );
}
