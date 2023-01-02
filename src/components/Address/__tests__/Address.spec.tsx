import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './Address.stories';

describe('Address component', () => {
  beforeEach(cleanup);

  const { Default } = composeStories(Stories);

  test('Component should rendered with correctly address information', () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('address')).toHaveTextContent('Joseph test street');

    cleanup();

    const { getByTestId: getElementWithCustomClass } = render(<Default iconClass="test" textClass="test" />);

    expect(getElementWithCustomClass('address-icon')).toHaveClass('test');
    expect(getElementWithCustomClass('address')).toHaveClass('test');
  });
});
