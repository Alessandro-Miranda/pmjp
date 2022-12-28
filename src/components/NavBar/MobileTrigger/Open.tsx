import Button from '@Components/Button';
import menu from '@Icons/menu.svg';
import Image from 'next/image';

type Props = {
  handleOpenFn: () => void;
  className?: string;
}

function Open({ handleOpenFn, className }: Props) {
  return (
    <Button
      handleClickFn={handleOpenFn}
      className={className}
      testid="menu-open-button"
      ariaLabel="Menu"
    >
      <Image
        src={menu}
        alt="Abrir menu"
      />
    </Button>
  );
}

Open.defaultProps = { className: '' };

export default Open;
