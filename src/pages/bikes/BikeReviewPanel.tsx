import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//@ts-ignore 
const BikeReviewPanel = ({ bikeId, reviewLoading, isError, reviews }) => {
    //console.log('bike id', bikeId)
    //const { data: reviews, isLoading, isError, refetch } = useGetAllReviewsQuery(bikeId)
    console.log('review data ', reviews )
    if (reviewLoading) return <div className="text-center my-4">Loading reviews...</div>
    if (isError || !reviews?.data.length) return <div className="text-center my-4 text-red-600 font-semibold shadow-xl py-4">No reviews yet. Be the first to write one!</div>
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            { !reviewLoading && reviews.data.map((review: any) => (
                <div key={review._id} className="border-b py-4">
                    {/* <div className="flex items-center gap-3 mb-2">
                        <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                        <span className="font-semibold">{review?.user?.name || 'Anonymous'}</span>
                    </div> */}

                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                            />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">{review.rating} / 5</span>
                    </div>

                    <p className="mt-2 text-gray-700">{review.comment}</p>

                    <p className="text-sm text-gray-400 mt-1">
                        Reviewed on {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                    Posted By : <p className="mt-2 text-gray-700">{review.user.name}</p>

                </div>
            ))}
        </div>
    )
}

export default BikeReviewPanel
