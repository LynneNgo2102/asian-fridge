'use client';

import { useState } from 'react';
import IngredientInput from '@/components/ui/IngredientInput';
import IngredientTag from '@/components/ui/IngredientTag';
import RecipeCard from '@/components/ui/RecipeCard';
import CuisineStrip from '@/components/ui/CuisineStrip';
import { recipes } from '@/data/mockRecipes';
import { cuisines } from '@/data/cuisines';
import {normalize, rankRecipes } from '@/lib/match';
import { suggest } from '@/lib/suggest';

export default function RecipeFinder() {
  const [input, setInput] = useState('');
  const [have, setHave] = useState([]);
  const [cuisine, setCuisine] = useState(null);

  const addIngredient = (e) => {
    e.preventDefault();
    const name = normalize(input);
    if (name && !have.includes(name)) setHave([...have, name]);
    setInput('');
  };

  const pool = cuisine ? recipes.filter((r) => r.cuisine === cuisine) : recipes;
  // ingredients entered -> ranked by match; only a cuisine picked -> browse that cuisine
  const results = have.length > 0 ? rankRecipes(pool, have) : cuisine ? pool : [];

  let status = '';
  if (have.length > 0 || cuisine) {
    status = results.length
      ? `${results.length} ${cuisine || ''} recipe${results.length === 1 ? '' : 's'} found`.replace('  ', ' ')
      : `No ${cuisine || ''} recipes match yet. Try adding another ingredient.`.replace('  ', ' ');
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

      <CuisineStrip cuisines={cuisines} selected={cuisine} onSelect={setCuisine} />

      <p aria-live="polite" className="mt-6 text-center font-medium">{status}</p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2">
        {results.map((r) => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </section>
  );
}