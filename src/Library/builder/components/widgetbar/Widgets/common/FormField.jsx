import Text from "../Text";
import Number from "../Number";
import DateField from "../DateField";
import CheckboxGroup from "../CheckboxGroup";

export default function FormField({ field }) {
  switch (field.type) {
    case "text":
      return <Text field={field} />;
    case "number":
      return <Number field={field} />;
    case "date":
      return <DateField field={field} />;
    case "checkboxGroup":
      return <CheckboxGroup field={field} />;
    default:
      return <div>Unsupported field</div>;
  }
}
