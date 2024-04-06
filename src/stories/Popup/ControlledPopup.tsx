import { FC, useState } from "react";
import { Body, Container, Footer, Header } from "../../components/Popup";
import { Button } from "../../components/Button/Button";
import styles from "./storyStyles.module.scss";

interface AlertsPopupExampleProps {
  closePopup: () => void;
}

const AlertsPopupExample: FC<AlertsPopupExampleProps> = ({
  closePopup,
}) => {
  const onClosePopup = () => closePopup();

  return (
    <Container
      closePopup={onClosePopup}
      position={"center"}
      openPopupCb={()=>{}}
      closePopupCb={()=>{}}
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
            <AlertsPopupExample closePopup={() => togglePopup(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ControlledPopUp;
