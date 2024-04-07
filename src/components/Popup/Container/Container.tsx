import { FC, ReactNode, useEffect } from "react";
import Draggable from "react-draggable";
import classNames from "classnames";
import { DEFAULT_TOP } from "./constants";
import styles from "./Container.module.scss";

type Position =
  | "relative"
  | "fixed"
  | "fixedBottom"
  | "center"
  | "nextButton"
  | "nextButton-custom"
  | "relativeBottom"
  | "upper"
  | "bottomCentered"
  | "toRight"
  | "toLeft"
  | "bottom"
  | "absolute"
  | "relativeBottom-custom";

type Size = "sm" | "md" | "lg" | "custom";
interface ContainerProps {
  position?: Position;
  closePopup: (event: any) => void;
  openPopupCb?: () => void;
  closePopupCb?: () => void;
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode;
  isDraggable?: boolean;
  fixedCenter?: boolean;
  isOnClickStopPropagation?: boolean;
  size?: Size;
}

const Container: FC<ContainerProps> = ({
  isOnClickStopPropagation = false,
  position = "relative",
  wrapperClassName = "",
  openPopupCb = () => {},
  className = "",
  closePopupCb = () => {},
  isDraggable = false,
  fixedCenter = false,
  size = "custom",
  closePopup,
  children,
}) => {
  const calcPosition = () => {
    const notApplyIn = [
      "fixed",
      "relativeBottom",
      "nextButton",
      "nextButton-custom",
      "center",
      "bottomCentered",
      "toRight",
      "toLeft",
      "absolute",
      "relativeBottom-custom",
    ];
    if (notApplyIn.includes(position) || !container) {
      return;
    }

    const screenRect = document.documentElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const parentRect = container.parentElement.getBoundingClientRect();
    const consideredTop =
      parentRect.top >= DEFAULT_TOP ? parentRect.top : DEFAULT_TOP;
    const diff = screenRect.bottom - (consideredTop + containerRect.height);
    if (diff < 0) {
      container.style.top = "initial";
      container.style.bottom = "10px";
    } else if (position === "fixedBottom") {
      container.style.top = `${parentRect.top + (parentRect.bottom - parentRect.top)}px`;
    } else {
      container.style.top = `${consideredTop}px`;
      container.style.bottom = "initial";
    }
    if (containerRect.right > screenRect.right) {
      container.style.right = "2px";
      container.style.left = "initial";
    }
  };
  useEffect(() => {
    calcPosition();
    openPopupCb();
    return () => {
      closePopupCb();
    };
  }, []);

  const handleClickOutside = (event: any) => {
    const callback = closePopup;
    callback(event);
  };

  const handleOnMouseDown = (e: any) => {
    if (!isOnClickStopPropagation) {
      e.stopPropagation();
    }
  };

  const handleOnClick = (e: any) => {
    // sometimes we need make stopPropagation on click, to prevent checking checkbox, or to open link etc.
    if (isOnClickStopPropagation) {
      e.stopPropagation();
    }
  };

  const popupClasses = classNames(styles[`popup-size--${size}`], {
    [styles.container]: true,
    [styles[position]]: position,
    [className]: className,
    [styles.fixedCenter]: fixedCenter,
  });

  const wrapperClasses = classNames({
    [styles.wrapper]: true,
    [styles.center]: true,
    [wrapperClassName]: wrapperClassName,
  });

  const isCentered = position === "center";
  let container: any = (
    <div
      className={popupClasses}
      onMouseDown={handleOnMouseDown}
      onClick={handleOnClick}
      ref={(node) => {
        container = node;
      }}
    >
      {children}
    </div>
  );

  if (isDraggable) {
    container = (
      <Draggable
        onMouseDown={(e) => e.stopPropagation()}
        disabled={!isDraggable}
      >
        {container}
      </Draggable>
    );
  }

  if (!isCentered) {
    return container;
  }

  return (
    <div className={wrapperClasses} onMouseDown={handleClickOutside}>
      {container}
    </div>
  );
};

export default Container;
