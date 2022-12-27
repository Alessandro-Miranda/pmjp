/* eslint-disable no-useless-escape */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const CONFIG = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 95,
      lines: 95,
      functions: 95,
      statments: 95,
    },
  },
  // A set of global variables that need to be available in all test environments
  // globals: {},
  moduleFileExtensions: ['ts', 'tsx', 'node', 'js', 'd.ts'],
  moduleNameMapper: {
    '\\.scss$': '<rootDir>/__mocks__/styleMock.js',
    '^@(Logos|Icons|Images)\/(.*)': '<rootDir>/__mocks__/imageMock.js',
    '^@Components\/(.*)': '<rootDir>/src/components/$1',
  },
  transform: {
    '^.+\\.(ts|tsx|js)$': [
      'ts-jest',
      { tsconfig: { jsx: 'react', allowUmdGlobalAccess: true } },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '*/**/__tests__/*.spec.tsx',
  ],
};

export default CONFIG;
