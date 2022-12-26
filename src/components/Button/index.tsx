import React from 'react';
import styles from './styles.module.scss';

type Props = {
  /**
   * Handle function that will triggered when button is clicked
   * @param event React.MouseEvent<HTMLButtonElement, MouseEvent>.
   * @returns void
   */
  handleClickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Button children.
   */
  children: React.ReactNode;
  /**
   * Aditional style class. It must be a string-separated.
   * E.g.: 'my-prettier-class another-prettier-class'
   */
  className?: string;
}

function Button({ handleClickFn, className, children }: Props) {
  return (
    <button
      type="button"
      aria-label="Botão"
      data-testid="button"
      className={`${styles.button} ${className}`}
      onClick={handleClickFn}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { className: '' };

export default Button;
