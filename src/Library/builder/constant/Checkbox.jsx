export default function Checkbox() {
  return (
    <input
      type="checkbox"
      defaultChecked= "false"
      onChange={(e) => onChange?.(e.target.checked)}
      className= "checkbox"
    />
  );
}
