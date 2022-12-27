import { Link as NavigationLink } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';
import styles from './navlink.module.scss';

type LinkProps = {
  /**
   * Anchor link to internal or external page
   */
  href: string;
  /**
   * Label or some other children to be rendered inside the link
   */
  children: React.ReactNode;
  /**
   * Complementary style class. It must be a space-separated string.
   */
  className?: string;
  /**
   * Defines if navigation link should has border property.
   */
  hasBorder?: boolean;
  /**
   * Defines a custom data-testid to component
   */
  testid?: string;
};

function NavLink({
  className,
  children,
  href,
  hasBorder,
  testid,
}: LinkProps) {
  return (
    <Link href={href} passHref>
      <NavigationLink
        className={`${styles.navLink} ${className}`}
        data-border={hasBorder}
        data-testid={testid}
      >
        {children}
      </NavigationLink>
    </Link>
  );
}

NavLink.defaultProps = { className: '', hasBorder: false, testid: 'nav-link' };

export default NavLink;
