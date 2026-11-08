export const recipes = [
  {
    id: 1,
    title: 'Lemongrass chicken rice bowl',
    cuisine: 'Vietnamese',
    cookMinutes: 30,
    macros: { calories: 520, protein: 38, carbs: 55, fat: 14, fibre: 4 },
    ingredients: [
      { name: 'chicken' }, { name: 'rice' }, { name: 'lemongrass' },
      { name: 'fish sauce' }, { name: 'garlic' }, { name: 'sesame oil', optional: true },
    ],
  },
  {
    id: 2,
    title: 'Salmon rice bowl',
    cuisine: 'Japanese',
    cookMinutes: 20,
    macros: { calories: 480, protein: 34, carbs: 50, fat: 15, fibre: 3 },
    ingredients: [
      { name: 'salmon' }, { name: 'rice' }, { name: 'soy sauce' },
      { name: 'cucumber' }, { name: 'sesame oil', optional: true },
    ],
  },
  {
    id: 3,
    title: 'Soft tofu stew',
    cuisine: 'Korean',
    cookMinutes: 25,
    macros: { calories: 310, protein: 22, carbs: 14, fat: 18, fibre: 4 },
    ingredients: [
      { name: 'tofu' }, { name: 'egg' }, { name: 'garlic' },
      { name: 'gochugaru' }, { name: 'sesame oil', optional: true },
    ],
  },
];