import cx from "classnames";
import styles from "./Toggle.module.scss";

interface ToggleProps {
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Toggle = ({ className = "" }: ToggleProps) => {
  const toggleClass = cx(className, styles["toggle"]);

  return (
    <label className={toggleClass}>
      <input type="checkbox" />
      <span className={styles["slider"]}></span>
    </label>
  );
};
