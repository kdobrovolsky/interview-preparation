//Найти факториал числа
//1 вариант
const factorial1 = (num) => {
    return num ? num * factorial1(num -1): 1
}

//2 Вариант
const factorial2 = (n) => {
   if(n<0) return undefined
    if(n ===0 || n === 1) return 1
    return n * factorial2(n-1)
}

//3 Вариант
// Рекурсия с хвостовой оптимизацией
const factorial3 = (n,acc = 1) => {
   if(n<0) return undefined
    if(n ===0 || n === 1) return 1
    return n * factorial2(n-1, n* acc)
}

//4 Вариант
// Рекурсия с мемоизацией
function factorialMemoized() {
    const cache = {};

    return function factorial(n) {
        if (n < 0) return undefined;
        if (n === 0 || n === 1) return 1;

        // Проверяем, есть ли результат в кэше
        if (cache[n]) {
            return cache[n];
        }

        // Вычисляем и сохраняем в кэш
        cache[n] = n * factorial(n - 1);
        return cache[n];
}}

