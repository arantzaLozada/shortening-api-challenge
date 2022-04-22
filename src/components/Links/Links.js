import React from 'react';

export function Links({ children }) {
  return (
    <>
      <section className="links">
        <div className="container links-container">
          <form>
            <input
              className="links-input"
              type="text"
              placeholder="Shorten a link here..."
            />
            <button className="links-btn">Shorten It!</button>
          </form>
        </div>
        <ul className="container">{children}</ul>
      </section>
    </>
  );
}
