import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as CloseTriggerStories from './CloseTrigger.stories';
import * as NavBarStories from './NavBar.stories';
import * as OpenTriggerStories from './OpenTrigger.stories';

describe('NavBar componen', () => {
  beforeEach(cleanup);

  const { Default: CloseDefault, Clicked: CloseClicked } = composeStories(CloseTriggerStories);
  const { Default: OpenDefault, Clicked: OpenClicked } = composeStories(OpenTriggerStories);
  const { Menu, MenuClosed, MenuOpened } = composeStories(NavBarStories);

  const assertIsOpenMenuListHelper = async (
    Story: typeof MenuOpened | typeof MenuClosed,
    attributeValue: 'false' | 'true',
  ) => {
    const div = document.createElement('div');
    const { getByTestId } = render(
      <Story {...Story.args} />,
      { container: document.body.appendChild(div) },
    );

    await Story.play({ args: { ...Story.args }, canvasElement: div });

    const menuList = getByTestId('menu-list');
    expect(menuList).toHaveAttribute('data-mobile-open', attributeValue);
  };

  test('Open and close button should be in the document', () => {
    const { getByTestId } = render(
      <>
        <OpenDefault />
        <CloseDefault />
      </>,
    );

    const closeButton = getByTestId('menu-close-button');
    const openButton = getByTestId('menu-open-button');

    expect(closeButton).toBeInTheDocument();
    expect(openButton).toBeInTheDocument();
  });

  test('Should invoke onClick handle function when button is clicked', async () => {
    const div = document.createElement('div');
    render(
      <>
        <CloseClicked {...CloseClicked.args} />
        <OpenClicked {...OpenClicked.args} />
      </>,
      { container: document.body.appendChild(div) },
    );

    await CloseClicked.play({ args: { ...CloseClicked.args }, canvasElement: div });
    await OpenClicked.play({ args: { ...OpenClicked.args }, canvasElement: div });

    expect(CloseClicked.args?.handleCloseFn).toHaveBeenCalled();
    expect(OpenClicked.args?.handleOpenFn).toHaveBeenCalled();
  });

  test('Navigation link should be rendered with correct label', () => {
    const { getByTestId } = render(
      <MenuOpened {...MenuOpened.args} />,
    );

    const link = getByTestId('navigation-link-contato');
    expect(link).toHaveTextContent('contato');
  });

  test('Menu should be in the document', () => {
    const { getByTestId } = render(<Menu {...Menu.args} />);

    const menu = getByTestId('navbar');

    expect(menu).toBeInTheDocument();
  });

  test('Menu data-mobile-open should be true when open button is clicked', async () => {
    assertIsOpenMenuListHelper(MenuOpened, 'true');
  });

  test('Menu data-mobile-open should be false when close button is clicked', async () => {
    assertIsOpenMenuListHelper(MenuClosed, 'false');
  });
});
