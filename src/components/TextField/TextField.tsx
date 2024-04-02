import classNames from "classnames";
import styles from "./TextField.module.scss";
import { ChangeEvent, InputHTMLAttributes } from "react";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "small" | "medium";
  label?: string;
  onChange?: (
    e: ChangeEvent,
    args: {
      id: TextFieldProps["id"];
      value: ChangeEvent<HTMLInputElement>["target"]["value"];
    }
  ) => void;
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
};

/**
 * Primary UI component for user interaction
 */
export const TextField = ({
  size = "small",
  type = "text",
  placeholder = "Text",
  disabled = false,
  invalid = false,
  label,
  className,
  onChange,
  ...props
}: TextFieldProps) => {
  const inputClass = classNames(
    className,
    styles["text-field__input"],
    // styles[`storybook-button--${variant}`],
    { [styles[`text-field__input--${size}`]]: size },
    { [styles[`text-field__input--invalid`]]: invalid },
    { [styles[`text-field__input--disabled`]]: disabled }
  );

  return (
    <input
      className={inputClass}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};
