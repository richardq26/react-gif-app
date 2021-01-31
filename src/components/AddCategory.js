import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("Hola mundo");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      // El preventDefault es para que no refresque la página
      e.preventDefault();

  };
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

/*
AddCategory.propTypes = {

}*/

export default AddCategory;
