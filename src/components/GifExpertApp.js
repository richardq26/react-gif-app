import React, { useState } from "react";
import AddCategory from "./AddCategory";

const GifExpertApp = () => {
  const array = ["One Punch", " Samurai X", " Dragon Ball"];
  const [categories, setCategories] = useState(array);
  /*
  const handleAdd =()=>{
      setCategories([...categories, 'Agregado']);
  }
  */
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory />
      <button>Agregar</button>
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
