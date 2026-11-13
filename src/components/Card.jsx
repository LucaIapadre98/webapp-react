import { Link } from "react-router-dom";

export default function Card ({ 
    image, 
    title, 
    link, 
    linkText,
    genre,
    releaseYear
}) {
    return (
        <article className="card movie-card">
            {image && <img className="movie-poster" src={image} alt={`${title} - locandina`} />}
            <div className="card-body">
                {title && <h4 className="card-title">{title}</h4>}
                <div className="movie-meta">
                    {genre && <span>{genre}</span>}
                    {releaseYear && <span>{releaseYear}</span>}
                </div>
                {link && (
                    <Link to={link} className="movie-card-link">
                        {linkText ?? "Scopri il film"}
                    </Link>
                )}
            </div>
        </article>
    )
}