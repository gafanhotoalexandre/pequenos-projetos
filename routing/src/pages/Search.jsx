import { useSearchParams, Link } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';

export function Search() {
  const [searchParams] = useSearchParams();

  const url = 'http://localhost:5500/products?' + searchParams;

  const { data: items, isSending, error } = useFetch(url);

  return (
    <div>
      <h2>Results found.</h2>

      <ul>
        {items && items.map(item => (
          <li key={item.id}>
            <h3>{ item.productName }</h3>
            <p>R${ item.productPrice }</p>

            <Link to={`/products/${item.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
