export default function ScaleRating({ field }) {
  const max = field.max || 5;       // Default 5 steps
  const step = 1;                   // Always 1 step
  const value = field.value || 0;   // Current selected value (0 in builder)

  return (
    <div className="w-full max-w-xs select-none pointer-events-none">
      <input
        type="range"
        min={1}
        max={max}
        step={step}
        value={value || 1}
        className="range range-primary"
        readOnly
      />

      {/* Ticks */}
      <div className="flex justify-between px-2.5 mt-2 text-xs">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i}>|</span>
        ))}
      </div>

      {/* Labels (1–max) */}
      <div className="flex justify-between px-2.5 mt-2 text-xs">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
    </div>
  );
}
