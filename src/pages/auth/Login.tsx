import { FieldValue, FieldValues, useForm } from "react-hook-form"
import { ILoginFormInput, JWTTokenUser, TAuthState } from '../../types/types';
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../redux/api/authApi"
import { verifyAndDecodeToken } from "../../utils/JWTUtils"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/auth/authSlice"
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<ILoginFormInput>({
      defaultValues:{
        email:'john@dev.com',
        password:'abcd1234'
      }
    })
    const [login] = useLoginMutation()
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async(data:FieldValues)=>{
        const result = await login(data).unwrap()
        console.log('Res ',result)
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
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                  {...register('password',{required:true, maxLength:20})}
                />
                {/* <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label> */}
              </div>
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
