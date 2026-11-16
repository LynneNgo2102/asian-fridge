import { recipes } from '@/data/mockRecipes';

export const getRecipeById = (id) => recipes.find((r) => r.id === Number(id));
