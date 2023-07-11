import { PropsWithChildren } from "react";
import Image from "../image/Image";

const Button = ({
  disabled,
  children,
  hasWrapper,
  wrapperClasses,
  buttonClasses,
  defaultStyling,
  imgSrc,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || false}
      className={`${
        (defaultStyling &&
          "flex justify-center align-center p-0 min-w-0 shadow-none") ||
        ""
      }${(buttonClasses && ` ${buttonClasses}`) || ""}`}
      onClick={onClick}
    >
      {hasWrapper ? (
        <div className={`${wrapperClasses && wrapperClasses}`}>
          {imgSrc ? <Image src={imgSrc} grayScale={disabled} /> : children}
        </div>
      ) : (
        <>{imgSrc ? <Image src={imgSrc} grayScale={disabled} /> : children}</>
      )}
    </button>
  );
};

export default Button;

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  hasWrapper?: boolean;
  wrapperClasses?: string;
  buttonClasses?: string;
  defaultStyling?: boolean;
  imgSrc?: string;
  onClick?: (event: React.MouseEvent) => void;
}
