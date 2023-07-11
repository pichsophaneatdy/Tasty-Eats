const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get Breakfast Route
router.post("/breakfast", async (req,res) => {
    const {ingredients} = req.body; 
    // option
    const options = {
        method: 'GET',
        url: 'https://recipe-finder3.p.rapidapi.com/breakfast/recipes',
        // Ingredients are dynamically fetch from the request body
        params: {ingredient: ingredients},
        headers: {
            'X-RapidAPI-Key': '9f3f4ed964mshb5c6a0c7a4e5b42p12e0e7jsn0de10453c1c9',
            'X-RapidAPI-Host': 'recipe-finder3.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch(error) {
        console.log(error);
    }
})
// Get Lunch Route
router.post("/lunch", async (req,res) => {
    const {ingredients} = req.body; 
    // option
    const options = {
        method: 'GET',
        url: 'https://recipe-finder3.p.rapidapi.com/lunch/recipes',
        // Ingredients are dynamically fetch from the request body
        params: {ingredient: ingredients},
        headers: {
            'X-RapidAPI-Key': '9f3f4ed964mshb5c6a0c7a4e5b42p12e0e7jsn0de10453c1c9',
            'X-RapidAPI-Host': 'recipe-finder3.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch(error) {
        console.log(error);
    }
})
// Get Dinner Route
router.post("/dinner", async (req,res) => {
    const {ingredients} = req.body; 
    // option
    const options = {
        method: 'GET',
        url: 'https://recipe-finder3.p.rapidapi.com/dinner/recipes',
        // Ingredients are dynamically fetch from the request body
        params: {ingredient: ingredients},
        headers: {
            'X-RapidAPI-Key': '9f3f4ed964mshb5c6a0c7a4e5b42p12e0e7jsn0de10453c1c9',
            'X-RapidAPI-Host': 'recipe-finder3.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch(error) {
        console.log(error);
    }
})
module.exports = router;
