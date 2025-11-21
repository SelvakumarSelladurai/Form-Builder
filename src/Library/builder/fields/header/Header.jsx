export default function Header({ field }) {
  const Tag = field.headingType || "h2";

  return (
    <Tag className="font-bold text-gray-800">
    </Tag>
  );
}
