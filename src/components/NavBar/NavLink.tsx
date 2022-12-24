import { Link as NavigationLink } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';

type LinkProps = {
    /**
     * Anchor link to internal or external page
     */
    href: string;
    /**
     * Label or some other children to be rendered inside the link
     */
    children: React.ReactNode;
};

function NavLink({ children, href }: LinkProps) {
  return (
    <Link href={href} passHref>
      <NavigationLink>
        {children}
      </NavigationLink>
    </Link>
  );
}

export default NavLink;
