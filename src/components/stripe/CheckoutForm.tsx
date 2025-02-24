import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'
import ToastWrapper from '../../utils/ToastWrapper'
import { JWTTokenUser, Order, Product } from '../../types/types'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { useCreateOrderMutation } from '../../redux/api/orderApi'
import { useCart } from 'cart'
import { useGetSingleUserQuery } from '../../redux/api/customerApi'

const CheckoutForm = ({
  clientSecret,
  amount
}: {
  clientSecret: string
  amount: number
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const user: JWTTokenUser | null = useSelector(
    (state: RootState) => state.auth.user
  ) as JWTTokenUser
  console.log('ru ', user)
  const { clearCart, cartItems } = useCart()
  const [createOrder] = useCreateOrderMutation()
  const [loading, setLoading] = useState(false)
  const { data: currentUser } = useGetSingleUserQuery(user?.email)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    if (!stripe || !elements) {
      return
    }

    const { error: submitError } = await elements.submit()

    if (submitError) {
      //setErrorMessage(submitError.message)
      setLoading(false)
      return
    }
    // const cardElement = elements.getElement(CardElement);
    // const { error: paymentMethodError } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: cardElement!,
    // });
    console.log('Current', currentUser)
    const productsArray: Product[] = []
    cartItems?.map(item => {
      productsArray.push({
        product: item.productId as string,
        quantity: item.quantity
      })
    })

    const order: Partial<Order> = {
      user: currentUser.data._id,
      products: productsArray,
      totalPrice: amount,
      status: 'Completed'
    }
    createOrder(order)
    clearCart?.()
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: clientSecret,
      confirmParams: {
        return_url: `http://localhost:5173/payment-success/${amount}`
      }
    })
    // 🔥 Retrieve Payment Intent to check status
    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)
    console.log('payment intent', paymentIntent)
    //confirm order in the database...
    //if(paymentIntent?.status==="succeeded"){
    //}

    if (error) {
      console.error(error)
      toast.error(error.message || 'Payment failed')
      return
    }
    toast.success('Payment successful!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4 bg-white p-6 rounded shadow'
    >
      {ToastWrapper()}

      <label className='block text-sm font-medium text-gray-700'>
        Card Details
      </label>

      <PaymentElement></PaymentElement>
      <div className='flex justify-center'>
        <button
          disabled={!stripe || loading}
          type='submit'
          className='w-96  bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400'
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  )
}

export default CheckoutForm
