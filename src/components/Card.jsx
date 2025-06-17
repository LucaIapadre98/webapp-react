import { Link } from "react-router-dom";

export default function Card ({ 
    imagePath, 
    title, 
    description,
    link, 
    linkText 
}) {
    return (
        <div className="card" >
            {imagePath && <img className="card-image-top" src={imagePath} alt="" />}
            <div className="card-body">
                {title && <h4 className="card-title">{title}</h4>}
                {description && <p className="card-text">{description}</p>}
                {Link && (
                    <Link to={ link } className="btn btn-primary">
                        {linkText ?? "See More"}
                    </Link>
                )}
            </div>
        </div>
    )
}