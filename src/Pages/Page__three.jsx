import "./Page__three.css";
import paw from "../images/paw.png";
import React, { useRef, useState } from "react";
import Card from "../Component/Card";
import mops from "../images/mops.jpg";
import kaukaz from "../images/kaukaz.jpg";
import buldog from "../images/buldog.jpg";
import sharpey from "../images/sharpey.jpg";
import rangeFunction from "../Component/Functions/functions";

const Page__three = (props) => {
  let arrDogs = [
    { src: mops, breed: "мопс", cost: 2000 },
    { src: kaukaz, breed: "кавказец", cost: 5000 },
    { src: buldog, breed: "бульдог", cost: 3000 },
    { src: sharpey, breed: "шарпей", cost: 7000 },
  ];

  const selectRef = useRef();
  const minInputRef = useRef();
  const maxInputRef = useRef();
  const breedRef = useRef();

  const [arr, setArr] = useState(arrDogs);
  const [minValue, setminValue] = useState(1000);
  const [maxValue, setmaxValue] = useState(20000);

  const clickHandler = () => {
    let temp = arrDogs;
    let arrRange = [minInputRef.current.value, maxInputRef.current.value];
    console.log(arrRange);

    setArr([...rangeFunction(temp, arrRange, breedRef, selectRef)]);
  };

  const minRangeHandler = () => {
    setminValue(minInputRef.current.value);
  };
  const maxRangeHandler = () => {
    setmaxValue(maxInputRef.current.value);
  };

  return (
    <section className="page__three__section">
      <div className="page__three__information">
        <div className="head__of__card">
          <div className="div__img">
            <img src={paw} alt="paw" className="head__img" />
          </div>
          <div className="head__text">
            <p>
              В данном разделе вы можете выбрать свое счастье. Добавьте его в
              корзину и можете оплачивать.
            </p>
          </div>
        </div>
        {arr.length ? (
          arr.map((card, index) => (
            <Card card={card} key={index} onProducts={props.onProducts} />
          ))
        ) : (
          <div style={{ margin: "15vw" }}>
            <p style={{ fontSize: "2vw" }}>
              По вашему запросу ничего не найдено
            </p>
          </div>
        )}
      </div>
      <div className="params__div">
        <div className="form__params">
          <div className="div__range">
            <div className="input__numbers__div">
              <div className="params__text">
                <p>Задайте диапазон цен</p>
              </div>
              <p className="input__numbers__text">
                <span>От</span> <span>{minValue}</span> <span>до</span>{" "}
                <span>{maxValue}</span>
              </p>
              <div className="input__range">
                <input
                  type="range"
                  min="1000"
                  max={maxValue}
                  onChange={minRangeHandler}
                  ref={minInputRef}
                />
                <input
                  type="range"
                  min={minValue}
                  max="20000"
                  onChange={maxRangeHandler}
                  ref={maxInputRef}
                  value={maxValue}
                />
              </div>
            </div>
          </div>
          <div className="div__breed">
            <div className="params__text">
              <p>Выберите породу</p>
            </div>
            <div className="input__breed">
              <select name="breeds" id="breeds" ref={breedRef}>
                <option value="все">Все</option>
                <option value="мопс">Мопс</option>
                <option value="бульдог">Бульдог</option>
                <option value="кавказец">Кавказец</option>
                <option value="шарпей">Шарпей</option>
              </select>
            </div>
          </div>
          <div className="div__cost">
            <div className="params__text">
              <p>Выберите породу</p>
            </div>
            <div className="input__cost">
              <select name="costs" id="costs" ref={selectRef}>
                <option value="main">Типы сортировки</option>
                <option value="negative">По убыванию</option>
                <option value="positive">По возрастанию</option>
              </select>
            </div>
          </div>
          <button className="button__apply" onClick={clickHandler}>
            Применить
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page__three;
