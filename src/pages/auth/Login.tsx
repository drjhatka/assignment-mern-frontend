import { FieldValues, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../redux/api/authApi"
import { verifyAndDecodeToken } from "../../utils/JWTUtils"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/auth/authSlice"
import { toast } from "react-toastify";

import ToastWrapper from "../../utils/ToastWrapper";
import {createRegularInputField} from "../../utils/form.elements/InputField";

const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [login] = useLoginMutation()
    const dispatch = useDispatch()

    const handleLogin = async(data:FieldValues)=>{
      
        const result = await login(data).unwrap()
        if(result.success){
          const user = verifyAndDecodeToken(result.data.token.split(' ')[1])
          dispatch(setUser( {user:user, token:result.data.token}))
          //redirect user to dashboard
          navigate('/')
        }
        else{
          toast.error(result.message)
        }
    }
  return (
    <div>
      <ToastWrapper></ToastWrapper>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col '>
          <div className=' flex  border-b-2 border-green-500 shadow-lg px-6 rounded-md bg-blue-300 text-white w-full py-4 justify-center lg:text-left '>
            <h3 className='text-3xl font-semibold'>Login to Robin Hood Arena!</h3>
            
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <form onSubmit={handleSubmit(handleLogin)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  
                  {...register('email',{required:true, maxLength:20, pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}

                />
              </div>
              { createRegularInputField('password', register,'Password',{type:'password', placeholder:'Enter Password', classes:'input border-2 rounded'},{required:true, maxLength:20}) }
              {/* <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                  {...register('password',{})}
                />
              </div> */}
              <div className='form-control mt-6'>
                <button type="submit" className='btn btn-primary'>Login</button>
              <div className='mt-2 flex gap-4 text-md font-semibold items-center  justify-center'><span>No Account Yet? Please </span> <Link className='link' to="/register">Register</Link></div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
