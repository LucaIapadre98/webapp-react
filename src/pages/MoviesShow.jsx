import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import { useEffect, useState } from "react";
import axios  from "axios";

const reviewsApiUrl = "http://localhost:3000/reviews";

export default function MoviesShow() {
  const [review, setReview] = useState([]);
  const { id } = useParams();

  const fetchReviews = () => {
    axios.get(reviewsApiUrl).then((res) =>{
      const { review } = res.data;  
     setReview(review);
    });
  };
  useEffect(fetchReviews, []);

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