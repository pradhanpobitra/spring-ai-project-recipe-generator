import React, { useState } from "react";

function RecipeGenerator() {
    const [recipe, setRecipe] = useState('');
    const [inputIngredients, setInputIngredients] = useState('');
    const [inputCuisine, setInputCuisine] = useState('');
    const [inputDietaryRestrictions, setInputDietaryRestrictions] = useState('');

    const generateRecipe = async () => {
        try {
            const respone = await fetch("http://localhost:8080/generate-recipe", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ingredients: inputIngredients,
                    cuisine: inputCuisine,
                    dietaryRestrictions: inputDietaryRestrictions
                })
            });
            const data = respone.text();
            setRecipe(data);
        } catch(ex) {
            console.error(ex);
        }
    }

    return (
        <div>
            <h3>Create a Recipe</h3>
            <input type="text" placeholder="Enter your ingredients" value={inputIngredients} onChange={e => setInputIngredients(e.target.value)}></input>
            <input type="text" placeholder="Enter the preferred cuisine" value={inputCuisine} onChange={e => setInputCuisine(e.target.value)}></input>
            <input type="text" placeholder="Enter any dietary restrictions" value={inputDietaryRestrictions} onChange={e => setInputDietaryRestrictions(e.target.value)}></input>
            
            <button onClick={generateRecipe}>Generate a Recipe!</button>

            <div className="output">
                <pre className="recipe-text">{recipe}</pre>
            </div>
        </div>
        
    );
}

export default RecipeGenerator;