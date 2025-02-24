
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
// @ts-ignore
const AdminButtons = ({link, icon, title}) => {
  return (
    <div className='px-5 mb-5'>
      <div className='card   w-96  shadow-2xl border-2'>
        <div className='card-body'>
            <Link to={link} className=' flex border-b-2  border-black  items-center gap-3 border-2 justify-center  hover:bg-slate-400 hover:text-white '>
                <h2 className='text-2xl text-blue-700 hover:text-white '><FontAwesomeIcon className='' icon={icon}></FontAwesomeIcon></h2>
                <h2 className='card-title  py-2'>{title}</h2>

            </Link>
            
          
        </div>
      </div>
    </div>
  )
}

export default AdminButtons
