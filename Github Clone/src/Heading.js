import React from 'react';
import './Heading.css';
import logo from './BCCI Logo.png';

const Heading = () =>
{
    return(
        <header className='header'>
             <div className="header-profile">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Profile"
          className="profile-avatar"
        />
      </div>
      
      <div className="header-search">
        <input type="text" placeholder="Search or jump to..." />
        <span className="header-search-slash">/</span>
      </div>

       <nav className="header-nav">
        <a href="#">Product</a>
        <a href="#">Solutions</a>
        <a href="#">Resources</a>
        <a href="#">Open Source</a>
        <a href="#">Pricing</a>
       </nav>

       <button className="signin">Sign In</button>
       <button className="signout">Sign out</button>
        </header>

       


    );
}

export default Heading;