import * as MobileTrigger from '@Components/NavBar/MobileTrigger';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useState } from 'react';
import styles from './styles.module.scss';

type Props = {
    /**
     * Menu items that will be rendered
     */
    items: { href: string; label: string; hasBorder?: boolean }[];
}

function MenuItems({ items }: Props) {
  return (
    <>
      {items.map(({ href, label, hasBorder = false }) => (
        <NavigationMenu.Item key={label}>
          <NavigationMenu.Link
            data-border={hasBorder}
            data-testid={`navigation-link-${label}`}
            className={styles.navigation__link}
            href={href}
          >
            {label}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      ))}
    </>
  );
}

function NavBar({ items }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu(true);
  const handleCloseMenu = () => setIsOpenMenu(false);

  return (
    <NavigationMenu.Root className={styles.navBar__container} data-testid="navbar">
      <MobileTrigger.Open
        handleOpenFn={handleOpenMenu}
        className={styles.trigger__open__buton}
      />
      <NavigationMenu.List
        className={styles.navigation__list}
        data-mobile-open={isOpenMenu}
        data-testid="menu-list"
      >
        <MobileTrigger.Close
          handleCloseFn={handleCloseMenu}
          className={styles.navigation__closeList}
        />
        <MenuItems items={items} />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default NavBar;
