# SafeMath Calculator

![Calculator Screenshot](./assets/screenshot.png)

A secure, responsive calculator built with vanilla JavaScript that avoids dangerous `eval()` and `Function()` constructs while providing full calculator functionality.

## Features

✅ **Safe Expression Evaluation** - Custom math operations without using `eval()`  
✅ **Full Keyboard Support** - Type calculations directly or use mouse  
✅ **Responsive Design** - Works on mobile and desktop  
✅ **Error Handling** - Prevents division by zero and invalid inputs  
✅ **Decimal Support** - Floating point calculations with input validation  
✅ **Operation History** - Displays previous operation  
✅ **Backspace Function** - Correct input mistakes

## Security Warning

This project intentionally avoids using:

- `eval()`
- `new Function()`
- `setTimeout()` with strings
- `setInterval()` with strings

These JavaScript features can execute arbitrary code and pose XSS risks. The calculator implements custom safe math evaluation instead.

## Installation

No installation required - runs directly in browser:

1. Clone repo or download files
2. Open `index.html` in any modern browser

## Usage

### Basic Operations

- Click buttons or use keyboard to input numbers
- Select operation (+, -, ×, ÷)
- Press equals (=) or Enter to calculate

### Advanced Functions

- **AC**: Clear all (Esc key)
- **⌫**: Backspace (Backspace key)
- **.**: Decimal point
- **Keyboard shortcuts**: All operations can be done via keyboard

## Technical Implementation

### Core Components

- **Calculator.js**: Pure math logic and state management
- **UI.js**: DOM event handling and display updates
- **Main.css**: Responsive styling with CSS variables

### Math Operations

```javascript
// Example safe addition implementation
function add(a, b) {
  return a + b;
}

// Full operation handling
compute() {
  // Uses parseFloat() and switch statement
  // instead of eval()
}
```

## Development

To modify or extend:

1. Edit calculator logic in `scripts/calculator.js`
2. Update UI handling in `scripts/ui.js`
3. Modify styles in `styles/main.css`

All JavaScript uses modern ES6+ features (classes, arrow functions, etc).

## License

MIT License - free for personal and commercial use
