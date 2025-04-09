import React from "react";
import styles from "./stack.module.scss";
type StackProps = {
  gap?: "none" | "xs" | "s" | "m" | "l" | "xl" | "x11";
  children: React.ReactNode;
};
export default function Stack({ gap = "none", children, ...props }: StackProps) {
  const variantStyles = {
    none: "",
    xs: styles.xs,
    s: styles.s,
    m: styles.m,
    l: styles.l,
    xl: styles.xl,
    x11: styles.x11,
  };
  return (
    <div className={`${styles.stack} ${variantStyles[gap]}`} {...props}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}
