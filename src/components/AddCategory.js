import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // El preventDefault es para que no refresque la página
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      props.setCategories((cats) => [inputValue, ...cats ]);
      setInputValue('');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;
