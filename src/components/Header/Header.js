import React from 'react';

import hero from '../../assets/illustration-working.svg';

export function Header() {
  return (
    <>
      <header className="container header">
        <section className="header-right">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights o how your
            links are performing
          </p>
          <button className="button-primary"> Get Started</button>
        </section>
        <section className="header-left">
          <img src={hero} alt="Working" />
        </section>
      </header>
    </>
  );
}
