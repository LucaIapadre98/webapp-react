import { Link } from "react-router-dom";

export default function Card ({ 
    image, 
    title, 
    description,
    link, 
    linkText 
}) {
    return (
        <div className="card" >
            {image && <img className="card-image-top" src={image} alt="" />}
            <div className="card-body">
                {title && <h4 className="card-title">{title}</h4>}
                {description && <div className="card-text">{description}</div>}
                {Link && (
                    <Link to={ link } className="btn btn-primary">
                        {linkText ?? "See More"}
                    </Link>
                )}
            </div>
        </div>
    )
}