"use client"
import React from 'react';
import Link from 'next/link';
import Banner from './components/Banner';
import Property from './components/Property';

import { useState, useEffect } from 'react';


import { baseUrl, options } from './utils/fetchApi';


const HomePage = ({}) => {
	const [propertyForRent, setPropertyForRent] = useState([]);
	const [propertyForSale, setPropertyForSale] = useState([]);
	// const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  const fetchData = async () => {
		const response1 = await fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`, options);
		const response2 = await fetch(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`, options);
		const propertyForSale = await response1.json();
		const propertyForRent = await response2.json();
		console.log(propertyForSale.hits, propertyForRent.hits);
		setPropertyForRent(propertyForRent.hits);
		setPropertyForSale(propertyForSale.hits);
		// setLoading(false);
	  };
  
	  fetchData();
	}, []);

  console.log(propertyForRent, propertyForSale);
  return (
    <div>
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
      <div flexWrap="wrap">
        {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
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
      <div flexWrap="wrap">
	  {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </div>
    </div>
  )
}

export default HomePage;