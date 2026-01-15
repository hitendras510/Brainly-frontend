import type { IconProps } from "./interface";
import { iconSizeVariants } from "./interface";

export const PlusIcon = ({ size }: IconProps) => {
  return (
    <svg
      className={iconSizeVariants[size]}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};
