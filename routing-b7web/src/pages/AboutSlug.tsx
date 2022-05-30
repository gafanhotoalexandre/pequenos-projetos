import { useParams, useNavigate } from 'react-router-dom';

export function AboutSlug() {
  const params = useParams();
  const navigate = useNavigate();

  function toCapitalize(name: string) {
    return name[0].toUpperCase() + name.slice(1);
  }

  function handleNavigateTo() {
    const name: string = 'guilherme';
    navigate(`/sobre/${name}`);
  }

  return (
    <div>
      Página sobre {toCapitalize(String(params.slug))} ({params.slug?.length} letras).
      <hr />

      <button
        className="border rounded my-2 mx-2 px-3 py-2 hover:bg-gray-200 transition-all"
        onClick={() => navigate(-1)}
      >Voltar</button>

      <button
        className="border rounded my-2 mx-2 px-3 py-2 hover:bg-gray-200 transition-all"
        onClick={handleNavigateTo}
      >Navegar para outro usuário</button>
    </div>
  );
}
