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
  coverageThreshould: {
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
  // moduleNameMapper: {},
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};

export default CONFIG;
