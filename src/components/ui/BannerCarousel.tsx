import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Bike } from '../../types/types'
import { Link } from 'react-router-dom'

const BannerCarousel = ({ bikes }: { bikes: Bike[] }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 560 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  return (
    <div className='mt-4 mb-3  '>
      <Carousel className='py-6 '
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition='fade-out .5'
        transitionDuration={500}
        containerClass='carousel-container'
        rewindWithAnimation={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        //deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {bikes.slice(0,4).map((bike: Bike) => (
          <div
            key={bike._id}
            className='card card-compact ml-4 border-2 py-2 px-2  bg-base-100 shadow-2xl'
          >
            <div className='absolute right-0 w-10'>
              <img src='new.jpg' alt="" />
            </div>
            <figure>
              <img
                src={bike.image}
                alt={bike.brand}
                className='h-40 object-cover rounded-lg'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{bike.brand}</h2>
              <p className='text-sm font-semibold  text-green-700'>Category: {bike.category}</p>
              <p className='font-bold text-lg text-primary'>Price: ${bike.price}</p>
              <p className='font-semibold text-sm text-primary'>{bike.description}</p>
              <div className='card-actions justify-center'>
                <Link to={`/bikes/${bike._id}`} className='btn  bg-orange-600 text-white px-10 rounded-none'>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      )
    </div>
  )
}

export default BannerCarousel
