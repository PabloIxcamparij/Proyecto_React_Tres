import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type FavoritesSliceTypes = {
    favorites: Recipe[],
    hadleClickFavorites: (recipe: Recipe) => void,
    favoritesExists: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceTypes> = (set, get) => ({
    favorites: [],
    hadleClickFavorites: (recipe) => {

        if (get().favoritesExists(recipe.idDrink)) {
            console.log('Si existe');

            set((state) =>({
                favorites:state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))

        }else{
            console.log('No existe');
            set((state) =>({
                favorites: [...state.favorites, recipe],
            }))

        }

        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    favoritesExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')

        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites),
            })
            
            console.log("se han cargado el localStorage");
        }
    }
})