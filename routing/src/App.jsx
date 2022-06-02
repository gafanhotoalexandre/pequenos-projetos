import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
