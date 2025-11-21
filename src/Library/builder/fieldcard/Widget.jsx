import Text from "../fields/text/Text";
import Number from "../fields/number/Number";
import DateField from "../fields/date/DateField";
import CheckboxGroup from "../fields/checkboxGroup/CheckboxGroup";
import RadioGroup from "../fields/radiogroup/RadioGroup";
import Select from "../fields/select/Select"
import TextArea from "../fields/textarea/TextArea";
import Header from "../fields/header/Header";
import Signature from "../fields/signature/Signature";
import Photo from "../fields/photo/Photo";
import CheckPoints from "../fields/checkpoints/CheckPoints";
import StarRating from "../fields/star/StarRating";
import ScaleRating from "../fields/scalerating/ScaleRating";

export default function Widget({ field, index }) {
  switch (field.type) {
    case "text":
      return <Text field={field} index={index} />;

    case "number":
     return <Number field={field} index={index} />;

    case "date":
       return <DateField field={field} index={index} />;

    case "checkboxGroup":
      return <CheckboxGroup field={field} index={index} />;

    case "radioGroup":
      return <RadioGroup field={field} index={index} />;

    case "select":
      return <Select field={field} index={index} />

    case "textarea":
      return <TextArea field={field} index={index} />;

    case "header":
       return <Header field={field} index={index} />;

    case "signature":
       return <Signature field={field} index={index} />;

    case "photo":
      return <Photo field={field} index={index} />;

    case "checkpoints":
      return <CheckPoints field={field} index={index} />;

    case "star5":
    case "star10":
      return <StarRating field={field} index={index} />;

    case "scale":
      return <ScaleRating field={field} index={index} />;
  }
}
