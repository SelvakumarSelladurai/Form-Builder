export default function StarRating({ field }) {
  const max = field.max || 5;
  const value = field.value || 0;

  return (
    <div className="rating rating-lg pointer-events-none">
      {Array.from({ length: max }).map((_, i) => (
        <input
          key={i}
          type="radio"
          className="mask mask-star bg-yellow-400"
          checked={value === i + 1}
          readOnly
        />
      ))}
    </div>
  );
}
