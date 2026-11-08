export default function OvalFrame({ children }) {
  return (
    <div className="mx-auto max-w-3xl rounded-[50%/60%_60%_50%_50%] border-[10px] border-bark bg-cream px-8 pb-16 pt-14 text-center shadow-[inset_0_0_0_4px_#fff3a6]">
      {children}
    </div>
  );
}