import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useLoader } from "../contexts/ContextLoader";
import { Link } from "react-router-dom";

const movieApiUrl = import.meta.env.VITE_BACKEND_API_URL + "/movies";

export default function MoviesList (){
    const [movies, setMovies] = useState([]);
    const { setIsLoading }  = useLoader();                                                  // DA USELOADER PRENDO LA FUNZIONE SETISLOADING //

    const fetchMovies = () => {
        setIsLoading(true);                                                               // TRUE QUANDO PARTE LA RICHIESTA //
        axios.get(movieApiUrl).then((res) => {
            const { movies} = res.data;
            setMovies(movies);
            setIsLoading(false);                                                       //FALSE QUANDO ARRIVA LA RISPOSTA //
        });
    };
    useEffect(fetchMovies, []);

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <Card
                    key={movie.id}
                    title={movie.title}
                    image={movie.image}
                    genre={movie.genre}
                    releaseYear={movie.release_year}
                    link={`/movies/${movie.id}`}
                />
            ))}
            {movies.length === 0 && (
                <div className="empty-reviews">
                    <p>La raccolta è vuota per ora.</p>
                    <Link className="button-accent" to="/">Torna alla home</Link>
                </div>
            )}
        </div>
    );
}