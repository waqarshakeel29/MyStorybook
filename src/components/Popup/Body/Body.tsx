import { ReactNode } from "react";
import cx from "classnames";
import styles from "./Body.module.scss";

interface BodyProps {
  className?: string;
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children, className }) => {
  const bodyClass = cx(className, styles["popup-body"]);
  return <div className={bodyClass}>{children}</div>;
};

export default Body;
