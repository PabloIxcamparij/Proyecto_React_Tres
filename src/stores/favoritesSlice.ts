import { StateCreator } from "zustand";
import { Recipe } from "../types";
import {
  createNotificationSlice,
  NotificationSliceTypes,
} from "./notificationSlice";

export type FavoritesSliceTypes = {
  favorites: Recipe[];
  hadleClickFavorites: (recipe: Recipe) => void;
  favoritesExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceTypes & NotificationSliceTypes,
  [],
  [],
  FavoritesSliceTypes
> = (set, get, api) => ({
  favorites: [],

  hadleClickFavorites: (recipe) => {
    if (get().favoritesExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));

      createNotificationSlice(set, get, api).showNotification({
        text: "Se elimino de favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));

      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego a favoritos",
        error: false,
      });
    }

    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },

  favoritesExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },

  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});
