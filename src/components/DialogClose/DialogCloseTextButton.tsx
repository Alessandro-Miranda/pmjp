import { Close } from '@radix-ui/react-dialog';
import React from 'react';
import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
}

function DialogCloseTextButton({ children, className }: Props) {
  return (
    <Close className={`${styles.dialog__close} ${className}`}>
      { children || 'Fechar' }
    </Close>
  );
}

DialogCloseTextButton.defaultProps = { children: null, className: '' };

export default DialogCloseTextButton;
