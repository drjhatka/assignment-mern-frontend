import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { JWTTokenUser } from '../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/auth/authSlice';
import { useGetUserQuery } from '../redux/api/customerApi';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Navbar = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#3521ce");
  const dispatch = useDispatch()
  const user : JWTTokenUser|null = useSelector((state: RootState) => state.auth.user)
  const  {data, isLoading } = useGetUserQuery(user?.email)
  console.log('gget user ', data)
  const navigate = useNavigate()
   const handleLogout = ()=>{
    dispatch(logout())
    return navigate('/login',{replace:true})
}
  const NavCustomerMiddleMenuItems = [
    <li><Link to='/bikes' key={"a"+Math.random()*1000}>All Bikes</Link></li>,
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
    <>
    
    {!isLoading ?
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
    </div>:<ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  }
  </>
  )
}

export default Navbar
