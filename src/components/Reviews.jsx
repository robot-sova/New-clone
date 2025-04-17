import React, { useState, useEffect } from "react";
import "./tabs/Tabs.css"; // Move styles to a CSS file for better separation

const Reviews = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // 0.5-second delay

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  // Prevent rendering until the delay completes
  if (!isLoaded) return null;

  return (
    <div className="reviews">
      {/* Reviews Content - Different for Desktop & Mobile */}
      <div className="reviews-content">
        <p>
          <a href="/reviews-page/" title="reviews" className="desktop">
            Reviews ⭐⭐⭐⭐⭐ 5.0 (Google Rating)
          </a>
        </p>
      </div>
      {/* Mobile Specific Reviews */}
      <div className="reviews-content-mobile">
        <p>
          <a href="/reviews-page/" title="reviews" className="mobile">
            Reviews ⭐⭐⭐⭐⭐ 5.0
          </a>
        </p>
      </div>
      {/* Image Section */}
      <div className="header-licenses-foto">
        {[
          { href: "/credentials/bbb-accredited-appliance-repair/", src: "/credentials/bbb-accredited-appliance-repair-70.webp", alt: "BBB Accredited", width: "184px", height: "70px"},
          { href: "/credentials/licensed-appliance-repair/", src: "/credentials/same-day-appliance-repair-licensed-70.webp", alt: "Licensed Repair", width:"101px", height:"70px"},
          { href: "/credentials/insured-appliance-repair/", src: "/credentials/same-day-appliance-repair-insured-70.webp", alt: "Insured Repair", width:"87px", height:"70px"},
          { href: "/credentials/epa-certified-appliance-repair/", src: "/credentials/epa-certified-appliance-repair-70.webp", alt: "EPA Certified", width:"129px", height:"70px"},
          { href: "/credentials/osha-certified-appliance-repair/", src: "/credentials/same-day-appliance-repair-osha-trained-70.webp", alt: "OSHA Certified", width:"76px", height:"70px"},
          { href: "/credentials/background-checked-appliance-repair/", src: "/credentials/same-day-appliance-repair-background-checked-70.webp", alt: "Background Checked", width:"72px", height:"70px"}
        ].map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            <img
              srcSet={`${item.src} 1x, ${item.src.replace("-70", "-35")} 0.5x`} 
              sizes="(max-width: 600px) 35px, 70px"
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
