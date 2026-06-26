export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <a href="#home" className="logo">Feane</a>
          <p>Serving handcrafted fast food with love since 2010. Quality ingredients, bold flavors, every single day.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Business Hours</h4>
          <ul className="hours-list">
            <li><span>Mon - Fri</span><span>10:00 AM - 11:00 PM</span></li>
            <li><span>Saturday</span><span>11:00 AM - 12:00 AM</span></li>
            <li><span>Sunday</span><span>11:00 AM - 10:00 PM</span></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
          </div>
          <div className="footer-contact-info">
            <p><i className="fas fa-phone" /> (555) 123-4567</p>
            <p><i className="fas fa-envelope" /> hello@feane.com</p>
            <p><i className="fas fa-map-marker-alt" /> 123 Broadway, New York, NY</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Feane Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
