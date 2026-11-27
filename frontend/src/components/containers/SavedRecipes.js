'use client';
import Link from 'next/link';
import RecipeCard from '../ui/RecipeCard';
import useSaved from '@/hooks/useSaved';
import { getRecipeById } from '@/lib/recipes';

export default function SavedRecipes() {
     const {ids, ready} = useSaved();

     if(!ready) return <p className='mt-6'>Loading your saved recipes...</p>;

     const items = ids.map((id) => getRecipeById(id)).filter(Boolean);

     if(items.length === 0) {
        return (
             <div className="mt-6 rounded-3xl border-4 border-dashed border-bark bg-cream p-8 text-center">
                <p className="text-4xl" aria-hidden="true">♡</p>
                <p className="mt-2 font-medium">No saved recipes yet. Tap the heart on any recipe to keep it here.</p>
                <Link href="/#finder" className="mt-4 inline-block rounded-full bg-berry px-5 py-2 font-bold text-white">
                Find recipes
                </Link>
            </div>
        );
     }

        return (
            <>
                <p aria-live="polite" className="mt-2 font-medium">
                    {items.length} saved recipe{items.length === 1 ? '' : 's'}
                </p>
                <h2 className="sr-only">Your saved recipes</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((r) => <RecipeCard key={r.id} recipe={r} />)}
                </div>
            </>
        );
    
}