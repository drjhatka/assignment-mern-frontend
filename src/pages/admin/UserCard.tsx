
import ToastWrapper from '../../utils/ToastWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut';
import { TUser } from '../../types/types';
import {  faLock, faMessage, faPhone, faTable, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserCard = ({user}:{user:TUser}) => {
    const {name, email, status, role, phone} = user;
    return (

        <div className='flex items-center mt-2 mb-2  gap-5 justify-between py-5 px-5 bg-white shadow-2xl rounded-lg border border-gray-200 md:3/4 lg:w-2/4'>
        {ToastWrapper()}
        <div className=' py-2 px-2 rounded-lg w-32'>
            <FontAwesomeIcon className='text-7xl border-2 rounded-full px-8 bg-slate-50 border-blue-600 py-8 text-red-500' icon={faUserAstronaut}></FontAwesomeIcon>
        </div>
        {/* Left Side - Name & Description */}
        <div className='flex flex-col gap-3 flex-grow'>
          <h2 className='text-lg font-semibold  border-b-2 shadow-md px-2 border-amber-600 py-2'>
            {name}
          </h2>
          {/* <p className="text-gray-600 text-sm">{description}</p> */}
          <p className='text-red-600 font-semibold flex items-center gap-5 text-sm'>
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Email: {email}
          </p>
          <p className={status=='active'?' text-green-600 font-bold flex  text-sm': 'text-red-600 font-bold flex  text-sm'}>
            Status: <span className='uppercase px-2 border-2 ml-2 bg-slate-50'>{status}</span> 
          </p>
          <p className='text-red-600 font-semibold flex items-center gap-4  text-sm'>
          <FontAwesomeIcon icon={faTable}></FontAwesomeIcon> Role: {role}
          </p>
          <p className='text-red-600 font-semibold gap-4  text-sm flex items-center'>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {phone}
          </p>
        </div>
  
        {/* Right Side - Buttons */}
        <div className='flex flex-col gap-4 ml-4'>
          <Link
            to={`/bikes/update/${email}`}
            className='btn btn-info flex items-center gap-2 px-4 py-2 rounded-none text-white w-32 hover:bg-green-300 hover:text-red-800'
          >
            <FontAwesomeIcon icon={faLock} /> Block User
          </Link>
  
          <button
            //onClick={handleDeleteBike}
            className='btn btn-error flex items-center gap-2 px-4 py-2 rounded-none text-white w-32 hover:bg-red-900 '
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>
    );
};

export default UserCard;