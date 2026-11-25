import Link from 'next/link';
import { notFound } from 'next/navigation';
import NutritionPanel from '@/components/ui/NutritionPanel';
import RecipeNote from '@/components/ui/RecipeNote';
import RecipeGallery from '@/components/ui/RecipeGallery';
import IngredientChecklist from '@/components/ui/IngredientCheckList'
import HeartButton from '@/components/ui/HeartButton';
import Hills from '@/components/ui/Hills';
import { getRecipeById } from '@/lib/recipes';
import { parseHave } from '@/lib/have';
import { scoreRecipe } from '@/lib/match';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  return { title: recipe ? `${recipe.title} | Fridge Feast` : 'Recipe not found' };
}

export default async function RecipePage({ params, searchParams }) {
  const { id } = await params;
  const { have: haveParam } = await searchParams;
  const recipe = getRecipeById(id);
  if (!recipe) notFound();

  const have = parseHave(haveParam);
  const scored = have.length > 0 ? scoreRecipe(recipe, have) : null;

  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-5 py-8">
        <Link href="/#finder" className="font-medium text-sky hover:underline">← Back to recipes</Link>

        <p className="mt-6 font-medium text-sky">
          {recipe.cuisine} · {recipe.cookMinutes} min · serves {recipe.servings}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-bold text-bark sm:text-5xl">{recipe.title}</h1>
          <HeartButton id={recipe.id} title={recipe.title} withLabel />
        </div>

        {scored && (
          <p className="mt-3 text-lg font-bold text-bark-dark">
            You have {scored.haveCount} of {scored.totalCount} ingredients ({scored.score}%).
            {scored.missing.length === 0 && ' You can make this right now.'}
          </p>
        )}

        <RecipeGallery images={recipe.images} title={recipe.title} />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section aria-labelledby="ingredients-h" className="rounded-3xl border-4 border-bark bg-cream p-6">
            <h2 id="ingredients-h" className="text-2xl font-bold text-bark">Ingredients</h2>
            <IngredientChecklist ingredients={recipe.ingredients} have={have} />
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