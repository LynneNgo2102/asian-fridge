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
            <h1 className= "text-4xl font-bold text-bark">What's in your fridge?</h1>

        </section>    
        
    
    )
}