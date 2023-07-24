const evaluate = (expression) => {
  // TODO: what if it is string
  if (typeof expression === "boolean" || typeof expression === "number") {
    return expression;
  }

  const operator = Object.keys(expression)[0];
  const operands = expression[operator];

  switch (operator) {
    case "&&":
      return operands.every((operand) => evaluate(operand));

    case "||":
      return operands.some((operand) => evaluate(operand));

    case "==":
      const [left, right] = operands;
      return evaluate(left) === evaluate(right);

    case "!":
      return !evaluate(operands);

    default:
      return false;
  }
};

module.exports = evaluate;
