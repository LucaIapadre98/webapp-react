import { Link } from "react-router-dom";

export default function Card ({imagePath, title, director, genre, link, linkText}){
    return (
        <div className="card">
            {imagePath && <img className="card-image-top" src={imagePath} alt="" />}
            <div className="card-body">
                {title && <h5 className="card-title">{title}</h5>}
                {director && <h6 className="card-title">{director}</h6>}
                {genre && <p className="card-text">{genre}</p>}
                {Link && (
                    <Link to={ link } className="btn btn-primary">
                        {linkText ?? "See More"}
                    </Link>
                )}
            </div>
        </div>
    )
}