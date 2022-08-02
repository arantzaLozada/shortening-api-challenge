import { useState } from 'react';
import { IconLogo } from '../Icon/IconLogo';

export function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="container navbar">
        <div>
          <ul>
            <li className="icon-navbar">
              <IconLogo color={'#34313D'} />
            </li>
            <li className="nav-left nav-left--modified">
              <a href="!#">Features</a>
            </li>
            <li className="nav-left">
              <a href="!#">Pricing</a>
            </li>
            <li className="nav-left">
              <a href="!#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="navbar-buttons">
          <button>Login</button>
          <button className="button-primary">Sign Up</button>
        </div>
      </nav>

      {/* RESPONSIVE NAVBAR */}

      <div className="mobile-navbar">
        <div className="navbar-mobile-burger-container">
          <div>
            <IconLogo color={'#34313D'} />
          </div>
          <div
            onClick={handleClick}
            className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={`navbar-mobile-container ${!clicked ? 'active' : ''}`}>
          <div>
            <ul>
              <li>
                <a className="link-mobile" href="!#">
                  Features
                </a>
              </li>
              <li>
                <a className="link-mobile" href="!#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="link-mobile" href="!#">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-buttons-mobile">
            <button className="button-login">Login</button>
            <button className="button-primary button-signUp">Sign Up</button>
          </div>
        </nav>
      </div>
    </>
  );
}
