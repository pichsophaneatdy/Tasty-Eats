import React, {useState, useEffect} from 'react'
import "./mealplanner.scss";
import axios from "axios";
import Meal from './Meal';
import data from "./data";
import Loader from "./Loader/Loader";
const MealPlanner = () => {
    const [breakfast, setBreakfast] = useState({
        b1: "",
        b2: "",
        b3: "",
    });
    const [lunch, setLunch] = useState({
        l1: "",
        l2: "",
        l3: "",
    })
    const [dinner, setDinner] = useState({
        d1: "",
        d2: "",
        d3: "",
    })
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const finalInput = {
        breakfast: breakfast,
        lunch: lunch,
        dinner: dinner
    }
    const handleSubmit = () => {
        setLoading(true);
        axios.post("http://localhost:6060/meal-planner", finalInput)
            .then((response)=> setResult(response.data))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false));
    }
    return (
        <div className="planner">
            <div className="column1">
                <h2>Welcome,<br></br>Meal Planner</h2>
                <p>Let's create a 7-days meal plan for this week!</p>
            </div>
            <div className="column2">
                <h2>Pick ingredients for each meals <br></br> and we will generate a meal plan! </h2>
                <div className="selection">
                    <div className="breakfast">
                        <h3 class="meal_title">Breakfast</h3>
                        <div className="d1">
                            <p>Day 1 - 2</p>
                            <input value={breakfast.b1} onChange={(e) => {
                                setBreakfast({...breakfast, b1: e.target.value})
                            } } className="input" placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Eggs</button>
                                <button className="item">Oats</button>
                                <button className="item">Bread</button>
                                <button className="item">Yogurt</button>
                                <button className="item">Fresh Fruit</button>
                                <button className="item">Bacon</button>
                            </div>
                        </div>
                        <div className="d2">
                            <p>Day 3 - 5</p>
                            <input value={breakfast.b2} className="input"
                                    onChange={(e) => {
                                        setBreakfast({...breakfast, b2: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Eggs</button>
                                <button className="item">Oats</button>
                                <button className="item">Bread</button>
                                <button className="item">Yogurt</button>
                                <button className="item">Fresh Fruit</button>
                                <button className="item">Bacon</button>
                            </div>
                        </div>
                        <div className="d3">
                            <p>Day 6 - 7</p>
                            <input value={breakfast.b3} className="input"
                                onChange={(e) => {
                                        setBreakfast({...breakfast, b3: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Eggs</button>
                                <button className="item">Oats</button>
                                <button className="item">Bread</button>
                                <button className="item">Yogurt</button>
                                <button className="item">Fresh Fruit</button>
                                <button className="item">Bacon</button>
                            </div>
                        </div>
                    </div>
                    <div className="lunch">
                        <h3 class="meal_title">lunch</h3>
                        <div className="d1">
                            <p>Day 1 - 2</p>
                            <input value={lunch.l1} className="input"
                                onChange={(e) => {
                                        setLunch({...lunch, l1: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Chicken</button>
                                <button className="item">Leafty Green</button>
                                <button className="item">Tomato</button>
                                <button className="item">Rice</button>
                                <button className="item">Noodle</button>
                                <button className="item">Beans</button>
                                <button className="item">Beef</button>
                                <button className="item">Avocado</button>
                                <button className="item">Soup</button>
                            </div>
                        </div>
                        <div className="d2">
                            <p>Day 3 - 5</p>
                            <input value={lunch.l2} className="input"
                                onChange={(e) => {
                                        setLunch({...lunch, l2: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Chicken</button>
                                <button className="item">Leafty Green</button>
                                <button className="item">Tomato</button>
                                <button className="item">Rice</button>
                                <button className="item">Noodle</button>
                                <button className="item">Beans</button>
                                <button className="item">Beef</button>
                                <button className="item">Avocado</button>
                                <button className="item">Soup</button>
                            </div>
                        </div>
                        <div className="d3">
                            <p>Day 6 - 7</p>
                            <input value={lunch.l3} className="input" 
                                onChange={(e) => {
                                        setLunch({...lunch, l3: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Chicken</button>
                                <button className="item">Leafty Green</button>
                                <button className="item">Tomato</button>
                                <button className="item">Rice</button>
                                <button className="item">Noodle</button>
                                <button className="item">Beans</button>
                                <button className="item">Beef</button>
                                <button className="item">Avocado</button>
                                <button className="item">Soup</button>
                            </div>
                        </div>
                    </div>
                    <div className="dinner">
                        <h3 class="meal_title">Dinner</h3>
                        <div className="d1">
                            <p>Day 1 - 2</p>
                            <input value={lunch.d1} className="input" 
                                onChange={(e) => {
                                        setDinner({...dinner, d1: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Chicken</button>
                                <button className="item">Beef</button>
                                <button className="item">Potato</button>
                                <button className="item">Rice</button>
                                <button className="item">Tomato</button>
                                <button className="item">Vegetable</button>
                                <button className="item">Pasta</button>
                                <button className="item">Fish</button>
                                <button className="item">Soup</button>
                            </div>
                        </div>
                        <div className="d2">
                            <p>Day 3 - 5</p>
                            <input value={lunch.d2} className="input" 
                                onChange={(e) => {
                                        setDinner({...dinner, d2: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Chicken</button>
                                <button className="item">Beef</button>
                                <button className="item">Potato</button>
                                <button className="item">Rice</button>
                                <button className="item">Tomato</button>
                                <button className="item">Vegetable</button>
                                <button className="item">Pasta</button>
                                <button className="item">Fish</button>
                                <button className="item">Soup</button>
                            </div>
                        </div>
                        <div className="d3">
                            <p>Day 6 - 7</p>
                            <input value={lunch.d3} className="input"
                                onChange={(e) => {
                                        setDinner({...dinner, d3: e.target.value})
                                    } }
                            placeholder="Type in your ingredient here"/>
                            <div className="list">
                                <button className="item">Chicken</button>
                                <button className="item">Beef</button>
                                <button className="item">Potato</button>
                                <button className="item">Rice</button>
                                <button className="item">Tomato</button>
                                <button className="item">Vegetable</button>
                                <button className="item">Pasta</button>
                                <button className="item">Fish</button>
                                <button className="item">Soup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column3">
                <h2>Here is your meal plan for the week</h2>
                <button className="generate_btn" onClick={()=>handleSubmit()}>Generate Your Meal Plan</button>
                <p className="loading_p">
                    {
                        loading && <Loader />
                    }
                </p>
                {
                    !loading && result && <Meal result={result} />
                }
            </div>
        </div>
    )
}

export default MealPlanner
