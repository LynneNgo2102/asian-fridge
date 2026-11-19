export default function MatchModeToggle({ modes, selected, onSelect }) {
  return (
    <fieldset className="mt-6 flex flex-wrap justify-center gap-3">
      <legend className="sr-only">How strict should the matching be?</legend>
      {modes.map((m) => (
        <div key={m.value}>
          <input
            type="radio"
            id={`mode-${m.value}`}
            name="match-mode"
            value={m.value}
            checked={selected === m.value}
            onChange={() => onSelect(m.value)}
            className="peer sr-only"
          />
          <label
            htmlFor={`mode-${m.value}`}
            className="block cursor-pointer rounded-full border-4 border-bark bg-cream px-4 py-1 font-medium transition hover:-translate-y-0.5 peer-checked:bg-bark peer-checked:font-bold peer-checked:text-cream peer-checked:underline peer-focus-visible:ring-4 peer-focus-visible:ring-sky"
          >
            {m.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
}