import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export function Product() {
  const { id } = useParams();

  const url = 'http://localhost:5500/products/' + id;
  const { data: product, isSending, error } = useFetch(url);

  return (
    <section>
      <p>Product ID { id }</p>
      {error && <p>An error has occurred!</p>}
      {isSending && <p>loading...</p>}

      {product && (
        <div>
          <h2>{ product.productName }</h2>
          <p>R${ product.productPrice }</p>

          <Link to={`/products/${product.id}/info`}>Read more</Link>
        </div>
      )}
    </section>
  );
}
