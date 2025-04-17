import React, { useState } from "react";

const offers = [
  {
    id: 1,
    title: "Home Appliance Services",
    subtitle: "",
    description: "",
    image: "appliance-repair-services.webp",
  },
  {
    id: 2,
    title: "Coomercial Appliance Services",
    subtitle: "",
    description:
      "We offer 10% off comprehensive household appliance maintenance for return customers.",
    image: "commercial-appliance-repair.webp",
  },
  {
    id: 3,
    title: "HVAC Services",
    subtitle: "",
    description:
      "We offer a discount for a written invoice from another company providing competitive pricing.",
    image: "hvac-services.webp",
  },
  {
    id: 4,
    title: "Duct Cleaning Services",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "duct-cleaning-servises.webp",
  },
];
const Services = () => {
  const [flipped, setFlipped] = useState(Array(offers.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };
  return (
    <div className="wrapper">
      <h2>Services</h2>
      <div className="cols">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`col ${flipped[index] ? "hover" : ""}`}
            onClick={() => handleFlip(index)}
            onTouchStart={() => handleFlip(index)}
          >
            <div className="container">
            <div
  className="front"
  style={{ backgroundImage: `url(${offer.image})` }}
>
  <div className="overlay"></div> {/* New overlay div */}
  <div className="inner">
    <p>{offer.title}</p>
    <span>{offer.subtitle}</span>
  </div>
</div>
<div className="back">
                <div className="inner">
                  <p>{offer.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
