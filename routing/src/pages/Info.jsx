import { useParams } from 'react-router-dom';

export function Info() {
  const { id } = useParams();

  return (
    <div>
      <h2>More about product { id }.</h2>
    </div>
  );
}
