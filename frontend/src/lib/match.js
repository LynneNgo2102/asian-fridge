const aliases = {
  'chicken breast': 'chicken',
  'chicken thigh': 'chicken',
  eggs: 'egg',
  'jasmine rice': 'rice',
  'white rice': 'rice',
};

export const normalize = (text) => {
  const t = text.trim().toLowerCase();
  return aliases[t] || t;
};

export function scoreRecipe(recipe, have) {
  const required = recipe.ingredients.filter((i) => !i.optional);
  const owned = required.filter((i) => have.includes(i.name));
  const missing = required.filter((i) => !have.includes(i.name)).map((i) => i.name);
  return {
    ...recipe,
    score: Math.round((owned.length / required.length) * 100),
    haveCount: owned.length,
    totalCount: required.length,
    missing,
  };
}

export function rankRecipes(recipes, have) {
  return recipes
    .map((r) => scoreRecipe(r, have))
    .filter((r) => r.haveCount > 0)
    .sort((a, b) => b.score - a.score);
}