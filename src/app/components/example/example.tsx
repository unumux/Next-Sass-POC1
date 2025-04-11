import styles from "./example.module.scss";

export default function Example({ className = "" }: { className?: string }) {
  return <div className={`${styles.blarg} ${styles[className]}`}>this is an example component</div>;
}
