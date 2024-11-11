import { PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = PropsWithChildren & {
  onClick?: (data: never) => void;
  type?: "primary" | "danger";
  isSubmitButton?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "primary",
  isSubmitButton = false,
}: ButtonProps) {
  return (
    <button
      type={isSubmitButton ? "submit" : "button"}
      className={classNames("text-white font-bold py-1 px-2 rounded", {
        "bg-blue-500 hover:bg-blue-700": type === "primary",
        "bg-red-500 hover:bg-red-700": type === "danger",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
