/**
 * ПРОВЕРКА СТРОКИ НА ПАЛИНДРОМ
 * Различные подходы к решению задачи
 */

 // Решение 1: Классический подход с разворотом строки
 //  Время: O(n), Память: O(n)

const isPalindromeReverse = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
};


  // Решение 2: Два указателя (оптимизированное по памяти)
  // Время: O(n), Память: O(1)
  //
const isPalindromeTwoPointers = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};


 //  Решение 3: Рекурсивный подход
 // Время: O(n), Память: O(n) из-за стека вызовов

const isPalindromeRecursive = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');

    const check = (s, start, end) => {
        if (start >= end) return true;
        if (s[start] !== s[end]) return false;
        return check(s, start + 1, end - 1);
    };

    return check(cleanedStr, 0, cleanedStr.length - 1);
};


 // Решение 4: Функциональный подход с every()
 // Время: O(n), Память: O(n)

const isPalindromeFunctional = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return cleanedStr
        .split('')
        .every((char, index, arr) => char === arr[arr.length - 1 - index]);
};

 //  Решение 5: С использованием Array.reduce() для разворота
 //  Время: O(n), Память: O(n)

const isPalindromeReduce = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    const reversed = cleanedStr.split('').reduce((acc, char) => char + acc, '');
    return cleanedStr === reversed;
};