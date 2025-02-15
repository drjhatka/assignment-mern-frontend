import { useForm, FieldValues } from 'react-hook-form';
import { useCreateBikeMutation } from '../../redux/api/bikeApi'
import { toast } from 'react-toastify'
import ToastWrapper from '../../utils/ToastWrapper'
import { BikeTypes } from './UpdateProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddBike = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm()

  //const quantity = watch('quantity')
  const [createBike] = useCreateBikeMutation()

  const onSubmit = (data:FieldValues) => {
    console.log('Added Bike Data:', data)
    const addedBike = {
      name: data.name,
      brand: data.brand,
      price: data.price,
      category: data.category,
      quantity: data.quantity,
      description: data.description,
      inStock: data.inStock,
      image: data.image
    }
    console.log(addedBike)
    createBike(addedBike)
    toast.success('Bike Added Successfully')
  }

  return (
    <div className='p-6 mt-2 bg-white rounded-xl shadow-2xl max-w-lg mx-auto'>
      {ToastWrapper()}
      <div>
        <h2 className='text-xl text-red-600  border-b-2 py-3 font-bold mb-4'>
          Add Bike
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 font-semibold text-red-700'>
          <div className='flex gap-10'>
            <div>
              <label className='label'>Name</label>
              <input
                type='text'
                {...register('name')}
                className='input input-bordered w-full'
              />
              {errors.name && (
                <p className='text-error text-sm'>
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Brand */}
            <div>
              <label className='label'>Brand</label>
              <input
                type='text'
                {...register('brand')}
                className='input input-bordered w-full'
              />
              {errors.brand && (
                <p className='text-error text-sm'>
                  {errors.brand.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Price */}
          <div className='flex gap-10'>
            <div>
              <label className='label'>Price ($)</label>
              <input
                type='number'
                {...register('price', { valueAsNumber: true })}
                className='input input-bordered'
              />
              {errors.price && (
                <p className='text-error text-sm'>
                  {errors.price.message as string}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className='label'>Category</label>
              <select
                {...register('category')}
                className='select select-bordered w-full'
              >
                {Object.values(BikeTypes).map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className='text-error text-sm'>
                  {errors.category.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className='label'>Description</label>
            <textarea
              {...register('description')}
              className='textarea textarea-bordered w-full'
            />
            {errors.description && (
              <p className='text-error text-sm'>
                {errors.description.message as string}
              </p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className='label'>Quantity</label>
            <input
              type='number'
              {...register('quantity', { valueAsNumber: true })}
              className='input input-bordered'
              onChange={e => setValue('quantity', Number(e.target.value))}
            />
            {errors.quantity && (
              <p className='text-error text-sm'>
                {errors.quantity.message as string}
              </p>
            )}
          </div>

          {/* In Stock (Auto-calculated) */}
          <div className='flex items-center gap-2 text-blue-800'>
            <input
              {...register('inStock')}
              type='checkbox'
              className='toggle'
              readOnly
            />
            <span className='label-text'>In Stock</span>
          </div>

          {/* Image Upload */}
          <div>
            <label className='label'>Image URL</label>
            <input
              {...register('image')}
              className='file-input file-input-bordered w-full'
            />
          </div>

          {/* Submit Button */}
          <div className='mt-6'>
            <button
              type='submit'
              className='btn btn-warning text-white mt-5 w-full'
            >
              <FontAwesomeIcon
                className='text-white'
                icon={faPlus}
              ></FontAwesomeIcon>
              Add Bike
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBike
