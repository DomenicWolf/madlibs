const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('it handles positive number', () => {
    expect(addCommas(1000)).toBe('1,000')
  })
  test('it handles negative number', () => {
    expect(addCommas(-1000)).toBe('-1,000')
  })
  test('it handles number with decimal', () => {
    expect(addCommas(-1000.1234)).toBe('-1,000.1234')
  })
  test('it handles big number', () => {
    expect(addCommas(1000000000)).toBe('1,000,000,000')
  })
  test('it handles negative big number', () => {
    expect(addCommas(-1000000000)).toBe('-1,000,000,000')
  })

});
