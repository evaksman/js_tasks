// #1 Фильтрация строки
// Создать переменную со строковым значением. 
// Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. 
// Результат вывести в консоль.

const string = "Привет! Как дела?";
const regularExpression = /[^аеёиоуыэюя]/gi; // регулярка для русского языка, все кроме гласных букв в любом регистре
let getVowels = str => str.replace(regularExpression, '');
console.log(getVowels(string));

// #2 Выборка объекта
// Сформировать произвольный массив объектов, описывающий, например, работников компании, 
// в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) 
// и поле salary (содержащее зарплату сотрудника от 0 до 3000). 
// Сформировать функцию в которую будет передан в качестве аргумента этот массив 
// и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.

const workers = [
  {
    "name": "John",
    "salary": 500
  },
  {
    "name": "Mike",
    "salary": 1300
  },
  {
    "name": "Linda",
    "salary": 1500
  }
];

const getWorthyWorkers = inArr => {
  let outArr = [];
  for (let i = 0; i < inArr.length; i++) {
    if (inArr[i].salary > 1000)
      outArr.push(inArr[i].name);
  }
  return outArr;
};

let worthyWorkers = getWorthyWorkers(workers);
for (let i = 0; i < worthyWorkers.length; i++) {
  console.log(worthyWorkers[i]);
}

// #3 Анализ строки
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. 
// Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

const path = "/users/download/index.html";
const regExp = /.*\.html$/; // регулярка с маской

let isHtml = (str, reg) => {
  if (str.search(reg) != -1)
    return true;
  else
    return false;
};

console.log(isHtml(path, regExp));

// ДОП #1 Фильтрация массива
// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. 
// Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, 
// создайте из готового массива новый, который будет содержать только четные числа. Результат выведите в консоль.

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => {
  if (num % 2 == 0)
    return true;
  else
    return false;
};

const filterArray = (arr, even) => {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (even(arr[i]))
      outArr.push(arr[i]);
  }
  return outArr;
};

let evenArray = filterArray(mixedArray, isEven);
for (let i = 0; i < evenArray.length; i++) {
  console.log(evenArray[i]);
}