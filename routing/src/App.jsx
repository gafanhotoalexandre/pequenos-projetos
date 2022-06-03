import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

// Components
import { Navbar } from './components/Navbar';
import { SearchForm } from './components/SearchForm';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Info } from './pages/Info';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar />

        <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />

          <Route path="/search" element={<Search />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
