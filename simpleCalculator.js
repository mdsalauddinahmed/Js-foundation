function calculator(a, b) {

    function add() {
        return a + b;
    }

    function subtract() {
        return a - b;
    }

    function multiply() {
        return a * b;
    }

    function divide() {
        return b !== 0 ? a / b : "Cannot divide by zero";
    }

    function increment() {
        return a + 1;
    }

    function decrement() {
        return a - 1;
    }

    function remainder() {
        return a % b;
    }

    return {
        add: add(),
        subtract: subtract(),
        multiply: multiply(),
        divide: divide(),
        increment: increment(),
        decrement: decrement(),
        remainder: remainder()
    };
}

let result = calculator(5, 10);
console.log(result);
