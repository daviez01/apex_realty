import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" w="430px" p="5" paddingTop='0' justifyContent="flex-start" cursor="pointer" >
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="property" />
        </Box>
        <Box w="full">
          <Flex justifyContent="space-between" alignItems="center" paddingTop="2">
            <Flex alignItems="center">
              <Box paddingRight="3" color="gree.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontSize="lg" fontWeight="bold" color="gray.500"> AED {millify(price)}{rentFrequency && `/${rentFrequency}` } </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" paddingTop="1" w="250px" color="blue.400"> 
           {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
           </Flex>
          <Text fontSize="lg" fontWeight="bold" color="gray.700" paddingTop="1"> {title.length > 30 ? `${title.substring(0, 30)}...` : title}</Text>
        </Box>
      </Flex>
    </Link>
  )
}

export default Property;
