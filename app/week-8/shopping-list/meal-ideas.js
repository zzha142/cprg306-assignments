"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  let listStyle =
    "font-bold text-l rounded-md py-2 px-2 m-1 bg-orange-200 w-1/3";
  let textStyle = "text-xl";
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  //
  async function loadMealIdeas() {
    try {
      const mealsData = await fetchMealIdeas(ingredient);
      setMeals(mealsData);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  //constructor for ingredient and measures// amount is not sure
  // const recipeDetail = [];
  // for (let i = 0; i < meals.length; i++) {
  //   const ingredient = meals[`strIngredient${i}`];
  //   const measure = meals[`strMeasure${i}`];
  //   if (ingredient !== "" && ingredient !== null) {
  //     recipeDetail.push(`${ingredient} (${measure})`);
  //   }
  // }

  return (
    <div>
      <h3 className="font-bold text-xl">Meal Ideas</h3>
      <ul>
        {meals && meals.length > 0 ? (
          <>
            <p className={textStyle}>
              Here are some meal ideas using {ingredient}
            </p>
            {meals.map((meal) => (
              <li className={listStyle} key={meal.idMeal}>
                {meal.strMeal}
              </li>
            ))}
          </>
        ) : (
          <p className={textStyle}>
            {ingredient
              ? `No meal ideas found for ${ingredient}`
              : "Select an item to see meal ideas."}
          </p>
        )}
      </ul>
    </div>
  );
}
