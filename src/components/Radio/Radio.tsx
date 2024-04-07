import { FC, MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';

import RadioIcons from './Icons';
import styles from './Radio.module.scss';

type Sizes = 'sm' | 'md';

type RadioProps = {
  id?: string;
  onChange?: (e: MouseEvent<HTMLDivElement>) => void;
  checked?: boolean;
  label?: string;
  helpText?: string;
  size?: Sizes;
  className?: string;
  disabled?: boolean;
};
// Choose the icon based on the radio state
const iconsByState: { [key: string]: ReactNode } = {
  UNCHECKED: <RadioIcons.Unchecked />,
  CHECKED: <RadioIcons.Checked />,
};

const getIcon: (args: { checked: boolean }) => ReactNode = ({ checked }) =>
  checked ? iconsByState.CHECKED : iconsByState.UNCHECKED;

export const Radio: FC<RadioProps> = ({
  onChange,
  id = '',
  checked = false,
  label = '',
  helpText = '',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const containerClassName = classNames(
    styles.radio,
    {
      [styles['radio--disabled']]: disabled,
    },
    className
  );

  const iconClassName = classNames(styles['radio__icon'], {
    [styles[`radio__icon--${size}`]]: size,
  });

  const labelClassName = classNames(styles['radio__label'], {
    [styles[`radio__label--${size}`]]: size,
  });

  const helpTextClassName = classNames(styles['radio__help-text'], {
    [styles[`radio__help-text--${size}`]]: size,
  });

  const icon = getIcon({ checked });

  const RadioComponent = (
    <div className={iconClassName} onClick={onChange} id={id}>
      {icon}
    </div>
  );

  return (
    <div className={containerClassName}>
      {label ? (
        <>
          <div className={styles['radio__input']}>
            {RadioComponent}
            <div className={labelClassName}>{label}</div>
          </div>
          {helpText && <div className={helpTextClassName}>{helpText}</div>}
        </>
      ) : (
        RadioComponent
      )}
    </div>
  );
};
