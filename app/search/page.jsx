"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { BsFilter } from 'react-icons/bs';
// import { use } from 'react';
import { baseUrl, options } from '../utils/fetchApi';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';

const fetchProperty = async (Params) => {

  const { purpose, rentFrequency, minPrice, maxPrice, roomsMin, bathsMin, sort, areaMax, locationExternalIDs, categoryExternalID } = Params;

    const response = await fetch(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`, options);

    const data = await response.json();

    console.log(data.hits);


    return data;
  } 


const SearchPage = () => {
    // const properties = use(fetchProperty());

    const [properties, setProperties] = useState([]);
    const [searchFilters, setSearchFilters] = useState(false);
    const params = useSearchParams();

    useEffect(() => {
      const Params = {
        purpose: params.get('purpose') || 'for-sale',
        rentFrequency: params.get('rentFrequency') || 'yearly',
        minPrice: params.get('minPrice') || '0',
        maxPrice: params.get('maxPrice') || '1000000',
        roomsMin: params.get('roomsMin') || '0',
        bathsMin: params.get('bathsMin') || '0',
        sort: params.get('sort') || 'price-desc',
        areaMax: params.get('areaMax') || '35000',
        locationExternalIDs: params.get('locationExternalIDs') || '5002',
        categoryExternalID: params.get('categoryExternalID') || '4',
      }
      
     fetchProperty(Params).then((data) => {
        setProperties(data.hits);
      })
    }, [params]);

   
   
    console.log(params.get('purpose'));


  return (
    <div className=''>
        <div className='flex cursor-pointer border-gray-200 border-b-2 font-black text-lg justify-center items-center mt-10 mb-3' onClick={() => setSearchFilters(!searchFilters)}>
            <p>Search Properties By Filters</p>
            <span className='pl-2 w-7'><BsFilter /> </span>
        </div>
        {searchFilters && <SearchFilters />}
        <p className='text-2xl p-4 font-bold'>
            Properties {params.get('purpose')}
        </p>
        <div className='flex flex-wrap items-center justify-center'>    
            {properties.map((property) => <Property key={property.id} property={property} />)}
            {console.log(properties)}
        </div>
        { properties.length === 0 && (<p className='text-2xl p-4 font-bold text-center my-5'> No Properties Found </p>) }
        
    </div>
  )
}

export default SearchPage;