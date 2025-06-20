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
    axios.post(storeMovieApiUrl, formData).then((res) =>{   
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
    const voteForStars = movie.vote ? Math.ceil(movie.vote / 2) : null;
    return (
      <>  
        <h6 className="d-block">
          <strong>Regista:</strong> {movie.director}
        </h6>
        <h6 className="d-block">
          <strong>Genere:</strong> {movie.genre}
        </h6>
        <h6 className="d-block">
          <strong>Anno di uscita:</strong> {movie.release_year}
        </h6>
        <h6 className="d-block">
          <strong>Descrizione:</strong> {movie.abstract}
        </h6>
        <h6 className="d-block">
          <strong>Uscito a:</strong> {movie.created_at}
        </h6>
      </>
    );
  }
  
  return (
    <>
      {movie  ? (
        <>
          <section className="form my-5">
            <div className="container">
              <h1>{movie.title}</h1>
              <div className="row">
                <div className="col-3">
                  <img src={movie.image} id="form-image"/>
                </div>
                <div className="col-9">
                  {renderDescription(movie)}
                </div>
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
        <h2>Loading...</h2>
      )}
    </>
  )
} 