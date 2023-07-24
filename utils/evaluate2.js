const EQUALITY = "==";
const NOT = "!";
const AND = "&&";
const OR = "||";

function evaluate(expression) {
  const operator = Object.keys(expression)[0];
  const operands = expression[operator];

  switch (operator) {
    case EQUALITY:
      const operand1 = evaluate(operands[0]);
      const operand2 = evaluate(operands[1]);
      return operand1 === operand2;

    case NOT:
      return !evaluate(operands);

    case AND:
      return operands.every((operand) => evaluate(operand));

    case OR:
      return operands.some((operand) => evaluate(operand));

    default:
      return expression;
  }
}

module.exports = evaluate;
