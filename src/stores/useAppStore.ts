
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { RecipesSliceTypes, createRecipesSlice } from "./recipeSlice";


//Pasar con ..a, pasa tres argumentos, set, get, api
export const useAppStore = create<RecipesSliceTypes> () (devtools ((...a) => ({
    
    ...createRecipesSlice(...a)

})))