import { FC } from "react";
import cx from "classnames";
import styles from "./Header.module.scss";
import Icon from "../../Icon";

interface HeaderProps {
  title: string;
  onClosePopup?: () => void;
  className?: string;
}

const Header: FC<HeaderProps> = ({ title, onClosePopup, className }) => {
  const headerClass = cx(className, styles["header-container"]);

  return (
    <div className={headerClass}>
      <div className={styles["header-label"]}>{title}</div>
      <Icon
        className={styles["header-icon"]}
        onClick={onClosePopup}
        icon="Close"
      />
    </div>
  );
};

export default Header;
