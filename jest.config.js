module.exports = {
  verbose: true,
  modulePathIgnorePatterns: [
    "src/index.tsx",
    "src/react-app-env.d.ts",
    "src/setupTests.ts",
  ],
  coverageThreshold: {
    "./src/package/*.tsx": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
