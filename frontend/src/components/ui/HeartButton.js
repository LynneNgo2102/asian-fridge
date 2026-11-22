'use client';
import useSaved from '@/hooks/useSaved';

export default function HeartButton({ id, title, withLabel = false, className = '' }) {
  const { isSaved, toggle } = useSaved();
  const saved = isSaved(id);

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={saved}
      aria-label={`Save ${title}`}
      className={`inline-flex items-center gap-2 rounded-full border-4 border-bark bg-cream px-3 py-1 font-bold text-berry transition hover:-rotate-6 hover:scale-110 focus-visible:ring-4 focus-visible:ring-sky ${className}`}
    >
      <span aria-hidden="true" className={saved ? 'animate-hop' : ''}>{saved ? '♥' : '♡'}</span>
      {withLabel && <span aria-hidden="true" className="text-bark-dark">{saved ? 'Saved' : 'Save'}</span>}
    </button>
  );
}