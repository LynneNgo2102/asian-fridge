import Link from 'next/link';
import Hills from '@/components/ui/Hills';
export const metadata = {title: 'Page not found | Fridge Feast'};

export default function NotFound() {
    return (
        <>
            <main id="main" className="mx-auto max-w-xl px-5 py-16 text-center">
            <p className="text-6xl" aria-hidden="true">🍜</p>
            <h1 className="mt-4 text-4xl font-bold text-bark">This page isn’t on the menu</h1>
            <p className="mt-2">We couldn’t find what you were looking for. The recipe may have moved or never existed.</p>
            <Link href="/#finder" className="mt-6 inline-block rounded-full bg-berry px-6 py-3 font-bold text-white">
            Find a recipe
            </Link>
        </main>
        <Hills />
        </>
    )
}