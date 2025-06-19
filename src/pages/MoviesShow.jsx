import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";
import ReviewsForm from "../components/ReviewForm";
import RatingStars from "../components/RatingStars";

export default function MoviesShow() {
  const { id } = useParams();
  const movieApiUrl = import.meta.env.VITE_BACKEND_API_URL + "/movies/" + id;

  const [movie, setMovie] = useState();

  const fetchmovie = () =>{
    axios.get(movieApiUrl).then((res) =>{
      const {movie} = res.data;
      setMovie(movie);
    })
  };
  useEffect (fetchmovie, []);


  const renderDescription = (movie) => {
    const voteForStars = movie.vote ? Math.ceil(movie.vote / 2) : null;
    return (
      <>  
        <h5 className="d-block">
          <strong>Genere:</strong> {movie.genre}
        </h5>
        <h5 className="d-block">
          <strong>Anno di uscita:</strong> {movie.release_year}
        </h5>
        <h5 className="d-block">
          <strong>Descrizione:</strong> {movie.abstract}
        </h5>
        <h5 className="d-block">
          <strong>Media recensione: </strong>
          <RatingStars vote={voteForStars} />
        </h5>
      </>
    );
  }
  
  return (
    <>
      {movie  ? (
        <>
          <section className="my-5">
            <div className="container">
              <h1>{movie.title}</h1>
              <div className="row">
                <div className="col-3">
                  <img src={movie.image} />
                </div>
                <div className="col-9">
                  {renderDescription(movie)}
                </div>
              </div>
            </div>
          </section>
          <ReviewsList reviews={movie.reviews} />
          <ReviewsForm idMovie={movie.id}/>
        </>
      ): (
        <h2>Loading...</h2>
      )}
    </>
  )
} 