import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";

const movie = {
  id: 1,
  title: "Inception",
  director: "Christopher Nolan",
  genre: "Science Fiction",
  release_year: 2010,
  abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
  image: "http://localhost:5173/img/movies/inception.jpg",
  created_at: "2024-11-29T10:40:13.000Z",
  updated_at: "2025-05-22T10:55:27.000Z"
}

export default function MoviesShow() {
  const { id } = useParams();

  const renderDescription = (movie) => {
    return (
      <>  
        <span className="d-block">
          <strong>Genere:</strong> {movie.genre}
        </span>
        <span className="d-block">
          <strong>Anno di uscita:</strong> {movie.release_year}
        </span>
      </>
    );
  }
  
  return (
    <>
      <section className="my-5">
        <div className="container">
          <h1>{movie.title}</h1>
          <div className="row">
            <div className="col-5">
              <img src={movie.image} />
            </div>
            <div className="col-7">
               {renderDescription(movie)}
            </div>
          </div>
        </div>
      </section>

      <ReviewsList />
    </>
  )
} 