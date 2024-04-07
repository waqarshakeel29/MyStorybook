import React, { FC, ReactElement, ReactNode } from "react";
import styles from "./Dropdown.module.scss";
import { Container } from "../Popup";

type Position =
  | "relative"
  | "fixed"
  | "center"
  | "nextButton"
  | "relativeBottom"
  | "upper"
  | "bottomCentered"
  | "toRight"
  | "bottom";

interface DropdownProps {
  button: ReactElement;
  children?: ReactNode;
  containerStyle?: "" | "spaced";
  disabled?: boolean;
  isOpened?: boolean;
  popupClassName?: string;
  popupPosition?: Position;
}

const Dropdown: FC<DropdownProps> = ({
  children = (
    <p className={styles["dropdown__default-child"]}>Not implemented yet.</p>
  ),
  containerStyle = "spaced",
  disabled = false,
  isOpened = false,
  popupClassName = "",
  popupPosition = "relativeBottom",
  button: Button,
}) => {
  const [opened, setOpened] = React.useState(isOpened);
  const togglePopup = (state: boolean) => {
    !disabled && setOpened(state ? state : !opened);
  };

  // function useClickOutside(ref: any, onClickOutside: any) {
  //   useEffect(() => {
  //     function handleClickOutside(event: any) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         onClickOutside();
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref, onClickOutside]);
  // }

  // const wrapperRef = useRef(null);
  // useClickOutside(wrapperRef, () => {
  //   togglePopup(false);
  // });

  return (
    <div className={styles[`dropdown--${containerStyle}`]}>
      {React.cloneElement(Button, {
        onClick: () => togglePopup(true),
        disabled,
      })}
      {opened && (
        <Container
          closePopup={() => togglePopup(false)}
          position={popupPosition}
          className={popupClassName}
          
        >
          {children}
        </Container>
      )}
    </div>
  );
};

export default Dropdown;
