import { Link } from "react-router-dom";
import MoviesList from "../components/MoviesList";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <span className="eyebrow">Archivio cinematografico</span>
          <h1 className="hero-title">
            Il cinema,<br />oltre lo <span>schermo.</span>
          </h1>
          <p className="hero-copy">
            Esplora il catalogo, consulta le schede dei film e condividi le tue
            recensioni.
          </p>
          <Link className="button-accent" to="/movies">Consulta il catalogo</Link>
        </div>
        <aside className="hero-index" aria-label="Contenuti di CineScope">
          <p>Esplora CineScope</p>
          <ol>
            <li><span>01</span> Catalogo</li>
            <li><span>02</span> Schede dei film</li>
            <li><span>03</span> Recensioni</li>
          </ol>
        </aside>
      </section>
      <section className="home-intro">
        <div>
          <p className="section-kicker">La collezione</p>
          <h2 className="section-title">Selezione di film</h2>
        </div>
        <Link className="button-accent" to="/movies">Vedi tutti i film</Link>
      </section>
      <MoviesList />
    </div>
  );
}