import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'
import { useGetClientSecretQuery } from '../../redux/api/paymentApi'
import { useParams } from 'react-router-dom'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const CheckoutPage = () => {
    const amount = useParams().amount
    const { data, isLoading} = useGetClientSecretQuery(amount)
    console.log('amt ', amount)
  return (
    <>
      {!isLoading && 
      <div>
        <div className='text-xl text-red-600 flex flex-col items-center justify-center mt-4 mb-4'>
          <span className='font-bold border-b-2 border-green-600'>Pay Now </span>
          <span>
            Total Amount to Pay: <span className='text-green-800 font-semibold'>${amount}</span>
          </span>
        </div>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: data.clientSecret }}
      >
        <CheckoutForm clientSecret={data.clientSecret} amount={parseFloat(amount as string)} />
       </Elements>
       </div>
       }
    </>
  )
}

export default CheckoutPage
