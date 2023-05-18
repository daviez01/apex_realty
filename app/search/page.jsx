"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from '../components/SearchFilters';

const SearchPage = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Perform any client-side logic here that depends on the router
    
        // Example: Log the current route
        console.log(router.query);
    
        // Make sure to pass any dependencies to the dependency array if needed
      }, [router]);
  return (
    <Box>
        <Flex cursor="pointer" bg="gray.100" borderBottom="1px" borderColor="gray.200" fontWeight="black" fontSize="lg" justifyContent="center" alignItems="center" m="10"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)} >
            <Text>Search Properties By Filters</Text>
            <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilters && <SearchFilters />}
        <Text fontSize="2xl" p="4" fontWeight="bold" >
            Properties {router.query?.purpose && `for ${router.query.purpose}`}
        </Text>
        
    </Box>
  )
}

export default SearchPage
