import Link from 'next/link';

export default function Header() {
    return (
        <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-berry">
               Asian Fridge
            </Link>
            <nav aria-label="Main" className="flex gap-5 font-medium">
        <Link href="/#finder" className="hover:underline">Find recipes</Link>
        <Link href="/#how" className="hover:underline">How it works</Link>
      </nav>
    </header>
    );
}