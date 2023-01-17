import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    // console. log( target.value );
    setInputValue(target.value);
  };
  const onSumit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={(event) => onSumit(event)}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
