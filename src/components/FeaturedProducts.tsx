import { Link } from 'react-router-dom';
import { Bike } from '../types/types';

const FeaturedProducts = ({bike}:{bike:Bike}) => {
  const {_id, image, name, description}= bike
    const card = <div>
    <div className='card  w-80 shadow-2xl border-b-2 border-black flex-grow'>
      <div className='w-full py-2 px-2 border-t-2  border-black h-[100px] overflow-hidden rounded-t-lg'>
        <img
          src={image}
          alt='Bikes!'
          className='w-full h-full object-scale-down'
        />
      </div>
      <div className='card-body flex-grow'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-center'>
                <Link to={`/bikes/${_id}`} className='btn  bg-orange-600 text-white px-10 rounded-none'>View Details</Link>
              </div>
      </div>
    </div>
  </div>
  
  return card;
}

export default FeaturedProducts
