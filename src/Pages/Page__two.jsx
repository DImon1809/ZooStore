import dog__group from "../images/dog__group.jpg";
import "./Page__two.css";

const Page__two = () => {
  return (
    <section className="page__two__section">
      <div className="dog__group">
        <img src={dog__group} alt="dog__group" />
      </div>
      <div className="page__two__information">
        <p>
          Добро пожаловать в zoo store ! Наша компания специализируется на уход
          за животными. Команда состоит из опытных ветеринаров с большим стажем
          работы. Наш долг помогать меньшим братьям. Компания предоставляет
          следующие услуги :
        </p>
        <ul className="list__of__li">
          <li>Уход и лечение животных</li>
          <li>Магазин высококачественных кормов</li>
          <li>Зоомагазин </li>
        </ul>
      </div>
    </section>
  );
};

export default Page__two;
