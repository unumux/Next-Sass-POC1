"use client";

import { Slot } from "@radix-ui/react-slot";
import styles from "./button3.module.scss";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = BaseButtonProps & {
  asChild?: boolean;
  variant?: "secondary" | "green";
  isLoading?: boolean;
  children?: React.ReactNode;
};

export default function Button({ asChild, variant, isLoading = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const isButton = Comp === "button";

  let ourClasses = styles.button;
  if (variant) {
    ourClasses = `${ourClasses}  ${styles[variant]}`;
  }
  if (props.disabled) {
    ourClasses = `${ourClasses} ${styles.disabled}`;
  }

  // if the loading state is detected, put the Comp into a grid and add the loading component
  if (isLoading) {
    return (
      <div className={styles.loading_grid}>
        <Comp
          type={isButton ? "button" : undefined}
          className={ourClasses}
          {...props}
          tabIndex={!isButton && props.disabled ? -1 : undefined}
          data-loading="true"
        />
        <Loading />
      </div>
    );
  }

  // if the loading state is not detected, just return the button or link
  return (
    <Comp
      type={isButton ? "button" : undefined}
      className={ourClasses}
      {...props}
      tabIndex={!isButton && props.disabled ? -1 : undefined}
    />
  );

  // A link doesn't work with the disable attrib.  Hence the tabIndex="-1" when disabled.
}

// here is our loading component
function Loading() {
  return <div className={styles.loader}></div>;
}
