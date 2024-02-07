<!--toc:start-->

- [course-jest-freecodecamp](#course-jest-freecodecamp)

- [What's an unit test?](#whats-an-unit-test)

- [Useful basic info](#useful-basic-info)

- [Syntax](#syntax)

- [Quick disclaimer about exports/imports](#quick-disclaimer-about-exportsimports)

- [The main expect() methods](#the-main-expect-methods)
  
  <!--toc:end-->

# course-jest-freecodecamp

![](https://github.com/divertimentos/course-jest-freecodecamp/blob/main/public/tests-screenshot.png)



After installing Jest, you have to update your script commands to use it.

```javascript
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest"
  },
```

# What's an unit test?

It's the proccess of testing a small piece of code, such as basic functions and basic classes. We do that in order to check small errors that can be produced by these small functions and classes.

# Useful basic info

Whichever file you call `<fileName>.text.js` it will be automatically interpreted as a test file by JavaScript.

# Syntax

The basic syntax is:

`test('description', testFunction => {})`

The complete syntax of a basic test is:

```javascript
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

# Quick disclaimer about exports/imports

**For a unknown reason I already despise**, there's a couple linked syntax configs that you should know when dealing with exports and imports in vanilla JS:

1. Create your function inside a `.js` file without exporting it.
2. Export it using `module.exports = <functionName>`
3. Import your function at the top of your `test.js` file using `const <functionName> = require("<pathToFile")`

Vite's linter will warn you that there's a better way to write ES module imports. Ignore it if you don't know what you're dealing with. Trust me.

# The main expect() methods

- `.toBe()` is used to expect primitive values (e.g. numbers, strings, booleans)
- `toEqual()` compares values of objects of arrays (i.e.: non-primitive values)
- `toBeFalsy()` checks values expected to be falsy. Simple.
- `toBeTruthy()`, same thing but on the contrary
- `toThrow()`, useful when a function is built to throw errors in given scenarios
