import RatingStars from "./RatingStars";

export default function ReviewsCard ({ review }){
    const voteForStars = Math.ceil(review.vote / 2);
    return (
        <article className="review-card">
            <div className="review-avatar" aria-hidden="true">
                {review.name?.[0] ?? "?"}
            </div>
            <div className="reviewer-name">{review.name}</div>
            <div className="rating-stars" aria-label={`Voto: ${review.vote} su 10`}>
                <RatingStars vote={voteForStars} />
            </div>
            <p className="review-text">{review.text}</p>
        </article>
    )
}