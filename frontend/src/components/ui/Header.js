import Link from 'next/link';
import SavedLink from '@/components/ui/SavedLink';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
      <Link href="/" className="text-2xl font-bold tracking-tight text-berry">fridge feast</Link>
      <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-1 font-medium">
        <Link href="/#finder" className="hover:underline">Find recipes</Link>
        <Link href="/#how" className="hover:underline">How it works</Link>
        <SavedLink />
      </nav>
    </header>
  );
}