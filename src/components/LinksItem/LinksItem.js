import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function LinksItem() {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <section className="links-item-container">
        <li className="links-item">
          <div>
            <span className="links-item--url">
              https://www.frontendmentor.io/home
            </span>
          </div>
          <div>
            <span className="links-item--shorter">
              https://shrtco.de/o9kMSW
            </span>
            <CopyToClipboard text="yes" onCopy={() => setCopied(true)}>
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
