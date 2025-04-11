import styles from "./button2.module.scss";

type RawButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Button2Props = RawButtonProps & {
  variant?: "primary" | "secondary" | "green";
  isDisabled?: boolean;
  children?: React.ReactNode;
};

export default function Button2({ variant, isDisabled, children, ...props }: Button2Props) {
  let ourClasses = styles.button2;
  if (variant) {
    ourClasses = `btn ${variant}`;
  }
  if (isDisabled) {
    ourClasses = `${ourClasses} disabled`;
  }

  return (
    <button className={ourClasses} {...props}>
      {children}
    </button>
  );
}
