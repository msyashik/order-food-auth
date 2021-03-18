import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowFood from "../ShowFood/ShowFood";

const Home = () => {
  const [foods, setFoods] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setFoods(data.categories));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {foods.length > 0 &&
          foods.map((food) => (
            <ShowFood key={food.idCategory} food={food}></ShowFood>
          ))}
      </div>
    </div>
  );
};

export default Home;
