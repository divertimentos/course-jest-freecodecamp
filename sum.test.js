const { sum, myFunction, fetchData, fetchPromise } = require("./sum");

// The most basic test possible
test("if one plus two is three", () => {
  expect(sum(1, 2)).toBe(3);
});

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

// Testing asynchronously
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

// Testing for promise-based functions
test("the data is peanut butter (promise)", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

// This one doesn't work and the teacher just ignored it :shrug:
// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

test("the data is peanut butter (async)", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});

// Mock?
test("mock implementation of a basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});

// Spy
test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
