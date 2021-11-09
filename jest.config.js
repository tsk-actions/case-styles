module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js','ts'],
  testMatch: ['**/*.specs.ts', '**/*.steps.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}