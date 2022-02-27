/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/client/'],
    collectCoverage: true,
    collectCoverageFrom: ['source/**/*.ts']
};
