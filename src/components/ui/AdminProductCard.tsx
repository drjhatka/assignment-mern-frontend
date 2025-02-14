import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Bike } from '../../types/types'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AdminProductCard = ({ bike }: { bike: Bike }) => {
  const {_id,name,image, quantity, price} = bike;
  return (
    <div className="flex items-center  gap-5 justify-between py-5 px-5 bg-white shadow-2xl rounded-lg border border-gray-200 md:3/4 lg:w-2/4">
      <div className='border-2 py-2 px-2 bg-orange-100 rounded-lg w-32'>
        <img src={image} className='w-full ' alt="" />
      </div>
    {/* Left Side - Name & Description */}
    <div className="flex flex-col gap-3 flex-grow">
      <h2 className="text-lg font-semibold  border-b-2 shadow-md px-2 border-amber-600 py-2">{name}</h2>
      {/* <p className="text-gray-600 text-sm">{description}</p> */}
      <p className="text-red-600 font-semibold flex text-sm justify-center">Available in Stock: {quantity}</p>
      <p className="text-green-600 font-semibold flex justify-center text-sm">Price: {price}</p>
    </div>

    {/* Right Side - Buttons */}
    <div className="flex flex-col gap-4 ml-4">
      
      <Link to={`/bikes/update/${_id}`} 
        className="btn btn-info flex items-center gap-2 px-4 py-2 rounded-none text-white w-32 hover:bg-green-300 hover:text-red-800"
      >
        <FontAwesomeIcon icon={faEdit} /> Update
      </Link>

      {/* Delete Button */}
      <button 
        className="btn btn-error flex items-center gap-2 px-4 py-2 rounded-none text-white w-32 hover:bg-red-900 "
      >
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
    </div>
  </div>
  )
}

export default AdminProductCard
