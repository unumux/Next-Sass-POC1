import { Slot } from "@radix-ui/react-slot";
import styles from "./button.module.scss";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = BaseButtonProps & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "green" | "disabled";
};

export default function Button({ asChild, variant = "primary", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const isButton = Comp === "button";
  const variantStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    green: styles.green,
    disabled: styles.disabled,
  };

  return (
    <Comp
      type={isButton ? "button" : undefined}
      tabIndex={!isButton && variant === "disabled" ? -1 : undefined}
      className={`button ${styles.button} ${variantStyles[variant]}`}
      {...props}
    />
  );

  // A link doesn't work with the disable attrib.  Hence the tabIndex="-1" when disabled.
}
