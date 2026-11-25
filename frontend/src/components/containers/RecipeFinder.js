'use client';
import { useState } from 'react';
import IngredientInput from '@/components/ui/IngredientInput';
import IngredientTag from '@/components/ui/IngredientTag';
import RecipeCard from '@/components/ui/RecipeCard';
import CuisineStrip from '@/components/ui/CuisineStrip';
import NutritionFilter from '@/components/ui/NutritionFilter';
import MatchModeToggle from '@/components/ui/MatchModeToggle';
import { recipes } from '@/data/mockRecipes';
import { cuisines } from '@/data/cuisines';
import { matchModes } from '@/data/matchModes';
import { nutritionFilters } from '@/data/nutritionFilters';
import { normalize, rankRecipes } from '@/lib/match';
import { suggest } from '@/lib/suggest';
// FUTURE: status message -> import { buildStatus } from '@/lib/status';

export default function RecipeFinder() {
  const [input, setInput] = useState('');
  const [have, setHave] = useState([]);
  const [cuisine, setCuisine] = useState(null);
  const [mode, setMode] = useState('buy-few');
  const [activeNutrition, setActiveNutrition] = useState([]);

  const addIngredient = (text) => {
    const name = normalize(text);
    if (name && !have.includes(name)) setHave([...have, name]);
    setInput('');
  };

  const toggleNutrition = (id) =>
    setActiveNutrition((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // a recipe must pass every switched-on nutrition rule
  const rules = nutritionFilters.filter((f) => activeNutrition.includes(f.id));
  const pool = recipes.filter(
    (r) => (!cuisine || r.cuisine === cuisine) && rules.every((f) => f.test(r.macros))
  );

  const hasIngredients = have.length > 0;
  const browsing = Boolean(cuisine || rules.length);
  // ingredients entered -> ranked by match; only filters picked -> browse; neither -> nothing yet
  const results = hasIngredients ? rankRecipes(pool, have, mode) : browsing ? pool : [];
  // FUTURE: status message -> const status = buildStatus({ count: results.length, cuisine, hasIngredients });

  // small empty-state hint, so a strict search never ends in silence
  let emptyMessage = '';
  if (results.length === 0 && (hasIngredients || browsing)) {
    if (hasIngredients && mode === 'have-only') {
      emptyMessage =
        'Nothing you can make with only these yet. Add more ingredients, or switch to “I’m willing to buy a few things”.';
    } else if (rules.length || cuisine) {
      emptyMessage = 'No recipes match these filters yet. Try turning one off, or adding another ingredient.';
    } else {
      emptyMessage = 'No recipes match yet. Try adding another ingredient.';
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-10">
      <IngredientInput
        value={input}
        onChange={setInput}
        suggestions={suggest(input, have)}
        onAdd={addIngredient}
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {have.map((name) => (
          <IngredientTag key={name} label={name} onRemove={() => setHave(have.filter((h) => h !== name))} />
        ))}
      </div>

      {hasIngredients && <MatchModeToggle modes={matchModes} selected={mode} onSelect={setMode} />}

      <CuisineStrip cuisines={cuisines} selected={cuisine} onSelect={setCuisine} />
      <NutritionFilter filters={nutritionFilters} active={activeNutrition} onToggle={toggleNutrition} />

      {/* FUTURE: status message goes here ->
          <p aria-live="polite" className="mt-6 text-center font-medium">{status}</p> */}
      <p aria-live="polite" className="mt-6 text-center font-medium">{emptyMessage}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {results.map((r) => <RecipeCard key={r.id} recipe={r} have={have} />)}
      </div>
    </section>
  );
}