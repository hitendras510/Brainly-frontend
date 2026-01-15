import type { ReactNode } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick: () => void;
}

const VariantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyle = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyle = "rounded-md flex items-center gap-2";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${VariantStyle[props.variant]} ${defaultStyle} ${
        sizeStyle[props.size]
      }`}
    >
      {props.startIcon && <span className="pr-2">{props.startIcon}</span>}
      {props.text}
      {props.endIcon && <span className="pl-2">{props.endIcon}</span>}
    </button>
  );
};
``;
