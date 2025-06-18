import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const movieApiUrl = "http://localhost:3000/movies";

export default function MoviesList (){
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get(movieApiUrl).then((res) => {
            const { movies } = res.data;
            setMovies(movies);    
        });
    };
    useEffect(fetchMovies, []);

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
    };
    
    return (
        <div className="container">
            <div className="row gap-3">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-2">
                        <Card 
                            title={movie.title} 
                            img={movie.image}
                            link={`/movies/${movie.id}`}
                            description={renderDescription(movie)} 
                        ></Card>
                    </div>
                ))}
            </div>
        </div>
    );
}