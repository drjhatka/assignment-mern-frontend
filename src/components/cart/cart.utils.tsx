import { CartItems} from "cart"
import Select from "react-select"

export const findCartItem =(productId:string, cartItems:CartItems[])=>{
    return cartItems?.filter(item=>item.productId==productId)
}

export const getCartItemTotal=(cartItems:CartItems[])=>{
    if(cartItems.length==0){return 0}
    return cartItems.reduce((acc:number, item:CartItems)=>acc +  (item.price ?? 0) * (item.quantity?? 0), 0 ).toFixed(2)
}
const handleChangeCartItem=(item:CartItems, addToCart, quantity:number)=>{
    const updatedItem = { ...item, quantity }; 
    console.log(updatedItem)
    addToCart?.(updatedItem)
    
}

export const generateCartItemQuantitySelectMenu = (addToCart, item:CartItems)=>{
    
    const optionArray:{value:number, label:string}[] =[];
    //generate value object array
    for (let index = 1; index <30; index++) {
        optionArray.push({value:index, label:index.toString()})
    }
    return <Select onChange={(currentValue)=>handleChangeCartItem(item,addToCart, currentValue!.value)} options={optionArray} defaultValue={{value:item.quantity, label:item.quantity.toString()}} ></Select>
}


