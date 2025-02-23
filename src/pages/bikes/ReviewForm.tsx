import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useCreateReviewMutation } from '../../redux/api/reviewApi'
import { GetCurrentUser } from '../../utils/GetCurrentUser'

const ReviewForm = ({ productId, refetch } ) => {
    const {user, isLoading:userLoading}= GetCurrentUser()

    const [rating, setRating] = useState<number>(5)
    const [comment, setComment] = useState<string>('Default Comment')

    const [createReview, { isLoading }] = useCreateReviewMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) {
            toast.error('You must be logged in to submit a review.')
            return
        }

        try {
            const reviewData = {
                user: user.data._id,
                bike: productId,
                rating,
                comment,
            }
            console.log('review Data', reviewData)
            await createReview(reviewData).unwrap()
            toast.success('Review submitted successfully!')
            setRating(5)
            setComment('')
            refetch()
        } catch (error) {
            toast.error('Failed to submit the review. Please try again.')
        }
    }

    return (
        <div className="bg-slate-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-black">Leave a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Rating</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="select select-bordered md:w-56"
                        required
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} Star{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='md:w-96'>
                    <label className="block text-sm font-medium">Comment</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        placeholder="Write your review here..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full md:w-96"
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    )
}

export default ReviewForm
