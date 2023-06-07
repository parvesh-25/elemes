import './App.css';
import Header from './components/Header';
import Category from './components/category/Category';

const App=()=> {
return (
<div className="App">
  <Header />
  <section className="hero">
    <img src="../../asset/image/hero-bg.png" alt="" className="hero__bg" />
    <div className="hero__content">
      <div className="hero__left">
        <p className="hero__left-title">
          Good Food Us <span>Good Mood</span>
        </p>
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
   <Category/>
</div>
);
}

export default App;