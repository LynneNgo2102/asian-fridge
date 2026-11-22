//per serving rules; change the numbers to whatever
export const nutritionFilters = [
    {id: 'light', label: 'Under 500 kcal', test: (m) => m.calories <= 500 },
    { id: 'protein', label: 'High protein', test: (m) => m.protein >= 25 },
    { id: 'lowcarb', label: 'Low carb', test: (m) => m.carbs <= 30 },
    { id: 'fibre', label: 'High fibre', test: (m) => m.fibre >= 5 },
];   