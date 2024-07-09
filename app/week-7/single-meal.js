export default function SingleMeal({ mealObj }) {
  const { idMeal, strMeal, strMealThumb } = mealObj;

  return (
    <div>
      <h2 className="font-border text-xl">Meal Ideas</h2>
      <p>
        {/* {ingredientSelected === undefined
          ? "No meal ideas for you"
          : ingredientSelected == True
          ? `Here are some meal ideas using {ingredient}:`
          : `No meals for ${ingredient}`} */}
      </p>
      <ul>
        <li className="font-border">{strMeal}</li>
      </ul>
    </div>
  );
}
