import React from 'react'
import { useState, useEffect, useCallback} from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../utils/filterData';


const SearchFilters = () => {
  const [filters] = useState(filterData);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [locationData, setLocationData] = useState();
  // const [showLocations, setShowLocations] = useState(false);
  // const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchProperties = (filterValues) => {

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        const createQueryString = (name, value) => {
          const params = new URLSearchParams(searchParams);
          params.set(name, value);
          return params.toString();
        };
  
        // Use createQueryString here
        router.push(pathname + '?' + createQueryString(item.name, item.value));
      }
    })
  }

  return (
    <div className='flex flex-wrap bg-gray-100 justify-center items-center p-4'>
      {filters.map((filter) => (
          <div key={filter.queryName}>
            <label className='p-2 w-fit' htmlFor={filter.placeholder}>{filter.placeholder}
            <select className='m-1 rounded-md border-gray-300 border-2 p-1'
            name={filter.placeholder}
            onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}>
              { filter?.items?.map((item) => (
                <option key={item.value} value={item.value}>{item.name}</option>
              ))}
            </select>
            </label>
          </div>
        ))}
    </div>
  )
}

export default SearchFilters
