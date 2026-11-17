'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function RecipeGallery({images = [], title}){
    const [active, setActive] = useState(0);
    if(images.length === 0) {
        return (
            <div
            role="img"
            aria-label={`No photo of ${title} yet`}>
                <span aria-hidden="true">🍜</span>
            </div>
        );
    }

    const current = images[active];

    return(
        <section aria-label='Photo gallery' className='mt-6'>
            <div className='relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-bark bg-cream'>
                <Image
                src={current.src}
                alt={current.alt}
                fill
                priority
                sizes='(min-width: 768px) 768px, 100vw'
                className='object-cover'
                />
            </div>
            {images.length > 1 && (
                <ul className="mt-3 flex flex-wrap gap-3">
                    {images.map((img, i) => (
                    <li key={img.src}>
                    <button
                            type="button"
                            onClick={() => setActive(i)}
                            aria-label={`Show photo ${i + 1} of ${images.length}`}
                            aria-pressed={i === active}
                            className={`relative block h-16 w-20 overflow-hidden rounded-xl border-4 transition ${
                            i === active ? 'border-berry ring-2 ring-berry -translate-y-1' : 'border-bark hover:-translate-y-1'
                            }`}
                        >
                    <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                </li>
               ))}
            </ul>
        )}
        </section>
    );
}