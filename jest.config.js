/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^@src/(.*)$': '<rootDir>/src/$1',
    },
  };