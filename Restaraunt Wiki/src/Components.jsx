import React, { useState } from 'react';

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const groups = [
    {
      src: "/Restaraunts/Vue De Monde.jpg",
      alt: "Vue De Monde",
      heading: "Vue De Monde",
      subheading: "Location: Australia",
      paragraph: "Stars: ",
      callToAction: "Michelin: 3 Stars"
    },
    {
      src: "/Restaraunts/Addison.jpg",
      alt: "Addison",
      heading: "Addison",
      subheading: "Location: United States",
      paragraph: "Stars: ",
      callToAction: "Michelin: 3 Stars"
    },
    {
      src: "/Restaraunts/Zafran.jpg",
      alt: "Zafran",
      heading: "Zafran",
      subheading: "Location: Saudi Arabia",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/L'Enclume.jpg",
      alt: "L'Enclume",
      heading: "L'Enclume",
      subheading: "Location: United Kingdom",
      paragraph: "Stars: ",
      callToAction: "Michelin: 2 Stars"
    },
    {
      src: "/Restaraunts/la pergola etterem and pizzeria.jpg",
      alt: "la pergola etterem and pizzeria",
      heading: "la pergola etterem and pizzeria",
      subheading: "Location: Italy",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/Onslow.jpg",
      alt: "Onslow",
      heading: "Onslow",
      subheading: "Location: New Zealand",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/Iraqitouchrestaraunt.jpg",
      alt: "Iraqi Touch",
      heading: "Iraqi Touch",
      subheading: "Location: Iraq",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/BrisketAmman.jpg",
      alt: "Brisket Amman",
      heading: "Brisket Amman",
      subheading: "Location: Jordan",
      paragraph: "Stars: ",
      callToAction: "Michelin: 1 Stars"
    },
    {
      src: "/Restaraunts/Babel.jpg",
      alt: "Babel",
      heading: "Babel",
      subheading: "Location: Kuwait",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/Habib Beirut.jpg",
      alt: "Habib Beirut",
      heading: "Habib Beirut",
      subheading: "Location: Lebanon",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/naranj.jpg",
      alt: "naranj",
      heading: "Naranj",
      subheading: "Location: Syria",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/Siraj.jpg",
      alt: "Siraj",
      heading: "Siraj",
      subheading: "Location: Emirates",
      paragraph: "Stars: ",
      callToAction: "Michelin: 1 Stars"
    },
    {
      src: "/Restaraunts/OttoeMezzoBombana.jpg",
      alt: "Otto e Mezzo Bombana",
      heading: "Otto e Mezzo Bombana",
      subheading: "Location: Hong Kong",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/pondoklaguna.jpg",
      alt: "Pondo Laguna",
      heading: "Pondo Laguna",
      subheading: "Location: Indonesia",
      paragraph: "Stars: ",
      callToAction: "Michelin: No Stars"
    },
    {
      src: "/Restaraunts/OkazakiSushi.jpg",
      alt: "Okazaki Sushi",
      heading: "Okazaki Sushi",
      subheading: "Location: Japan",
      paragraph: "Stars: ",
      callToAction: "Michelin: 1 Stars"
    },
    {
      src: "/Restaraunts/AlSultanRestaurantBukitBintang.jpg",
      alt: "Al Sultan Restaurant Bukit Bintang",
      heading: "Al Sultan Bukit Bintang",
      subheading: "Location: Malaysia",
      paragraph: "Stars: ",
      callToAction: "Michelin: 1 Stars"
    },
    
    // Add the next 16 groups here...

    {
      src: "/Restaraunts/AlSultanRestaurantBukitBintang.jpg",
      alt: "Al Sultan Restaurant Bukit Bintang",
      heading: "Al Sultan Bukit Bintang",
      subheading: "Location: Malaysia",
      paragraph: "Stars: ",
      callToAction: "Michelin: 1 Stars"
    },
    
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="FullPage">
      <div className="content" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '50px' }}>
        {groups.slice((currentPage - 1) * 16, currentPage * 16).map((group, index) => (
          <a href="#" className="group" key={index} style={{ marginRight: '20px', width: 'calc(25% - 20px)', marginBottom: '20px' }}>
            <img
              className="img"
              src={group.src}
              alt={group.alt}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div className="text">
              <p className="heading" style={{ textAlign: 'center' }}>{group.heading}</p>
              <p className="subheading">{group.subheading}</p>
              <p className="paragraph">{group.paragraph}</p>
              <p className="call-to-action">{group.callToAction}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="carousel-buttons">
        <a href="#" onClick={() => handlePageChange(1)} className="carousel-button">1</a>
        <span style={{ margin: '0 10px' }}></span>
        <a href="#" onClick={() => handlePageChange(2)} className="carousel-button">2</a>
        <span style={{ margin: '0 10px' }}></span>
        <a href="#" onClick={() => handlePageChange(3)} className="carousel-button">3</a>
        <span style={{ margin: '0 10px' }}></span>
        <a href="#" onClick={() => handlePageChange(4)} className="carousel-button">4</a>
      </div>
    </div>
  );
}

export default Component;