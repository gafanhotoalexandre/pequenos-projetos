import { useEffect, useState } from "react";

import { Movie } from './types/Movie';

const URL = 'https://api.b7web.com.br/cinema/';

function App() {
  const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setMoviesInTheaters(data));
  }, []);

  function handleLoadMovies() {
    fetch(URL)
      .then(response => response.json())
      .then(data => setMoviesInTheaters(data));
  }

  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <button
          className="block bg-blue-500 hover:bg-blue-400 transition-all text-white rounded p-2 mx-2"
          onClick={handleLoadMovies}
        >Carregar Filmes</button>

        <p>Total de filmes: {moviesInTheaters.length}</p>
      </div>

      <div
        className="grid grid-cols-6 gap-3 content-center"
      >
          { moviesInTheaters.map((movie, index) => (
            <div
              key={index}
            >
              <img
                src={movie.avatar}
                alt="Imagem do Filme"
                className="w-32 block"
              />
              <p>{movie.titulo}</p>
            </div>
          )) }
      </div>
    </div>
  );
}

export default App

// https://api.b7web.com.br/cinema/
