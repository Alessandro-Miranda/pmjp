import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './PastoralCard.stories';

describe('PastoralCard component', () => {
  beforeEach(cleanup);

  const { RowCard } = composeStories(Stories);

  test('Component should be rendered to correctly informations', () => {
    const { getByTestId } = render(<RowCard {...RowCard.args} />);

    expect(getByTestId('pastoral-card')).toHaveAttribute('aria-label', 'Notas sobre a pastoral acolhida');
  });

  test('Component shoudl has the additional style classes', () => {
    const { getByTestId } = render(
      <RowCard
        {...RowCard.args}
        style={{
          container: 'container-style',
          image: 'image-style',
          text: 'text-style',
        }}
      />,
    );

    expect(getByTestId('pastoral-card')).toHaveClass('container-style');
    expect(getByTestId('pastoral-card-title')).toHaveClass('text-style');
    expect(getByTestId('pastoral-card-image')).toHaveClass('image-style');
  });
});
