import { getSwaps } from "./substitutes";
export const aliases = {
  'chicken breast': 'chicken',
  'chicken thigh': 'chicken',
  eggs: 'egg',
  'jasmine rice': 'rice',
  'white rice': 'rice',
};

// "willing to buy a few" = up to this many missing required ingredients
export const MAX_MISSING = 3;

export const normalize = (text) => {
  const t = text.trim().toLowerCase();
  return aliases[t] || t;
};

export function scoreRecipe(recipe, have) {
  const required = recipe.ingredients.filter((i) => !i.optional);
  const owned = required.filter((i) => have.includes(i.name));
  const missing = required.filter((i) => !have.includes(i.name)).map((i) => i.name);
  const swaps = missing
      .map((name) => ({ingredient: name, options: getSwaps(name, have) }))
      .filter((s) => s.options.length > 0);
  return {
    ...recipe,
    score: Math.round((owned.length / required.length) * 100),
    haveCount: owned.length,
    totalCount: required.length,
    missing,
    swaps,
  };
}

// mode: 'have-only' | 'buy-few'
export function rankRecipes(recipes, have, mode = 'buy-few') {
  return recipes
    .map((r) => scoreRecipe(r, have))
    .filter((r) => r.haveCount > 0)
    .filter((r) => (mode === 'have-only' ? r.missing.length === 0 : r.missing.length <= MAX_MISSING))
    .sort((a, b) => b.score - a.score || a.cookMinutes - b.cookMinutes);
}