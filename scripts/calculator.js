class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.resetScreen = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === '') {
      this.currentOperand = '0';
    }
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' || this.resetScreen) {
      this.currentOperand = number;
      this.resetScreen = false;
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '÷':
        if (current === 0) {
          alert(
            "Nice try! Dividing by zero creates black holes. Let's not do that."
          );
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = this.roundResult(computation);
    this.operation = undefined;
    this.previousOperand = '';
    this.resetScreen = true;
  }

  roundResult(number) {
    // Prevent floating point overflow
    const str = number.toString();
    if (str.length > 12) {
      return parseFloat(number.toFixed(10));
    }
    return number;
  }

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandElement.innerText = '';
    }
  }
}
