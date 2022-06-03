import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import './Home.css';

export function Home() {
  const url = 'http://localhost:5500/products';

  const { data: items, isSending, error } = useFetch(url);

  return (
    <section>
      <h1>Products</h1>
      { error && <p>{ error }</p> }

      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{ item.productName }</h2>
            <p>R${ item.productPrice }</p>

            <Link to={`/products/${item.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
