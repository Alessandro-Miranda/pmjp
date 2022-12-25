import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavBar from '.';

const config: ComponentMeta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    docs: {
      description: {
        component: `Navigation bar component.
          On small screens, should only render the sandwich menu button
          and when the button is clicked it will show the menu items.
          On large screens, items should be rendered inline.`,
      },
    },
  },
};

export default config;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
const menuItems = [
  { href: '#missas', label: 'missas' },
  { href: '#localização', label: 'localização' },
  { href: '#comunidades', label: 'comunidades' },
  { href: '#contat', label: 'contato' },
];

Default.args = { items: menuItems };
