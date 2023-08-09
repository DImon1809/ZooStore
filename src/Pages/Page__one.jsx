import zoo__store from "../images/zoo__store.png";
import "./Page__one.css";

const Page__one = () => {
  return (
    <section className="page__one__section">
      <img src={zoo__store} alt="zoo__store" className="zoo__store__img" />
      <div className="main__div"></div>
      <div className="main__infomation">
        <p>
          Zoo store - лучшая в мире компания по уходу за животными! Гламурные
          питомцы для гламурных господ .
        </p>
      </div>
    </section>
  );
};

export default Page__one;
