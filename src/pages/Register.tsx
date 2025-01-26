import { useForm } from 'react-hook-form'
import { IRegisterFormInput } from '../types/types'

const Register = () => {
  const { register, handleSubmit } = useForm<IRegisterFormInput>()
  const handleRegister = (data: IRegisterFormInput) => {
    console.log(data)
  }

  return (
    <div>
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
                <button type='submit' className='btn btn-primary'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
