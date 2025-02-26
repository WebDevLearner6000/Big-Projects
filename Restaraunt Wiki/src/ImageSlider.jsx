import React, { useState } from 'react';

const images = [
  {
    src: "/Restaraunts/Zafran.jpg",
    alt: "Zafran Indian Bistro",
    descriptions: [
      "Zafran Indian Bistro",
      "Location: Saudi Arabia",
      "Stars: ★★★★",
      "Michelin: No Stars"
    ],
    link: "https://www.zafranrestaurants.com/"
  },
  {
    src: "/Restaraunts/Addison.jpg",
    alt: "Addison",
    descriptions: [
      "Addison Restaraunt",
      "Location: United States",
      "Stars: ★★★★★",
      "Michelin: 3 Stars"
    ],
    link: "https://unsplash.com/photos/a-large-body-of-water-with-waves-crashing-on-it-QwoNAhbmLLo"
  },
  {
    src: "/Restaraunts/L'Enclume.jpg",
    alt: "L'Enclume",
    descriptions: [
      "L'Enclume",
      "Location: United Kingdom",
      "stars: ★★★★★",
      "Michelin: 2 Stars"
    ],
    link: "https://www.lenclume.co.uk/"
  },
  {
    src: "/Restaraunts/la pergola etterem and pizzeria.jpg",
    alt: "la pergola etterem & pizzeria",
    descriptions: [
      "la pergola etterem & pizzeria",
      "Location: Italy",
      "Stars: ★★★★★",
      "Michelin: No Stars"
    ],
    link: "https://www.lapergola-etterem.hu/"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="slider-container">
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${index * 100}%)` }}
          >
            <div className="image-wrapper">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt={image.alt}
                />
                <div className="image-description">
                  <p className="description-large">{image.descriptions[0]}</p>
                  <div className="small-descriptions">
                    <p className="description-small">{image.descriptions[1]}</p>
                    <p className="description-small">{image.descriptions[2]}</p>
                    <p className="description-small">{image.descriptions[3]}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="nav-button prev"
        disabled={isTransitioning}
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="nav-button next"
        disabled={isTransitioning}
      >
        →
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
