import React from "react"
import { meal, recipe } from "../dummy/data"



const Home = () => {



  return (
    <div className="p-2 space-y-3">

      <h1 className="text-xl font-bold">{recipe.name}</h1>
      <div className="img">
        <img className='h-[200px] w-[200px]' src={recipe.image} alt="" />
      </div>
      <ol>
        {recipe.ingredients.map((ing, i) => {
          return <li key={i}>{`${i + 1}.${ing}`}</li>
        })}
      </ol>

      <h1 className="text-xl font-bold">{recipe.name}</h1>
      <ol>
        {recipe.instructions.map((ins, i) => {
          return <li key={i}>
            {`${i + 1}.${ins}`}
          </li>
        })}
      </ol>

      <h1 className="text-xl font-bold">MEAL</h1>

      <ol>
        <h1>Meal</h1>
        <li>id:{meal.idMeal}</li>
        <li>Meal:{meal.strMeal}</li>
        <li>Category:{meal.strCategory}</li>
        <li>Area:{meal.strArea}</li>
        <li>Instructions:{meal.strInstructions}</li>
        <div>
          <img src={meal.strMealThumb} alt="" />
        </div>
        <li>{meal.strTags}</li>
        <li>{meal.strIngredient1}</li>

      </ol>

















    </div>
  )
}
export default Home


