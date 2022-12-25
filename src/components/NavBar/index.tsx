import NavLink from '@Components/NavBar/NavLink';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useState } from 'react';
import MobileTrigger from './MobileTrigger';
import styles from './navBar.module.scss';

type Props = {
    /**
     * Menu items that will be rendered
     */
    items: { href: string; label: string; hasBorder?: boolean }[];
}

function NavBar({ items }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu(true);
  const handleCloseMenu = () => setIsOpenMenu(false);

  return (
    <NavigationMenu.Root className={styles.navBar__container}>
      <MobileTrigger handleClickFn={handleOpenMenu} />
      <NavigationMenu.List
        className={styles.navigation__list}
        data-mobile-open={isOpenMenu}
      >
        <button
          type="button"
          className={styles.navigation__closeList}
          onClick={handleCloseMenu}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />

          </svg>
        </button>
        {items.map(({ href, label, hasBorder = false }) => (
          <NavigationMenu.Item key={label}>
            <NavLink href={href} hasBorder={hasBorder}>
              {label}
            </NavLink>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default NavBar;
