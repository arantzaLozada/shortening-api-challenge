import { IconLogo } from '../Icon/IconLogo';

import iconFacebook from '../../assets/icon-facebook.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconPinterest from '../../assets/icon-pinterest.svg';
import iconInstagram from '../../assets/icon-instagram.svg';

export function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="container footer-spaces">
          <div className="footer-logo">
            <IconLogo color={'#FFFFFF'} />
          </div>
          <div className="footer-menu">
            <ul>
              <strong>Features</strong>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
            <ul>
              <strong>Resources</strong>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
            <ul>
              <strong>Company</strong>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-media">
            <img src={iconFacebook} alt="iconFacebook" />
            <img src={iconTwitter} alt="iconTwitter" />
            <img src={iconPinterest} alt="iconPinterest" />
            <img src={iconInstagram} alt="iconInstagram" />
          </div>
        </div>
      </section>
    </>
  );
}
