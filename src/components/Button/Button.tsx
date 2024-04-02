import classNames from "classnames";
import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "secondary" | "text";
  /**
   * What background color to use
   */
  // backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  label,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonStyles = classNames(
    className,
    styles["storybook-button"],
    styles[`storybook-button--${variant}`],
    { [styles[`storybook-button--${size}`]]: size }
  );

  return (
    <button
      className={buttonStyles}
      {...props}
    >
      {label}
    </button>
  );
};
