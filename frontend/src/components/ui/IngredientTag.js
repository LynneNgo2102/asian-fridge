export default function IngredientTag({ label, onRemove }) {
    return (
       <span className="inline-flex items-center gap-2 rounded-2xl border-4 border-bark bg-cream px-3 py-1 font-medium transition hover:-rotate-2">
        {label}
        <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${label}`}
            className="rounded-full bg-berry px-2 text-sm font-bold text-white hover:animate-[hop_0.6s]"
        >
            ×
        </button>
        </span>
    );
}