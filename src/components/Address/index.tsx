import Image from 'next/image';

import Typography from '@Components/Typography';
import Location from '@Icons/location.svg';
import styles from './styles.module.scss';

type Props = {
  /**
   * Church full address.
   */
  address: string;
  /**
   * *(optional)* Custom icon to be displayed.
   */
  icon?: string;
  /**
   * *(optional)* Custom style to icon.
   */
  iconClass?: string;
  /**
   * *(optional)* Custom style to address text.
   */
  textClass?: string;
}

function Address({ address, icon, iconClass, textClass }: Props) {
  return (
    <div>
      <Image
        src={icon ?? Location}
        alt="Localização"
        className={`${styles.location__icon} ${iconClass ?? ''}`}
        data-testid="address-icon"
      />
      <Typography
        className={`${styles.location__text} ${textClass ?? ''}`}
        data-testid="address"
      >
        {address}
      </Typography>
    </div>
  );
}

Address.defaultProps = { icon: null, iconClass: null, textClass: null };

export default Address;
