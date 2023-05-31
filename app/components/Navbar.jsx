"use client"

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { FcHome } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiHome, FiKey } from 'react-icons/fi';


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Apex Realty</span>
          </Link>
          {/* <button
            // data-collapse-toggle="navbar-dropdown"
            // type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            // aria-controls="navbar-dropdown"
            // aria-expanded="false"
            onClick={console.log("clicked")}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown"> */}
            <ul className="flex flex-col font-medium md:p-0 ">
              <li>
                <button
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Main Menu
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* Dropdown menu */}
                {dropdown && (
                    <div
                    id="dropdownNavbar"
                    className="z-10 absolute right-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setDropdown(!dropdown)}>
                        <p className='flex'><span className='mr-1.5'><FcHome /></span>Home</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/search" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setDropdown(!dropdown)}>
                        <p className='flex'><span className='mr-1.5'><BsSearch /></span>Search</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/search?purpose=for-sale" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setDropdown(!dropdown)}>
                        <p className='flex'><span className='mr-1.5'><FiHome /></span>Buy Properties</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/search?purpose=for-rent" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setDropdown(!dropdown)}>
                          <p className='flex'><span className='mr-1.5'><FiKey /></span>Rent Properties</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        {/* </div> */}
      </nav>
    );
  };


export default Navbar
