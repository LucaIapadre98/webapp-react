import MoviesList from "../components/MoviesList";

export default function MoviesIndex() {
  return (
    <div className="movies-page">
      <div className="page-heading">
        <p className="section-kicker">La collezione</p>
        <h1 className="section-title">Catalogo dei film</h1>
        <p>Consulta le schede, approfondisci i dettagli e leggi le recensioni della collezione.</p>
      </div>
      <MoviesList />
    </div>
  );
}