import Image from 'next/image';
import Link from 'next/link';
import HeartButton from '@/components/ui/HeartButton';
import SubstituteList from '@/components/ui/SubstituteList';
import { recipeHref } from '@/lib/have';

export default function RecipeCard({ recipe, have = [] }) {
  const { id, title, cuisine, cookMinutes, macros, images = [], score, haveCount, totalCount, missing = [], swaps = [] } = recipe;
  const hasMatch = score !== undefined;
  const photo = images[0];

  return (
    <article className="relative overflow-hidden rounded-3xl border-4 border-bark bg-cream p-5 transition hover:-translate-y-1 hover:-rotate-1 focus-within:ring-4 focus-within:ring-sky">
      <HeartButton id={id} title={title} className="absolute right-3 top-3 z-10" />

      <div className="relative -mx-5 -mt-5 mb-4 aspect-[4/3] overflow-hidden border-b-4 border-bark bg-sun/40">
        {photo ? (
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="(min-width: 640px) 380px, 100vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden="true" className="grid h-full place-items-center text-5xl">🍜</div>
        )}
      </div>

      <p className="text-sm font-medium text-sky">{cuisine} · {cookMinutes} min</p>

      <h3 className="text-xl font-bold text-bark">
        <Link href={recipeHref(id, have)} className="outline-none after:absolute after:inset-0">
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
      <SubstituteList swaps={swaps} />
    </article>
  );
}