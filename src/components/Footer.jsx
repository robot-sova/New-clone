import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Zaricci Luxury Appliance Repair</h3>
          <p>
            Precision. Elegance. Legacy. Trusted in luxury appliance care for over 30 years.
          </p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about/">About Us</a></li>
            <li>Address: 814 S. Westgate Ave, Los Angeles, CA 90049</li>
            <li>Email: info@luxuryappliance.repair</li>
            <li>Call: (213) 309-1924</li>
            <li><a href="/sitemap-0.xml" className="sitemap-link">Sitemap</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <p>We provide high-end appliance repair, installation, and maintenance services.</p>
          <p>10% of revenues goes towards helping low income families fix their appliances.</p>
        </div>

        <div className="footer-section footer-contact">
          <h3>Connect</h3>
          <p>Coming soon</p>
          <div className="footer-social">
            {/* Future social SVG icons go here */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Zaricci. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
