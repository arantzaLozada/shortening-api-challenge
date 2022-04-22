import brandRecognition from '../../assets/icon-brand-recognition.svg';
import detailedRecords from '../../assets/icon-detailed-records.svg';
import fullyCustomizable from '../../assets/icon-fully-customizable.svg';

export function Statistics() {
  return (
    <>
      <section className="statistics-container">
        <div className="container">
          <div className="statistics-title">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with <br /> our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="statistics-cards">
            <div className="card">
              <div className="card-img">
                <img src={brandRecognition} alt="brandRecognition" />
              </div>
              <div className="card-content">
                <h3>Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div>
              <hr className="line-desktop" />
            </div>
            <div className="card card--second">
              <div className="card-img">
                <img src={detailedRecords} alt="detailedRecords" />
              </div>
              <div className="card-content">
                <h3>Detailed Records</h3>
                <p>
                  Gain insights into who is cliking your links. Knowing when and
                  where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div>
              <hr className="line-desktop" />
            </div>
            <div className="card card--thrird">
              <div className="card-img">
                <img src={fullyCustomizable} alt="fullyCustomizable" />
              </div>
              <div className="card-content">
                <h3>Fully Customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links. Supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <h2>Boost your links today</h2>
        <button className="button-primary">Get Started</button>
      </section>
    </>
  );
}
