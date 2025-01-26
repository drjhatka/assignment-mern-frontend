import { useForm } from 'react-hook-form'
import { IRegisterFormInput } from '../types/types'
import { useDispatch } from 'react-redux'
import { useCreateUserMutation } from '../redux/api/customerApi'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import { Link, replace, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<IRegisterFormInput>()
  
  const [createUser] = useCreateUserMutation()
  const [disableSubmit, setDisableSubmit] = useState(false)

  const handleRegister = async (data: IRegisterFormInput) => {
    console.log(data)
    const user = await createUser(data).unwrap()
    console.log(user)
    if (user.status == 404) {
      toast('Not Created')
      console.log('User => ', user)
    } else {
      console.log('User => ', user)
      toast.success('Customer Created successfully')
      setDisableSubmit(false)
      setTimeout(()=>{
        navigate('/login', {replace:true})
      }, 1500)
    }
  }

  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col '>
          <div className=' flex  border-b-2 border-green-500 shadow-lg px-6 rounded-md bg-blue-300 text-white w-full py-4 justify-center lg:text-left '>
            <h3 className='text-3xl font-semibold'>
              Register With Robin Hood Bikes!
            </h3>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <form onSubmit={handleSubmit(handleRegister)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>

                <input
                  type='name'
                  placeholder='Enter Full Name'
                  className='input input-bordered'
                  {...register('name', { required: true, maxLength: 20 })}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>

                <input
                  type='email'
                  placeholder='Enter email address'
                  className='input input-bordered'
                  {...register('email', {
                    required: true,
                    maxLength: 20,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  })}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Set a password'
                  className='input input-bordered'
                  {...register('password', { required: true, maxLength: 20 })}
                />
              </div>
              <div className='form-control mt-6'>
                <button type='submit' disabled={disableSubmit} className='btn btn-primary'>
                  Register
                </button>
              <div className='mt-2 flex gap-4 text-md font-semibold items-center  justify-center'><span>Already Have an account?</span> <Link className='link' to="/login"> Login</Link></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
