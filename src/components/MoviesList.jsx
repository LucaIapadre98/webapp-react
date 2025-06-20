import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useLoader } from "../contexts/ContextLoader";

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

    const renderDescription = (movie) => {
        return (
            <>  
                <div className="img-first">
                    <img src={movie.image} />
                </div>
                <span className="d-block">
                    <strong>Genere:</strong> {movie.genre}
                </span>
                <span className="d-block">
                    <strong>Anno di uscita:</strong> {movie.release_year}
                </span>
            </>
        );
    };
    
    return (
        <div className="container-list">
            <div className="row gap-2">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-2">
                        <Card 
                            title={movie.title} 
                            imagePath={movie.image}
                            link={`/movies/${movie.id}`}
                            description={renderDescription(movie)} 
                        > 
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}