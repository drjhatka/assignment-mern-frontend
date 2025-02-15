import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Bike } from '../../types/types'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDeleteBikeMutation } from '../../redux/api/bikeApi'
import ToastWrapper from '../../utils/ToastWrapper'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
const AdminProductCard = ({ bike }: { bike: Bike }) => {
  const { _id, name, image, quantity, price } = bike
  const [deleteBike] = useDeleteBikeMutation()
  const handleDeleteBike = () => {
    confirmAlert({
      title: 'Delete Bike',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteBike(_id)
            toast.success('Bike Deleted successfully', {
              autoClose: 2000, // Auto-close after 3 seconds
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true
            })
          }

        },
        {
          label: 'No',
          onClick: () => {
            return
          }
        }
      ]
    })
  }
  return (
    <div className='flex items-center  gap-5 justify-between py-5 px-5 bg-white shadow-2xl rounded-lg border border-gray-200 md:3/4 lg:w-2/4'>
      {ToastWrapper()}
      <div className='border-2 py-2 px-2 bg-orange-100 rounded-lg w-32'>
        <img src={image} className='w-full ' alt='' />
      </div>
      {/* Left Side - Name & Description */}
      <div className='flex flex-col gap-3 flex-grow'>
        <h2 className='text-lg font-semibold  border-b-2 shadow-md px-2 border-amber-600 py-2'>
          {name}
        </h2>
        {/* <p className="text-gray-600 text-sm">{description}</p> */}
        <p className='text-red-600 font-semibold flex text-sm justify-center'>
          Available in Stock: {quantity}
        </p>
        <p className='text-green-600 font-semibold flex justify-center text-sm'>
          Price: {price}
        </p>
      </div>

      {/* Right Side - Buttons */}
      <div className='flex flex-col gap-4 ml-4'>
        <Link
          to={`/bikes/update/${_id}`}
          className='btn btn-info flex items-center gap-2 px-4 py-2 rounded-none text-white w-32 hover:bg-green-300 hover:text-red-800'
        >
          <FontAwesomeIcon icon={faEdit} /> Update
        </Link>

        {/* Delete Button */}
        <button
          onClick={handleDeleteBike}
          className='btn btn-error flex items-center gap-2 px-4 py-2 rounded-none text-white w-32 hover:bg-red-900 '
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
    </div>
  )
}

export default AdminProductCard
