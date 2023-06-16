import React from 'react';
import Banner from './components/Banner';
import Property from './components/Property';
import { use } from 'react';


import { baseUrl, options } from './utils/fetchApi';

async function fetchProperties() {
  const response1 = await fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`, options);
  const response2 = await fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`, options);
  const propertyForSale = await response1.json();
  const propertyForRent = await response2.json();
  return [propertyForSale, propertyForRent];
} 

export default function Staticprop() {
  const [propertyForSale, propertyForRent] = use(fetchProperties());

  return (
    <div className='container mx-auto'>
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Condos, Houses"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose-for-rent"
        imageurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div className='flex flex-wrap gap-2.5 m-3 justify-center items-center'>
        {propertyForRent?.hits.map((property) => <Property property={property} key={property.id} />)} 
      </div>
      <Banner 
        purpose="Buy A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Condos, Houses"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose-for-sale"
        imageurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <div className='flex flex-wrap gap-2.5 m-3 justify-center items-center'>
	  {propertyForSale?.hits.map((property) => <Property property={property} key={property.id} />)} 
      </div>
    </div>
  )

}
