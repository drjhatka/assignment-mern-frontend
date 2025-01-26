const Login = () => {
  return (
    <div>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col '>
          <div className=' flex  border-b-2 border-green-500 shadow-lg px-6 rounded-md bg-blue-300 text-white w-full py-4 justify-center lg:text-left '>
            <h3 className='text-3xl font-semibold'>Login to Robin Hood Arena!</h3>
            
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
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
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
