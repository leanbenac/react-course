import { useState } from "react";
import  { AddCategory, GifGrid  } from "./components/index";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["vegeta"]);

  console.log(categories);

  const onAddCategory = (newCategory) => {
    //para no repetir en input
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((category) => (
            <GifGrid 
                key={ category }
                category={category} />
        ))}
      </ol>
      {/* {Listado gif} */}
      {/* {gitItem} */}
    </>
  );
};

export default GifExpertApp;
