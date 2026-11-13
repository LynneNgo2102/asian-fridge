import { recipes } from '@/data/mockRecipes';
import { aliases, normalize } from '@/lib/match';
//every ingredient name used in recipes, plus alias spellings like chicken breast
const allNames = [
    ...new Set([
        ...recipes.flatMap((r) => r.ingredients.map((i) => i.name)),
        ...Object.keys(aliases),
    ]),
].sort();

export function suggest(query, have) {
    const q = query.trim().toLowerCase();
    if(!q) return  [];

    return allNames
        .filter((name) => name.includes(q) && !have.includes(normalize(name)))
        .sort((a, b) => Number(b.startsWith(q)) - Number(a.startsWith(q)))
        .slice(0, 6);
        
}