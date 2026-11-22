import SavedRecipes from '@/components/containers/SavedRecipes';
import Hills from '@/components/ui/Hills';

export const metadata = { title: 'Saved recipes | Fridge Feast' };

export default function SavedPage() {
  return (
    <>
      <main id="main" className="mx-auto max-w-5xl px-5 py-8">
        <h1 className="text-4xl font-bold text-bark sm:text-5xl">Saved recipes</h1>
        <SavedRecipes />
      </main>
      <Hills />
    </>
  );
}