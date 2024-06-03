import React from 'react';
import '../../public/Css/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <h4>Questions ? Call 000-800-919-1694</h4>
          <div className="column">
            <ul>
              <li><a href="#">Company Information</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Term of uses</a></li>
              <li><a href="#"> Cookies preferences </a></li>
            </ul>
          </div>
          <div className="column">
            
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
