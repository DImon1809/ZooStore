import "./Page__basket.css";
import paw from "../images/paw.png";
import Card from "../Component/Card";
import Card__basket from "../Component/Card__basket";

const Page__basket = (props) => {
  return (
    <section className="section__basket">
      <div className="basket__main__infomation">
        <div className="baket__info">
          <img src={paw} alt="#" className="basket__paw" />
          <p>Список друзей:</p>
        </div>
        {props.products.length ? (
          props.products.map((card, index) => (
            <Card__basket card={card} key={index} />
          ))
        ) : (
          <div style={{ margin: "20vw" }}>
            <p style={{ fontSize: "2vw" }}>Корзина пока пуста</p>
          </div>
        )}
      </div>
      <div className="basket__sum">
        <div className="basket__sum__text">
          <p>Здесь будут отображены общая сумма покупок и список карточек</p>
        </div>
        <div className="basket__sum__card">
          <p>Количество карточек {props.count}</p>
          <p>Общая сумма товаров {props.allCost} рублей</p>
          <button
            className="basket__button__card"
            onClick={() => alert("Заказ оформлен!")}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page__basket;
