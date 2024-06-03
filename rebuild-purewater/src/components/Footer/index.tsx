import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className="flex items-end w-full bg-white">
      <footer>
        {/* div wrapper 1 */}
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          index
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