import { Recipe, RecipeType, CreateRecipeType } from "./recipe";
import { AppError } from './app.error';
import { Store } from "./stores/store.type";

export async function list(store: Store<RecipeType[]>, args: string[]) {
  if(args.length !== 0){
    throw new AppError(`The list command should not have any argument.`);
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const formatted = recipes
    .map((recipe) => `- [${recipe.id}] ${recipe.name}`)
    .join('\n');
  
  console.log('Your recipes:');
  console.log(formatted);
}

export async function details(store: Store<RecipeType[]>, args: string[]) {
  const givenId: number = parseInt(args[0])
  if(args.length !== 1 || isNaN(givenId)){
    throw new AppError(`The ID should be a numeric value and do not give more arguments than 1!`);
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  for(const recipe of recipes){
    if(recipe.id === givenId){
      console.log(`ID: ${recipe.id}\nName: ${recipe.name}`)
    }
  }
}

export async function create(store: Store<RecipeType[]>, args: string[]) {
  const newRecipeName: CreateRecipeType = {name: args[0]};
 
  if(args.length !== 1){
    throw new AppError(`Provide a desired name for the new product.`);
  }

  const recipe = new Recipe(store);
  const recipes = await recipe.setAll();
  const updatedRecipes = await recipe.
  
}