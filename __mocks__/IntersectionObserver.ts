export default class IntersectionObserverMock {
  readonly root: Element | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;

  constructor() {
    this.root = null;
    this.rootMargin = '';
    this.thresholds = [];
  }

  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    const rectMock = { x: 0, y: 0, width: 0, height: 0, bottom: 0, left: 0, right: 0, toJSON: () => '', top: 0 };
    return [{
      boundingClientRect: rectMock,
      isIntersecting: true,
      intersectionRatio: 0,
      intersectionRect: rectMock,
      rootBounds: null,
      target: document.querySelector('[data-testid="card-rounded-decoration"]') as HTMLElement,
      time: 0
    }]
  }
  unobserve() {}
};