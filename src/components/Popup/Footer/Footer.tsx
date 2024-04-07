import { FC } from "react";
import styles from "./Footer.module.scss";
import { Button } from "../../Button/Button";
import cx from "classnames";

interface FooterProps {
  primaryTitle?: string;
  onPrimaryPressed?: () => void;
  primaryDisabled?: boolean;
  secondaryTitle?: string;
  onSecondaryPressed?: () => void;
  secondaryDisabled?: boolean;
  className?: string;
}

const Footer: FC<FooterProps> = ({
  primaryTitle = "Save",
  secondaryTitle = "Cancel",
  onPrimaryPressed,
  onSecondaryPressed,
  primaryDisabled,
  secondaryDisabled,
  className,
}) => {
  const footerClass = cx(className, styles["footer-container"]);

  return (
    <div className={footerClass}>
      <Button
        variant="secondary"
        label={secondaryTitle}
        onClick={onPrimaryPressed}
        disabled={primaryDisabled}
      />
      <Button
        variant="primary"
        label={primaryTitle}
        onClick={onSecondaryPressed}
        disabled={secondaryDisabled}
      />
    </div>
  );
};

export default Footer;
