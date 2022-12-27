import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/react';
import { cleanup, render } from '@testing-library/react';
import * as Storys from './Logo.stories';

describe('Logo component', () => {
  beforeEach(cleanup);

  const { Default } = composeStories(Storys);

  test('Component should be in the document', () => {
    const { getByTestId } = render(<Default />);

    const logo = getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });
});
