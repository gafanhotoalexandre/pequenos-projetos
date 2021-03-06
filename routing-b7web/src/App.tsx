import { MainRoutes } from './routes/MainRoutes';

export default function App() {
  return (
    <div className="w-[750px] mx-auto my-4">
      <header>
        <h1 className="text-center">Título do Site</h1>
      </header>

      <hr />

      <main className="py-4">
        <MainRoutes />
      </main>

      <hr />

      <footer className="text-center">
        Todos os Direitos Reservados
      </footer>
    </div>
  );
}
