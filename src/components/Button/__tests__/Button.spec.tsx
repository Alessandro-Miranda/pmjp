import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import * as Stories from './Button.stories';

describe('Button', () => {
  beforeEach(cleanup);

  const { Default, Clicked } = composeStories(Stories);

  test('Button should be in the document', () => {
    const { getByTestId } = render(<Default {...Default.args} />);

    expect(getByTestId('story-test')).toBeInTheDocument();
    expect(getByTestId('button-children')).toBeInTheDocument();
  });

  test('When button is clicked, it should invoke the onClick handler', () => {
    const { getByTestId } = render(<Clicked {...Clicked.args} />);

    const button = getByTestId('story-test');

    fireEvent.click(button);
    expect(button.childElementCount).toBe(1);
    expect(Clicked.args?.handleClickFn).toHaveBeenCalled();
  });

  test('Should invoke Story\'s play function', async () => {
    const div = document.createElement('div');
    render(
      <Clicked {...Default.args} />,
      { container: document.body.appendChild(div) },
    );

    await Clicked.play({ args: { ...Clicked.args }, canvasElement: div });

    expect(Clicked.args?.handleClickFn).toHaveBeenCalled();
  });
});
