import './App.css';
import Header from './components/Header';

const  App=()=> {
  return (
    <div className="App">
      <Header/>
      <section className="hero">
        <img src="../../asset/image/hero.png" alt="" className="hero__image" />
        <div className="hero__text">
          <p className="hero__text-title">
            Good Food Us Good Mood
          </p>
          <p className="hero__text-desc">
          I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
