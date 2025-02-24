import SectionTitle from '../../components/SectionTitle'
import { GetCurrentUser } from '../../utils/GetCurrentUser'
import { useForm } from 'react-hook-form'
import './profile.css'
const UpdateProfile = () => {
  const { user, isLoading } = GetCurrentUser()
  const {
    register,
    handleSubmit,
    
    formState: { errors }
  } = useForm()

  const onSubmit = () => {}
  return (
    <>
        <SectionTitle title='Update Profile' description=''></SectionTitle>
    <div className='flex border-2 container justify-center'>
      {!isLoading && (
        <form onSubmit={handleSubmit(onSubmit)} className=' space-y-2'>
          <div className='grid lg:grid-cols-2 gap-10'>
            <div className=''>
              <label className='label text-blue-600'>Name</label>
              <input
                type='text'
                {...register('name')}
                defaultValue={user.data.name}
                className='input input-bordered w-full'
              />
              {errors.name && (
                <p className='text-error text-sm'>
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <div>
              <label className='label text-blue-600'>Email</label>
              <input
                defaultValue={user.data.email}
                type='text'
                {...register('email')}
                className='input input-bordered w-full'
              />
              {errors.brand && (
                <p className='text-error text-sm'>
                  {errors.brand.message as string}
                </p>
              )}
            </div>

            {/* <div className='grid border-2  lg:grid-cols-2 gap-10'> */}
              <div>
                <label className='label'>Phone</label>
                <input
                  defaultValue={user.data.phone}
                  type='number'
                  {...register('phone')}
                  className='input input-bordered w-full'
                />
                {errors.price && (
                  <p className='text-error text-sm'>
                    {errors.price.message as string}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className='label'>City</label>
                <input
                  defaultValue={user.data.city}
                  type='text'
                  {...register('city')}
                  className='input input-bordered w-full'
                />
                {errors.category && (
                  <p className='text-error text-sm'>
                    {errors.category.message as string}
                  </p>
                )}
              </div>
            {/* </div> */}
          </div>

          {/* Submit Button */}
          <div>
            <button
                type='submit'
                className='btn btn-primary bg-black text-white w-full '
            >
                Update Profile
            </button>

          </div>
        </form>
      )}
    </div>
    </>
    // {
    //     <h1>{user.name}</h1>
    // }
    // </>
  )
}

export default UpdateProfile
