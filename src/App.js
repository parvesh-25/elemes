import './App.css';
import Header from './components/header/Header';
import Category from './components/category/Category';
import Trending from './components/trending/Trending';
import Footer from './components/footer/Footer';

const App=()=> {
return (
<div className="App">
  <Header />
  <section className="hero">
    <img src="../../asset/image/hero-bg.png" alt="" className="hero__bg" />
    <div className="hero__content">
        <p className="hero__left-title">
          Good Food Us <span>Good Mood</span>
        </p>
        <div className="hero__left-bottom">
        <p className="hero__left-desc">
          I would think that conserving our natural resources should be a conservative position: Not to waste food, and
          not to throw away a lot of the food that we buy.
        </p>
        <div className="hero__left-buttons">
          <button className="hero__left-button hero__left-button--signup">Daftar Sekarang</button>
          <button className="hero__left-button hero__left-button--about">About Us</button>
        </div>
        </div>
      <div className="hero__right">
        <div className="hero__card">
          <img src="../asset/image/salad.png" alt="salad" className="hero__card-image" />
          <div className="hero__card-content">
            <h3 className="hero__card-title">Green Salad Tomato</h3>
            <p className="hero__card-subtitle">Tomato</p>
            <div className="hero__card-rating">
              <img src="../asset/icon/star.svg" alt="" className="hero__card-star" />
              <img src="../asset/icon/star.svg" alt="" className="hero__card-star" />
              <img src="../asset/icon/star.svg" alt="" className="hero__card-star" />
              <img src="../asset/icon/star.svg" alt="" className="hero__card-star" />
              <img src="../asset/icon/star-grey.svg" alt="" className="hero__card-star" />
            </div>
          </div>
        </div>
        <div className="hero__img">
          <img src="../asset/image/salad.png" alt="" className="hero__img-bg" />
          <img src="../asset/image/salad.png" alt="" className="hero__img-salad" />
        </div>
      </div>
    </div>
  </section>
  <Category />
  <Trending />
  <Footer />

  <div className="bottom__nav">
    <div className="bottom__menu">
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.375 21.0912H1.625C0.727997 21.0912 0 20.3633 0 19.4662C0 18.5692 0.727997 17.8412 1.625 17.8412H37.375C38.272 17.8412 39 18.5692 39 19.4662C39 20.3633 38.272 21.0912 37.375 21.0912Z"
          fill="#757575" />
        <path
          d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z"
          fill="#757575" />
        <path
          d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z"
          fill="#757575" />
      </svg>
      <p className="bottom__menu-item">Home</p>
    </div>
    <div className="bottom__menu">
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.375 21.0912H1.625C0.727997 21.0912 0 20.3633 0 19.4662C0 18.5692 0.727997 17.8412 1.625 17.8412H37.375C38.272 17.8412 39 18.5692 39 19.4662C39 20.3633 38.272 21.0912 37.375 21.0912Z"
          fill="#757575" />
        <path
          d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z"
          fill="#757575" />
        <path
          d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z"
          fill="#757575" />
      </svg>
      <p className="bottom__menu-item">Promotions</p>
    </div>
    <div className="bottom__menu">
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.375 21.0912H1.625C0.727997 21.0912 0 20.3633 0 19.4662C0 18.5692 0.727997 17.8412 1.625 17.8412H37.375C38.272 17.8412 39 18.5692 39 19.4662C39 20.3633 38.272 21.0912 37.375 21.0912Z"
          fill="#757575" />
        <path
          d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z"
          fill="#757575" />
        <path
          d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z"
          fill="#757575" />
      </svg>
      <p className="bottom__menu-item">Others</p>
    </div>
  </div>
</div>
);
}

export default App;