const EQUALITY = "==";
const NOT = "!";
const AND = "&&";
const OR = "||";

function evaluate(expression) {
  const operator = Object.keys(expression)[0];

  if (operator === EQUALITY) {
    let operand1 = expression[EQUALITY][0];
    let operand2 = expression[EQUALITY][1];

    if (typeof operand1 === "object") {
      operand1 = evaluate(operand1);
    }

    if (typeof operand2 === "object") {
      operand2 = evaluate(operand2);
    }

    return operand1 == operand2;
  }

  if (operator === NOT) {
    return !evaluate(expression[NOT]);
  }

  if (operator === AND) {
    let i = 0;
    let result = true;

    while (i < expression[AND].length) {
      const secondOperandResult = evaluate(expression[AND][i]);
      result = result && secondOperandResult;
      i++;
    }

    return result;
  }

  if (operator === OR) {
    let i = 0;
    let result = false;

    while (i < expression[OR].length) {
      const secondOperandResult = evaluate(expression[OR][i]);
      result = result || secondOperandResult;
      i++;
    }

    return result;
  }
}

module.exports = evaluate;
