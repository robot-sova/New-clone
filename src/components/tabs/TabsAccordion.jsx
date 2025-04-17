import React, { useState, useEffect } from "react";
import './Tabs.css';

export const TabsAccordion = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");

  const items = [
    {
      id: "content1",
      title: "Air Conditioner Repair",
      img: "air-conditioner.jpg",
      description: (
        <>
          Testing <b>Air conditioners</b> are probably one of man’s greatest inventions. 
          To keep them working properly, <b>regular maintenance</b> is required.
        </>
      ),
      button: "Fix My Air Conditioner",
    },
    {
      id: "content2",
      title: "Cooktop Repair",
      img: "cooktop.jpg",
      description:
        "Cooktops require regular maintenance to ensure optimal performance.",
      button: "Fix My Cooktop",
    },
    {
      id: "content3",
      title: "Dishwasher Repair",
      img: "dishwasher.jpg",
      description:
        "A properly functioning dishwasher saves time and energy.",
      button: "Fix My Dishwasher",
    },
    {
      id: "content4",
      title: "Dryer Repair",
      img: "dryer.jpg",
      description:
        "Dryers need periodic checks and maintenance to ensure efficiency.",
      button: "Fix My Dryer",
    },
  ];

  // Handle window resize to toggle between mobile and desktop layouts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAccordionClick = (id) => {
    setActiveTab(activeTab === id ? null : id); // Toggle accordion content
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "20px auto",
        border: "3px solid rgba(224, 192, 141, 0.4)", // ← Updated here
        borderRadius: "5px",
        overflow: "hidden",
        backgroundColor: "#000", // Ensures the entire background is black

      }}
    >
      {/* Desktop Tabs Layout */}
      {!isMobile && (
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: "1",
              backgroundColor: "#000",
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "0",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  padding: "15px",
                  cursor: "pointer",
                  textAlign: "left",
                  borderBottom: "2px solid rgba(224, 192, 141, 0.4)",
                  backgroundColor: activeTab === item.id ? "#333" : "transparent",
                  transition: "background-color 0.3s ease",
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div style={{ flex: "3", padding: "20px", backgroundColor: "#000000" }}>
            {items
              .filter((item) => item.id === activeTab)
              .map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      marginBottom: "20px",
                      borderRadius: "5px",
                    }}
                  />
                  <p>{item.description}</p>
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#990000",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    {item.button}
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Accordion Layout */}
      {isMobile && (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
                backgroundColor: "#000",
                color: "white",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              {/* Accordion Header */}
              <div
                onClick={() => handleAccordionClick(item.id)}
                style={{
                  padding: "15px",
                  cursor: "pointer",
                  backgroundColor: activeTab === item.id ? "#000" : "#000",
                  transition: "background-color 0.3s ease",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.title}
                <span style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>

              {/* Accordion Content */}
              {activeTab === item.id && (
                <div
                  style={{
                    padding: "15px",
                    backgroundColor: "#000",
                    
                  }}
                >
                  <h2>{item.title}</h2>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      marginBottom: "20px",
                      borderRadius: "5px",
                    }}
                  />
                  <p>{item.description}</p>
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#990000",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    {item.button}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TabsAccordion;