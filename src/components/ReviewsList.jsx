import ReviewsCard from "./ReviewsCard"

export default function ReviewsList ({reviews}) {
    return (
        <section>
            <div className="container my-2">
               <h2>Reviews</h2>
            </div>
            {reviews.map((review ) => (
                <ReviewsCard key={review.id} review={review}/>
            ))}
        </section>
    )
}