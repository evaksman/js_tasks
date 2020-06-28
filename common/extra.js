// ДОП #1 Фильтрация массива
// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. 
// Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, 
// создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return num % 2 == 0;
};

const filterArray = (arr, even) => {
  let outArr = [];
  arr.forEach(elem => {
    if (even(elem))
      outArr.push(elem);
  });
  return outArr;
};

console.log(filterArray(mixedArray, isEven));

// let evenArray = filterArray(mixedArray, isEven);
// for (let i = 0; i < evenArray.length; i++) {
//   console.log(evenArray[i]);
// }