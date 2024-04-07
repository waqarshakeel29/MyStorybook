import React, { FC, MouseEvent } from "react";
import cx from "classnames";
import styles from "./RadioGroup.module.scss";

interface IRadioGroup {
  disabled?: boolean;
  selected: string;
  onChange: (e: MouseEvent<HTMLDivElement>) => void;
  children?: JSX.Element[];
  direction?: "row" | "column";
  className?: string;
}

const RadioGroup: FC<IRadioGroup> = ({
  direction = "row",
  selected,
  children,
  onChange,
  disabled,
  className,
}) => {
  const continerClasses = cx(
    styles[`radio-group`],
    styles[`radio-group__${direction}`],
    className
  );

  return (
    <div className={continerClasses}>
      {
        // maps children nodes and merge with some ButtonGroup props
        React.Children.map(children, (child) => {
          return React.cloneElement(child!, {
            onChange: () => onChange(child!.props.id),
            checked: selected === child!.props.id,
            disabled,
          });
        })
      }
    </div>
  );
};

RadioGroup.defaultProps = {
  disabled: false,
};

export default RadioGroup;
