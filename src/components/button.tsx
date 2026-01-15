import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick: () => void;
}

const VariantStyle = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}
const sizeStyle = {
 "sm":"p-2",
 "md":"p-4",
 "lg":"p-6"
}
const defaultStyle = "rounded-md p-4";

 
export const Button = (props: ButtonProps) => {

    return <button className={`${VariantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>{props.text}</button>;
}

<Button variant="primary" size="md" text = {"hit"} onclick={() => {}} />;