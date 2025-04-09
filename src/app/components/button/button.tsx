import { Slot } from "@radix-ui/react-slot";
import styles from "./button.module.scss";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = BaseButtonProps & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "green";
  isDisabled?: boolean;
  children?: React.ReactNode;
};

export default function Button({ asChild, variant = "primary", isDisabled, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const isButton = Comp === "button";
  const variantStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    green: styles.green,
  };
  const disabledStyles = isDisabled ? styles.disabled : "";

  return (
    <Comp
      type={isButton ? "button" : undefined}
      className={`button ${styles.button} ${variantStyles[variant]} ${disabledStyles}`}
      {...props}
      tabIndex={isDisabled ? -1 : undefined}
    />
  );

  // A link doesn't work with the disable attrib.  Hence the tabIndex="-1" when disabled.
}
