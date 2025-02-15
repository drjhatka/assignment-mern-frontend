import React from 'react'
import { useGetBikesQuery } from '../../redux/api/bikeApi'
import AdminProductCard from '../../components/ui/AdminProductCard'
import { Bike } from '../../types/types'

const ManageProduct = () => {
  const { data, isLoading } = useGetBikesQuery({
    searchTerm: '',
    brand: '',
    category: ''
  })
  return (
    <div className='mt-4 bg-slate-200 mb-2 flex flex-col gap-6 md:justify-center items-center'>
      {!isLoading &&
        data.data.map((bike: Bike) => {
          return <AdminProductCard key={bike._id} bike={bike}></AdminProductCard>
        })}
    </div>
  )
}

export default ManageProduct
