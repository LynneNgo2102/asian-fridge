import RecipeFinder from '@/components/containers/RecipeFinder';
import Hills from '@/components/ui/Hills';
import OvalFrame from '@/components/ui/OvalFrame';
import HowItWorks from '@/components/ui/HowItWorks';
import RecipeCard from '@/components/ui/RecipeCard';
import { recipes } from '@/data/mockRecipes';
export default function Home() {
  return (
     <main id="main">
      <div className="px-5 pt-6">
        <OvalFrame>
          <p className="font-medium text-sky">Healthy Asian recipes from your fridge</p>
          <h1 className="text-5xl font-bold text-bark sm:text-7xl">What’s in your fridge?</h1>
        </OvalFrame>
      </div>

      <div id="finder"><RecipeFinder /></div>
      

      <section aria-labelledby="popular-h" className="mx-auto max-w-5xl px-5 py-16">
        <h2 id="popular-h" className="text-3xl font-bold text-bark sm:text-4xl">Popular right now</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {recipes.slice(0, 3).map((r) => <RecipeCard key={r.id} recipe={r} />)}
        </div>
      </section>

      <HowItWorks />
      <Hills />
    </main>
  );
}