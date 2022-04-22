import { IconLogo } from '../Icon/IconLogo';

export function Navbar() {
  return (
    <>
      <nav className="container navbar">
        <div>
          <ul>
            <li>
              <IconLogo color={'#34313D'} />
            </li>
            <li className="nav-left">
              <a href="!#">Features</a>
            </li>
            <li>
              <a href="!#">Pricing</a>
            </li>
            <li>
              <a href="!#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="navbar-buttons">
          <button>Login</button>
          <button className="button-primary">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
