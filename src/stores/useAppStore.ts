import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { RecipesSliceTypes, createRecipesSlice } from "./recipeSlice";
import { FavoritesSliceTypes, createFavoritesSlice } from "./favoritesSlice";
import { NotificationSliceTypes, createNotificationSlice } from "./notificationSlice";


//Pasar con ..a, pasa tres argumentos, set, get, api
export const useAppStore = create<RecipesSliceTypes & FavoritesSliceTypes & NotificationSliceTypes>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
