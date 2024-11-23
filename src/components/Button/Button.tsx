import classNames from "classnames";
import { ButtonProps } from "./types";

const Button = ({
  children,
  onClick,
  type = "primary",
  isSubmitButton = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      type={isSubmitButton ? "submit" : "button"}
      className={classNames("text-white font-bold py-1 px-2 rounded", {
        "bg-blue-500 hover:bg-blue-700": type === "primary",
        "bg-red-500 hover:bg-red-700": type === "danger",
        "bg-gray-300 cursor-not-allowed opacity-75": isDisabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
