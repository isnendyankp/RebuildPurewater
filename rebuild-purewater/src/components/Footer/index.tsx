import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div id="footer" className="flex items-end w-full bg-white">
      <footer>
        {/* div for wrapper outer main footer content */}
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          {/* Main Footer Content */}
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            {/* Purewater achor tag */}
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              Pure Water
            </a>
            {/* Keep in Touch with us paragraph */}
            <p className="mt-2 text-sm text-gray-500">Keep In Touch With Us</p>
            {/* Social Media Icons */}
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                {/* 1. Link facebook */}
                <Link
                  href="https://www.facebook.com"
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                {/* 2. Link twitter */}
                <Link
                  href="https://www.twitter.com"
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    
                  </svg>
                </Link>
                {/* 3. Link instagram */}
                <Link
                  href="https://www.instagram.com"
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                ></Link>
                {/* 4. Link linkedin */}
                <Link
                  href="https://www.linkedin.com"
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                ></Link>
              </span>
            </div>
          </div>
        </div>
        {/* Published by Purewater section */}
        <div className="bg-gray-300">
          {/* Add styling container */}
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2024. Published By Pure Water. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer