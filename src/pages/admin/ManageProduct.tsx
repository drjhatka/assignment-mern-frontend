import { useGetBikesQuery } from '../../redux/api/bikeApi'
import AdminProductCard from '../../components/ui/AdminProductCard'
import { Bike } from '../../types/types'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from '../../components/ui/BreadCrumb'
import Spinner from '../../components/ui/Spinner'

const ManageProduct = () => {
  const { data, isLoading } = useGetBikesQuery({
    searchTerm: '',
    brand: '',
    category: ''
  })
  return (
    <div>
      <div>
        <SectionTitle title='Manage Bikes' description=''></SectionTitle>

        <BreadCrumb links={[{link:'/', title:'Home'}, {link:'/bikes/manage-bikes', title:'Manage Bikes'}]}></BreadCrumb>
      </div>
      <div className='fixed flex justify-end  w-full'>
        <Link
          className='btn rounded-none bg-green-700 -mb-10 lg:w-56 text-white'
          to={`/bikes/add-bike`}
        >
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Add Bike
        </Link>
      </div>
      <div className='mt-4 bg-slate-200 mb-2 flex flex-col gap-6 md:justify-center items-center'>
        {!isLoading ?
          data.data.map((bike: Bike &  { _id: string }) => {
            return (
              <AdminProductCard key={bike._id} bike={bike}></AdminProductCard>
            )
          }):<Spinner></Spinner>
        }
      </div>
    </div>
  )
}

export default ManageProduct
