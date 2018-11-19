class Calculator {
    constructor(firstNumber = NaN, operand = '', secondNumber = NaN) {
        this.firstNumber = firstNumber;
        this.operand = operand;
        this.secondNumber = secondNumber;
        //вызываем функцию
        this.eq = this.calculate(this.firstNumber, this.operand, this.secondNumber);
        console.log(this.eq);
    }
    calculate(firstNumber, operand, secondNumber) {
        // создаем объект с операндами
        let operations = {
            "-"(a, b) {
                return a - b;
            },
            "+"(a, b) {
                return a + b;
            },
            "*"(a, b) {
                return a * b;
            },
            "/"(a, b) {
                if(b === 0)  return 'На ноль делить нельзя';
                return a / b;
            }
        };
        // делаем проверку на ввод операндов и чисел
        if(!operations[operand] || isNaN(firstNumber) || isNaN(secondNumber)) return NaN;
        //вызываем один из методов в зависимости от операнда, который мы указали в вызове функции
        return operations[operand](+firstNumber, +secondNumber)
    }
}
//пример
let calc = new Calculator(1 , '*', 55);

console.log("Для расчета нужно ввести new Calculator('число(a), знак(+, -, *, /),обязательно в кавычках, число(b)'),каждое значение должно отделяться запятой, например new Calculator(20, '+', 12)");