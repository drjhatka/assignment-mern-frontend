import { useForm } from 'react-hook-form'
import { useGetBikeQuery, useUpdateBikeMutation } from '../../redux/api/bikeApi'
import { useParams } from 'react-router-dom'
import ToastWrapper from '../../utils/ToastWrapper';
import { toast } from 'react-toastify';

export const BikeTypes ={
  'Mountain':'Mountain',
  'Road':'Road',
  'Hybrid':'Hybrid',
  'Electric':'Electric'
}
const UpdateBikeForm = () => {
  const productId = useParams().productId
  const { data: bike, isLoading } = useGetBikeQuery(productId)
  const {
    register,
    handleSubmit,
    
    setValue,
    formState: { errors }
  } = useForm()

  //const quantity = watch('quantity')
  const [updateBike] = useUpdateBikeMutation()

  //@ts-ignore
  const onSubmit = (data) => {
    console.log('Updated Bike Data:', data)
    const updatedBike = {
      name: data.name,
      brand: data.brand,
      price: data.price,
      category:data.category,
      quantity: data.quantity,
      description: data.description,
      inStock: data.inStock,
      image: data.image
    }
    updateBike({ updatedBike: updatedBike, bikeId: bike.data._id })
    toast.success('Bike Updated Successfully')
  }

  return (
    <div className='p-6 mt-2 bg-white rounded-xl shadow-2xl max-w-lg mx-auto'>
      {
    ToastWrapper()

      }
      {!isLoading && (
        <div>
          <h2 className='text-xl text-red-600  border-b-2 py-3 font-bold mb-4'>
            Update Bike
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
            <div className='flex gap-10'>
              <div>
                <label className='label'>Name</label>
                <input
                  type='text'
                  {...register('name')}
                  defaultValue={bike.data.name}
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
                  defaultValue={bike.data.brand}
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
                  defaultValue={bike.data.price}
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
                defaultValue={bike.data.description}
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
                defaultValue={bike.data.quantity}
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
            <div className='flex items-center gap-2'>
              <input
                {...register('inStock')}
                type='checkbox'
                className='toggle'
                checked={bike.data.inStock}
                readOnly
              />
              <span className='label-text'>In Stock</span>
            </div>

            {/* Image Upload */}
            <div>
              <label className='label'>Image</label>
              <input
                {...register('image')}
                defaultValue={bike.data.image}
                className='file-input file-input-bordered w-full'
              />
            </div>

            {/* Submit Button */}
            <button type='submit' className='btn btn-primary w-full'>
              Update Bike
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default UpdateBikeForm
