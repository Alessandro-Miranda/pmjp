import { beforeEach, describe, test } from '@jest/globals';
import { cleanup, render } from '@testing-library/react';
import * as Card from '..';

describe('Card component', () => {
  beforeEach(cleanup);

  test('Sub-components should be rendered with correctly props', () => {
    const { getByTestId } = render(
      <Card.Root aria-label="Component test">
        <Card.Icon src="/image-test" alt="image-test" />
      </Card.Root>,
    );

    expect(getByTestId('card-root')).toHaveAttribute('aria-label', 'Component test');
    expect(getByTestId('card-icon')).toHaveAttribute('src', '/image-test');
  });
});
