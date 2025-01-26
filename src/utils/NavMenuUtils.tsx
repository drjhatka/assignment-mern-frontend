import { Link } from 'react-router-dom'

export const NavMiddleMenuItems = [
  <li><Link to='/' key={"a"+Math.random()*1000}>All Bikes</Link></li>,
  <li><Link to='/'key={"a"+Math.random()*1000}>Featured Bikes</Link></li>,
  <li><Link to='/admin' key={"a"+Math.random()*1000}>About Us</Link></li>
]

export const NavRightMenuItems =[
    <li>
    <Link key={"a"+Math.random()*1000} to='/login' className='justify-between'>
      Login
    </Link>
  </li>,
  <li>
    <Link key={"a"+Math.random()*1000} to='/customers/orders'>My Orders</Link>
  </li>,
  <li>
    <Link key={"a"+Math.random()*1000} to='/customers/orders'>My Payments</Link>
  </li>,
  <li>
  <Link key={"a"+Math.random()*1000} to='/customers/orders'>Logout</Link>
</li>
]
