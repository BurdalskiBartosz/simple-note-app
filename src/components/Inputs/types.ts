import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder: string;
};
