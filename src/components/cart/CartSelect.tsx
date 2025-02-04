import { CartItems } from 'cart';
import React from 'react'
import Select from 'react-select'
import { generateCartItemQuantitySelectMenu } from './cart.utils';
const CartSelect = ({item}:{item:CartItems}) => {
    // const options = [
    //     { value: '', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]
    return (
        <div>
            {generateCartItemQuantitySelectMenu(item.quantity)}
        </div>
    );
};

export default CartSelect;