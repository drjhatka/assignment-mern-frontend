/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from 'react-router-dom'
import { useGetBikeQuery } from '../../redux/api/bikeApi'
import Spinner from '../../components/Spinner'
import SectionTitle from '../../components/SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyBill1Wave,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { useCart } from 'cart'
import {  CartItem } from '../../types/types'
import CartButton from '../../components/cart/CartButton'
import ReviewForm from './ReviewForm'
import BikeReviewPanel from './BikeReviewPanel'
import { useGetAllReviewsQuery } from '../../redux/api/reviewApi'

const ViewDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { addToCart, decreaseItem, cartItems } = useCart()

  const { data, isLoading } = useGetBikeQuery(params.productId)
  const {
    data: reviews,
    isLoading: reviewLoading,
    isError,
    refetch
  } = useGetAllReviewsQuery(params.productId)

  if (isLoading) return <Spinner />
  if (!data?.data) return <p className='text-red-600'>No bike details found.</p>
  const { _id, image, name, description, price, quantity } = data.data

  const addItemToCart = (item: { productId: any; name: any; quantity: any }) => {
    if (!item) {
      console.error('No product data available to add to cart.')
      return
    }
    addToCart?.({
      productId: item?.productId,
      price: price,
      imagesrc: image,
      name: item.name,
      quantity: item.quantity
    })
    console.log('Cart Items:', cartItems)
  }
  const deleteItemFromCart = (item: CartItem) => {
    decreaseItem?.(item.productId, 1)
  }

  return (
    <div>
      <SectionTitle title={name} description={description} />
      <div className='mt-4   py-4 md:px-10 grid md:grid-cols-2 items-center mb-2'>
        <div className=' w-full flex items-center justify-center'>
          <img src={image} width={'50%'} alt={name} />
        </div>

        <div className='flex flex-col py-10 rounded-md border-green-700 border-2 shadow-2xl gap-4 md:px-10'>
          <div className='text-lg flex justify-center '>{description}</div>
          <div className=' flex gap-4 text-red-800 font-semibold justify-center items-center py-2 bg-slate-100 border-2'>
            Price:
            <FontAwesomeIcon
              icon={faMoneyBill1Wave}
              className='text-red-600 text-lg p-0 mt-1'
            />
            ${price}
          </div>
          <div className='flex  justify-center items-center gap-6'>
            <span className='font-semibold text-blue-900'>
              Available In stock:{' '}
            </span>
            <div className='badge badge-info text-white font-semibold '>
              <span> {quantity} </span>
            </div>
          </div>
          {/* Conditional Button Toggle */}
          <div className=' gap-10'>
            <div className=' grid md:grid-cols-2  items-center justify-center gap-4 p-2 rounded-md'>
              {CartButton(
                data.data,
                cartItems!,
                useCart,
                addItemToCart,
                deleteItemFromCart
              )}
              <button
                onClick={() => navigate('/cart')}
                className='btn bg-red-700  text-white shadow-md rounded-full px-10 hover:bg-red-400 mt-3'
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Go to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex mt-10 border-2 py-3 shadow-xl lg:justify-center'>
        <ReviewForm productId={_id} refetch={refetch}></ReviewForm>
      </div>
      <div>
        <BikeReviewPanel bikeId={_id} reviewLoading={reviewLoading} isError={isError} reviews={reviews}></BikeReviewPanel>
      </div>
    </div>
  )
}

export default ViewDetails
