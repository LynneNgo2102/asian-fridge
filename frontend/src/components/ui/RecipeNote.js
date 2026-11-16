export default function RecipeNote({ note }) {
  if (!note) return null;
  return (
    <aside aria-labelledby="note-h" className="mt-6 rounded-3xl border-4 border-dashed border-bark bg-lime/40 p-6">
      <h2 id="note-h" className="text-xl font-bold text-bark">Cook’s note</h2>
      <p className="mt-1">{note}</p>
    </aside>
  );
}