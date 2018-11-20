class Calculator{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    plus() {
        return this.a + this.b
    }
    minus() {
        return this.a - this.b
    }
    inc() {
        return this.a * this.b
    }
    divide() {
        if(this.b === 0)  return 'На ноль делить нельзя';
        return this.a / this.b
    }
    pow() {
        return Math.pow(this.a, this.b)
    }
    info() {
        console.log('Для вычисления суммы, введите команду calc.plus()');
        console.log('Для вычисления разности, введите команду calc.minus()');
        console.log('Для вычисления произведения, введите команду calc.inc()');
        console.log('Для вычесления частного, введите команду calc.divide()');
        console.log('Для того, чтобы возвести число в степень, введите команду calc.pow()');
    }
}
let calc = new Calculator(1, 5);

console.log("Для вычисления нужно воспользоваться методами объекта calc.(plus, minus, inc, divide, pow)(), для более подробной информации введите calc.info()");