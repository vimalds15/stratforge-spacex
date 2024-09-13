import React, { useEffect, useState } from "react";
import "../styles/carousal.css"; // Add custom styling here

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>

      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
