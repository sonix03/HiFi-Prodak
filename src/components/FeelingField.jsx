import { SelectField } from "./FormField";

export default function FeelingField({ value, onOpen }) {
  return (
    <SelectField
      label="How did that activity feel"
      value={value}
      onOpen={onOpen}
    />
  );
}
