const evaluate = require("./evaluate");

test("Given Example 1", () => {
  expect(
    evaluate({ "&&": [{ "==": ["a", "a"] }, { "!": { "==": [1, 2] } }] })
  ).toBe(true);
});

test("Given Example 2", () => {
  expect(evaluate({ "==": [true, false] })).toBe(false);
});

test("Given Example 3", () => {
  expect(evaluate({ "==": [1, 1] })).toBe(true);
});

test("Brainstormed Example 1", () => {
  expect(
    evaluate({
      "&&": [
        { "!": { "==": [true, false] } },
        { "==": [1, 1] },
        { "==": [2, 4] },
      ],
    })
  ).toBe(false);
});

test("Brainstormed Example 2", () => {
  expect(
    evaluate({
      "||": [
        { "&&": [{ "!": { "==": [true, false] } }, { "==": [1, 1] }] },
        { "==": [2, 4] },
      ],
    })
  ).toBe(true);
});

test("Brainstormed Example 3", () => {
  expect(
    evaluate({
      "||": [
        { "!": { "==": [true, false] } },
        { "==": [1, 1] },
        { "==": [2, 4] },
      ],
    })
  ).toBe(true);
});

test("Brainstormed Example 4", () => {
  expect(
    evaluate({
      "||": [
        { "&&": [{ "==": [1, 1] }, { "!": { "==": [2, 4] } }] },
        { "==": [true, false] },
      ],
    })
  ).toBe(true);
});

test("Brainstormed Example 5", () => {
  expect(evaluate({ "!": { "==": [2, 4] } })).toBe(true);
});

test("Brainstormed Example 6", () => {
  expect(evaluate({ "&&": [{ "==": [2, 4] }, { "==": [true, true] }] })).toBe(
    false
  );
});

test("Brainstormed Example 7", () => {
  expect(evaluate({ "||": [{ "==": [2, 4] }, { "==": [true, true] }] })).toBe(
    true
  );
});

test("Brainstormed Example 8", () => {
  expect(
    evaluate({ "&&": [{ "==": [2, 4] }, { "==": [true, { "==": [7, 8] }] }] })
  ).toBe(false);
});

test("Brainstormed Example 9", () => {
  expect(
    evaluate({
      "&&": [
        { "==": [2, 2] },
        { "==": [true, { "&&": [{ "==": [7, 8] }, { "==": [true, false] }] }] },
      ],
    })
  ).toBe(false);
});
