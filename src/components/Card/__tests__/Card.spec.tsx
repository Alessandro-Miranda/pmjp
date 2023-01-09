import { beforeEach, describe, jest, test } from '@jest/globals';
import IntersectionObserverMock from '@Mocks/IntersectionObserver';
import { cleanup, render } from '@testing-library/react';
import * as Card from '..';

jest.doMock('IntersectionObserverStub', () => IntersectionObserverMock, { virtual: true });

describe('Card component', () => {
  beforeEach(cleanup);

  window.IntersectionObserver = jest.requireMock('IntersectionObserverStub');

  test('Sub-components should be rendered with correctly props', () => {
    const { getByTestId } = render(
      <Card.Root aria-label="Component test">
        <Card.Icon src="/image-test" alt="image-test" />
        <Card.RoundedDecoration className="test-style" />
      </Card.Root>,
    );

    expect(getByTestId('card-root')).toHaveAttribute('aria-label', 'Component test');
    expect(getByTestId('card-icon')).toHaveAttribute('src', '/image-test');
    expect(getByTestId('card-rounded-decoration')).toHaveClass('test-style');
  });

  test('intersectionObserver should be invoked correctly', () => {
    const renderContainer = document.createElement('div');

    jest.spyOn(IntersectionObserver.prototype, 'root', 'get').mockReturnValue(renderContainer);

    const mockedIntersectionEntries: IntersectionObserverEntry[] = [{
      isIntersecting: true,
      boundingClientRect: {
        x: 10, y: 10, bottom: 10, height: 10, left: 10, right: 10, toJSON: () => '', top: 0, width: 10,
      },
      intersectionRatio: 0,
      intersectionRect: {
        x: 10, y: 10, bottom: 10, height: 10, left: 10, right: 10, toJSON: () => '', top: 0, width: 10,
      },
      rootBounds: null,
      target: document.querySelector('[data-testid="card-rounded-decoration"]') as HTMLElement,
      time: 0,
    }];

    window.IntersectionObserver
      .prototype.takeRecords = jest.fn<IntersectionObserverEntry[], IntersectionObserverEntry[]>()
        .mockReturnValueOnce(mockedIntersectionEntries);

    window.IntersectionObserver
      .prototype.observe = jest.fn();

    render(
      <Card.RoundedDecoration className="test-style" />,
      { container: document.body.appendChild(renderContainer) },
    );

    expect(
      IntersectionObserver.prototype.takeRecords(),
    ).toStrictEqual(mockedIntersectionEntries);
    expect(IntersectionObserver.prototype.observe).toHaveBeenCalled();
  });
});
