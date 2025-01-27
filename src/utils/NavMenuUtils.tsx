import { Link } from 'react-router-dom'

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
//     <li>
//     <Link key={"a"+Math.random()*1000} to='/login' className='justify-between'>Login</Link>
//   </li>,
//   <li>
//   <Link key={"a"+Math.random()*1000} to='/register' className='justify-between'>Register</Link>
// </li>,
  <li>
    <Link key={"a"+Math.random()*1000} to='/customers/orders'>Change Password</Link>
  </li>,
  <li>
    <Link key={"a"+Math.random()*1000} to='/customers/orders'>Update Profile</Link>
  </li>,
  <li>
  <Link key={"a"+Math.random()*1000} to='/customers/orders'>Logout</Link>
</li>
]

export const NavAdminRightMenuItems =[
    <li>
      <Link key={"a"+Math.random()*1000} to='/customers/orders'>My Profile</Link>
    </li>,
    <li>
    <Link key={"a"+Math.random()*1000} to='/customers/logout'>Logout</Link>
  </li>
  ]
