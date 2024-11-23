import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
  onClick?: (data: never) => void;
  type?: "primary" | "danger";
  isSubmitButton?: boolean;
  isDisabled?: boolean;
};
