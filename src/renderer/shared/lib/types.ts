import { UseFormRegister, FieldValues } from "react-hook-form";

export interface FormInput {
  inputId: string;
  register: UseFormRegister<FieldValues>;
}
