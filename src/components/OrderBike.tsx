import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBikeQuery } from '../redux/api/bikeApi'
import { FieldValues, useForm } from 'react-hook-form'
import { useGetUserQuery } from '../redux/api/customerApi'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { JWTTokenUser, ProductOrder } from '../types/types'
import { useCreateOrderMutation } from '../redux/api/orderApi'
import SectionTitle from './SectionTitle'
import { ErrorMessage } from '@hookform/error-message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave, faUser } from '@fortawesome/free-solid-svg-icons'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const OrderBike = () => {
  const productId = useParams().productId
  const { register, handleSubmit, formState:{errors} } = useForm()
  const userState: JWTTokenUser | null = useSelector(
    (state: RootState) => state.auth.user
  ) as JWTTokenUser

  const { data } = useGetBikeQuery(productId)
  
  const { data: user } = useGetUserQuery(userState?.email as string)
  const { _id, name, price, quantity } = data.data

  const [createOrder] = useCreateOrderMutation()
console.log(errors)
  const handleCreateOrder = async (data: FieldValues) => {
    console.log('inside orders', user)
    const order: ProductOrder = {
      userId: user.data._id,
      product: [
        {
          product: _id,
          quantity: data.quantity
        },
        {
          product: '679722a97ec0b3ebc5c045e7',
          quantity: 3
        }
      ]
    }
    console.log(order)
    const result = await createOrder(order)
    console.log('Result ', result)
    //createOrder
  }
  return (
    <div>
        <ToastContainer
        position='top-center'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
      <SectionTitle
        title='Order '
        description='Order this bike now'
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(handleCreateOrder)}
          className='flex flex-col gap-y-3'
        >
          <div className='flex justify-center gap-5 items-center'>
            <label className='font-bold border-2 py-2 px-2 min-w-48 text-red-700'>
              Product Name
            </label>
            <input
              {...register('name')}
              className='px-4 bg-red-900 text-white font-bold text-md justify-center items-center py-2 border-2 shadow-lg'
              type='text'
              disabled
              defaultValue={name}
            />
          </div>
          <div className='flex justify-center gap-5 items-center'>
            <label className='font-bold border-2 py-2 min-w-48 flex gap-4 items-center px-2 text-red-700'>
              <FontAwesomeIcon icon={faMoneyBill1Wave} /> Product Price{' '}
            </label>
            <input
              {...register('price')}
              className='px-4 bg-red-900 text-white font-bold text-md justify-center items-center py-2 border-2 shadow-lg'
              type='text'
              disabled
              defaultValue={price}
            />
          </div>
          <div className='flex justify-center gap-5 items-center'>
            <label className='font-bold border-2 py-2 flex gap-4 items-center px-2 min-w-48 text-red-700'>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Ordered By
            </label>
            <input
              {...register('user')}
              className='px-4 bg-red-900 text-white font-bold text-md justify-center items-center py-2 border-2 shadow-lg'
              type='text'
              disabled
              defaultValue={user.data.name}
            />
          </div>
          <div className='flex justify-center gap-5  items-center'>
            <label className='px-2 font-bold border-2 py-2 text-red-700 min-w-48'>
              Select Quantity
            </label>
            <input
              {...register('quantity', { required: true, max: data.data.quantity,  })}
              className='px-4 font-bold text-md justify-center items-center py-2 border-2 shadow-lg'
              type='text'
            />
            available :
            {
                `${quantity}` 
            }
            {
                errors && errors.quantity?.type=='max' && (
                    // toast('Quantity can not be more thant available stock')
                    <h1 className='text-red-500'>Must be less than available quantity</h1>
                )
            }
             {
                errors && errors.quantity?.type=='required' && (
                    // toast('Quantity can not be more thant available stock')
                    <h1 className='text-red-500'>This field is required</h1>
                )
            }
          </div>
          {/* <div className='flex justify-center gap-5 items-center'>
                        <label className='font-bold border-2 py-2 text-red-700 min-w-48'>Payment Method</label>
                            <Select  options={options}  ></Select>
                    </div> */}
          <div className='flex justify-center gap-5 items-center'>
            <button
              type='submit'
            //   disabled={errors ? true:false }
              className='btn border-2 py-2  bg-red-700 text-white shadow-md rounded-none px-10 hover:bg-red-600'
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderBike
