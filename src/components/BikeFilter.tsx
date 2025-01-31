import Select from 'react-select'
const BikeFilter = () => {
    const options = [
        { value: 'all', label: 'All' },
        { value: 'mountain', label: 'Mountain' },
        { value: 'electric', label: 'Electric' },
        { value: 'hybrid', label: 'Hybrid' },
        { value: 'road', label: 'Road' }
      ]
    const handleFilter = (data)=>{
        console.log(data)
    }
    return (
        <div className=' flex justify-center py-2 border-2 gap-4 items-center font-bold shadow-md'>
            <h4>Filter By Category</h4>
            <Select onChange={handleFilter}  options={options} ></Select>
        </div>
    );
};

export default BikeFilter;