const express = require("express");
const app = express();
const cors = require("cors");
// Import Route
const recipenRoute = require("./routes/recipes_route");
const mealPlannerRouter = require("./routes/meal_planner_route");
// Configuration
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req,res) => {
    res.send("Reach end point recipe");
})
app.use("/recipe", recipenRoute);
app.use("/meal-planner", mealPlannerRouter);
// Start the server
const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}...`))