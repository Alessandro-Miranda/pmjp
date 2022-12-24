/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta } from '@storybook/react';
import Logo from './index';

const DEFAULT: ComponentMeta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default DEFAULT;

export const Default = () => <Logo />;
