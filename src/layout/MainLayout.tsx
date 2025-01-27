import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FeaturedProducts from '../components/FeaturedProducts'
import SectionTitle from '../components/SectionTitle'
import CustomerReview from '../components/CustomerReview'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar></Navbar>
       <Outlet></Outlet>
      <div><Footer></Footer></div>
    </div>
  )
}

export default MainLayout
