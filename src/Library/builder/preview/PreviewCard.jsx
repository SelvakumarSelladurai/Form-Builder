export default function PreviewCard({ label, children }) {
  return (
    <div className="w-full bg-gray-100 p-2 rounded-xl shadow-sm border border-gray-200 mb-2">

      <div className="text-[12px] font-semibold text-gray-900 mb-1 text-left">
        {label}
      </div>

      
        {children}

    </div>
  );
}
