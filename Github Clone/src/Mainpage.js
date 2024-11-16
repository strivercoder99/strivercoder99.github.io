import './Mainpage.css';

const Mainpage = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h1>Build and ship software on a single, collaborative platform</h1>
        <p>Join the world’s most widely adopted AI-powered developer platform.</p>
        
        <div className="email-btn">
          <input type="email" className="inp-mail" placeholder="Enter your email" />
          <button className="btn-email">Signup for Github</button>
        </div>
        
        <div className="try-copilot">
          <button className="btn-copilot">Try GitHub Co-Pilot</button>
        </div>
      </div>
      
      {/* Add a section for Features or Testimonials */}
      <div className="features">
        <h2>Why GitHub?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Collaboration</h3>
            <p>Work together with your team, anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <h3>Security</h3>
            <p>Your code is secure with GitHub's built-in security features.</p>
          </div>
          <div className="feature-card">
            <h3>AI-Powered</h3>
            <p>Leverage AI tools like GitHub Copilot to assist with your coding.</p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Mainpage;
