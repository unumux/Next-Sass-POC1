import { Slot } from "@radix-ui/react-slot";
import styles from './text.module.scss'

type TextProps = React.HTMLAttributes<HTMLElement>;

type SlotTextProps = TextProps & {
    asChild?: boolean;
    children: React.ReactNode;
};

export default function Text({ asChild, children,  ...props }: SlotTextProps) {
    const Comp = asChild ? Slot : "p";
    //const baseStyles = "text-black";
    //let combo = cn(baseStyles, props.className);
    //let combo = baseStyles;
    return <Comp className={styles.text} {...props}>{children}</Comp>;
}