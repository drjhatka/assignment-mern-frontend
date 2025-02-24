import { useState } from 'react'
import Select, { SingleValue } from 'react-select'

// @ts-ignore
const BikeFilter = ({ filterHandler }) => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'Mountain', label: 'Mountain' },
    { value: 'Electric', label: 'Electric' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'Road', label: 'Road' }
  ]

  // const priceRanges = [
  //   {value:'all',label:'all'},
  //   { value: '1k', label: '0-999' },
  //   { value: '2k', label: '1000-1999' },
  //   { value: '3k', label: '2000-2999' } // Fixed duplicate '1k'
  // ]
  const brands = [
    { value: 'all', label: 'All' },
    { value: 'Scott', label: 'Scott' },
    { value: 'Canyon', label: 'Canyon' },
    { value: 'Cannondale', label: 'Cannondale' } // Fixed duplicate '1k'
  ]

  // Define state
  const [selectedCategory, setSelectedCategory] = useState<{
    value: string
    label: string
  } | null>(options[0])
  // const [selectedPrice, setSelectedPrice] = useState<{
  //   value: string
  //   label: string
  // } | null>(priceRanges[0])
  const [selectedBrand, setSelectedBrand] = useState<{
    value: string
    label: string
  } | null>(brands[0])

  return (
    <form onSubmit={filterHandler} className='flex py-2  gap-10'>
      <div className='flex bg-slate-100 px-3 justify-center border-2 gap-4 items-center shadow-md'>
        <h4 className='text-sm font-semibold'>Category</h4>
        <Select
          name='category'
          className='text-sm w-40  '
          value={selectedCategory}
          options={options}
          onChange={
            (selected: SingleValue<{ value: string; label: string }>) =>
              setSelectedCategory(selected || options[0]) // Fallback to first option
          }
        />
      </div>
      {/* <div className='flex px-3 justify-center py-2 border-2 gap-4 items-center shadow-md'>
        <h4 className='text-sm font-semibold'>Price</h4>
        <Select
          name='price'
          className='w-40'
          value={selectedPrice}
          options={priceRanges}
          onChange={
            (selected: SingleValue<{ value: string; label: string }>) =>
              setSelectedPrice(selected || priceRanges[0]) // Fallback to first option
          }
        />
      </div> */}
      <div className='flex px-3 justify-center py-2 border-2 gap-4 items-center shadow-md'>
        <h4 className='text-sm font-semibold'>brand</h4>
        <Select
          name='brand'
          className='w-56'
          value={selectedBrand}
          options={brands}
          onChange={
            (selected: SingleValue<{ value: string; label: string }>) =>
              setSelectedBrand(selected || brands[0]) // Fallback to first option
          }
        />
      </div>
      <div className='flex items-center'>
        <button type='submit' className='btn btn-success text-white'>
          Apply Filter
        </button>
      </div>
    </form>
  )
}

export default BikeFilter
