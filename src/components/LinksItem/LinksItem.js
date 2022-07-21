import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function LinksItem(props) {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <section className="links-item-container">
        <li className="links-item">
          <div className="links-mobile-url">
            <span className="links-item--url">{props.url}</span>
          </div>
          <div className="border-mobile-links"></div>
          <div className="links-mobile-url">
            <span className="links-item--shorter">{props.shorterURL}</span>
            <CopyToClipboard
              text={props.shorterURL}
              onCopy={() => setCopied(true)}
            >
              <button
                className={
                  !copied
                    ? 'links-item-btn links-item-btn--hover'
                    : 'links-item-btn links-item-btn--copied'
                }
              >
                {!copied ? 'Copy' : 'Copied!'}
              </button>
            </CopyToClipboard>
          </div>
        </li>
      </section>
    </>
  );
}
