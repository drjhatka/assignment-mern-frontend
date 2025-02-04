import { useCart } from 'cart';
import { getCartItemTotal } from './cart.utils';

const CartRightBar = () => {
    const {cartItems} = useCart()
    return (
        <div className=''>
            <h1 className='mt-2  font-semibold  '>Order Summary</h1>
            <div className='flex border-b-2 px-8 py-4 justify-between items-center'>
                <h1 className=''>Item(s) Total:</h1>
                <span className='text-lg font-semibold'><span className='text-2xl px-3 text-green-700 font-bold'>{'\u09F3'}</span>{getCartItemTotal(cartItems ??[] )}</span>
            </div>
            <div className='px-6 flex justify-center  md:justify-end'>
                <button className='btn bg-red-700  text-white shadow-md rounded-full px-10 hover:bg-red-400 mt-3'>Checkout</button>
            </div>
        </div>
    );
};

export default CartRightBar;