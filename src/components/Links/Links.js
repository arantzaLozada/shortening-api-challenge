import React, { useState } from 'react';

export function Links(props) {
  const [valueURL, setvalueURL] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    props.shorterURL(valueURL);
  };

  const onChange = (e) => {
    setvalueURL(e.target.value);
    // setDataURL({ URL: e.target.value });
  };

  return (
    <>
      <section className="links">
        <div className="container links-container">
          <form onSubmit={onSubmit}>
            <input
              className="links-input"
              type="text"
              placeholder="Shorten a link here..."
              onChange={onChange}
            />
            <button type="submit" className="links-btn">
              Shorten It!
            </button>
          </form>
        </div>
        <ul className="container">{props.children}</ul>
      </section>
    </>
  );
}
