import { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["Hamburguesas"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GitExpertApp </h1>
      {/* imput */}

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* listado de gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* gifs items */}
    </>
  );
};
