class Calculator{
    plus(a, b) {
        return a + b
    }
    minus(a, b) {
        return a - b
    }
    inc(a, b) {
        return a * b
    }
    divide(a, b) {
        if(b === 0)  return 'На ноль делить нельзя';
        return a / b
    }
    pow(a, b) {
        return Math.pow(a, b)
    }
    info() {
        console.log('Для вычисления суммы, введите команду calc.plus(a, b)');
        console.log('Для вычисления разности, введите команду calc.minus(a, b)');
        console.log('Для вычисления произведения, введите команду calc.inc(a, b)');
        console.log('Для вычесления частного, введите команду calc.divide(a, b)');
        console.log('Для того, чтобы возвести число в степень, введите команду calc.pow(a, b)');
    }
}
let calc = new Calculator();
console.log("Для вычисления нужно воспользоваться методами объекта calc.(plus, minus, inc, divide, pow)(a, b), для более подробной информации введите calc.info()");