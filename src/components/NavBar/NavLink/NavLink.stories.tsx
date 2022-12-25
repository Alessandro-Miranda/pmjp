import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavLink from '.';

export default {
  title: 'Components/NavBar/NavLink',
  component: NavLink,
  parameters: {
    docs: {
      description: {
        component: `Custom navigation link.
            This custom component is composing with \`<NavigationMenu.Link />\`
            to ensure accessibility and consistent keyboard controll.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <Story />
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    ),
  ],
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: '/contato',
  children: 'contato',
};

export const LinkWithBorder = Template.bind({});
LinkWithBorder.args = {
  href: '/informação',
  children: 'informação',
  hasBorder: true,
};
