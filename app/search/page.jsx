"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { BsFilter } from 'react-icons/bs';
import { use } from 'react';
import { baseUrl, options } from '../utils/fetchApi';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';

async function fetchProperties() {
    const params = useSearchParams();

    const purpose = params.get('purpose') || 'for-sale';
    const rentFrequency = params.get('rentFrequency') || 'yearly';
    const minPrice = params.get('minPrice') || '0';
    const maxPrice = params.get('maxPrice') || '1000000';
    const roomsMin = params.get('roomsMin') || '0';
    const bathsMin = params.get('bathsMin') || 0;
    const sort = params.get('sort') || 'price-desc';
    const areaMax = params.get('areaMax') || '35000';
    const locationExternalIDs = params.get('locationExternalIDs') || '5002';
    const categoryExternalID = params.get('categoryExternalID') || '4';

    const response = await fetch(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`, options);

    const data = await response.json();

    console.log(data.hits);

    return data.hits;
  } 


const SearchPage = ({  }) => {
    const properties = use(fetchProperties());

    const [searchFilters, setSearchFilters] = useState(false);
    const params = useSearchParams();
    console.log(params.get('purpose'));


  return (
    <div className=''>
        <div className='flex cursor-pointer border-gray-200 border-b-2 font-black text-lg justify-center items-center m-10' justifyContent="center" alignItems="center" m="10">
            <p>Search Properties By Filters</p>
            <span className='pl-2 w-7'><BsFilter /> </span>
        </div>
        {searchFilters && <SearchFilters />}
        <p className='text-2xl p-4 font-bold'>
            Properties {params.get('purpose')}
        </p>
        <div className='flex flex-wrap'>
            {properties.map((property) => <Property key={property.id} property={property} />)}
        </div>
        {properties.length === 0 && (<p className='text-2xl p-4 font-bold text-center my-5'> No Properties Found </p>)}
        
    </div>
  )
}

export default SearchPage;