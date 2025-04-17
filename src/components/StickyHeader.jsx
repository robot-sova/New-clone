import React, { useState, useEffect } from "react";

const StickyHeader = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Apply sticky after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      {children}
    </div>
  );
};

export default StickyHeader;
