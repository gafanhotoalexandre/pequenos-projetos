import { useParams } from 'react-router-dom';

export function Product() {
  const { id } = useParams();

  return (
    <section>
      Product { id }
    </section>
  );
}
