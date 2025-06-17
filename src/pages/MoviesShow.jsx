import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";

export default function MoviesShow() {
  const { id } = useParams();
  return (
    <>
    <div className="container">
        <section className="my-5">
            <h1>Titolo libro {id}</h1>
            <p>
                descrizione:
            </p>
            <p>vote:</p>
        </section>
        <ReviewsList />
    </div>
    </>
  )
}