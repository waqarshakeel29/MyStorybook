import React, { ForwardedRef } from "react";
import classNames from "classnames";
import styles from "./TextArea.module.scss";
import { Label } from "../Label/Label";

type Size = "small" | "medium";

interface TextAreaProps {
  id?: string;
  name?: string;
  size?: Size;
  readOnly?: boolean;
  label?: string;
  title?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
  rows?: number;
  cols?: number;
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const TextArea = React.forwardRef(
  (
    {
      id = "",
      size = "small",
      placeholder = "",
      disabled = false,
      invalid = false,
      readOnly = false,
      title,
      name,
      label,
      rows,
      cols,
      value,
      maxLength,
      className,
      onChange,
      ...props
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const containerClass = classNames(styles["text-field"], className);
    const inputClass = classNames(styles["text-field__input"], {
      [styles[`text-field__input--${size}`]]: size,
      [styles[`text-field__input--invalid`]]: invalid,
      [styles[`text-field__input--disabled`]]: disabled,
    });

    return (
      <div className={containerClass}>
        {label && (
          <Label htmlFor={id} size={size}>
            {label}
          </Label>
        )}
        <textarea
          ref={ref}
          name={name}
          title={title}
          readOnly={readOnly}
          className={inputClass}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          value={value}
          {...props}
        />
      </div>
    );
  }
);
