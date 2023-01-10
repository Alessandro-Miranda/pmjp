import React from 'react';
import DialogCloseIcon from './DialogCloseIcon';
import DialogCloseTextButton from './DialogCloseTextButton';

type Props = {
  /**
   * Button Type that's define which button children to be displayed (text or icon).
   * Default component children is Icon.
   */
  type: 'text' | 'icon' | null;
  /**
   * *(optional)* If type is text, it can be passed a custom text that will be displayed.
   */
  customText?: string;
  /**
   * *(optional)* If type is icon, it can be passed a custom icon that will be displayed.
   */
  customIcon?: React.ReactNode;
  /**
   * *(optional)* Complementary style to component.
   */
  className?: string;
}

function chooseComponent({ type, className, customText, customIcon }: Props) {
  switch (type) {
    case 'text':
      return (
        <DialogCloseTextButton className={className}>
          { customText }
        </DialogCloseTextButton>
      );
    case 'icon':
      return (
        <DialogCloseIcon className={className}>
          {customIcon}
        </DialogCloseIcon>
      );
    default:
      return (
        <DialogCloseIcon className={className}>
          {customIcon}
        </DialogCloseIcon>
      );
  }
}

function DialogClose({ type, customText, customIcon, className }: Props) {
  return (
    <>
      {chooseComponent({ type, className, customText, customIcon })}
    </>
  );
}

DialogClose.defaultProps = {
  className: '',
  customText: null,
  customIcon: null,
};

export default DialogClose;
