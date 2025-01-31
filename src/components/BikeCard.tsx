import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bike } from '../types/types';
import { faBicycle, faDragon, faMound, faMountain } from '@fortawesome/free-solid-svg-icons';
import { useGetBikeQuery } from '../redux/api/bikeApi';
import { Navigate, useNavigate } from 'react-router-dom';

const BikeCard = ({bike }:Bike) => {
    const {_id,name, brand, description, image} = bike
    const navigate = useNavigate()
    const {data, isLoading} = useGetBikeQuery(_id)
  return (
    <div>
      
      <div>
        <div className='card glass w-80'>
          <figure>
            <img
            width={200}
            height={100}
              src={image}
              alt='Bike!'
            />
          </figure>
          <div className='card-body'>
            <div>
                <div className='border-b-2 mb-4'>
                    <h2 className='card-title text-blue-600'>{name}</h2>  
                </div>
                <div className='border-b-2 mb-4'>
                    <span className='text-red-600  font-semibold'>Brand: <FontAwesomeIcon icon={faBicycle} className='text-purple-900' ></FontAwesomeIcon> {brand}</span>
                </div>
                <div className='border-b-2 pb-2 mb-3'>
                <p>{description}</p>
                </div>

                <div className='flex  flex-grow-0 justify-center'>
                <button onClick={ ()=> navigate('/bikes/'+_id)}  className='btn bg-red-700 text-white shadow-md rounded-none px-10 hover:bg-red-600'>View Bike</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeCard
