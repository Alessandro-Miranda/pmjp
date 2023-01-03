import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './HowToGet.stories';

describe('How to Get component', () => {
  beforeEach(cleanup);

  const { Default } = composeStories(Stories);

  test('Component should render with correctly link', () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('how-to-get-link')).toHaveTextContent('como chegar');

    Default.args = {
      ...Default.args,
      ariaLabel: 'Link used as a test component',
      className: 'test',
    };

    cleanup();

    const { getByTestId: getElementWithCustomArgs } = render(<Default {...Default.args} />);

    expect(getElementWithCustomArgs('how-to-get-link')).toHaveClass('test');
  });
});
