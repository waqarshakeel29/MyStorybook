/* eslint react/jsx-filename-extension: 0 */
import { FC, useState } from "react";
import { Body, Container, Footer, Header } from "../../components/Popup";
import { Button } from "../../components/Button/Button";
import styles from "./storyStyles.module.scss";

const AlertsPopupExample: FC<any> = ({
  closePopup,
  anyPopupOpened,
  onAlertsOpened,
  onAlertsClosed,
}) => {
  const onClosePopup = () => !anyPopupOpened && closePopup();

  return (
    <Container
      closePopup={onClosePopup}
      position={"center"}
      enableKeyDownListener
      openPopupCb={onAlertsOpened}
      closePopupCb={onAlertsClosed}
      isDraggable
    >
      <Header title="Alerts" onClosePopup={closePopup} />
      <Body>
        <div className={styles["popupContent"]}>example content</div>
      </Body>
      <Footer onPrimaryPressed={closePopup} />
    </Container>
  );
};

const ControlledPopUp = () => {
  const [isOpen, togglePopup] = useState(false);
  return (
    <div>
      <div className={styles.row}>
        <h3>Controlled Popup</h3>
        <div className={styles.item}>
          <Button label="show popup" onClick={() => togglePopup(!isOpen)} />
          {isOpen && (
            <AlertsPopupExample
              closePopup={() => togglePopup(false)}
              autoFocus
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ControlledPopUp;
