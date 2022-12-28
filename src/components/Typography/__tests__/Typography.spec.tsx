import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render } from '@testing-library/react';
import * as Stories from './Typography.stories';

describe('Typography component', () => {
  beforeEach(cleanup);

  const {
    Default,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Span,
  } = composeStories(Stories);

  test('Component Should rendered with correctly variants', () => {
    const { getByTestId } = render(
      <>
        <Default {...Default.args} />
        <H1 {...H1.args} />
        <H2 {...H2.args} />
        <H3 {...H3.args} />
        <H4 {...H4.args} />
        <H5 {...H5.args} />
        <H6 {...H6.args} />
        <P {...P.args} />
        <Span {...Span.args} />
      </>,
    );

    expect(getByTestId('typography').tagName).toBe('P');
    expect(getByTestId('p-variant').tagName).toBe('P');
    expect(getByTestId('h1-variant').tagName).toBe('H1');
    expect(getByTestId('h2-variant').tagName).toBe('H2');
    expect(getByTestId('h3-variant').tagName).toBe('H3');
    expect(getByTestId('h4-variant').tagName).toBe('H4');
    expect(getByTestId('h5-variant').tagName).toBe('H5');
    expect(getByTestId('h6-variant').tagName).toBe('H6');
    expect(getByTestId('span-variant').tagName).toBe('SPAN');
  });
});
