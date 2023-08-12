const utils = require('./utils');

describe('Test the utils functions', () => {
  test('it should return a greeting message', () => {
    expect(utils.greeting('Full Cycle')).toBe('Hello Full Cycle!');
  });
});
