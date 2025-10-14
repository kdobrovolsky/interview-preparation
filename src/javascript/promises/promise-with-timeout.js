// * Задача: Реализовать функцию promiseWithTimeout
// *
// * Функция принимает промис и время таймаута в миллисекундах
// * Должна вернуть результат промиса, если он выполнится быстрее таймаута
// * Или отклонить с ошибкой "Timeout", если таймаут истечет раньше

function promiseWithTimeout(promise, timeout) {
    let timeoutId;

    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error('Timeout')), timeout);
    });

    return Promise.race([promise, timeoutPromise])
        .finally(() => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        });
}

function delay(ms, value = null) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}

