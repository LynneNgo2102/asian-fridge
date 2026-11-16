import Link from 'next/link';
import { notFound } from 'next/navigation';
import NutritionPanel from '@/components/ui/NutritionPanel';
import RecipeNote from '@/components/ui/RecipeNote';
import Hills from '@/components/ui/Hills';
import { getRecipeById } from '@/lib/recipes';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  return { title: recipe ? `${recipe.title} | Fridge Feast` : 'Recipe not found' };
}

export default async function RecipePage({ params }) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) notFound();

  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-5 py-8">
        <Link href="/#finder" className="font-medium text-sky hover:underline">← Back to recipes</Link>

        <p className="mt-6 font-medium text-sky">
          {recipe.cuisine} · {recipe.cookMinutes} min · serves {recipe.servings}
        </p>
        <h1 className="text-4xl font-bold text-bark sm:text-5xl">{recipe.title}</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section aria-labelledby="ingredients-h" className="rounded-3xl border-4 border-bark bg-cream p-6">
            <h2 id="ingredients-h" className="text-2xl font-bold text-bark">Ingredients</h2>
            <ul className="mt-3 grid gap-2">
              {recipe.ingredients.map((i) => (
                <li key={i.name}>
                  <span className="font-medium">{i.amount}</span> {i.name}
                  {i.optional && <span className="text-sm"> (optional)</span>}
                </li>
              ))}
            </ul>
          </section>

          <NutritionPanel macros={recipe.macros} servings={recipe.servings} />
        </div>

        <RecipeNote note={recipe.note} />

        <section aria-labelledby="steps-h" className="mt-6 rounded-3xl border-4 border-bark bg-cream p-6">
          <h2 id="steps-h" className="text-2xl font-bold text-bark">Method</h2>
          <ol className="mt-3 grid list-decimal gap-3 pl-6">
            {recipe.steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </section>
      </main>

      <Hills />
    </>
  );
}