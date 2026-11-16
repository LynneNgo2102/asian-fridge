
export default function MacroBar({ label, value, unit, daily }) {
    const pct = Math.min(100, Math.round((value / daily) * 100));

    return(
        <div>
            <div className="flex justify-between font-medium">
            <span>{label}</span>
            <span>
            {value}{unit} <span className="text-sm font-normal">({pct}% DV)</span>
            </span>
            </div>
            <div aria-hidden="true" className="mt-1 h-3 overflow-hidden rounded-full border-2 border-bark bg-sun/40">
                <div className="h-full bg-leaf" style={{ width: `${pct}%` }}>
                </div>
            </div>
        </div>
    );
}