import { CircleNotch } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { Post } from './types/Post';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      setLoading(true);

      const res = await fetch(URL);
      const data = await res.json();

      setLoading(false);
      setPosts(data);
    } catch (err) {
      console.warn(err);
      setLoading(false);
      setPosts([]);
    }
  }

  async function handleAddPost() {
    if (!(addTitleText && addBodyText)) {
      alert('Preencha os dados corretamente.');
      return;
    }

    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        title: addTitleText,
        body: addBodyText,
        userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (data.id) {
      alert('Post adicionado com sucesso!');
    }
  }

  return (
    <div>
      { loading &&
        <div className="w-10 mx-auto mt-5">
          <CircleNotch weight="bold" className="w-10 h-10 animate-spin text-blue-500" />
        </div>
      }

      <fieldset className="border-2 mb-3 p-3">
        <legend className="px-2">Adicionar Novo Post</legend>

        <input
          type="text"
          className="block mb-2 rounded border"
          placeholder="Digite um título"
          onChange={(e) => setAddTitleText(e.target.value)}
          value={addTitleText}
        />

        <textarea
          className="block mb-2 rounded border"
          placeholder="Digite o corpo da mensagem"
          onChange={(e) => setAddBodyText(e.target.value)}
          value={addBodyText}
        />

        <button
          className="border rounded mb-2 py-3 px-4 text-white bg-blue-500 hover:bg-blue-400 transition"
          onClick={handleAddPost}
        >
          Adicionar
        </button>
      </fieldset>


      { !loading && posts.length > 0 &&
        <div className="">
          { posts.map(({ id, userId, title, body }) => (
            <div
              key={id}
              className="mb-4"
            >
              <h4 className="font-bold">{title}</h4>
              <small>#{id} - Usuário: {userId}</small>
              <p>{body}</p>
            </div>
          ))}
        </div>
      }

      { !loading && posts.length === 0 &&
        <p
          className="text-center leading-4"
        >
          Não há posts para exibir. Tente novamente mais tarde.
        </p>
      }
    </div>
  );
}
/*
import { useEffect, useState } from "react";
import { CircleNotch } from 'phosphor-react';

import { Movie } from './types/Movie';

const URL = 'https://api.b7web.com.br/cinema/';

function App() {
  const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);
  const [loadingMovies, setLoadingMovies] = useState(false);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      setLoadingMovies(true);

      const res = await fetch(URL);
      const data = await res.json();

      setLoadingMovies(false);
      setMoviesInTheaters(data);
    } catch (err) {
      setLoadingMovies(false);
      setMoviesInTheaters([]);
    }
  }

  return (
    <div>
      { loadingMovies &&
        <div className="flex justify-center items-center my-5">
          <CircleNotch weight="bold" className="w-10 h-10 animate-spin text-blue-500" />
        </div>
      }

      <div
        className="grid grid-cols-6 gap-3 content-center mt-5"
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

      { !loadingMovies && moviesInTheaters.length === 0 &&
        <p
          className="text-center leading-2"
        >
          Ocorreu um erro. Tente novamente mais tarde.
        </p>
      }
    </div>
  );
}

export default App

// https://api.b7web.com.br/cinema/

*/
