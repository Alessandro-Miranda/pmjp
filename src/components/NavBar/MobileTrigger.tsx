import menu from '@Icons/menu.svg';
import Image from 'next/image';

function MobileTrigger() {
  return (
    <div>
      <button type="button" aria-label="Abrir menu">
        <Image
          src={menu}
          alt="Abrir menu"
          fill
        />
      </button>
    </div>
  );
}

export default MobileTrigger;
