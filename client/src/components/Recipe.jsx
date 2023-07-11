import { useEffect, useState } from "react";
import axios from 'axios';



function Recipe({recipeType, userInput, formValues}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log(formValues, recipeType, userInput);
    if(formValues){
    axios
      .post(`http://localhost:6060/recipe/${formValues.recipeType}`,{
        ingredients: formValues.userInput
      })
      .then((response) => {
        setRecipes(response.data)
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, [formValues]);

  return (
    <div className="cooking">
      <div className="content__cards">
        <div className="ingredients">
          <h2 className="ingredients__header">Ingredient list</h2>
          {recipes?.name  ? (
              <div >
                <h3 className='recipeName'>{recipes?.name}</h3>
                <ul className="ingredientslist">
                  {recipes?.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredientslist__item">{ingredient}</li>
                  ))}
                </ul>
              </div>
            // ))
          ) : (
            <p className="recipeName">No recipes found.</p>
          )}
        </div>

        <div className="recipe">
          <h2 className="recipe__header">Recipe</h2>
          <ul className="recipelist">
            {
              recipes?.instructions?.map((item, index) => {
                return <li key={index} className="recipelist__item">{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;