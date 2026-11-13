import MoviesList from "../components/MoviesList";

export default function MoviesIndex() {
  return (
    <div className="movies-page">
      <div className="page-heading">
        <p className="section-kicker">La collezione</p>
        <h1 className="section-title">Film da scoprire</h1>
        <p>Grandi storie, registi indimenticabili e nuovi classici. Trova il prossimo film da aggiungere ai tuoi preferiti.</p>
      </div>
      <MoviesList />
    </div>
  );
}