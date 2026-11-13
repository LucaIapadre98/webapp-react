import { Link } from "react-router-dom";
import MoviesList from "../components/MoviesList";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <span className="eyebrow">Il cinema, visto da vicino</span>
          <h1 className="hero-title">
            Ogni film<br />lascia una <span>traccia.</span>
          </h1>
          <p className="hero-copy">
            Scopri storie indimenticabili, esplora il meglio del grande schermo
            e condividi il tuo punto di vista.
          </p>
          <Link className="button-accent" to="/movies">Esplora i film</Link>
        </div>
      </section>
      <section className="home-intro">
        <div>
          <p className="section-kicker">La collezione</p>
          <h2 className="section-title">Storie da ricordare</h2>
        </div>
        <Link className="button-accent" to="/movies">Vai alla raccolta</Link>
      </section>
      <MoviesList />
    </div>
  );
}