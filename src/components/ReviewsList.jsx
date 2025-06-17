import ReviewsCard from "./ReviewsCard"
const reviews = [
    {
        id: 4,
        movie_id: 2,
        name: "Diana",
        vote: 5,
        text: "The best crime movie ever made.",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    }, 
    {
        id: 5,
        movie_id: 2,
        name: "Eve",
        vote: 5,
        text: "A cinematic classic that never gets old.",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    },
    {
        id: 6,
        movie_id: 2,
        name: "Frank",
        vote: 4,
        text: "A bit slow-paced but very impactful.",
        created_at: "2024-11-29T10:40:13.000Z",
        updated_at: "2024-11-29T10:40:13.000Z"
    }
]
export default function ReviewsList () {
    return (
        <section>
            <div className="container my-2">
               <h2>Reviews</h2>
            </div>
            {reviews.map((review )=>(
                <ReviewsCard key={review.id} review={review}/>
            ))}
        </section>
    )
}