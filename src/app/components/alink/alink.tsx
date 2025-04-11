import styles from "./alink.module.scss";

type aProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type AlinkProps = aProps & {
  variant?: "primary" | "secondary" | "green";
  isDisabled?: boolean;
  children?: React.ReactNode;
};

export default function Alink({ variant, isDisabled, children, ...props }: AlinkProps) {
  let ourClasses = styles.alink;
  if (variant) {
    ourClasses = `btn ${variant}`;
  }
  if (isDisabled) {
    ourClasses = `${ourClasses} disabled`;
  }

  return (
    <a className={ourClasses} {...props} tabIndex={isDisabled ? -1 : undefined}>
      {children}
    </a>
  );
}
