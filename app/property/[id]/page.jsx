'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Image from 'next/image';
import ImageScrollbar from '@/app/components/ImageScrollbar';

import { baseUrl, options } from '../../utils/fetchApi';

const fetchProperty = async (id) => {
  const res = await fetch(`${baseUrl}/properties/detail?externalID=${id}`, options);
  const data = await res.json();
  console.log(data);
  return data;
}


const PropertyPage = () => {
  const [property, setProperty] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchProperty(id).then((data) => {
      setProperty(data);
    })
  }, []);


  return (
    <div className='m-auto p-4' style={{ maxWidth: '53rem' }}>
      {property.photos && <ImageScrollbar images={property.photos} />}
      <div className='w-full p-6' w='full' p='6'>
       <div className='flex pt-2 items-center' paddingTop='2' alignItems='center'>
        <div className='pr-3 ' paddingRight='3' color='green.400'>{property.isVerified && <GoVerified />}</div>
        <p className='font-bold text-lg' fontWeight='bold' fontSize='lg'>
          AED {property.price} {property.rentFrequency && `/${property.rentFrequency}`}
        </p>
        <div>
        <Image className='w-10 h-10 rounded-full' src={property.agency?.logo?.url} width={50} height={50}/>
        </div>
      </div>
      <div className='flex items-center p-1 justify-between text-blue-400 w-60' alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {property.rooms}<FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill />
      </div>
    </div>
    <div className='mt-2' marginTop='2'>
      <h2 className='text-lg mb-2 font-bold' fontSize='lg' marginBottom='2' fontWeight='bold'>{property.title}</h2>
      <p className='text-gray-600' lineHeight='2' color='gray.600'>{property.description}</p>
    </div>
    <div className='flex flex-wrap justify-between uppercase' flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
      <div className='flex justify-between w-96 border-b border-gray-100 p-3' justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <p>Type</p>
        <p className='font-bold' fontWeight='bold'>{property.type}</p>
      </div>
      <div className='flex justify-between w-96 border-gray-100 p-3' justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <p>Purpose</p>
        <p className='font-bold' fontWeight='bold'>{property.purpose}</p>
      </div>
      {property.furnishingStatus && (
        <div className='flex justify-between w-96 border-b border-gray-100 p-3' justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <p>Furnishing Status</p>
          <p className='font-bold' fontWeight='bold'>{property.furnishingStatus}</p>
        </div>
      )}
    </div>
    <div>
      {property.amenities.lenght && <p className='text-2xl font-black mt-5' fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</p>}
        <div className='flex flex-wrap' flexWrap='wrap'>
          {property.amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <p key={amenity.text} className='font-bold text-blue-400 p-2 bg-gray-200 m-1 text-sm rounded' fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </p>
              ))
          ))}
        </div>
    </div>

    </div>
  )
}

export default PropertyPage
