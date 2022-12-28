import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleNumber from '..';

export default {
  title: 'Components/ArticleNumber',
  component: ArticleNumber,
  args: {
    number: 1,
  },
  parameters: {
    docs: {
      description: {
        component: 'Decorative number used next to articles',
      },
    },
  },
} as ComponentMeta<typeof ArticleNumber>;

export const Default: ComponentStory<typeof ArticleNumber> = (args) => <ArticleNumber {...args} />;
