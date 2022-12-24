import NavLink from '@Components/NavLink';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import MobileTrigger from './MobileTrigger';

type Props = {
    /**
     * Menu items that will be rendered
     */
    items: { href: string; label: string; }[];
}

function NavBar({ items }: Props) {
  return (
    <NavigationMenu.Root>
      <MobileTrigger />
      <NavigationMenu.List>
        {items.map(({ href, label }) => (
          <NavigationMenu.Item key={label}>
            <NavLink href={href}>
              {label}
            </NavLink>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default NavBar;
