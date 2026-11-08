'use client'
import {useEffect, useRef} from 'react';

export default function MushroomCursor() {
    const ref = useRef(null);

    useEffect(() => {
       // mouse users only; phone, tablets and touch screen skip this
       if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
       const el = ref.current;
       document.documentElement.classList.add('mush');
       let tx = 0, ty = 0, x = 0, y = 0, tilt = 0, seen = false, raf;
       const move = (e) => {
       tx = e.clientX; ty = e.clientY;
        if (!seen) { seen = true; x = tx; y = ty; el.style.opacity = 1; }
        el.dataset.hot = Boolean(e.target.closest?.('a,button'));
        };
        const down = () => { el.dataset.down = 'true'; };
        const up = () => { el.dataset.down = 'false'; };
        const loop = () => {
        const dx = tx - x;
        x += dx * 0.35;
        y += (ty - y) * 0.35;
        tilt += (Math.max(-25, Math.min(25, dx * 1.2)) - tilt) * 0.2;
        el.style.transform = `translate(${x - 18}px, ${y - 6}px) rotate(${tilt}deg)`;
        raf = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        raf = requestAnimationFrame(loop);

        return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mousedown', down);
        window.removeEventListener('mouseup', up);
        document.documentElement.classList.remove('mush');
        };
    }, []);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="group pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-9 opacity-0"
        >
             <svg
                viewBox="0 0 40 44"
                className="h-full w-full origin-bottom transition-transform group-data-[hot=true]:scale-125 group-data-[down=true]:scale-y-75"
            >
                <path d="M4 22C4 9 12 3 20 3s16 6 16 19c0 2-2 3-4 3H8c-2 0-4-1-4-3z" fill="#e0342b" stroke="#4b2a17" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="13" cy="13" r="3" fill="#fff" />
                <circle cx="25" cy="10" r="2.4" fill="#fff" />
                <circle cx="29" cy="18" r="2" fill="#fff" />
                <path d="M14 25h12v9c0 4-3 7-6 7s-6-3-6-7z" fill="#ffc98a" stroke="#4b2a17" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="17.5" cy="31" r="1.4" fill="#4b2a17" />
                <circle cx="22.5" cy="31" r="1.4" fill="#4b2a17" />
                <path d="M18.5 34q1.5 1.5 3 0" stroke="#4b2a17" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </svg>

        </div>
    )
    
}