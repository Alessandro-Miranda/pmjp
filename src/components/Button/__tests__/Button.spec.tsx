import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './Button.stories';

describe('Button', () => {
  beforeEach(cleanup);

  const { Default } = composeStories(Stories);

  test('Button should be in the document', () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('button')).toBeInTheDocument();
  });
});
