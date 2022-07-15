import React, { useState } from 'react';
import { Loading } from '../Loading/Loading';

export function Links(props) {
  const [valueURL, setvalueURL] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    props.shorterURL(valueURL);
    props.setLoading(true);
    setvalueURL('');
  };

  const onChange = (e) => {
    setvalueURL(e.target.value);
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
              value={valueURL}
            />
            <button type="submit" className="links-btn">
              {!props.loading ? 'Shorten It!' : <Loading />}
            </button>
          </form>
        </div>
        <ul className="container">{props.children}</ul>
      </section>
    </>
  );
}
