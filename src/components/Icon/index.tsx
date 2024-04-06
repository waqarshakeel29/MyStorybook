import { FC } from "react";
import cx from "classnames";
import Icons from "./Icons/Icons";
import { IconsNames } from "./Icons/Icons.contants";
import styles from "./Icon.module.scss";

type Icon = keyof typeof IconsNames;
type Size = "sm" | "md";

interface IconProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  size?: Size;
  icon: Icon;
  title?: string;
}
const Icon: FC<IconProps> = ({
  className,
  onClick,
  size = "md",
  icon,
  title,
}) => {
  const IconType = Icons[icon] || null;
  const iconClasses = cx(className, styles["icon"], styles[size], {
    [styles["icon-clickable"]]: onClick,
  });
  return (
    <span
      aria-hidden="true"
      className={iconClasses}
      onClick={onClick}
      title={title}
    >
      {IconType && <IconType />}
    </span>
  );
};

export default Icon;
