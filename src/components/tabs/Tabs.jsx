import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');
  const containerRef = useRef(null);

  const items = [
    {
      id: 'content1',
      title: 'Air Conditioner Repair',
      img: 'air-conditioner.jpg',
      description: (
        <>
          Testing <b>Air conditioners</b> are probably one of man’s greatest
          inventions. To keep them working properly, <b>regular maintenance</b>{' '}
          is required.
        </>
      ),
      button: 'Fix My Air Conditioner',
    },
    {
      id: 'content2',
      title: 'Cooktop Repair',
      img: 'cooktop.jpg',
      description:
        'Cooktops require regular maintenance to ensure optimal performance.',
      button: 'Fix My Cooktop',
    },
    {
      id: 'content3',
      title: 'Dishwasher Repair',
      img: 'dishwasher.jpg',
      description: 'A properly functioning dishwasher saves time and energy.',
      button: 'Fix My Dishwasher',
    },
    {
      id: 'content4',
      title: 'Dryer Repair',
      img: 'dryer.jpg',
      description:
        'Dryers need periodic checks and maintenance to ensure efficiency.',
      button: 'Fix My Dryer',
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
