const sum = require("./sum");
const myFunction = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// Testing primitives:
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// Testing non-primitives values (inside objects and arrays)
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

// Testing falsy values (.toBeFalsy)
test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("zero is falsy", () => {
  const z = 0;
  expect(z).toBeFalsy();
});

// Testing truthy values (.toBeTruthy)
test("one is truthy", () => {
  const o = 1;
  expect(o).toBeTruthy();
});

// Testing throws (.toThrow())
test("Throws on invalid input", () => {
  expect(() => {
    const invalidInput = "oibebe";
    myFunction(invalidInput);
  }).toThrow();
});
