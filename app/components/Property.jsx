import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <div className='flex flex-wrap pt-0 justify-start cursor-pointer w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div>
          <Image className='h-64 rounded-t-lg' src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="property" />
        </div>
        <div className='w-full'>
          <div className='flex justify-between items-center p-2'>
            <div className='flex items-center'>
              <div className='pr-3 text-green-400'>
                {isVerified && <GoVerified />}
              </div>
              <p className='text-lg font-bold text-gray-500'> AED {millify(price)}{rentFrequency && `/${rentFrequency}` } </p>
            </div>
            <div>
              <Image className='w-10 h-10 rounded-full' src={agency?.logo?.url} width={50} height={50}/>
            </div>
          </div>
          <div className='flex justify-between items-center p-2 text-blue-400 w-60'> 
           {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
           </div>
          <p className='text-lg font-bold text-gray-700 p-2'> {title.length > 30 ? `${title.substring(0, 30)}...` : title}</p>
        </div>
      </div>
    </Link>
  )
}

export default Property;
