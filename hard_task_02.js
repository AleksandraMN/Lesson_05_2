'use strict';

const a = Number(prompt("Введите цифрами число a", ''));
const b = Number(prompt("Введите цифрами число b", ''));

const getMin = (a, b) => a > b ? b : a;

console.log(getMin(a, b));

alert(`Минимальным числом яляется число ${getMin(a, b)}!`);
