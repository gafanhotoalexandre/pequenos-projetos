import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchForm() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    navigate('/search?q=' + query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        style={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '10px 5px',
          margin: '5px auto',
        }}
      />
      <button
        type="submit"
      >Buscar</button>
    </form>
  );
}
