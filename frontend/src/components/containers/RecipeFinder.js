'use client';

import { useState } from 'react';
import IngredientTag from '@/components/ui/IngredientTag';
import RecipeCard from '@/components/ui/RecipeCard';
import { recipes } from '@/data/mockRecipes';
import {normalize, rankRecipes } from '@/lib/match';

export default function RecipeFinder() {
    const [input, setInput] = useState('');
    const [have, setHave] = useState([]);

    const addIngredient = (e) => {
        e.preventDefault();
        const name =normalize(input);
        if(name && !have.includes(name)) setHave([...have, name]);
        setInput('');
    };

    const results = rankRecipes(recipes, have);

    return (
        <section className="mx-auto max-w-3xl px-5 py-10">
            
            <form onSubmit={addIngredient} className="mt-4 flex gap-2">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="chicken, rice, tofu…"
                aria-label="Add an ingredient"
                className="flex-1 rounded-full border-4 border-bark bg-cream px-4 py-2"
                />
                <button className="rounded-full bg-berry px-5 font-bold text-white">Add</button>
      
            </form>

            <div className="mt-4 flex flex-wrap gap-2">
                 {have.map((name) => (
                    <IngredientTag key={name} label={name} onRemove={() => setHave(have.filter((h) => h !== name))} />
                ))}
            </div>

            <div className='mt-8 grid gap-5 sm:grid-cols-2'>
                {results.map((r) => (
                    <RecipeCard key={r.title} recipe={r} />
                ))}
            </div>
            {have.length > 0 && results.length === 0 && <p className="mt-8">No matches yet. Try adding rice or tofu</p>}
        </section>    
        
    
    );

}