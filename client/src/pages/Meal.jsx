import React, {useState} from 'react';
import "./Meal.scss";

const Meal = ({result}) => {
    const {breakfast, lunch, dinner} = result;
    const [show, setShow] = useState(false);
    return (
        <div className="mealplan">
            <button onClick={()=>setShow(!show)} className="instruction">Show Instructions</button>
            <div className="breakfast">
                <h2>Breakfast</h2>
                {
                    breakfast?.map((item,index) => {
                        return (
                            <div className="food_item">
                                <p className="food">{item?.name}</p>
                                <p className="ingre">Ingredients</p>
                                {
                                    item?.ingredients?.map((ingre) => {
                                        return <p class="text">{ingre}</p>;
                                    })
                                }
                                <p className="ingre">{show && "Instructions"}</p>
                                {
                                    show && item?.instructions?.map((ingre) => {
                                        return <p class="text">{ingre}</p>;
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="lunch">
                <h2>Lunch</h2>
                {
                    lunch?.map((item) => {
                        return (
                            <div className="food_item">
                                <p className="food">{item?.name}</p>
                                <p className="ingre">Ingredients</p>
                                {
                                    item?.ingredients?.map((ingre) => {
                                        return <p className="text">{ingre}</p>;
                                    })
                                }
                                <p className="ingre">{show && "Instructions"}</p>
                                {
                                    show && item?.instructions?.map((ingre) => {
                                        return <p class="text">{ingre}</p>;
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="dinner">
                <h2>Dinner</h2>
                {
                    dinner?.map((item) => {
                        return (
                            <div className="food_item">
                                <p className="food">{item?.name}</p>
                                <p className="ingre">Ingredients</p>
                                {
                                    item?.ingredients?.map((ingre) => {
                                        return <p class="text">{ingre}</p>;
                                    })
                                }
                                <p className="ingre">{show && "Instructions"}</p>
                                {
                                    show && item?.instructions?.map((ingre) => {
                                        return <p class="text">{ingre}</p>;
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Meal
