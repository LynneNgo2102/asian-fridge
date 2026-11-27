import { getSwaps } from '@/lib/substitutes';

export default function IngredientChecklist({ ingredients, have = [] }) {
  const tracking = have.length > 0;

  return (
    <ul className="mt-3 grid gap-3">
      {ingredients.map((i) => {
        const owned = tracking && have.includes(i.name);
        const swaps = owned ? [] : getSwaps(i.name, have);

        return (
          <li key={i.name}>
            {tracking &&
              (owned ? (
                <span className="mr-2 rounded-full border-2 border-bark bg-lime px-2 text-xs font-bold">✓ have</span>
              ) : (
                !i.optional && (
                  <span className="mr-2 rounded-full border-2 border-dashed border-bark px-2 text-xs font-bold underline">
                    missing
                  </span>
                )
              ))}
            <span className="font-medium">{i.amount}</span> {i.name}
            {i.optional && <span className="text-sm"> (optional)</span>}
            {swaps.length > 0 && (
              <span className="block text-sm">
                Swap:{' '}
                {swaps.map((s, idx) => (
                  <span key={s.name}>
                    {idx > 0 && ' or '}
                    {s.owned ? <strong>you have {s.name}</strong> : s.name} ({s.note})
                  </span>
                ))}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}