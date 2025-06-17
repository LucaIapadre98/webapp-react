import Card from "./Card";

const movies = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2010,
        abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        image: "inception.jpg",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2025-05-22T10:55:27.000Z"
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime",
        release_year: 1972,
        abstract: "The story of a powerful Italian-American crime family and their struggles.",
        image: "interstellar.jpg",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2025-05-22T10:55:27.000Z"
    },
    {
        id: 3,
        title: "Titanic",
        director: "James Cameron",
        genre: "Romance",
        release_year: 1997,
        abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
        image: "matrix.jpg",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2025-05-22T10:55:27.000Z"
    },
    {
        id: 4,
        title: "The Matrix",
        director: "The Wachowskis",
        genre: "Action",
        release_year: 1999,
        abstract: "A hacker discovers the truth about his reality and his role in the war against its controllers.",
        image: "the_godfather.jpg",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2025-05-22T10:55:27.000Z"
    },
    {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2014,
        abstract: "A team of explorers travels through a wormhole in space to save humanity.",
        image: "titanic.jpg",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2025-05-22T10:55:27.000Z"
    }
]

export default function MoviesList (){
    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) =>(
                    <div className="col-2">
                        <Card title={movie.title} abstract={movie.abstract} link={"/movies/1"}></Card>
                    </div>
                ))}
            </div>
        </div>
    )
}