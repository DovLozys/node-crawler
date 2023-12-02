const { test, expect } = require('@jest/globals');
const { normalizeURL } = require('./crawl.js');

test('normalizeURL removes protocol', () => {
  const input = 'http://dov.fyi/test';
  const actual = normalizeURL(input);
  const expected = 'dov.fyi/test';
  expect(actual).toBe(expected);
});
test('normalizeURL removes protocol', () => {
  const input = 'https://dov.fyi/test';
  const actual = normalizeURL(input);
  const expected = 'dov.fyi/test';
  expect(actual).toBe(expected);
});
test('normalizeURL removes trailing slashes', () => {
  const input = 'http://dov.fyi/test/';
  const actual = normalizeURL(input);
  const expected = 'dov.fyi/test';
  expect(actual).toBe(expected);
});
test('normalizeURL changes to lowercase', () => {
  const input = 'http://Dov.FYI/test';
  const actual = normalizeURL(input);
  const expected = 'dov.fyi/test';
  expect(actual).toBe(expected);
});
