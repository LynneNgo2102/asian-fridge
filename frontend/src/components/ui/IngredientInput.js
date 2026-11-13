'use client';
import { useState } from 'react';

export default function IngredientInput({value, onChange, suggestions, onAdd}){
    const [active, setActive] = useState(-1);
    const [closed, setClosed] = useState(false);
    const open =  suggestions.length > 0 && !closed;

    const handleChange = (e) => {
        onChange(e.target.value);
        setActive(-1);
        setClosed(false);
    };

    const handleKeyDown = (e) => {
        if(!suggestions.length) return;
        if(e.key === 'ArrowDown'){
            e.preventDefault();
            setClosed(false);
            setActive((a) => (a + 1) % suggestions.length);
        
        } else if(e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((a) => (a <= 0 ? suggestions.length - 1 : a - 1));
        } else if(e.key === 'Escape') {
            setClosed(true);
            setActive(-1);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        onAdd(open && active >= 0 ? suggestions [active] : value);
        setActive(-1);
    
    };

    return (
        <form onSubmit={submit} className="flex gap-2">
            <div className="relative flex-1">
                <input
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="chicken, rice, tofu…"
                aria-label="Add an ingredient"
                role="combobox"
                aria-expanded={open}
                aria-controls="ingredient-options"
                aria-autocomplete="list"
                aria-activedescendant={open && active >= 0 ? `ingredient-option-${active}` : undefined}
                autoComplete="off"
                className="w-full rounded-full border-4 border-bark bg-cream px-4 py-2"
                />
                {open && (
                <ul
                    id="ingredient-options"
                    role="listbox"
                    aria-label="Ingredient suggestions"
                    className="absolute z-10 mt-2 w-full overflow-hidden rounded-2xl border-4 border-bark bg-cream"
                >
                    {suggestions.map((s, i) => (
                    <li
                        key={s}
                        id={`ingredient-option-${i}`}
                        role="option"
                        aria-selected={i === active}
                        onMouseDown={(e) => {
                        e.preventDefault(); // keep focus in the input
                        onAdd(s);
                        setActive(-1);
                        }}
                        className={`px-4 py-2 ${i === active ? 'bg-sun font-bold' : 'hover:bg-sun/60'}`}
                    >
                        {s}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            <button className="rounded-full bg-berry px-5 font-bold text-white">Add</button>
            <p className="sr-only" aria-live="polite">{open ? `${suggestions.length} suggestions available` : ''}</p>
        </form>
    );
}