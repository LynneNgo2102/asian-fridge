'use client';

export default function Error({ reset }) {
    return (
       <main id="main" className="mx-auto max-w-xl px-5 py-16 text-center">
        <p className="text-6xl" aria-hidden="true">🍳</p>
        <h1 className="mt-4 text-4xl font-bold text-bark">Something burned in the kitchen</h1>
        <p className="mt-2">Something went wrong on our side. Please try again.</p>
        <button onClick={() => reset()} className="mt-6 rounded-full bg-berry px-6 py-3 font-bold text-white">
            Try again
        </button>
    </main> 
    );
}