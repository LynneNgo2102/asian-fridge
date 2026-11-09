const cuisines = [
    {name: 'Vietnamese', color: 'bg-bark'},
    {name: 'Thai', color: 'bg-leaf'},
    {name: 'Japanese', color: 'bg-sky'},
    {name: 'Korean', color: 'bg-berry'},
    {name: 'Western', color: 'bg-bark-dark'},
];

export default function CuisineStrip() {
    return (
         <ul aria-label="Cuisines we cover" className="mt-8 flex flex-wrap justify-center gap-6 px-5">
            {cuisines.map((c, i) => (
                <li key={c.name} className="text-center">
                <div
                    style={{ animationDelay: `${i * 0.35}s` }}
                    className={`animate-bob mx-auto h-16 w-16 rounded-[50%_50%_14%_14%/78%_78%_22%_22%] ${c.color} shadow-[inset_-6px_-8px_0_rgba(0,0,0,0.18),inset_6px_6px_0_rgba(255,255,255,0.2)]`}
                />
                <span className="mt-2 block text-sm font-medium">{c.name}</span>
                </li>
            ))}
        </ul>
    )
}