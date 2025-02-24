
const Spinner = () => {
  return (
    <div className='w-full text-red-600 text-3xl justify-center flex'>
      <span className='loading loading-infinity loading-xs'></span>
      <span className='loading loading-infinity loading-sm'></span>
      <span className='loading loading-infinity loading-md'></span>
      <span className='loading loading-infinity loading-lg'></span>
    </div>
  )
}

export default Spinner
