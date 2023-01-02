import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import NavBar from '..';

const menuItems = [
  {
    href: '#masses', label: 'masses',
  },
  {
    href: '#location', label: 'location',
  },
  {
    href: '#communities', label: 'communities',
  },
  {
    href: '#contact', label: 'contact', hasBorder: true,
  },
];

const config: ComponentMeta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  args: {
    items: menuItems,
  },
  parameters: {
    docs: {
      description: {
        component: 'Navigation bar component. On small screens, should only render the sandwich menu button and when the button is clicked it will show the menu items. On large screens, items should be redered inline',
      },
    },
  },
};

export default config;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Menu = Template.bind({});

export const MenuOpened = Template.bind({});

const openMenu = (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByTestId('menu-open-button'));
  return canvas;
};

MenuOpened.play = async ({
  args,
  canvasElement,
}) => {
  const canvas = openMenu(canvasElement);
  const menuList = canvas.getByTestId('menu-list');
  await waitFor(() => expect(menuList).toHaveAttribute('data-mobile-open', 'true'));
};

export const MenuClosed = Template.bind({});
MenuClosed.play = async ({
  args,
  canvasElement,
}) => {
  const canvas = openMenu(canvasElement);
  const menuList = canvas.getByTestId('menu-list');
  await waitFor(() => expect(menuList).toHaveAttribute('data-mobile-open', 'true'));

  userEvent.click(canvas.getByTestId('menu-close-button'));
  await waitFor(() => expect(menuList).toHaveAttribute('data-mobile-open', 'false'));
};
