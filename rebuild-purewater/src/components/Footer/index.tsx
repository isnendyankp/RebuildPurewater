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
          © 2024. Published By Pure Water. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer