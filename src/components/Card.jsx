import { Link } from "react-router-dom";

export default function Card ({imagePath, title, director, genre, link}){
    return (
        <div className="card">
            {imagePath && <img className="card-image-top" src="" alt="" />}
            <div className="body">
                {title && <h5 className="card-title"></h5>}
                {director && <h6 className="card-title"></h6>}
                {genre && <p className="card-text"></p>}
                {Link && (
                    <Link to={ link } className="btn btn-primary">
                        {linkText ?? link}
                    </Link>
                )}
            </div>
        </div>
    )
}