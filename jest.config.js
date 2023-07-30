module.exports = {
  clearMocks: true,

  collectCoverage: false,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

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

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@apis(.*)$': '<rootDir>/src/apis/$1',
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
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg'
  },

  testEnvironment: 'jest-environment-node',

  testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],

  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
