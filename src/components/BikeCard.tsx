import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Bike } from '../types/types'
import {faBicycle} from '@fortawesome/free-solid-svg-icons'
import {  useNavigate } from 'react-router-dom'

const BikeCard = ({ bike }:{ bike:Bike}) => {
  const { _id, name, brand,price, description, image } = bike
  const navigate = useNavigate()
  
  return (
    <div>
        <div className='card bg-slate-50 glass w-80'>
            <div className='w-full h-48 border-b-2 overflow-hidden rounded-md'>
              <img
                src={image}
                alt={name}
                className='w-full h-full object-cover'
                
              />
            </div>
          <div className='card-body py-2 '>
              <div className=' flex justify-center '>
                <h4 className='text-lg text-blue-600 font-semibold'>{name}</h4>
              </div>
              <div className='border-b-2 flex justify-center'>
                <span className='text-red-600  font-semibold'>
                  Brand:{' '}
                  <FontAwesomeIcon
                    icon={faBicycle}
                    className='text-purple-900'
                  ></FontAwesomeIcon>{' '}
                  {brand}
                </span>
              </div>
              <div className='border-b-2 w-full justify-center pb-2 mb-3'>
                <p className='italic w-full text-center '>{description}</p>
                <div className="w-full flex justify-center mt-2">
                  <span className='badge py-3 badge-success text-center text-white'>BDT: {price}</span>

                </div>
              </div>
              <div className='flex  flex-grow justify-center'>
                <button
                  onClick={() => navigate('/bikes/' + _id)}
                  className='btn  bg-red-700 text-white shadow-md rounded-none px-10 hover:bg-red-600'
                >
                  View Bike
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default BikeCard
