import { PropsWithChildren, ReactElement } from "react";
import { FormInput } from "../../../lib/types";

const TextField = ({
  hideLabel,
  stackLabel,
  labelContent,
  labelClasses,
  inputClasses,
  inputId,
  register,
}: TextFieldProps) => {
  return (
    <div className={`${stackLabel ? "field-row-stacked" : "field-row"}`}>
      <label
        className={`${hideLabel && "hidden"} ${labelClasses}`}
        htmlFor={inputId}
      >
        {labelContent}
      </label>
      <input
        {...register(inputId)}
        className={`${inputClasses}`}
        id={inputId}
        type="text"
        name={inputId}
      />
    </div>
  );
};

export default TextField;
export interface TextFieldProps extends PropsWithChildren, FormInput {
  hideLabel?: boolean;
  stackLabel?: boolean;
  labelContent?: ReactElement;
  labelClasses?: string;
  inputClasses?: string;
}
