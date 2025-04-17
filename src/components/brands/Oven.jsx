import React from "react";

const brands = [
    "General Electric",
    "Whirlpool",
    "Frigidaire",
    "Samsung",
    "LG oven",
    "KitchenAid",
    "Maytag",
    "Bosch",
    "Electrolux",
    "Kenmore",
    "Viking",
    "Thermador",
    "Wolf",
    "Monogram",
    "Miele",
    "JennAir",
    "Bertazzoni",
    "Fisher & Paykel",
    "ZLINE",
    "Dacor",
    "Gaggenau",
];

export const Brands = () => {
  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <span className={["General Electric", "Fisher & Paykel"].includes(brand) ? "brand-small" : ""}>
  {brand}
</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Brands;
