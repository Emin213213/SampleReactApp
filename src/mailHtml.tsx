import Over from "./App.tsx";

const MainHtml = () => {
  return (
    <div>
      <header>
        <ul className="navbar">
          <li className="navbar-item logo">
            <h2 className="shop-item">SHOP.CO</h2>
          </li>
          <Over />
          <li className="navbar-item">On Sale</li>
          <li className="navbar-item">New Arrivals</li>
          <li className="navbar-item">Brands</li>
          <li className="navbar-item search">
            <input placeholder="Pleeeet" type="text" className="search-input" />
          </li>
          <li className="navbar-item icon">
            <a href="#">
              <img
                src="/img/Vector (4).png"
                alt="Icon 1"
                className="icon-img"
              />
            </a>
          </li>
          <li className="navbar-item icon">
            <a href="#">
              <img src="/img/Frame.png" alt="Icon 2" className="icon-img" />
            </a>
          </li>
        </ul>
      </header>

      <section className="clothes-section">
        <h1 className="section-title">
          FIND CLOTHES
          <br />
          THAT MATCH
          <br />
          YOUR STYLE
        </h1>
        <p className="section-description">
          Browse through our diverse range of meticulously crafted garments,
          designed
          <br />
          to bring out your individuality and cater to your sense of style.
        </p>
        <button className="shop-button">Shop Now</button>

        <div className="stats-container">
          <div className="stat-item">
            <h2 className="stat-number">200+</h2>
            <p className="stat-description">Международных брендов</p>
          </div>
          <div className="linea"></div>
          <div className="stat-item">
            <h2 className="stat-number">2,000+</h2>
            <p className="stat-description">Высококачественных товаров</p>
          </div>
          <div className="linea"></div>
          <div className="stat-item">
            <h2 className="stat-number">30,000+</h2>
            <p className="stat-description">Довольных клиентов</p>
          </div>
        </div>

        <div className="images-container">
          <img src="" alt="" className="image-item" />
          <img src="" alt="" className="image-item" />
          <img src="" alt="" className="image-item" />
        </div>
      </section>

      <section>
        <div className="img-brend">
          <img src="/brend-img/Group (1).png" alt="" />
          <img src="/brend-img/zara-logo-1 1.png" alt="" />
          <img src="/brend-img/gucci-logo-1 1.png" alt="" />
          <img src="/brend-img/Group (2).png" alt="" />
          <img src="/brend-img/Group (3).png" alt="" />
        </div>
      </section>

      <section>
        <h1 className="new-arrivals">NEW ARRIVALS</h1>

        <div className="product-section">
          <div className="product-images">
            <img
              src="/img-section-3/image 7.png"
              alt="T-shirt with tape details"
            />
            <img src="/img-section-3/image 8.png" alt="Skinny fit jeans" />
            <img src="/img-section-3/image 9.png" alt="Checkered shirt" />
            <img
              src="/img-section-3/image 10.png"
              alt="Sleeve striped T-shirt"
            />
          </div>
          <div className="product-names">
            <p className="product-name">T-SHIRT WITH TAPE DETAILS</p>
            <p className="product-name">SKINNY FIT JEANS</p>
            <p className="product-name">CHECKERED SHIRT</p>
            <p className="product-name">SLEEVE STRIPED T-SHIRT</p>
          </div>

          <div className="product-prices">
            <p className="product-price">$120</p>
            <p className="product-price">
              240 <s>$260</s> <button className="discount-button">-20%</button>
            </p>
            <p className="product-price">$180</p>
            <p className="product-price">
              $130 <s>$160</s> <button className="discount-button">-30%</button>
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h1 className="testimonials-title">OUR HAPPY CUSTOMERS</h1>
        <div className="testimonials-row">
          <div className="testimonial">
            <div className="nemes-block-one">
              <h3 className="testimonial-name">Sarah M.</h3>
              <img
                className="testimonial-image"
                src="/img/Vector (3).png"
                alt=""
              />
            </div>
            <p className="testimonial-text">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
          <div className="testimonial">
            <div className="nemes-block-one">
              <h3 className="testimonial-name">Alex K.</h3>
              <img
                className="testimonial-image"
                src="/img/Vector (3).png"
                alt=""
              />
            </div>
            <p className="testimonial-text">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </div>
          <div className="testimonial">
            <div className="nemes-block-one">
              <h3 className="testimonial-name">James L.</h3>
              <img
                className="testimonial-image"
                src="/img/Vector (3).png"
                alt=""
              />
            </div>
            <p className="testimonial-text">
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <h1 className="newsletter-title">
          STAY UP TO DATE ABOUT
          <br /> OUR LATEST OFFERS
        </h1>
        <div className="newNavBar">
          <input
            className="newsletter-input"
            placeholder="Enter your email address"
            type="text"
          />
          <button className="newsletter-button">Subscribe to Newsletter</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h1>SHOP.CO</h1>
            <p>
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>
          <div className="footer-links">
            <h2>COMPANY</h2>
            <ul className="next-ul-navBar">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>HELP</h2>
            <ul className="next-ul-navBar">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>FAQ</h2>
            <ul className="next-ul-navBar">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>RESOURCES</h2>
            <ul className="next-ul-navBar">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainHtml;
