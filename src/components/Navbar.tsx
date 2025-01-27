import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { JWTTokenUser } from '../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  const user : JWTTokenUser|null = useSelector((state: RootState) => state.auth.user)
const navigate = useNavigate()
   const handleLogout = ()=>{
    dispatch(logout())
    return navigate('/login',{replace:true})
}
  const NavCustomerMiddleMenuItems = [
    <li><Link to='/' key={"a"+Math.random()*1000}>All Bikes</Link></li>,
    <li><Link to='/'key={"a"+Math.random()*1000}>Featured Bikes</Link></li>,
    <li><Link to='/admin' key={"a"+Math.random()*1000}>My Orders</Link></li>
  ]
  
  const NavAdminMiddleMenuItems = [
    <li><Link to='/' key={"a"+Math.random()*1000}>Manage Bikes</Link></li>,
    <li><Link to='/'key={"a"+Math.random()*1000}>Manage Customer</Link></li>,
    <li><Link to='/admin' key={"a"+Math.random()*1000}>Manage Orders</Link></li>
  ]
  
   const NavCustomerRightMenuItems =[
    <li>
      <Link key={"a"+Math.random()*1000} to='/customers/orders'>Change Password</Link>
    </li>,
    <li>
      <Link key={"a"+Math.random()*1000} to='/customers/orders'>Update Profile</Link>
    </li>,
    <li>
    <button key={"a"+Math.random()*1000} onClick={handleLogout}>Logout</button>
  </li>
  ]
  
  const NavAdminRightMenuItems =[
      <li>
        <Link key={"a"+Math.random()*1000} to='/customers/orders'>My Profile</Link>
      </li>,
      <li>
      <button key={"a"+Math.random()*1000} onClick={handleLogout}>Logout</button>
    </li>
    ]

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
            {user?.role =='customer' ? NavCustomerMiddleMenuItems.map(items =>items):NavAdminMiddleMenuItems.map(item=>item)}
          </ul>
        </div>
        <img width='50px' height='50px' src='bike.jpg' alt='' />
        <a className='btn btn-ghost text-xl'>Robin Hood Bikes</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-red-600 font-semibold'>
            {user?.role=='customer'? NavCustomerMiddleMenuItems.map(item=>item):NavAdminMiddleMenuItems.map(item=>item)}
        </ul>
      </div>
      <div className='navbar-end'>
          <div>
          {user && user.email}
          </div>
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
            {user?.role=='customer'? NavCustomerRightMenuItems.map(item=>item): NavAdminRightMenuItems.map(item=>item) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
