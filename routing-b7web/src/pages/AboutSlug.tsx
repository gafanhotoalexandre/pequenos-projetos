import { useParams } from 'react-router-dom';

export function AboutSlug() {
  const params = useParams();

  function toCapitalize(name: string) {
    return name[0].toUpperCase() + name.slice(1);
  }

  return (
    <div>
      Página sobre {toCapitalize(String(params.slug))} ({params.slug?.length} letras).
    </div>
  );
}
