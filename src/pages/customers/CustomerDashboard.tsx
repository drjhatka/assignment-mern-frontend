import FeaturedProducts from '../../components/FeaturedProducts'
import CustomerReview from '../../components/CustomerReview'
import SectionTitle from '../../components/SectionTitle';
import { useGetBikesQuery } from '../../redux/api/bikeApi'
import { Bike } from '../../types/types'
import BannerCarousel from '../../components/ui/BannerCarousel'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const {data, isLoading} = useGetBikesQuery({ searchTerm:'',brand: "", category: "" })
  const [viewAllBikes, setViewAllBikes ]= useState(false)

  return (
    <div>
      <SectionTitle title='New Arrivals' description='' image='new.jpg'></SectionTitle>
      {!isLoading && <BannerCarousel bikes={data.data} ></BannerCarousel>}
      <SectionTitle
        title='Featured Bikes'
        description='A new generation of AI enabled Bikes for your camping and off road adventures!'
      ></SectionTitle>

      <div className='grid grid-cols-1   place-items-center lg:grid-cols-3 mt-5 md:grid-cols-2 gap-y-4 '>
          {!isLoading && data.data.slice(4).map((bike:Bike)=><FeaturedProducts key={Math.random()*1000} bike={bike}></FeaturedProducts>)}
      </div>
      <div className='flex justify-center items-center py-3'>
          <Link className='btn  bg-blue-600 text-white px-10 rounded-none' to='/bikes'>View All</Link>

      </div>
      <SectionTitle
        title='Our Customer speaks for us!'
        description='Listen what our customers has to say with our product experience'
      ></SectionTitle>

      <div className='grid grid-cols-1  border-2 place-items-center lg:grid-cols-3 mt-5 md:grid-cols-2 gap-y-4 '>
        <CustomerReview></CustomerReview>
        <CustomerReview></CustomerReview>
        <CustomerReview></CustomerReview>
      </div>
    </div>
  )
}

export default CustomerDashboard
