import React from 'react';
import github from '../../img/github-512.webp'
import linkedin from '../../img/LinkedIn_icon_circle.svg.png';
import "./footer.css"

function Footer() {
  
    return (
      <footer className="flex-row px-1">
        <div className="footer-container">
          <a data-testid="link" href="https://github.com/Dommy99">
          <img src={github} className="my-2" style={{ width: "5%" }} alt="cover" />
          </a>
        
          <a data-testid="link" href="https://www.linkedin.com/in/dominique-akers-319a07154/">
          <img src={linkedin} className="my-2" style={{ width: "5%" }} alt="cover" /> 
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;