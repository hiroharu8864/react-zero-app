import { memo, React } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type Props = {
  outlined?: boolean;
  size?: "small" | "medium";
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<Props> = memo((Props) => {
  const { outlined = false, size = "medium", children, onClick } = Props;
  return (
    <button
      type="button"
      className={clsx(styles.button, outlined && styles.outlined, styles[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
