import PreviewCard from "./PreviewCard";
import CheckboxGroupPreview from "../fields/checkboxGroup/preview/CheckboxGroupPreview";
import DatePreview from "../fields/date/preview/DatePreview";

export default function Preview({ fields }) {
  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => {
        switch (field.type) {
          case "checkboxGroup":
            return (
              <PreviewCard key={index} label={field.label}>
                <CheckboxGroupPreview field={field} />
              </PreviewCard>
            );

            case "date":
            return (
              <PreviewCard key={index} label={field.label}>
                <DatePreview field={field} />
              </PreviewCard>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
