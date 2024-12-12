import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import { FieldValues } from "react-hook-form";
import { FormInputProps } from "../types";

const FormInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
}: FormInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-300 text-sm font-bold ">
            Note title
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} className="rounded" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
