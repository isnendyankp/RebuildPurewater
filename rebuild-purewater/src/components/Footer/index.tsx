import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className="flex items-end w-full bg-white">
      <footer>
        {/* div for wrapper outer main footer content */}
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          {/* Main Footer Content */}
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            {/* Purewa achor tag */}
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              Pure Water
            </a>
            Main Footer Content
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