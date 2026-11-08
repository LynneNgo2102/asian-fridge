export default function Hills() {
  return (
    <div aria-hidden="true" className="relative mt-10 h-40 overflow-hidden sm:h-56">
      <span className="animate-drift absolute top-4 h-7 w-24 rounded-full bg-white/90" />
      <svg viewBox="0 0 1200 240" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M0 110 Q150 30 320 100 T640 90 T960 70 T1200 100 V240 H0Z" fill="#8fd14f" />
        <path d="M0 160 Q200 90 420 150 T800 140 T1200 150 V240 H0Z" fill="#4fa83d" />
        <path d="M0 215 Q300 170 600 205 T1200 195 V240 H0Z" fill="#b5e03a" />
      </svg>
    </div>
  );
}