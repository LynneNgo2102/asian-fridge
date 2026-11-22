'use client'
import Link from 'next/link';
import useSaved from '@/hooks/useSaved';

export default function SavedLink() {
    const { ids, ready } = useSaved;
    const count = ready ? ids.length : 0;

    return (
        <Link href="/saved" className="hover:underline">
            Saved{count > 0 && ` (${count})`}
        </Link>
    );
}