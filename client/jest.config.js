// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
// const coverageThreshold = require("./client/build/coverageThreshold");

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    '<rootDir>/test/support/setupTests.js',
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // Map asset imports to an empty module for tests.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ogv)$": "<rootDir>/test/support/emptyModule.js",
    "\\.(css|scss|sass)$": "identity-obj-proxy"
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  // verbose: false,

  setupFilesAfterEnv: [
    "jest-enzyme"
  ],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    enzymeAdapter: "react16"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/index.js"
  ],
  coverageReporters: [
    "html",
    "text"
  ]
};