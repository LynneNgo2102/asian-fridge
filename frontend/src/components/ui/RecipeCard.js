import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  const { id, title, cuisine, cookMinutes, macros, score, haveCount, totalCount, missing = [] } = recipe;
  const hasMatch = score !== undefined;

  return (
    <article className="relative rounded-3xl border-4 border-bark bg-cream p-5 transition hover:-translate-y-1 hover:-rotate-1 focus-within:ring-4 focus-within:ring-sky">
      <p className="text-sm font-medium text-sky">{cuisine} · {cookMinutes} min</p>

      <h3 className="text-xl font-bold text-bark">
        <Link href={`/recipes/${id}`} className="outline-none after:absolute after:inset-0">
          {title}
        </Link>
      </h3>

      {hasMatch && (
        <p className="mt-1 font-medium text-leaf">
          You have {haveCount} of {totalCount} ingredients ({score}%)
        </p>
      )}

      <p className="mt-2 text-sm">
        {macros.calories} kcal · {macros.protein}g protein · {macros.carbs}g carbs · {macros.fat}g fat
      </p>

      {missing.length > 0 && <p className="mt-2 text-sm">Missing: {missing.join(', ')}</p>}
    </article>
  );
}