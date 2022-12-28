import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './ArticleNumber.stories';

describe('ArticleNumber component', () => {
  beforeEach(cleanup);

  const { Default } = composeStories(Stories);

  test('Component should be rendered with correctly number', () => {
    const { getByTestId } = render(<Default {...Default.args} />);

    expect(getByTestId('article-number')).toHaveTextContent('01');
  });
});
