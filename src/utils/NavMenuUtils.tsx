import { Link } from 'react-router-dom'
import { handleLogout } from './AuthUtils'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/auth/authSlice'

//const dispatch = useDispatch()
export const NavCustomerMiddleMenuItems = [
  <li><Link to='/' key={"a"+Math.random()*1000}>All Bikes</Link></li>,
  <li><Link to='/'key={"a"+Math.random()*1000}>Featured Bikes</Link></li>,
  <li><Link to='/admin' key={"a"+Math.random()*1000}>My Orders</Link></li>
]

export const NavAdminMiddleMenuItems = [
  <li><Link to='/' key={"a"+Math.random()*1000}>Manage Bikes</Link></li>,
  <li><Link to='/'key={"a"+Math.random()*1000}>Manage Customer</Link></li>,
  <li><Link to='/admin' key={"a"+Math.random()*1000}>Manage Orders</Link></li>
]

 export const NavCustomerRightMenuItems =[
  <li>
    <Link key={"a"+Math.random()*1000} to='/customers/orders'>Change Password</Link>
  </li>,
  <li>
    <Link key={"a"+Math.random()*1000} to='/customers/orders'>Update Profile</Link>
  </li>,
  <li>
  <button key={"a"+Math.random()*1000} onClick={()=>useDispatch()(logout())}>Logout</button>
</li>
]

export const NavAdminRightMenuItems =[
    <li>
      <Link key={"a"+Math.random()*1000} to='/customers/orders'>My Profile</Link>
    </li>,
    <li>
    <button key={"a"+Math.random()*1000} onClick={()=>handleLogout(useDispatch())}>Logout</button>
  </li>
  ]
