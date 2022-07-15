import React, { useState, useRef } from 'react';
import { Loading } from '../Loading/Loading';

export function Links(props) {
  const [valueURL, setvalueURL] = useState('');
  const inputRef = useRef(null);
  console.log(inputRef);

  const onSubmit = (event) => {
    event.preventDefault();
    props.shorterURL(valueURL);
    props.setLoading(true);
    inputRef.current.value = '';
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
              ref={inputRef}
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
