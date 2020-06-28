// #3 Анализ строки
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. 
// Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
const path = "/users/download/index.html";
const regExp = /.*\.html$/; // регулярка с маской

const isHtml = (str, reg) => {
  return str.search(reg) != -1;
};

console.log(isHtml(path, regExp));