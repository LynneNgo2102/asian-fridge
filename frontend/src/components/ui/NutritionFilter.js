export default function NutritionFilter({ filters, active, onToggle}){
    return (
        <div role="group" aria-label="Filter by nutrition, per serving" className="mt-6 flex flex-wrap justify-center gap-3">
            {filters.map((f) => {
                const on = active.includes(f.id);
                return(
                    <button
                        key={f.id}
                        type="button"
                        aria-pressed={on}
                        onClick={() => onToggle(f.id)}
                        className={`rounded-full border-4 border-bark px-4 py-1 font-medium transition hover:-translate-y-0.5 hover:-rotate-2 ${
                        on ? 'bg-bark font-bold text-cream underline' : 'bg-cream text-bark-dark'
                        }`}
                    >
                        {f.label}

                    </button>
                );
            })}
        </div>
    );
}