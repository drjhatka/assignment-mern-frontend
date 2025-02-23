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
import { Bike } from '../../types/types'
import { useEffect } from 'react'
import CartButton from '../../components/cart/CartButton'

const ViewDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {
    addToCart,
    decreaseItem,
    cartItems
  } = useCart()

  const { data, isLoading } = useGetBikeQuery(params.productId)

  // useEffect(() => {
  //   //clearCart?.()
  //   console.log('Cart Items ==> ', cartItems)
  // }, [])
  // Wait for data before destructuring
  if (isLoading) return <Spinner />
  if (!data?.data) return <p className='text-red-600'>No bike details found.</p>

  const { _id, image, name, description, price, quantity } = data.data

  const addItemToCart = (item: Bike) => {
    if (!item) {
      console.error('No product data available to add to cart.')
      return
    }
    addToCart?.({
      productId: item.productId,
      price: price,
      imagesrc: image,
      name: item.name,
      quantity: item.quantity
    })
    console.log('Cart Items:', cartItems)
  }
 const deleteItemFromCart = (item: Bike) => {
    decreaseItem?.(item.productId, 1)
  }

  const handleGoToCart = () => {
    if (!_id) {
      console.error('No product ID found!')
      return
    }
    navigate(`/order/${_id}`)
  }

  return (
    <div>
      <SectionTitle title={name} description={description} />
      <div className='mt-4  border-2 border-black py-4 md:px-10 grid md:grid-cols-2 items-center mb-2'>
        <div className='border-2 w-full flex items-center justify-center'>
          <img src={image} width={'50%'} alt={name} />
        </div>

        <div className='flex flex-col gap-4 md:px-10 border-2'>
          <div className='text-lg flex justify-center '>{description}</div>
          <div className=' flex gap-4 text-red-800 font-semibold justify-center items-center py-2 bg-slate-200 border-2'>
            Price:{' '}
            <FontAwesomeIcon
              icon={faMoneyBill1Wave}
              className='text-red-600 text-lg p-0 mt-1'
            />
            ${price}
          </div>
          <div className='flex border-2 justify-center items-center gap-6'>
            <span className='font-semibold text-blue-900'>
              Available In stock:{' '}
            </span>
            <div className='badge badge-info text-white font-semibold '>
              <span> {quantity} </span>
            </div>
          </div>
          {/* Conditional Button Toggle */}
          <div className=' border-2 border-black gap-10'>
            <div className=' grid md:grid-cols-2  items-center justify-center gap-4 border-2 p-2 rounded-md'>
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
    </div>
  )
}

export default ViewDetails
