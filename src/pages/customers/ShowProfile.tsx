
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { GetCurrentUser } from '../../utils/GetCurrentUser';

const ShowProfile = () => {
    const {user, isLoading} = GetCurrentUser()
     //const {name, email, role, phone, address, city,status, createdAt} =user?.data;
    return (
        <div className='flex md:gap-5 md:justify-center'>
            {
                !isLoading &&
                <div>
                    <div className='grid grid-cols-2  border-2 mt-2 mb-2 px-10  py-3 items-center'>
                        <div className='px-5'>
                            <figure className='text-2xl rounded-md  h-32 border-2   text-blue-500'>
                                <FontAwesomeIcon icon={faUser} className='w-full  h-full '></FontAwesomeIcon>
                            </figure>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                Name: {user.data.name}
                            </div>
                            <div>
                                Email: {user.data.email}
                            </div>
                            <div>
                                Address: {user.data.address}
                            </div>
                            <div>
                                City: {user.data.city}
                            </div>
                            <div>
                                Address: {user.data.address}
                            </div>
                            <div>
                                Phone: {user.data.phone}
                            </div>
                            <div>
                                Status: {user.data.status}
                            </div>
                        </div>
                    </div>
            </div>
            }
            
        </div>
    );
};

export default ShowProfile;