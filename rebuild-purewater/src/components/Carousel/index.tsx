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
        <div className="carousel-item">
          <Image
            className="absolute block object-cover w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            src={`/assets/carousel1.jpg`}
            width={500}
            height={500}
            alt="banner 1"
          />
        </div>
        {/* Carousel 2 */}
        <div className="carousel-item">
          <Image
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-2.png"
            alt="carousel-2"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel 3 */}
        <div className="carousel-item">
          <Image
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-3.png"
            alt="carousel-3"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel 4 */}
        <div className="carousel-item">
          <Image
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-4.png"
            alt="carousel-4"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel 5 */}
        <div className="carousel-item">
          <Image
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-5.png"
            alt="carousel-5"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel