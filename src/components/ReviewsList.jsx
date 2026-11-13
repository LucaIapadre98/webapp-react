import ReviewsCard from "./ReviewsCard"

export default function ReviewsList ({reviews}) {
    return (
        <section className="reviews-section">
            <div className="review-section-heading">
                <p className="section-kicker">Voci dalla platea</p>
                <h2>Le recensioni</h2>
            </div>
            {reviews.length ? (
                <div className="review-list">
                    {reviews.map((review) => (
                        <ReviewsCard key={review.id} review={review}/>
                    ))}
                </div>
            ) : (
                <p className="empty-reviews">Ancora nessuna recensione. Lascia la prima.</p>
            )}
        </section>
    )
}