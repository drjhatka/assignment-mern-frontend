import React, { FormEvent, useEffect, useState } from 'react';
import {  useGetBikesQuery } from '../../redux/api/bikeApi';
import Spinner from '../../components/Spinner';
import { Bike } from '../../types/types';
import BikeCard from '../../components/BikeCard';
import SectionTitle from '../../components/SectionTitle';
import BikeFilter from '../../components/bikes/BikeFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const ShowAllBikes = () => {
    const {data, isLoading, error}= useGetBikesQuery({ searchTerm:'',brand: "", category: "" })
    const [bikeData, setBikeData]= useState<Bike[]>([])
    //const [filters, setFilters] = useState({ brand: "all", category: "Mountain", price: "all" });

    console.log(data)
    useEffect(() => {
        if (data?.data) {
            setBikeData(data.data);
        }
    }, [data]); 
    if(error){
        console.log(error)
        return
    }
    const handleFilters = (event)=>{
        event.preventDefault()
        const formData = event.target;
        const inputData = [
            formData.category.value,
            formData.brand.value,
            //formData.price.value =='all'? 10000: parseFloat(formData.price.value.substring(0,1)+'000.00')//convert price input to Float...
        ]
        if (!data?.data) return; // Ensure data is available before filtering
        setBikeData(
            data.data.filter((bike:Bike)=>{return (
                inputData[0]=='all'|| bike.category===inputData[0] &&
                inputData[1] =='all'|| bike.brand===inputData[1]
                )
                
            })
        )
    }

    return (
        <div>
            <SectionTitle title='Shop Bikes' description='Shop our exclusive Bikes made for you'></SectionTitle>
            <div className='flex bg-slate-50 items-center gap-4 px-2'>
                <span><FontAwesomeIcon className='text-orange-500 text-lg' icon={faFilter}></FontAwesomeIcon></span>
                <span className=' font-semibold text-red-700'>Filter </span>
                <BikeFilter filterHandler={handleFilters} ></BikeFilter>
            </div>
            <div className='grid bg-gray-300  gap-y-4 md:grid-cols-2 lg:grid-cols-3 mb-4 py-4 mt-2 '>
                {
                    isLoading? <Spinner></Spinner>: bikeData.map((item:Bike)=><BikeCard key={Math.random()*10000} bike={item}></BikeCard>)
                }
            </div>
        </div>
    );
};

export default ShowAllBikes;