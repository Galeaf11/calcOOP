class Calculator {
    calculate(string) {
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
                return a / b;
            }
        };
        // создаём массив из строки, возпользовавшись методом split, разделителем является пробел
        let split = string.split(' '),
            firstNumber = +split[0],
            operation = split[1],
            secondNumber = +split[2];
        // делаем проверку на ввод операндов и чисел
        if(!operations[operation] || isNaN(firstNumber) || isNaN(secondNumber)) {
            return NaN
        }
        //вызываем один из методов в зависимости от операнда, который мы указали в вызове функции
        return operations[operation](firstNumber, secondNumber)
    }
}

let calc = new Calculator();
let calculate = calc.calculate;

console.log("Для расчета нужно ввести calculate('число(a), знак(+, -, *, /), число(b)'), числа и математические знаки должны быть разделены пробелами, например: calculate('9 / 3')");