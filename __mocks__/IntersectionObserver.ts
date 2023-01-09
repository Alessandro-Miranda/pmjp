export default class IntersectionObserverMock {
  get root() { return null };
  get rootMargin() { return null };
  get thresholds() { return null };

  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
  unobserve() {}
};