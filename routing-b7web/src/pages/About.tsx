import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export function About() {
  const [inputFilter, setInputFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => setInputFilter(String(searchParams.get('filter'))), []);

  function setOrder(order: 'asc' | 'desc') {
    searchParams.set('order', order);
    setSearchParams(searchParams);
  }

  function setFilter(searchFilter: string) {
    searchParams.set('filter', searchFilter);
    setSearchParams(searchParams);
  }

  function handleChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setInputFilter(e.target.value);
    setFilter(e.target.value);
  }

  return (
    <div>
      Filtro: {searchParams.get('filter')} <br />
      <section>
        <input
          type="text"
          className="rounded"
          onChange={handleChangeFilter}
          value={inputFilter}
        />
      </section>
      Ordem: {searchParams.get('order')}
      <section className="border rounded p-4 flex items-center gap-5 transition-all">
        <button
          className="px-3 py-2 border rounded hover:border-gray-400 transition-all"
          onClick={() => setOrder('asc')}
        >ASC</button>
        <button
          className="px-3 py-2 border rounded hover:border-gray-400 transition-all"
          onClick={() => setOrder('desc')}
        >DESC</button>
      </section>

      <hr />
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
