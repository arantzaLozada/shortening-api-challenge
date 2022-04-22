export function LinksItem() {
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
            <button className="links-item-btn">Copy</button>
          </div>
        </li>
      </section>
    </>
  );
}
