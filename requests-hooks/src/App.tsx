import { CircleNotch } from 'phosphor-react';
import { useState, useEffect } from 'react';

import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { Post } from './types/Post';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

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

  async function handleAddPost(title: string, body: string) {
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (data.id) {
      alert('Post adicionado com sucesso!' + data.id);
    }

  }

  return (
    <div>
      { loading &&
        <div className="w-10 mx-auto mt-5">
          <CircleNotch weight="bold" className="w-10 h-10 animate-spin text-blue-500" />
        </div>
      }

      <PostForm
        onAdd={handleAddPost}
      />

      { !loading && posts.length > 0 &&
        <div className="">
          { posts.map((data) => (
            <PostItem
              key={data.id}
              data={data}
            />
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
