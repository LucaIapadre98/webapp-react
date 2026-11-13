import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md site-nav" aria-label="Navigazione principale">
        <Link to="/" className="navbar-brand" aria-label="CineScope, pagina iniziale">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>CINESCOPE</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Apri il menu di navigazione"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">Film</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}