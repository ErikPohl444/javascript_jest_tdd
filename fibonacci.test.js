const fibonacci = require("./fibonacci");

test("fibonacci index 0 = 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("fibonacci index 1 = 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("fibonacci index 2 = 1", () => {
  expect(fibonacci(2)).toBe(1);
});

test("fibonacci index 3 = 2", () => {
  expect(fibonacci(3)).toBe(2);
});

test("fibonacci index 4 = 3", () => {
  expect(fibonacci(4)).toBe(3);
});

test("fibonacci index 5 = 5", () => {
  expect(fibonacci(5)).toBe(5);
});
