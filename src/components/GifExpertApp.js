import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const array = ["One Punch"];
  const [categories, setCategories] = useState(array);
  /*
  const handleAdd =()=>{
      setCategories([...categories, 'Agregado']);
  }
  */
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories = {setCategories} />
      <button>Agregar</button>
      <hr />
      <ol>
        {categories.map(category => 
          <GifGrid key= {category } category = {category} />
        )}
      </ol>
    </>
  );
};

export default GifExpertApp;
