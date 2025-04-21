import React, { useState, useEffect } from "react";
import "./MegaMenu.css"; // Move styles to a CSS file for better separation
// Reusable Arrow Icon Component
const ArrowIcon = ({ isOpen }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`arrow-icon ${isOpen ? "rotate" : ""}`}
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MegaMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCloseVisible, setIsCloseVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (menuId) => {
    if (openDropdown === menuId) {
      // Do not toggle it off, just keep it open
      setOpenDropdown(menuId);
      setIsCloseVisible(true);
    } else {
      // Open new dropdown and keep close button visible
      setOpenDropdown(menuId);
      setIsCloseVisible(true);
    }
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
    setIsCloseVisible(false);
  };

  return (
    <header className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <nav className="navbar">
        <div className="first-row">
          {/* Logo */}
          <a className="logo logo-desktop" href="/">
  <img width="140" height="41" alt="Logo" src="/logo.webp" />
</a>
<a className="logo-mobile" href="/">
  <img width="25" height="25" alt="Mobile Logo" src="/logo-mobile.png" />
</a>
 {/* Close Button - Always visible when a dropdown is open */}
 {isCloseVisible && (
            <button className="close-btn show" onClick={handleCloseDropdown}>
              ✖
            </button>
          )}
{/* Close Button - Only visible on mobile when a dropdown is open */}
{openDropdown && (
            <button className="close-btn" onClick={handleCloseDropdown}>✖</button>
          )}
          {/* Home Dropdown */}
          <div className="dropdown">
           <button className="dropbtn" ><a href="/services/" onClick={() => handleDropdownToggle("Household")}>
              Househols <ArrowIcon isOpen={openDropdown === "Household"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End Appliances We Repair</h3>
              <div className="row">
                {[
                  [{label: "BBQ Grill Repar", href: "/bbq-grill-repair-los-angeles/" },
                    { label: "Cooktop Repair", href: "/cooktop-repair-los-angeles/" },
                  { label: "Dishwasher Repair", href: "/dishwasher-repair-los-angeles/" },
                  { label: "Dryer Repair", href: "/dryer-repair-los-angeles/" },
                  { label: "Fireplace Repair", href: "/fireplace-repair-los-angeles/" },
                  { label: "Freezer Repair", href: "/freezer-repair-los-angeles/" },
                 ],
                  [ { label: "Induction Cooktop Repair", href: "/induction-cooktop-repair-los-angeles/" },
                  { label: "Induction Cooktop Repair", href: "/induction-cooktop-repair/" },
                  { label: "Microwave Repair", href: "/microwave-repair-los-angeles/" },
                  { label: "Oven Repair", href: "/oven-repair-los-angeles/" },
                  { label: "Range Hood Repair", href: "/range-hood-repair-los-angeles/" },
                  { label: "Range Repair", href: "/range-repair-los-angeles/" },
                 ],
                  [{ label: "Refrigerator Repair", href: "/refrigerator-repair-los-angeles/" },
                  { label: "Stove Repair", href: "/stove-repair-los-angeles/" },
                  { label: "Washing Machine Repair", href: "/washing-machine-repair-los-angeles/" },
                  { label: "Wine Cellar Repair", href: "/wine-cellar-repair-los-angeles/" },           
                  { label: "Wine Cooler Repair", href: "/wine-cooler-repair-los-angeles/" },],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) =>
                      typeof item === "string" ? (
                        <a key={item} href="#">
                          {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
                        </a>
                      ) : (
                        <a key={item.label} href={item.href}>
                          {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Commercial Dropdown */}
          <div className="dropdown">
           <button className="dropbtn" ><a href="/services/" onClick={() => handleDropdownToggle("Household")}>
              Commercial <ArrowIcon isOpen={openDropdown === "Household"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End Appliances We Repair</h3>
              <div className="row">
                {[
                  [{label: "Bar Refrigerator Repair", href: "/bar-refrigerator-repair-los-angeles/" },
                    { label: "Commercial Dishwasher Repair", href: "/commercial-dishwasher-repair-los-angeles/" },
                    { label: "Commercial Dryer Repair", href: "/commercial-dryer-repair-los-angeles/" },
                  { label: "Commercial Freezer Repair", href: "/commercial-freezer-repair-los-angeles/" },
                  { label: "Commercial Fryer Machine Repair", href: "/commercial-fryer-machine-repair-los-angeles/" },
                  { label: "Commercial Ice Machine Repair", href: "/commercial-ice-machine-repair-los-angeles/" },
                ],
                  [{ label: "Commercial Laundry Machine Repair", href: "/commercial-laundry-machine-repair-los-angeles/" },
                  { label: "Commercial Oven Repair", href: "/commercial-oven-repair-los-angeles/" },
                  { label: "Commercial Refrigerator Repair", href: "/commercial-refrigerator-repair-los-angeles/" },
                  { label: "Commercial Showcase Refrigerator Repair", href: "/commercial-showcase-refrigerator-repair-los-angeles/" },
                  { label: "Commercial Slushie Machine Repair", href: "/commercial-slushie-machine-repair-los-angeles/" },],
                  [ { label: "Commercial Stove Repair", href: "/commercial-stove-repair-los-angeles/" },
                  { label: "Commercial Slushie Machine Repair", href: "/commercial-slushie-machine-repair-los-angeles/" },
                  { label: "Commercial Walk-In Cooler Repair", href: "/commercial-walk-in-cooler-repair-los-angeles/" },
                  { label: "Commercial Walk-In Freezer Repair", href: "/commercial-walk-in-freezer-repair-los-angeles/" },
                  { label: "Commercial Washing Machine Repair", href: "/commercial-washing-machine-repair-los-angeles/" }, ],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) =>
                      typeof item === "string" ? (
                        <a key={item} href="#">
                          {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
                        </a>
                      ) : (
                        <a key={item.label} href={item.href}>
                          {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* HVAC Dropdown */}
          <div className="dropdown">
           <button className="dropbtn" ><a href="/services/" onClick={() => handleDropdownToggle("Household")}>
              HVAC <ArrowIcon isOpen={openDropdown === "Household"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End Appliances We Repair</h3>
              <div className="row">
                {[
                  [{label: "AC Repair", href: "/air-conditioner-repair-los-angeles/" },
                    { label: "Air Duct Cleaning", href: "/air-ducts-cleaning-and-repair-los-angeles/" },
                    { label: "Furnace Repair", href: "/furnace-repair-los-angeles/" },
    
                 ],
                  [ { label: "Heat Pump Repair", href: "/heat-pump-repair-los-angeles/" },
                  { label: "Heat Pump Repair", href: "/heat-pump-repair-los-angeles/" },
                  { label: "HVAC Repair", href: "/hvac-repair-los-angeles/" },  ],
                  [ { label: "Wall Heater Repair", href: "/wall-heater-repair-los-angeles/" },
                  { label: "Water Heater Repair", href: "/water-heater-repair-los-angeles/" },],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) =>
                      typeof item === "string" ? (
                        <a key={item} href="#">
                          {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
                        </a>
                      ) : (
                        <a key={item.label} href={item.href}>
                          {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Brands Dropdown */}
          <div className="dropdown">
          <button className="dropbtn"><a href="/brands/" onClick={() => handleDropdownToggle("commercial")}>
              Brands <ArrowIcon isOpen={openDropdown === "commercial"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End  Brands We Repair</h3>
              <div className="row">
  {[
    [{ label: "AGA", href: "/aga-appliance-repair/" },
    { label: "Big Chill", href: "/bill-chill-appliance-repair/" },
    { label: "BlueStar", href: "/bluestar-appliance-repair/" },
    { label: "Bosch", href: "/bosch-appliance-repair/" },
    { label: "Dacor", href: "/dacor-appliance-repair/" },
    { label: "Elmira Stove Works", href: "/elmira-stove-works-appliance-repair/" },],
    [{ label: "Fisher & Paykel", href: "/fisher-paykel-appliance-repair/"},
    { label: "Gaggenau", href: "/gaggenau-appliance-repair/" },
    { label: "Jenn-Air", href: "/jenn-air-appliance-repair/" },
    { label: "KitchenAid", href: "/kitchenaid-appliance-repair/" },
    { label: "La Cornue", href: "/la-cornue-appliance-repair/" },
    { label: "Miele", href: "/miele-appliance-repair/" },],
    [ { label: "Smeg", href: "/smeg-appliance-repair/" },
      { label: "Sub-Zero", href: "/sub-zero-repair/" },
      { label: "Thermador", href: "/thermador-appliance-repair/" },
      { label: "Viking", href: "/viking-appliance-repair/" },
      { label: "Wolf", href: "/wolf-appliance-repair/" },
    ],
  ].map((col, idx) => (
    <div className="column" key={idx}>
      {col.map((item) =>
        typeof item === "string" ? (
          <a key={item} href="#">
            {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
          </a>
        ) : (
          <a key={item.label} href={item.href}>
            {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
          </a>
        )
      )}
    </div>
  ))}
</div>
            </div>
          </div>
           {/* HVAC Dropdown */}
           <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("HVAC")}><a>
            Service Areas <ArrowIcon isOpen={openDropdown === "HVAC"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "HVAC" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Oven Repair", "Dishwasher Repair", "Dryer Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                    {/*   <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */}{item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
           {/* Online Estimates Dropdown */}
           <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("HVAC")}><a>
              Estimates <ArrowIcon isOpen={openDropdown === "HVAC"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "HVAC" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Oven Repair", "Dishwasher Repair", "Dryer Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                    {/*   <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */}{item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
           

       
          {/* Phone Number */}
          <a href="#top" className="phone-number">(213) 309-1924</a>
        </div>
      </nav>
    </header>
  );
};
export default MegaMenu;
