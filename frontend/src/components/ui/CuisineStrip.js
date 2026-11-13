const cuisines = [
    {name: 'Vietnamese', color: 'bg-bark'},
    {name: 'Thai', color: 'bg-leaf'},
    {name: 'Japanese', color: 'bg-sky'},
    {name: 'Korean', color: 'bg-berry'},
    {name: 'Western', color: 'bg-bark-dark'},
];

export default function CuisineStrip({ cuisines, selected, onSelect }) {
  return (
    <div role="group" aria-label="Filter by cuisine" className="mt-6 flex flex-wrap justify-center gap-5">
      {cuisines.map((c, i) => (
        <button
          key={c.name}
          type="button"
          aria-pressed={selected === c.name}
          onClick={() => onSelect(selected === c.name ? null : c.name)}
          className="group rounded-2xl p-1 text-center"
        >
          <span
            style={{ animationDelay: `${i * 0.35}s` }}
            className={`animate-bob mx-auto block h-16 w-16 rounded-[50%_50%_14%_14%/78%_78%_22%_22%] ${c.color} shadow-[inset_-6px_-8px_0_rgba(0,0,0,0.18),inset_6px_6px_0_rgba(255,255,255,0.2)] transition group-hover:scale-110 group-aria-pressed:scale-125 group-aria-pressed:ring-4 group-aria-pressed:ring-bark-dark`}
          />
          <span className="mt-2 block text-sm font-medium group-aria-pressed:font-bold group-aria-pressed:underline">
            {c.name}
          </span>
        </button>
      ))}
    </div>
  );
}