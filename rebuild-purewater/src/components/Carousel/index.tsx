import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    // Outer wrapper for carousel
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel inner list */}
      <div className="relative h-screen overflow-hidden rounded-lg">
        {/* Carousel 1 */}
        <div className="duration-700 ease-in-out" data-carousel-item="active">
          <Image
            className="absolute block object-cover w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={`/assets/carousel1.jpg`}
            width={500}
            height={500}
            alt="banner 1"
          />
        </div>
        {/* Carousel 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            className="absolute block object-cover w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={`/assets/carousel2.jpg`}
            width={500}
            height={500}
            alt="banner 2"
          />
        </div>
        {/* Carousel 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            className="absolute block object-cover w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={`/assets/carousel3.webp`}
            width={1000}
            height={500}
            alt="banner 3"
          />
        </div>
        {/* Carousel 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            className="absolute block object-cover w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={`/assets/carousel4.jpg`}
            width={500}
            height={1500}
            alt="banner 4"
          />
        </div>
        {/* Carousel 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            className="absolute block object-cover w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={`/assets/carousel5.jpg`}
            width={1000}
            height={500}
            alt="banner 5"
          />
        </div>
      </div>
      {/* Carousel indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {/* Carousel indicator 1 */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        {/* Carousel indicator 2 */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        {/* Carousel indicator 3 */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        {/* Carousel indicator 4 */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        {/* Carousel indicator 5 */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* Slider control */}
      {/* data carousel prev */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        {/* This span is for the icon */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* data carousel next */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel