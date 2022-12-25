import menu from '@Icons/menu.svg';
import Image from 'next/image';
import React from 'react';
import styles from './mobileTrigger.module.scss';

type Props = {
  handleClickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

function MobileTrigger({ handleClickFn, className }: Props) {
  return (
    <div className={`${styles.trigger__container} ${className}`}>
      <button
        type="button"
        aria-label="Abrir menu"
        data-testid="button-open-menu"
        onClick={handleClickFn}
      >
        <Image
          src={menu}
          alt="Abrir menu"
          fill
        />
      </button>
    </div>
  );
}

MobileTrigger.defaultProps = { className: '' };

export default MobileTrigger;
