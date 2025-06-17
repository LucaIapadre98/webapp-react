export default function ReviewsCard ({ review }){
    return (
        <div className="d-flex gap-3 py-2 justify-content-between align-items-center border-bottom">
            <div className="avatar">
                <div>{review.name[0]}</div>
            </div>
            <div className="card-name">{review.name}</div>
            <div>{review.vote}</div>
            <div>{review.text}</div>
        </div>
    )
}