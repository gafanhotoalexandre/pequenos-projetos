import { Link } from 'react-router-dom';

import './Home.css';

export function Home() {
  return (
    <section>
      <h2>Home</h2>
      <Link to="/about">About page</Link>
    </section>
  );
}
