import { useCart } from 'cart';
import CartCard from '../../components/cart/CartCard';
import CartRightBar from '../../components/cart/CartRightBar';

const CartHome = () => {
    const {cartItems} = useCart()
    return (
        <div className=' mb-10 grid lg:gap-2 lg:grid-cols-2'>
            <div className=' rounded-md mt-2 mb-2'>
                {cartItems?.map(item=><CartCard key={item.productId} item={item} ></CartCard>)}
            </div>
            <div><CartRightBar></CartRightBar></div>
        </div>
    );
};

export default CartHome;