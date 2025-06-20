import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty} from "@fortawesome/free-regular-svg-icons";

export  default function RatingStars ({vote, maxVote= 5, id }){
    const renderStars = () => {
        if(!vote) return "Nessun voto";
        const stars = [];

        for(let i = 0; i < maxVote; i ++){
            stars.push(
                i < vote ? (
                    <FontAwesomeIcon icon={faStarFull}  className="text-warning" />
                ) : (
                    <FontAwesomeIcon icon={faStarEmpty} className="text-warning" />
                )
            );
        };
        return stars;
    };
    return <span className="text-nowrap">{renderStars()}</span>
}