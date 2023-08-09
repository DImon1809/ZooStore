import "./Card.css";

const Card = (props) => {
  const onclickHandler = () => {
    props.onProducts(props.card, props.card.cost);
  };

  return (
    <div className="card__div">
      <img src={props.card.src} alt="#" />
      <p>
        Порода "<span>{props.card.breed}</span>".
      </p>
      <p>
        Цена: <span>{props.card.cost}</span> рублей.
      </p>
      <button className="card__button" onClick={onclickHandler}>
        Положить в корзину
      </button>
    </div>
  );
};

export default Card;
