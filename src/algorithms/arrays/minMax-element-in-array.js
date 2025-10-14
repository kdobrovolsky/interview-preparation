// 1. Найти максимальный/минимальный элемент в массиве
//Вариант 1
function findMax(arr) {
    let sortArray = arr.sort((a, b) => b - a);
    return sortArray[0]
}

//Вариант 2
function findMax2(arr) { //Сложность O(n)
   return Math.max(...arr)
}

//Вариант 3
function findMax3(arr) { //Cложность O(n)
    let max = arr[0]
    for (let i = 0; i< arr.length; i++){
        if(arr[i] > max){
             max = arr[i]
        }
    }
    return max;
}

console.log(findMax3([1,2,4,7,5,43,5,-1,232]))