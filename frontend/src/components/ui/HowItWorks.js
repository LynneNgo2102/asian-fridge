const steps = [
    { icon: '🥕', title: 'Add what you have', text: 'Type the ingredients sitting in your fridge and pantry.' },
    { icon: '🍜', title: 'See what you can cook', text: 'We rank healthy recipes by how many ingredients you already own.' },
    { icon: '🛒', title: 'Grab only what’s missing', text: 'Missing items are listed separately, with swaps where they make sense.' },

];

export default function HowItWorks() {
    return (
        <section id="how" aria-labelledby="how-h" className="bg-lime px-5 py-16">
             <div className="mx-auto max-w-5xl">
                <h2 id="how-h" className="text-3xl font-bold text-bark-dark sm:text-4xl">How it works</h2>
                <ol className="mt-8 grid gap-5 sm:grid-cols-3">
                {steps.map((s) => (
                    <li key={s.title} className="group rounded-3xl border-4 border-bark bg-cream p-6 transition hover:-rotate-1 hover:-translate-y-1">
                    <span aria-hidden="true" className="inline-block text-4xl group-hover:animate-hop">{s.icon}</span>
                    <h3 className="mt-2 text-xl font-bold text-bark">{s.title}</h3>
                    <p>{s.text}</p>
                    </li>
                ))}
                </ol>
            </div>
        </section>
    )
}

