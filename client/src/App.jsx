import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/App.scss";
import Recipe from "./components/Recipe";
import MealPlanner from "./pages/MealPlanner";
import Meal from "./pages/Meal";
function App() {
  const [userInput, setUserInput] = useState("");
  const [recipeType, setRecipeType] = useState("");
  const [formValues, setFormValues] = useState(null);

  // const handleUserInput = (ingredient) => {
  //   setUserInput(ingredient);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
    // handleUserInput(userInput);
    setFormValues({
      userInput,
      recipeType,
    });
  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <div className="App">
        <div className="nav">
          <h2 className="nav__heading">Tasty Eats</h2>
          <form className="nav__form" onSubmit={handleSubmit}>
            <label htmlFor="input" type="text" className="form__input">
              <div className="input__style">
                <input
                  type="text"
                  className="form__search"
                  placeholder="Ingredients"
                  value={userInput}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUserInput(e.target.value);
                  }}
                />
              </div>
              <div className="cuisine__buttons">
                <button
                  className="input__cuisine"
                  onClick={(e) => {
                    e.preventDefault();
                    setRecipeType("breakfast");
                  }}
                >
                  Breakfast
                </button>
                <button className="input__cuisine" onClick={(e) => {
                    e.preventDefault();
                    setRecipeType("lunch");
                  }}>Lunch</button>
                <button className="input__cuisine" onClick={(e) => {
                    e.preventDefault();
                    setRecipeType("dinner");
                  }}>Dinner</button>
                <button className="input__cuisine" type="submit">Meal Plan</button>
              </div>
              <Link to="/mealplanner">
                  <button className="meal__plan">Create a meal Plan!</button>
              </Link>
              <div className="ingredient__buttons">
                <button className="ingredient  potato"></button>
                <button className="ingredient  rice"></button>
                <button className="ingredient  soy"></button>
                <button className="ingredient  ice-cream"></button>
                <button className="ingredient  carrots"></button>
                <button className="ingredient  garlic"></button>
                <button className="ingredient  onion"></button>
                <button className="ingredient  eggs"></button>
                <button className="ingredient  tomato"></button>
                <button className="ingredient  chicken"></button>
                <button className="ingredient  fish"></button>
                <button className="ingredient  shrimp"></button>
              </div>
            </label>
          </form>
        </div>

        <Recipe userInput={userInput} recipeType={recipeType} formValues={formValues} />
      </div>
          } />
          <Route path="/mealplanner" element={<MealPlanner />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
