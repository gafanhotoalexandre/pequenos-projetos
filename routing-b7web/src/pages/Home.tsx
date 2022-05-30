import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      Página Home - <span>&nbsp;</span>
      <Link
        className="border rounded px-3 py-2 hover:border-gray-400 transition-all"
        to="/sobre"
      >Ir para Sobre</Link>
    </div>
  );
}
