import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bike } from '../../types/types';
import { findCartItem } from './cart.utils';
import { CartItems } from 'cart';

// @ts-ignore
const CartButton = (data:Bike, cartItems:CartItems[], cartFunctions, addItemToCart, deleteItemFromCart) => {
        //const {decreaseItem, addToCart} = cartFunctions
        //console.log("id ", data._id)

        const currentItemInCart:CartItems[] = findCartItem(data._id,cartItems)
        
        return (currentItemInCart.length !=0?
                           <div className='flex py-1 w-full  rounded-full px-2 items-center font-semibold border-2 bg-green-500 text-white'>
                            <button  onClick={()=>deleteItemFromCart(currentItemInCart[0])} className='btn  shadow-md rounded-full hover:bg-gray-600'>
                            <FontAwesomeIcon icon={faMinus} /> 
                            </button>
                            <div className='text-md px-1'>
                             {cartItems.filter(item=> item.productId == currentItemInCart[0].productId)[0].quantity} Items Added

                            </div>

                            <button onClick={()=>addItemToCart(currentItemInCart[0])} className='btn  shadow-md rounded-full hover:bg-gray-600'>
                            <FontAwesomeIcon icon={faPlus} />
                            </button>
                            </div> 
                         :
                         <div>
                            <button
                            onClick={()=>addItemToCart?.({productId:data._id, name:data.name,quantity:1})}
                            className='btn bg-red-700 text-white shadow-md rounded-full  px-10 hover:bg-red-400 mt-3'
                            >
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                            </button>
                        </div>
    ) 
}

export default CartButton;