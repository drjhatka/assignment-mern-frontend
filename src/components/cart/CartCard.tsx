import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartItems, useCart } from 'cart'
import { data, Link } from 'react-router-dom'
import ToastWrapper from '../../utils/ToastWrapper'
import { Bike, CartItem } from '../../types/types';
import { useGetBikeQuery } from '../../redux/api/bikeApi'
import CartButton from './CartButton'


const CartCard = ({ item }: { item: CartItems }) => {
  const { addToCart, cartItems, decreaseItem, removeFromCart } = useCart()
  const {data:bike, isLoading} =  useGetBikeQuery(item.productId)
  const addItemToCart = (item: Bike) => {
    if (!item) {
      console.error('No product data available to add to cart.')
      return
    }
    addToCart?.({
      productId: item.productId,
      price: item.price,
      imagesrc: item.image,
      name: item.name,
      quantity: item.quantity
    })
    console.log('Cart Items:', cartItems)
  }
 const deleteItemFromCart = (item: Bike) => {
    decreaseItem?.(item.productId, 1)
  }
  
  const handleRemove = () => {
    removeFromCart?.(item.productId as string)
    //setInterval(()=>{toast.success('Item removed from card')},2000)
  }
  return (

    <div className='bg-slate-50 rounded-lg  shadow-2xl border-2   mt-2 py-3 mb-2 '>
      {
        !isLoading &&
        <div className='w-full  py-2 rounded-lg  flex gap-5 px-4 mt-2 '>
        <ToastWrapper></ToastWrapper>
        <div className='flex items-center'>
          <label className='cursor-pointer'>
            <input type='checkbox' id='id' name='name' className='hidden' />
            <span className='inline-flex items-center justify-center w-10 h-10 p-1 text-white bg-blue-500 rounded-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </label>
        </div>
        <div>
          <img width={200} src={item.imagesrc} alt='' />
        </div>

        <div className='flex-col  px-4 w-full gap-4 font-semibold'>
          <div className='flex justify-between items-center'>
            <Link to={`/bikes/${item.productId}`}>{item.name}</Link>
            <button
              onClick={handleRemove}
              className='btn btn-ghost text-red-700'
            >
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
          </div>
          <div className='text-orange-700'>
              <span>Price: BDT</span> <span >{item.price}</span>
            </div>
          <div className='grid md:flex  justify-between mt-2'>
            <div className='border-2 rounded-full px-3 py-2 border-green-400'>
                <span className='text-green-600 text-sm'>Total Price:  {'\u09F3'}</span>{((item.price ?? 0) * (item.quantity ?? 0)).toFixed(2)}
            </div>
            <div className=' gap-5 text-sm flex items-center  px-2 rounded-full'>
              {CartButton(bike.data,cartItems!,()=>{},addItemToCart,deleteItemFromCart)}
              </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}
export default CartCard
