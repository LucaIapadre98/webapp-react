import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";
import ReviewsForm from "../components/ReviewForm";
import { useLoader } from "../contexts/ContextLoader";

const formInitialData = {
  name:"",
  text:"",
  vote: 0
}

export default function MoviesShow() {
  const { id } = useParams();
  const { setIsLoading } = useLoader();
  const [formData, setFormData] = useState(formInitialData);

  const getMovieApiUrl = import.meta.env.VITE_BACKEND_API_URL + "/movies/" + id;
  const storeMovieApiUrl = import.meta.env.VITE_BACKEND_API_URL + "/movies/" + id + "/reviews";     // IMPORTO LE CHIAMATE API  COME VARIABILI//

  const [movie, setMovie] = useState();

  const fetchmovie = () =>{
    setIsLoading(true);

    axios.get(getMovieApiUrl).then((res) =>{
      const {movie} = res.data;
      setMovie(movie);
      setIsLoading(false);
    })
  };

  const fetchStoreMovieReview = () => {
    axios.post(storeMovieApiUrl, formData).then(() => {
      fetchmovie();                                                    //CON LA FETCH RICHIEDO I DATI DEI FILM //
    })
  }

  const handleStoreReviewSubmit = (e) =>{                        // SUBMIT DEL FORM DELLE RECENSIONI //
    e.preventDefault();                            
    setFormData(formInitialData);
    fetchStoreMovieReview ();                                    // FA LA CHIAMATA PER LE RECENSIONI //
  };

  useEffect (fetchmovie, []);

  const renderDescription = (movie) => {
    return (
      <dl className="movie-facts">
        <div>
          <dt>Regia</dt>
          <dd>{movie.director}</dd>
        </div>
        <div>
          <dt>Genere</dt>
          <dd>{movie.genre}</dd>
        </div>
        <div>
          <dt>Anno di uscita</dt>
          <dd>{movie.release_year}</dd>
        </div>
        <div>
          <dt>Inserito il</dt>
          <dd>{movie.created_at}</dd>
        </div>
        <div className="fact-description">
          <dt>Trama</dt>
          <dd>{movie.abstract}</dd>
        </div>
      </dl>
    );
  }
  
  return (
    <>
      {movie  ? (
        <>
          <section className="movie-detail">
            <div className="movie-detail-card">
              <img className="movie-detail-poster" src={movie.image} alt={`${movie.title} - locandina`} />
              <div className="movie-detail-copy">
                <p className="section-kicker">Scheda del film</p>
                <h1>{movie.title}</h1>
                  {renderDescription(movie)}
              </div>
            </div>
          </section>
          <ReviewsList reviews={movie.reviews} />
          <ReviewsForm 
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleStoreReviewSubmit}/>
        </>
      ): (
        <p className="loading-message">Stiamo preparando la scheda del film...</p>
      )}
    </>
  )
} 