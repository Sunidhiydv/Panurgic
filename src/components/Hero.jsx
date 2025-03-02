import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const carousel = document.querySelector("#default-carousel");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    let currentIndex = 0;

    const autoSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      items.forEach((item, index) => {
        item.classList.add("hidden");
        if (index === currentIndex) {
          item.classList.remove("hidden");
        }
      });
    };

    const interval = setInterval(autoSlide, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full  pb-14 mx-auto">
      <div
        id="default-carousel"
        className="relative rounded-lg overflow-hidden shadow-lg"
        data-carousel="static"
      >
        <div className="relative h-[calc(100vh-70px)]" data-carousel-inner>
          {/* Insurance Slide */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src=""
              className="object-cover object-center w-full h-full"
              alt="Insurance"
            />
          </div>

          {/* Stock Market Slide */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src=""
              className="object-cover object-center w-full h-full"
              alt="Stock Market"
            />
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
        Protect your future with our insurance plans, and explore high-return
        stock market opportunities. Join us today!
      </p>
    </div>
  );
}
