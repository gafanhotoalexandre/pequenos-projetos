import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

// Components
import { Navbar } from './components/Navbar';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Info } from './pages/Info';

export default function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
