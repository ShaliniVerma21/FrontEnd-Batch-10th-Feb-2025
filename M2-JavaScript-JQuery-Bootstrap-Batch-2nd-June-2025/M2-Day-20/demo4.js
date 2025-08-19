//4.Recipe Management System
class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }

    displayRecipe() {
        console.log(`Recipe: ${this.name}`);
        console.log("Ingredients:", this.ingredients.join(", "));
    }
}

class RecipeManager {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
        console.log(`Recipe added: ${recipe.name}`);
    }

    listRecipes() {
        this.recipes.forEach(recipe => recipe.displayRecipe());
    }
}

const recipeManager = new RecipeManager();
recipeManager.addRecipe(new Recipe('Pasta', ['Noodles', 'Tomato Sauce', 'Cheese']));
recipeManager.addRecipe(new Recipe('Salad', ['Lettuce', 'Tomato', 'Cucumber']));
recipeManager.listRecipes();