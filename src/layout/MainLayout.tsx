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
      <Banner></Banner>
      <SectionTitle
        title='Featured Bikes'
        description='A new generation of AI enabled Bikes for your camping and off road adventures!'
      ></SectionTitle>

      <div className='grid grid-cols-1  border-2 place-items-center lg:grid-cols-3 mt-5 md:grid-cols-2 gap-y-4 '>
        <FeaturedProducts></FeaturedProducts>
        <FeaturedProducts></FeaturedProducts>
        <FeaturedProducts></FeaturedProducts>
        <FeaturedProducts></FeaturedProducts>
        <FeaturedProducts></FeaturedProducts>
      </div>
      <SectionTitle title='Our Customer speaks for us!' description='Listen what our customers has to say with our product experience'></SectionTitle>

      <div className='grid grid-cols-1  border-2 place-items-center lg:grid-cols-3 mt-5 md:grid-cols-2 gap-y-4 '>
      <CustomerReview></CustomerReview>
      <CustomerReview></CustomerReview>
      <CustomerReview></CustomerReview>


      </div>

      {/* <Outlet></Outlet> */}

      <div>
        <Footer></Footer>
    </div>
    </div>
    
  )
}

export default MainLayout
