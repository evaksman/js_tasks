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
  inArr.forEach(curElem => {
    if (curElem.salary > 1000)
       outArr.push(curElem.name);
  });
  return outArr;
};

console.log(getWorthyWorkers(workers));

// let worthyWorkers = getWorthyWorkers(workers);
// for (let i = 0; i < worthyWorkers.length; i++) {
//   console.log(worthyWorkers[i]);
// }

