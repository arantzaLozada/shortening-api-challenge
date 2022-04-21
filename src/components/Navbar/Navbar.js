import logo from '../../assets/logo.svg';

export function Navbar() {
  return (
    <>
      <nav className="container navbar">
        <div>
          <ul>
            <li>
              <img src={logo} alt="Logo" />
            </li>
            <li>
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
