import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Page__one from "./Pages/Page__one";
import Page__two from "./Pages/Page__two";
import Page__three from "./Pages/Page__three";
import Page__basket from "./Pages/Page__basket";
import { Routes, Route } from "react-router-dom";

function App() {
  const cardsInBasket = [];
  let num = 0;

  const [products, setProducts] = useState(cardsInBasket);
  const [count, setCount] = useState(num);
  const [allCost, setAllCost] = useState(0);

  const productInBasketHandler = (card, cost) => {
    let sum = allCost + cost;

    setProducts([...products, card]);

    num = count + 1;

    setCount(num);

    setAllCost(sum);
  };

  return (
    <>
      <NavBar count={count} />
      <Routes>
        <Route path="/" element={<Page__one />} />
        <Route path="/two" element={<Page__two />} />
        <Route
          path="/three"
          element={<Page__three onProducts={productInBasketHandler} />}
        />
        <Route
          path="/basket"
          element={
            <Page__basket products={products} count={count} allCost={allCost} />
          }
        />
        <Route path="/*" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
