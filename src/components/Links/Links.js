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
            <div className="links-container__form">
              <div className="links-container__input">
                <input
                  className={
                    !props.error
                      ? 'links-input'
                      : 'links-input links-input--error'
                  }
                  type="text"
                  placeholder="Shorten a link here..."
                  onChange={onChange}
                  value={valueURL}
                />
                <span className="links-error">
                  {props.error && 'Please add a link'}
                </span>
              </div>
              <button type="submit" className="links-btn">
                {!props.loading ? 'Shorten It!' : <Loading />}
              </button>
            </div>
          </form>
        </div>
        <ul className="container">{props.children}</ul>
      </section>
    </>
  );
}
