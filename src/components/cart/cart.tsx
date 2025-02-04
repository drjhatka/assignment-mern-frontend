import { useCart } from 'cart'

const item = {
  productId: '123',
  name: 'Product 1',
  quantity: 1,
  price: 10
}

const Cart = () => {
//   const {
//     addToCart,
//     cartItems,
//     clearCart,
//     decreaseItem,
//     toggleCart,
//     isCartOpen
//   } = useCart()

  return (
    <div>
      {/* <Cart></Cart>
      <p>{isCartOpen ? 'Open' : 'Closed'}</p>
      <button onClick={toggleCart}>Toggle</button>
      <button onClick={() => addToCart?.(item)}>Add</button>

      <button onClick={ clearCart}>Clear</button>
      <button onClick={() => decreaseItem?.('123', 1)}>Decrease</button>

      <p>{JSON.stringify(cartItems)}</p> */}
    </div>
  )
}

export default Cart
