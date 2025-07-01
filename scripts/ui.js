document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator(
    document.querySelector('.previous-operand'),
    document.querySelector('.current-operand')
  );

  // Button event listeners
  document.querySelectorAll('[data-number]').forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

  document.querySelectorAll('[data-operation]').forEach((button) => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });

  document
    .querySelector('[data-action="calculate"]')
    .addEventListener('click', () => {
      calculator.compute();
      calculator.updateDisplay();
    });

  document
    .querySelector('[data-action="clear"]')
    .addEventListener('click', () => {
      calculator.clear();
      calculator.updateDisplay();
    });

  document
    .querySelector('[data-action="backspace"]')
    .addEventListener('click', () => {
      calculator.delete();
      calculator.updateDisplay();
    });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) calculator.appendNumber(e.key);
    if (e.key === '.') calculator.appendNumber('.');
    if (e.key === '=' || e.key === 'Enter') calculator.compute();
    if (e.key === 'Backspace') calculator.delete();
    if (e.key === 'Escape') calculator.clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
      calculator.chooseOperation(convertOperator(e.key));
    }
    calculator.updateDisplay();
  });

  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷';
    if (keyboardOperator === '*') return '×';
    return keyboardOperator;
  }
});
