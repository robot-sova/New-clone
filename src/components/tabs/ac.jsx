import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Air Conditioner Types and Their Repair Needs",
      img: "/air-conditioner/1-air-conditioner.webp",
      description: (
        <>
          <p><b>Central Air Conditioners</b>: Common issues include refrigerant leaks, malfunctioning compressors, and blocked or dirty air ducts.</p>
          <p><b>Window Air Conditioners</b>: Frequent issues include poor cooling performance, fan motor malfunctions, and refrigerant leaks.</p>
          <p><b>Split Air Conditioners</b>: Problems include refrigerant leaks, sensor issues, and faulty wiring or blown fuses.</p>
          <p><b>Portable Air Conditioners</b>: Common issues include water tank overflow, dirty filters, and compressor or fan failures.</p>
          <p><b>Ductless Mini-Split Systems</b>: Issues include refrigerant leaks, sensor malfunctions, and circuit board failures.</p>
          <p><b>Hybrid Systems</b>: Repairs include reversing valve malfunctions and thermostat/control issues.</p>
          <p><b>Geothermal Systems</b>: Repairs may involve underground loop leaks or blockages and heat pump problems.</p>
          <p>Each type has unique needs; regular maintenance is key for longevity and efficiency.</p>
        </>
      ),
    },
  
    {
      id: "content2",
      title: "Common Air Conditioner Issues We Repair",
      img: "/air-conditioner/2-air-conditioner.webp",
      description: (
        <>
          <p><b>Refrigerant Leaks:</b> Cause inefficient cooling; require professional detection and refill.</p>
          <p><b>Frozen Evaporator Coils:</b> Caused by restricted airflow, dirty coils, or low refrigerant.</p>
          <p><b>Electrical Control Failure:</b> Issues from worn-out components or faulty wiring.</p>
          <p><b>Sensor Problems:</b> Lead to erratic cycling; may require repositioning or replacement.</p>
          <p><b>Drainage Problems:</b> Clogs lead to leaks, humidity issues, and system damage.</p>
        </>
      ),
    },
  
    {
      id: "content3",
      title: "Ways to Save Money on Air Conditioner Repair",
      description: (
        <>
          <p><b>Timely Maintenance:</b> $80 flat-fee service includes coil cleaning, filter replacement, and inspection.</p>
          <p><b>Warranty Coverage:</b> We provide up to 3 months of warranty on repairs.</p>
          <p><b>Avoid DIY:</b> Improper DIY attempts can cause more damage — trust the pros for safe, effective repair.</p>
        </>
      ),
    },
  
    {
      id: "content4",
      title: "How to Decide Whether to Repair or Replace an Air Conditioner",
      img: "/air-conditioner/4-air-conditioner.webp",
      description: (
        <>
          <p><b>Age:</b> Under 10 years → repair; Over 10-15 years → replace.</p>
          <p><b>Repair Frequency:</b> Rare → repair; Frequent → replace.</p>
          <p><b>Repair Cost:</b> &lt;50% of new unit → repair; &gt;50% → replace.</p>
          <p><b>Energy Efficiency:</b> Older SEER → replace for energy savings.</p>
          <p><b>Comfort:</b> Inconsistent performance → consider replacement.</p>
          <p><b>Refrigerant:</b> R-22 units → replace; R-410A → repair.</p>
          <p><b>Manufacturer Guidance:</b> Check manuals for recommendations.</p>
          <p><b>Professional Opinion:</b> Hire HVAC techs for assessment.</p>
        </>
      ),
    },
  
    {
      id: "content5",
      title: "FAQs",
      description: (
        <>
          <p><b>What brands do you repair?</b> We service Carrier, Trane, Lennox, Goodman, Rheem, York, and more.</p>
          <p><b>Why is my AC not cooling?</b> Could be dirty filters, low refrigerant, thermostat issues, or aging equipment.</p>
          <p><b>What to do if AC leaks water?</b> Turn off unit, check drain pan/line, replace air filter, and call a pro if needed.</p>
        </>
      ),
    },
  ];
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="tabs-container" ref={containerRef}>
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${
                  activeTab === item.id ? 'active' : ''
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
              <div
                key={item.id}
                className={`tab-panel ${
                  activeTab === item.id ? 'active-tab' : ''
                }`}
              >
                <h2>{item.title}</h2>
                <img src={item.img} alt={item.title} className="tabs-image"  loading="lazy" />
                <p>{item.description}</p>
                <button className="tabs-button">{item.button}</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item">
              <div
                onClick={() =>
                  setActiveTab((prev) => (prev === item.id ? null : item.id))
                }
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">
                  {activeTab === item.id ? '−' : '+'}
                </span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.title}</h2>
                  <img src={item.img} alt={item.title} className="tabs-image" />
                  <p>{item.description}</p>
                  <button className="tabs-button">{item.button}</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
