const express = require("express");
const router = express.Router();
const axios = require("axios");
// Get recipe function
const getRecipe = async (mealType, ingredients) => {
    const options = {
        method: 'GET',
        url: `https://recipe-finder3.p.rapidapi.com/${mealType}/recipes`,
        // Ingredients are dynamically fetch from the request body
        params: {ingredient: ingredients},
        headers: {
            'X-RapidAPI-Key': '9f3f4ed964mshb5c6a0c7a4e5b42p12e0e7jsn0de10453c1c9',
            'X-RapidAPI-Host': 'recipe-finder3.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch(error) {
        console.log(error);
    }
}
router.post('/', async (req, res) => {
    const {breakfast, lunch, dinner} = req.body;

    const {b1, b2, b3} = breakfast;
    // Get three recipes for breakfast
    const b_meal1 = await getRecipe("breakfast", b1);
    const b_meal2 = await getRecipe("breakfast", b2);
    const b_meal3 = await getRecipe("breakfast", b3);

    const {l1, l2, l3} = lunch;
    // Get three recipes for lunch
    const l_meal1 = await getRecipe("lunch", l1);
    const l_meal2 = await getRecipe("lunch", l2);
    const l_meal3 = await getRecipe("lunch", l3);

    const {d1, d2, d3} = dinner;
    // Get three recipe for dinner
    const d_meal1 = await getRecipe("dinner", d1);
    const d_meal2 = await getRecipe("dinner", d2);
    const d_meal3 = await getRecipe("dinner", d3)
    res.json({
        breakfast:[b_meal1, b_meal2, b_meal2],
        lunch: [l_meal1, l_meal2, l_meal3],
        dinner: [d_meal1, d_meal2, d_meal3]
    });
})

module.exports = router;