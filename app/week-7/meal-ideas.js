"use client";
import { useEffect, useState } from "react";

export default function MealIdeas() {
  // const { idMeal, strMeal, strMealThumb } = mealObj;
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      //console.dir(data);
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    (async () => {
      if (ingredient != null && ) {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
      }
    })
    fetchMealIdeas();
  }, []);

  async function loadMealIdeas() {
    try {
      const data = await fetchMealIdeas(ingredient);
      setMeals(data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  //constructor for ingredient and measures// amount is not sure
  // const recipeDetail = [];
  // for (let i = 0; i < meals.length; i++) {
  //   const ingredient = meals[`strIngredient${i}`];
  //   const measure = meals[`strMeasure${i}`];
  //   if (ingredient !== "" && ingredient !== null) {
  //     recipeDetail.push(`${ingredient} (${measure})`);
  //   }
  // }

  //能够得到ID，但是这部分只有idMeal,strMeal, strMealThumb，没有它需要的ingredient

  // useEffect(() => {
  //   if (ingredient != null) {
  //     loadMealIdeas();
  //   }
  // }, []);

  return (
    <div>
      <h3>Meal Ideas</h3>
      <p>
        {/* {meals.length > 0 && ingredient !== undefined
          ? `Here are some meal ideas using }:`
          : `No meals for  $}`} */}
      </p>

      <ul>
        <li>
          {loadMealIdeas.map((item) => (
            <li>{item.strMeal}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}
