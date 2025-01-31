import React from 'react';
import { useGetBikesQuery } from '../../redux/api/bikeApi';
import Spinner from '../../components/Spinner';
import { Bike } from '../../types/types';
import BikeCard from '../../components/BikeCard';
import SectionTitle from '../../components/SectionTitle';
import BikeFilter from '../../components/BikeFilter';

const ShowAllBikes = () => {
    const {data, isLoading}= useGetBikesQuery({})
    const bikes:Bike = data
    console.log(bikes)
    return (
        <>
        <SectionTitle title='Bikes' description='View All Bikes'></SectionTitle>
        <BikeFilter ></BikeFilter>

        <div className='grid gap-y-4 md:grid-cols-2 lg:grid-cols-3 mb-4 mt-4 '>
             {
                isLoading? <Spinner></Spinner>: bikes.data.map((item:Bike)=><BikeCard bike={item}></BikeCard>)
            } 
        </div>
        </>
    );
};

export default ShowAllBikes;