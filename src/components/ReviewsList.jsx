import ReviewsCard from "./ReviewsCard"

export default function ReviewsList ({reviews}) {
    return (
        <section>
            <div className="container-review my-4">
               <h2>Reviews</h2>
            </div>
            {reviews.map((review ) => (
                <ReviewsCard key={review.id} review={review}/>
            ))}
        </section>
    )
}