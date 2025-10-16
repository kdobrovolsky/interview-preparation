//Задача 1.  Сумма чисел от 1 до n
function sumTo(n) {
    if(n < 1) return n;
    return n + sumTo(n - 1);
}



//Задача 2. Степень числа

function power(base, exponent) {
    if(exponent === 1) return base;
    return base * power(base, exponent -1);
}

//Задача 3. Количество цифр в числе

function countDigits(n) {

    if(n < 10 && n>= 0) return 1;

    return 1 + countDigits(Math.floor(n / 10));
}

//Задача 4.  Сумма цифр числа

function sumDigits(n) {
    if(n < 10) return n;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(123));