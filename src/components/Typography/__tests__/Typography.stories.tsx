import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from '..';

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Story text',
  },
  parameters: {
    docs: {
      description: {
        component: 'Typography component is responsible for presenting texts and titles on interface. The font-styles used are defined as default in `_typography.scss frile`, but is possible to use a custom style class to add another styles to component.',
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});
export const P = Template.bind({});

H1.args = {
  variant: 'h1',
  testid: 'h1-variant',
};
H2.args = {
  variant: 'h2',
  testid: 'h2-variant',
};
H3.args = {
  variant: 'h3',
  testid: 'h3-variant',
};
H4.args = {
  variant: 'h4',
  testid: 'h4-variant',
};
H5.args = {
  variant: 'h5',
  testid: 'h5-variant',
};
H6.args = {
  variant: 'h6',
  testid: 'h6-variant',
};
P.args = {
  variant: 'p',
  testid: 'p-variant',
};
