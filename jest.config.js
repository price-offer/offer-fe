/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@apis(.*)$': '<rootDir>/src/apis/$1', // 수정된 줄
    '^@mocks(.*)$': '<rootDir>/src/mocks/$1',
    '^@assets(.*)$': '<rootDir>/src/assets/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@configs(.*)$': '<rootDir>/src/configs/$1',
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@containers(.*)$': '<rootDir>/src/containers/$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@styles(.*)$': '<rootDir>/src/styles/$1',
    '^@themes(.*)$': '<rootDir>/src/styles/themes/$1',
    '^@types(.*)$': '<rootDir>/src/types/$1',
    '^@utils(.*)$': '<rootDir>/src/utils/$1'
  },

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // jest<=>바벨설정
    '^.+\\.svg$': 'jest-transformer-svg' // svg 인식 설정
  },

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
