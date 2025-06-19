import { useParams } from "react-router";
import ReviewsList from "../components/ReviewsList";
import { useEffect, useState } from "react";
import axios from "axios";


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
        </>
      ): (
        <h2>Loading...</h2>
      )}
    </>
  )
} 