import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <h2>Github</h2>
        <p>Subscribe to our developer newsletter</p>
        <p>Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
        <button className="btn-foot">Subscribe</button>

        <div className="foot-list">
          <div className="foot-list-1">
            <h4>Product</h4>
            <nav className="footer-nav-1">
              <a href="#">Features</a>
              <a href="#">Enterprise</a>
              <a href="#">Copilot</a>
              <a href="#">Security</a>
              <a href="#">Pricing</a>
              <a href="#">Team</a>
            </nav>
          </div>
          <div className="foot-list-2">
            <h4>Platform</h4>
            <nav className="footer-nav-2">
              <a href="#">Developers</a>
              <a href="#">Integrations</a>
              <a href="#">Marketplace</a>
              <a href="#">Partners</a>
            </nav>
          </div>
          <div className="foot-list-3">
            <h4>Support</h4>
            <nav className="footer-nav-3">
              <a href="#">Docs</a>
              <a href="#">Community</a>
              <a href="#">Contact Us</a>
              <a href="#">Status</a>
            </nav>
          </div>
        </div>
        <div className="foot-bottom">
        <p>© 2024 GitHub, Inc. All rights reserved.</p>
        <div className="social-icons">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      </div>

      
    </footer>
  );
};

export default Footer;
