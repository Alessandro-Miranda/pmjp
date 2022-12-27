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
  /**
   * Optional data-testid.
   */
  testid?: string;
  /**
   * Optional aria Label.
   */
  ariaLabel?: string;
}

function Button({
  children,
  handleClickFn,
  ariaLabel,
  className,
  testid,
}: Props) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      data-testid={testid}
      className={`${styles.button} ${className}`}
      onClick={handleClickFn}
    >
      {children}
    </button>
  );
}

Button.defaultProps = { className: '', testid: 'button', ariaLabel: 'Botão' };

export default Button;
