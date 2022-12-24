import { ComponentMeta } from '@storybook/react';
import Logo from './index';

const DEFAULT: ComponentMeta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default DEFAULT;

export function Default() {
  return <Logo />;
}
