import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { JWTTokenUser } from '../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/auth/authSlice';
import { useGetUserQuery } from '../redux/api/customerApi';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3521ce");
  const dispatch = useDispatch()
  const user : JWTTokenUser|null = useSelector((state: RootState) => state.auth.user) as JWTTokenUser
  const  {data, isLoading } = useGetUserQuery(user?.email)
  //console.log('gget user ', data)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    dispatch(logout())
    return navigate('/login',{replace:true})
}
  const NavCustomerMiddleMenuItems = [
    <li className='border-2 rounded-md border-green-500' key={"a"+Math.random()*1000}><Link to='/' >Home</Link></li>,
    <li className='border-2 rounded-md border-green-500' key={"a"+Math.random()*1000}><Link to='/bikes' >All Bikes</Link></li>,
    <li className='border-2 rounded-md border-green-500' key={"a"+Math.random()*1000}><Link to='/'>Featured Bikes</Link></li>,
    <li  className='border-2 rounded-md border-green-500' key={"a"+Math.random()*1000}><Link to='/admin'>My Orders</Link></li>
  ]
  const NavAdminMiddleMenuItems = [
    <li key={"a"+Math.random()*1000}><Link to='/' >Manage Bikes</Link></li>,
    <li key={"a"+Math.random()*1000}><Link to='/'>Manage Customer</Link></li>,
    <li key={"a"+Math.random()*1000}><Link to='/admin'>Manage Orders</Link></li>
  ]
  const NavCustomerRightMenuItems =[
    <li key={"a"+Math.random()*1000} ><Link to='/customers/orders'>Change Password</Link></li>,
    <li key={"a"+Math.random()*1000} ><Link to='/customers/orders'>Update Profile</Link></li>,
    <li key={"a"+Math.random()*1000} ><button  onClick={handleLogout}>Logout</button></li>
  ]
  const NavAdminRightMenuItems =[
      <li key={"a"+Math.random()*1000}><Link  to='/customers/orders'>My Profile</Link></li>,
      <li key={"a"+Math.random()*1000} ><button onClick={handleLogout}>Logout</button></li>
    ]

  return (
    <>
    {!isLoading ?
    <div className='navbar bg-slate-50 shadow-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-md font-semibold space-y-2   dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {user?.role =='customer' ? NavCustomerMiddleMenuItems.map(items =>items):NavAdminMiddleMenuItems.map(item=>item)}
          </ul>
        </div>
        <img className='hidden md:block' width='50px' height='50px' src='bike.jpg' alt='' />
        <Link to={'/'} className='btn  btn-ghost text-xl'>Robin Hood Bikes</Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal md:gap-5 px-1 text-red-600 font-semibold'>
            {user?.role=='customer'? NavCustomerMiddleMenuItems.map(item=>item):NavAdminMiddleMenuItems.map(item=>item)}
        </ul>
      </div>
      <div className='navbar-end'>
          <div className='text-red-500  text-md flex gap-4 font-semibold items-center'>
            <span className='text-red-700'> Welcome</span> <h4 className='bg-green-200 hover:capitalize shadow-lg px-3 py-2'>{data.data.name}</h4>
          </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
            >
            <div className='w-10 rounded-full '>
            <img src="user.webp" alt="User" className="bg-red-500 "/>

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
    </div>:<ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        key={"a"+Math.random()*1000}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  }
  </>
  )
}

export default Navbar
