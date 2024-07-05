import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import type { Categories, Drinks, Searchfilter, Drink, Recipe } from "../types"

export type RecipesSliceTypes = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchfilter: Searchfilter) => Promise<void>
    selectRecipe:  (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceTypes> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    //Se le incluyen de manera virtual, como un voto de confianza de que se incluiran
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {

        const categories = await getCategories()

        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id) =>{
        const selectedRecipe = await getRecipesById(id)
        set({
            selectedRecipe
        })
    }
})