import React from 'react'

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
          <img
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-1.png"
            alt="carousel-1"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel 2 */}
        <div className="carousel-item">
          <img
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-2.png"
            alt="carousel-2"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel 3 */}
        <div className="carousel-item">
          <img
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-3.png"
            alt="carousel-3"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel 4 */}
        <div className="carousel-item">
          <img
            src="https://cdn.tuk.dev/assets/templates/prodify/carousel-4.png"
            alt="carousel-4"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel