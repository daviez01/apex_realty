import React from "react";
import Link from 'next/link';
import Image from 'next/image';


const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageurl }) => {
    return(
      <div className="flex justify-center items-center mt-2">
        <Image src={imageurl} width={500} height={300} alt="banner" className="hidden lg:block"/>
        <div className="p-5">
          <h3 className="text-sm font-medium text-gray-500" > {purpose} </h3>
          <h1 className="text-3xl font-bold"> {title1} <br /> {title2} </h1>
          <p className="text-lg pt-3 pb-3 text-gray-700"> {desc1} <br /> {desc2} </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl" fontsize="xl"> 
            <Link href={linkName}> {buttonText} </Link>
          </button>
        </div>
      </div>
    )
  };

export default Banner;