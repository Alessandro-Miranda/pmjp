import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './DialogClose.stories';

describe('DialogClose component', () => {
  beforeEach(cleanup);

  const {
    CloseButtonIcon,
    CloseButtonText,
    CustomIcon,
    CustomText,
    Default,
  } = composeStories(Stories);

  test('Buttons Should be render with correctly children', () => {
    const { getByTestId: getDefault } = render(<Default {...Default.args} />);
    expect(getDefault('dialog-close-default-icon')).toBeInTheDocument();
    cleanup();

    const { getByTestId: getTextButton } = render(<CloseButtonText {...CloseButtonText.args} />);
    expect(getTextButton('dialog-close-text')).toHaveTextContent('Fechar');
    cleanup();

    const { getByTestId: getIconButton } = render(<CloseButtonIcon {...CloseButtonIcon.args} />);
    expect(getIconButton('dialog-close-default-icon')).toBeInTheDocument();
    cleanup();

    const { getByTestId: getCutomIconButton } = render(<CustomIcon {...CustomIcon.args} />);
    expect(getCutomIconButton('dialog-close-custom-icon')).toBeInTheDocument();
    cleanup();

    const { getByTestId: getCustomTextButton } = render(<CustomText {...CustomText.args} />);
    expect(getCustomTextButton('dialog-close-text')).toHaveTextContent('Close');
  });
});
