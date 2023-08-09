import "./Card__basket.css";

const Card__basket = (props) => {
  const onclickHandler = () => alert("Вы купили товар");
  return (
    <div className="card__basket">
      <img src={props.card.src} alt="#" />
      <p>
        Порода "<span>{props.card.breed}</span>".
      </p>
      <p>
        Цена: <span>{props.card.cost}</span> рублей.
      </p>
      <button className="card__button__basket" onClick={onclickHandler}>
        Купить
      </button>
    </div>
  );
};

export default Card__basket;
