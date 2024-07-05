import { z } from "zod";
import { CategoriesAPIResponseSchema, SearchFilterSchema, DriksAPIResponse, DrikAPIResponse, RecipeAPIResponseSchema } from '../schemas/recipe-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type Searchfilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DriksAPIResponse>
export type Drink = z.infer<typeof DrikAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
