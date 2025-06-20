import RatingStars from "./RatingStars";

export default function ReviewsCard ({ review }){
    const voteForStars = Math.ceil(review.vote / 2);
    return (
        <div className="d-flex py-2 justify-content-between align-items-center border-bottom">
            <div className="avatar" key={review.id}>
                <div>{review.name[0]}</div>
            </div>
            <div className="card-name">{review.name}</div>
            <div>
                <RatingStars vote={voteForStars} />
            </div>
            <div className="card-text">{review.text}</div>
        </div>
    )
}