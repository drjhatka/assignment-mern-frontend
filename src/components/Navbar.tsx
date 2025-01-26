import { Link } from "react-router-dom"
import { NavMiddleMenuItems, NavRightMenuItems } from '../utils/NavMenuUtils';

const Navbar = () => {

  return (
    <div className='navbar bg-slate-50 shadow-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {NavMiddleMenuItems.map(items =>items)}
          </ul>
        </div>
        <img width='50px' height='50px' src='bike.jpg' alt='' />
        <a className='btn btn-ghost text-xl'>Robin Hood Bikes</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-red-600 font-semibold'>
            {NavMiddleMenuItems.map(items =>items)}
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full '>
            <img src="user.webp" alt="Login" className="bg-red-500 "/>

            </div>
          </div>
          <ul 
            tabIndex={0}
            className='menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {NavRightMenuItems.map(items=>items)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
