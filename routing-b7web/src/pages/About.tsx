import { Link } from 'react-router-dom';

export function About() {
  return (
    <div>
      <p>Lista de Usuários</p>

      <ul>
        <li>
          <Link to="/sobre/bonieky"
            className="text-blue-600 hover:text-blue-500 transition-all"
          >Bonieky</Link>
        </li>
        <li>
          <Link to="/sobre/alexandre"
            className="text-blue-600 hover:text-blue-500 transition-all"
          >Alexandre</Link>
        </li>
      </ul>
    </div>
  );
}
