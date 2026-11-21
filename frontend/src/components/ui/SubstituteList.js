export default function SubstituteList({swaps = []}) {
    if(swaps.length === 0) return null;

    return (
        <ul className="mt-2 grid gap-1 text-sm">
            {swaps.map(({ ingredient, options })=> (
                <li key={ingredient}>
                    <span className="font-medium">No {ingredient}?</span>{' '}
                    {options.map((o, i) => (
                        <span key={o.name}>
                        {i > 0 && ' or '}
                        {o.owned ? <strong>you have {o.name}</strong> : o.name} ({o.note})
                        </span>
                    ))}
                </li>
            ))}
        </ul>
    );
}