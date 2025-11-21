export default function Photo({ field }) {
  const buttonColor = field.buttonColor || "bg-blue-500";

  return (
    <div className="mb-3">
      <button
        type="button"
        className={`btn ${buttonColor} text-white px-6 font-medium rounded-md cursor-not-allowed`}
        disabled
      >
        Photo
      </button>
    </div>
  );
}
