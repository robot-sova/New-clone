import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Same Day Appliance Repair for Oven Repair Services?",
      img: "/oven-repair/1-oven.webp",
      description: (
        <>
          <p><strong>Same-Day Appointments</strong>: We recognize the importance of a working oven and offer <strong>same-day service</strong> to resolve <strong>oven issues</strong> quickly, ensuring you can return to cooking as usual.</p>
          <p><strong>Certified Technicians</strong>: Our skilled, <strong>factory-trained</strong> technicians are experienced with <strong>oven brands</strong> and models across the board. Whether it's a <strong>gas oven</strong> that won't ignite or an <strong>electric oven</strong> with <strong>heating issues</strong>, we diagnose and provide lasting solutions.</p>
          <p><strong>Use of Original Parts</strong>: We only use <strong>genuine replacement parts</strong> from trusted suppliers. Each part comes with a <strong>warranty</strong>, which helps keep your oven running smoothly and ensures reliability in the long run.</p>
          <p><strong>Transparent Repair Costs</strong>: Before beginning any work, we offer clear <strong>repair cost</strong> estimates so that you know exactly what to expect. We believe in transparent pricing with no hidden fees.</p>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Ovens We Repair and Our Specialized Approach",
      img: "/oven-repair/2-oven.webp",
      description: (
        <>
          <p><strong>Electric Oven Repair</strong>: Known for reliable and consistent heat, <strong>electric ovens</strong> may experience <strong>heating element issues</strong>, <strong>thermostat malfunctions</strong>, or <strong>circuit breaker</strong> problems. Our technicians perform thorough inspections to keep your <strong>oven temperature</strong> regulated and ensure safe <strong>preheating time</strong> and baking performance.</p>
          <p><strong>Gas Oven Repair</strong>: With precise <strong>temperature control</strong>, <strong>gas ovens</strong> can sometimes suffer from <strong>igniter</strong> problems, <strong>gas valve malfunctions</strong>, or <strong>surface burner</strong> issues. We check <strong>gas lines</strong> and verify safety, guaranteeing your <strong>gas oven </strong>operates safely with the appropriate <strong>off-position</strong> function.</p>
          <p><strong>Wall Oven Repair</strong>: Popular for saving space, <strong>wall ovens</strong> require specialized repair knowledge. From <strong>door handle</strong> repairs to fixing <strong>lock-out indicators</strong>, our team has the skills to handle all <strong>wall oven</strong> challenges, including <strong>manual lock</strong> issues, <strong>lock motor stops running</strong>, and <strong>door lock problems</strong>.</p>
          <p><strong>Convection Oven Repair</strong>: For even cooking and efficiency, <strong>convection ovens</strong> rely on fans and precise temperature. Our technicians address <strong>fan malfunctions</strong>, <strong>oven door</strong> problems, and other issues so your oven stays locked and performs at an optimal level.</p>
        </>
      ),
    },
    {
      id: "content3",
      title: "Common Oven Problems We Fix",
      img: "/oven-repair/3-oven.webp",
      description: (
        <>
          <p>If your oven isn't reaching the correct <strong>oven temperature</strong> or takes too long to <strong>preheat</strong>, we inspect components such as <strong>heating elements</strong>, <strong>thermostats</strong>, and <strong>temperature sensors</strong> to ensure reliable performance.</p>
          <p>For <strong>gas ovens</strong>, igniters and <strong>burners</strong> often cause issues if they aren't sparking or heating as they should. We check <strong>gas lines</strong>, <strong>broil burner</strong> connections, and perform <strong>burner</strong> adjustments to restore full functionality.</p>
          <p>Overheating is a safety concern and could lead to damage. We inspect <strong>thermostats</strong> and control boards to regulate <strong>safe temperature</strong> and prevent <strong>cooking performance</strong> issues.</p>
          <p>Control panels, especially in modern <strong>oven brands</strong>, can disrupt <strong>self-clean cycles</strong> or <strong>manual lock</strong> functions. Our technicians can diagnose <strong>lock motor</strong> and <strong>control board</strong> issues, providing expert solutions.</p>
          <p>If you notice strange smells or smoke, it may be due to residue on the <strong>baking stones</strong>, <strong>aluminum foil</strong> buildup, or a fault in the <strong>broil burner</strong>. We clean components and remove <strong>other debris</strong> to ensure safe operation.</p>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Oven Needs Repair Services – When to Call Us",
      img: "/oven-repair/5-oven.webp",
      description: (
        <>
          <p>Uneven heating may indicate an issue with <strong>oven racks</strong>, <strong>burners</strong>, or <strong>thermostats</strong>, which can affect <strong>cooking performance</strong>. Call us to fix these issues promptly.</p>
          <p>Problems with the <strong>oven door</strong>, <strong>door handle</strong>, or <strong>lock motor</strong> can be frustrating. If your oven <strong>stays locked</strong> after the <strong>self-clean cycle</strong> or won't unlock, our technicians can repair it.</p>
          <p>Ovens that shut down unexpectedly may have issues with the <strong>power cord</strong>, <strong>oven's circuit breaker</strong>, or control settings. Schedule a repair to resolve electrical and <strong>off-position</strong> issues.</p>
          <p>If your oven fails to reach <strong>preheat temperature</strong>, there may be an issue with the <strong>igniter</strong>, <strong>heating elements</strong>, or control board. We provide solutions to ensure reliable <strong>preheating time</strong>.</p>
        </>
      ),
    },
    {
      id: "content5",
      title: "Professional Oven Maintenance Services – Why Regular Care is Essential",
      description: (
        <>
          <p><strong>Burner and Element Cleaning</strong>: Cleaning <strong>surface burners</strong> and <strong>elements</strong> improves <strong>heat distribution</strong> and <strong>cooking performance</strong>.</p>
          <p><strong>Gas Line Inspection</strong>: For <strong>gas ovens</strong>, we inspect connections to avoid leaks and ensure safe operation.</p>
          <p><strong>Electrical Component Check</strong>: We inspect <strong>thermostats</strong>, <strong>control boards</strong>, and heating elements for <strong>electric ovens</strong> to keep them functioning smoothly.</p>
        </>
      ),
    },
    {
      id: "content6",
      title: "Contact Us for Oven Repair Services in Los Angeles",
      description: (
        <>
          <p>If you're experiencing <strong>oven issues</strong>, don't delay. Contact <strong>Same Day Appliance Repair</strong> for prompt, reliable service. We proudly serve <strong>Los Angeles</strong> and surrounding areas, offering <strong>same-day oven repair services</strong> for all oven models. For trusted and affordable oven repair, <strong>call us today</strong> to bring functionality back to your kitchen.</p>
        </>
      ),
    },
  ];
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
                className={`tabs-title ${activeTab === item.id ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
             <div className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
             <h2>{item.title}</h2>
             <div className="tab-body-float">
               <img src={item.img} alt={item.title} className="image-float" />
               <div>{item.description}</div>
             </div>
             <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
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
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>
              {activeTab === item.id && (
               <div className="accordion-content">
               <h2>{item.title}</h2>
               <img src={item.img} alt={item.title} className="image-float" />
               <div>{item.description}</div>
               <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
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
