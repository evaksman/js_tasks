// var name = 'Сергей';
// console.log(name);


// if (name == 'Сергей') {
//   console.log('Да');
// } else {
//     console.log('Нет');
// }


// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }


// var someVar = 20;
// var someOtherVar = 30;
// function sum(a, b) {
//   return a + b + someVar + someOtherVar; // ЗАМЫКАНИЕ - т.к. функция объявлена в глобальной ОВ, ей доступны переменные из глобальной ОВ
// }
// var s = sum(1, 5);
// console.log(s);


// var a = 10;
// function fn1(b, c) {
//   function fn2(d, e) {
//     return a + b + c + d + e; // здесь тоже сработает замыкание
//   }
//   return fn2(3, 4);
// }
// var result = fn1(1, 2);
// console.log(result);

// if (10 > 100) {
//   var a = 10; // ВСПЛЫТИЕ (hoisting) - перед началом выполнения программы интерпретатор анализирует код 
// и все объявления переменных, сделанные с помощью ключевого слова var, выносит наверх текущей ОВ
// }
// console.log(a);

// // вот так интерпретатор видит код выше
// var a;
// if (10 > 100) {
//   a = 10; 
// }
// console.log(a);


// // всплытие работает и с функциями, только функции всплывают ПОЛНОСТЬЮ
// var result = sum(2, 3); 
// console.log(result); 
// function sum(a, b) {
//    return a + b;
// }

// // вот так интерпретатор видит код выше
// function sum(a, b) {
//   return a + b;
// }
// var result;
// result = sum(2, 3);
// console.log(result);

// // Function Declaration
// function sum(a, b) { // интерпретатор сам создает переменную
//   return a + b;
// }

// // Function Expression - функция описывается в контексте другого выражения (не подвержены ВСПЛЫТИЮ, 
// т.к. тут всплывет объявление переменной, а не функция)
// var sum = function(a, b) { // мы сами явно задаем переменную
//   return a + b;
// };


// function fn(filter) {
//   filter();
// }

// // тоже функция в контексте другой функции
// fn(function() { // анонимная функция - функция без имени
//   console.log('!!!');
// });

// СТРЕЛОЧНЫЕ функции (arrow function) пришли с ES6
// var sum = (a, b) => { // интерпретатор сам создает переменную
//     return a + b;
// };

// Если тело стрелочной функции состоит из одного только выражения return, 
// то запись такой функции можно ещё упростить, убрав фигурные скобки и само слово return
// var sum = (a, b) => a + b;

// var result = sum(10, 20);
// console.log(result);


// var ar = [1, 2, 3, 4];

// var newArray = ar.map(function(n) {
//    return n * n;
// });

// перепишем функцию выше в стрелочную
// var newArray = ar.map((n) => n * n);

// если стрелочная функция имеет единственный параметр, то круглые скобки вокруг него можно не писать! МАГИЯ!
// var newArray = ar.map(n => n * n);

// console.log(ar);
// console.log(newArray);


// let, в отличие от var, не подвержен всплытию (ЛОКАЛЬНАЯ переменная)
// Поэтому переменные, объявленные с помощью ключевого слова let, будут доступны только в своём блоке кода (внутри фигурных скобок)

// единственное отличие const от let состоит в том, 
// что переменные, объявленные с помощью const, являются константами, то есть не могут менять своего значения


// ОБЪЕКТ - спец. тип данных, который можно хранить в себе несколько значений
// var obj = {
//   name: 'Иван',
//   lastName: 'Петров',
//   age: 40,
//   job: 'programmer'
// };

// точечная нотация (dot notation)
// console.log(obj.name);
// console.log(obj.lastName);
// console.log(obj.age);
// console.log(obj.job);

// obj.name = 'Дмитрий';

// второй способ обращения к свойствам объекта
// console.log(obj['name']);
// console.log(obj['lastName']);
// console.log(obj['age']);
// console.log(obj['job']);

// obj.gender = 'male'; 
// console.log(obj.gender);

// МАССИВ - упорядоченный список элементов ЛЮБОГО типа
// var array = ['Сергей', 'Иван', 'Андрей'];
// console.log(array[0]);   // 'Сергей'
// console.log(array[1]);   // 'Иван'
// console.log(array[2]);   // 'Андрей'

// array[1] = 'Роман';
// console.log(array[1]);   // 'Роман'

// console.log(array.length);
// array.push('Василий');
// console.log(array.length);

// for (let i = 0; i < array.length; i++) {
//   console.log('Array[' + i + '] = ' + array[i]);
// }

// var array2 = [
//   {
//       name: 'Сергей',
//       lastName: 'Мелюков'
//   },
//   {
//       name: 'Дмитрий',
//       lastName: 'Петров'
//   },
//   {
//       name: 'Андрей',
//       lastName: 'Иванов'
//   }
// ];

// for (let i = 0; i < array2.length; i++) {
//   console.log('Array[' + i + '] = ' + array2[i].name + ' ' + array2[i].lastName);
// }

// функция console.log(), которой мы постоянно пользуемся, тоже представляет собой обращение к свойству объекта. 
// При запуске интерпретатора JavaScript в глобальной области видимости автоматически создаются некоторые объекты, 
// в том числе объект console. Этот объект содержит свойство log, значением которого является функция:
// console = {
//    log: function() {
//        // ........
//    }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

