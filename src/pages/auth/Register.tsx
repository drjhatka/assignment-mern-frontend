import { FieldValues, useForm } from 'react-hook-form'
import { useCreateUserMutation } from '../../redux/api/customerApi'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import ToastWrapper from '../../utils/ToastWrapper'
import {createRegularInputField} from '../../utils/form.elements/InputField'

const Register = () => {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const [createUser] = useCreateUserMutation()

  const handleRegister = async (data: FieldValues) => {
    console.log(data)
    const user = await createUser(data).unwrap()
    console.log(' Created DB User==> ', user.data)
    if (user.status == 404) {
      toast('User could not be Created')
      console.log('User => ', user)
    } else {
      toast.success('Customer Created successfully')
      setTimeout(() => {
        navigate('/login', { replace: true })
      }, 1500)
    }
  }

  return (
    <div>
      <ToastWrapper></ToastWrapper>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col '>
          <div className=' flex  border-b-2 border-green-500 shadow-lg px-6 rounded-md bg-blue-300 text-white w-full py-4 justify-center lg:text-left '>
            <h3 className='text-3xl font-semibold'>
              Register With Robin Hood Bikes!
            </h3>
          </div>
          <div className='card  bg-base-200 border-2 border-green-500 w-full max-w-lg shrink-0 shadow-2xl'>
            <form onSubmit={handleSubmit(handleRegister)} className='card-body'>
              <div className='grid md:grid-cols-2 gap-4'>
                {createRegularInputField(
                  'name',
                  register,
                  'Your Name',
                  {
                    type: 'text',
                    placeholder: 'Enter Full Name',
                    classes: 'input input-bordered text-red-700 font-semibold'
                  },
                  { required: true, max: 30 }
                )}
                {createRegularInputField(
                  'email',
                  register,
                  'Your Email',
                  {
                    type: 'text',
                    placeholder: 'Enter Email Address',
                    classes: 'input input-bordered text-red-700 font-semibold'
                  },
                  {
                    required: true,
                    maxLength: 30,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  }
                )}
              </div>
              <div className='grid   gap-4'>
                {createRegularInputField(
                  'phone',
                  register,
                  'Your Phone Number',
                  {
                    type: 'text',
                    placeholder: 'Enter Phone Number',
                    classes: 'input input-bordered text-red-700 font-semibold'
                  },
                  { required: true, maxLength: 15 }
                )}
              </div>
              <div className='w-full'>
                {createRegularInputField(
                  'address',
                  register,
                  'Your Address',
                  {
                    type: 'text',
                    placeholder: 'Enter Address',
                    classes: 'input input-bordered text-red-700 font-semibold'
                  },
                  { required: true, maxLength: 50 }
                )}
              </div>
              <div className='grid md:grid-cols-2 gap-4'>
                {createRegularInputField(
                  'city',
                  register,
                  'Your City',
                  {
                    type: 'text',
                    placeholder: 'Enter City Name',
                    classes: 'input input-bordered text-red-700 font-semibold'
                  },
                  { required: true, maxLength: 20 }
                )}
                {createRegularInputField(
                  'password',
                  register,
                  'Create a Password',
                  {
                    type: 'password',
                    placeholder: 'Enter a password',
                    classes: 'input input-bordered text-red-700 font-semibold'
                  },
                  { required: true, maxLength: 10 }
                )}
              </div>

              <div className='form-control mt-6'>
                <button
                  type='submit'
                  // disabled={disableSubmit}
                  className='btn btn-primary'
                >
                  Register
                </button>
                <div className='mt-2 flex gap-4 text-md font-semibold items-center  justify-center'>
                  <span>Already Have an account?</span>
                  <Link className='link' to='/login'>
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
