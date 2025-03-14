import React, { useState, useEffect } from 'react';

function Header() {
    const [selectedStar, setSelectedStar] = useState(localStorage.getItem("selectedStar") || "Random");
    const [selectedImage, setSelectedImage] = useState(localStorage.getItem("selectedImage") || "");

    const [selectedCountry, setSelectedCountry] = useState(localStorage.getItem("selectedCountry") || "Random");
    const [selectedFlag, setSelectedFlag] = useState(localStorage.getItem("selectedFlag") || "/flags/random.png");

    const [isStarDropdownOpen, setIsStarDropdownOpen] = useState(false); // Track star dropdown state
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false); // Track country dropdown state

    const handleSelectStar = (star, imgSrc) => {
        localStorage.setItem("selectedStar", star);
        localStorage.setItem("selectedImage", imgSrc);

        // Reset country selection
        localStorage.setItem("selectedCountry", "Random");
        localStorage.setItem("selectedFlag", "/flags/random.png");
        setIsCountryDropdownOpen(false); // Close country dropdown

        // Refresh the page to apply changes
        window.location.reload();
    };

    const handleSelectCountry = (country, flagSrc) => {
        localStorage.setItem("selectedCountry", country);
        localStorage.setItem("selectedFlag", flagSrc);

        // Reset star selection
        localStorage.setItem("selectedStar", "Random");
        localStorage.setItem("selectedImage", "");
        setIsStarDropdownOpen(false); // Close star dropdown

        // Refresh the page to apply changes
        window.location.reload();
    };

    const handleResetSelections = () => {
        localStorage.setItem("selectedStar", "Random");
        localStorage.setItem("selectedImage", "");
        localStorage.setItem("selectedCountry", "Random");
        localStorage.setItem("selectedFlag", "/flags/random.png");
        setIsStarDropdownOpen(false);
        setIsCountryDropdownOpen(false);
        window.location.reload();
    };

    return (
        <div className="Header">
            <div className="Header-Title" onClick={handleResetSelections}>
                <a href="" onClick={(e) => {
                    e.stopPropagation();
                    handleResetSelections();
                }}>
                    <img className="imgicon" src="/images/RestarauntIcon.png" alt=""/>
                </a>
                <a className="RestarauntLinks" href="" onClick={(e) => {
                    e.stopPropagation();
                    handleResetSelections();
                }}>
                    Restaraunt Wiki
                </a>
            </div>
            <div className='Header-Button'>
                <div className="Header-Button1">
                    <a href="#" className="button redbutton" onClick={() => {
                        handleResetSelections();
                        window.location.reload();
                    }}>
                        <img className="redstar" src="/images/redstar.png" alt="redstar" />Michelin Star
                    </a>
                </div>
                <div className="Header-Button2">
                    <a href="#" className="button drop-trigger" onClick={() => {
                        setIsStarDropdownOpen(!isStarDropdownOpen);
                        if (isStarDropdownOpen) {
                            localStorage.setItem("selectedCountry", "Random");
                            localStorage.setItem("selectedFlag", "/flags/random.png");
                            setIsCountryDropdownOpen(false); // Close country dropdown
                        }
                    }}>
                        Stars: {selectedImage && <img src={selectedImage} alt={selectedStar} className="star star2" />}
                        {selectedStar}
                    </a>

                    {isStarDropdownOpen && (
                        <div className="dropdown">
                            <a href="#" className="dropdowna" onClick={() => handleSelectStar("Random", "")}>
                                Random
                            </a>
                            <a href="#" className="dropdowna" onClick={() => handleSelectStar("1 Star", "/images/star.png")}>
                                <img className="star" src="/images/star.png" alt="" /> 1 Star
                            </a>
                            <a href="#" className="dropdowna" onClick={() => handleSelectStar("2 Star", "/images/star.png")}>
                                <img className="star" src="/images/star.png" alt="" /> 2 Star
                            </a>
                            <a href="#" className="dropdowna" onClick={() => handleSelectStar("3 Star", "/images/star.png")}>
                                <img className="star" src="/images/star.png" alt="" /> 3 Star
                            </a>
                            <a href="#" className="dropdowna" onClick={() => handleSelectStar("4 Star", "/images/star.png")}>
                                <img className="star" src="/images/star.png" alt="" /> 4 Star
                            </a>
                            <a href="#" className="dropdowna" onClick={() => handleSelectStar("5 Star", "/images/star.png")}>
                                <img className="star" src="/images/star.png" alt="" /> 5 Star
                            </a>
                        </div>
                    )}
                </div>
                <div className="Header-Button3">
                    <div className="advance-dropdown">
                        <a href="#" className="button dropdownbtn" onClick={() => {
                            setIsCountryDropdownOpen(!isCountryDropdownOpen);
                            if (isCountryDropdownOpen) {
                                localStorage.setItem("selectedStar", "Random");
                                localStorage.setItem("selectedImage", "");
                                setIsStarDropdownOpen(false); // Close star dropdown
                            }
                        }}>
                            Country: {selectedFlag && <img src={selectedFlag} alt={selectedCountry} className="flags flags2" />} {selectedCountry}
                        </a>

                        {isCountryDropdownOpen && (
                            <div className="dropdown-content">
                                <div className="dropdown-row">
                                    <div className="dropdown-group">
                                        <h4>North America</h4>
                                        <div className="dropdown-options">
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Random", "/flags/random.png")}>
                                                <img className="flags" src="/flags/random.png" alt="Random" />Random</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("United States", "/flags/North America/america.png")}>
                                                <img className="flags" src="/flags/North America/america.png" alt="America" />United States</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Canada", "/flags/North America/canada.png")}>
                                                <img className="flags" src="/flags/North America/canada.png" alt="Canada" />Canada</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-group">
                                        <h4>Oceania</h4>
                                        <div className="dropdown-options">
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Australia", "/flags/Oceania/australia.png")}>
                                                <img className="flags" src="/flags/Oceania/australia.png" alt="Australia" />Australia</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("New Zealand", "/flags/Oceania/new zealand.png")}>
                                                <img className="flags" src="/flags/Oceania/new zealand.png" alt="New Zealand" />New Zealand</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-group">
                                        <h4>Middle East</h4>
                                        <div className="dropdown-options">
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Iraq", "/flags/Middle East/iraq.png")}>
                                                <img className="flags" src="/flags/Middle East/iraq.png" alt="Iraq" />Iraq</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Jordan", "/flags/Middle East/jordan.png")}>
                                                <img className="flags" src="/flags/Middle East/jordan.png" alt="Jordan" />Jordan</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Kuwait", "/flags/Middle East/kuwait.png")}>
                                                <img className="flags" src="/flags/Middle East/kuwait.png" alt="Kuwait" />Kuwait</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Lebanon", "/flags/Middle East/lebanon.png")}>
                                                <img className="flags" src="/flags/Middle East/lebanon.png" alt="Lebanon" />Lebanon</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Saudi Arabia", "/flags/Middle East/saudi arabia.png")}>
                                                <img className="flags" src="/flags/Middle East/saudi arabia.png" alt="Saudi Arabia" />Saudi Arabia</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Syria", "/flags/Middle East/syria.png")}>
                                                <img className="flags" src="/flags/Middle East/syria.png" alt="Syria" />Syria</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Emirates", "/flags/Middle East/emirates.png")}>
                                                <img className="flags" src="/flags/Middle East/emirates.png" alt="Emirates" />Emirates</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="dropdown-row">
                                    <div className="dropdown-group">
                                        <h4>Asia</h4>
                                        <div className="dropdown-options">
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Hong Kong", "/flags/Asia/hong kong.png")}>
                                                <img className="flags" src="/flags/Asia/hong kong.png" alt="Hong Kong" />Hong Kong</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Indonesia", "/flags/Asia/indonesia.png")}>
                                                <img className="flags" src="/flags/Asia/indonesia.png" alt="Indonesia" />Indonesia</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Japan", "/flags/Asia/japan.png")}>
                                                <img className="flags" src="/flags/Asia/japan.png" alt="Japan" />Japan</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Malaysia", "/flags/Asia/malaysia.png")}>
                                                <img className="flags" src="/flags/Asia/malaysia.png" alt="Malaysia" />Malaysia</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Philippines", "/flags/Asia/philippines.png")}>
                                                <img className="flags" src="/flags/Asia/philippines.png" alt="Philippines" />Philippines</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Singapore", "/flags/Asia/singapore.png")}>
                                                <img className="flags" src="/flags/Asia/singapore.png" alt="Singapore" />Singapore</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Taiwan", "/flags/Asia/taiwan.png")}>
                                                <img className="flags" src="/flags/Asia/taiwan.png" alt="Taiwan" />Taiwan</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Thailand", "/flags/Asia/thailand.png")}>
                                                <img className="flags" src="/flags/Asia/thailand.png" alt="Thailand" />Thailand</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-group">
                                        <h4>Europe</h4>
                                        <div className="dropdown-options">
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("United Kingdom", "/flags/Europe/united kingdom.png")}>
                                                <img className="flags" src="/flags/Europe/united kingdom.png" alt="United Kingdom" />United Kingdom</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("France", "/flags/Europe/france.png")}>
                                                <img className="flags" src="/flags/Europe/france.png" alt="France" />France</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Germany", "/flags/Europe/germany.png")}>
                                                <img className="flags" src="/flags/Europe/germany.png" alt="Germany" />Germany</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Ireland", "/flags/Europe/ireland.png")}>
                                                <img className="flags" src="/flags/Europe/ireland.png" alt="Ireland" />Ireland</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Italy", "/flags/Europe/italy.png")}>
                                                <img className="flags" src="/flags/Europe/italy.png" alt="Italy" />Italy</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Netherlands", "/flags/Europe/netherlands.png")}>
                                                <img className="flags" src="/flags/Europe/netherlands.png" alt="Netherlands" />Netherlands</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Spain", "/flags/Europe/spain.png")}>
                                                <img className="flags" src="/flags/Europe/spain.png" alt="Spain" />Spain</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Sweden", "/flags/Europe/sweden.png")}>
                                                <img className="flags" src="/flags/Europe/sweden.png" alt="Sweden" />Sweden</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Bulgaria", "/flags/Europe/bulgaria.png")}>
                                                <img className="flags" src="/flags/Europe/bulgaria.png" alt="Bulgaria" />Bulgaria</a>
                                        </div>
                                    </div>
                                    <div className="dropdown-group">
                                        <h4>Africa</h4>
                                        <div className="dropdown-options">
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Egypt", "/flags/Africa/egypt.png")}>
                                                <img className="flags" src="/flags/Africa/egypt.png" alt="Egypt" />Egypt</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Algeria", "/flags/Africa/algeria.png")}>
                                                <img className="flags" src="/flags/Africa/algeria.png" alt="Algeria" />Algeria</a>
                                            <a href="#" className="flagname" onClick={() => handleSelectCountry("Ethiopia", "/flags/Africa/ethiopia.png")}>
                                                <img className="flags" src="/flags/Africa/ethiopia.png" alt="Ethiopia" />Ethiopia</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
