import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartItems, useCart } from 'cart'
import { generateCartItemQuantitySelectMenu } from './cart.utils'
import { Link } from 'react-router-dom'
import ToastWrapper from '../../utils/ToastWrapper'

const CartCard = ({ item }: { item: CartItems }) => {
  const handleRemove = () => {
    removeFromCart?.(item.productId as string)
    //setInterval(()=>{toast.success('Item removed from card')},2000)
  }
  const { addToCart, removeFromCart } = useCart()
  return (
    <div className='bg-slate-50 rounded-lg  shadow-2xl border-2   mt-2 py-3 mb-2 '>
      <ToastWrapper></ToastWrapper>
      <div className='w-full  py-2 rounded-lg  flex gap-5 px-4 mt-2 '>
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
            <div className='border-2 text-sm flex items-center border-red-700 px-2 rounded-full'>Total Item Ordered  <span className=' rounded-full py-1  bg-green-600 text-white px-2 font-semibold'>{item.quantity}</span></div>
            
          </div>
        </div>

      </div>
      {/* <div className='border-2 border-black flex justify-around'>
        
        <span>{generateCartItemQuantitySelectMenu(addToCart, item)}</span>
      </div> */}
    </div>
  )
}
export default CartCard
