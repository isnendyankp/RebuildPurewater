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
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        >
          0
        </button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        >
          1
        </button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        >
          2
        </button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        >
          3
        </button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
        >
          4
        </button>
      </div>
    </div>
  );
}

export default Carousel