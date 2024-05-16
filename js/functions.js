// Задание 1
function isPalindrome(str) {
  const newStr = str.split('').reverse().join('');
  if (
    str.replaceAll(' ', '').toLowerCase() ===
    newStr.replaceAll(' ', '').toLowerCase()
  ) {
    return console.log('Задание 1: true');
  } else {
    return console.log('Задание 1: false');
  }
}
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// Задание 2
function isNumber(str) {
  const newNum = Number(str.replace(/[^0-9]/g, ''));
  if (newNum) {
    return console.log(newNum);
  } else {
    return console.log(NaN);
  }
}
isNumber('2023 год');
isNumber('ECMAScript 2022');
isNumber('1 кефир, 0.5 батона');
isNumber('агент 007');
isNumber('а я томат');
//isNumber(2023);
//isNumber(-1);
//isNumber(1.5);

// Задание 4
function compare(str, maxLength) {
  if (str.length <= maxLength) {
    return console.log('Задание 4: true');
  } else {
    return console.log('Задание 4: false');
  }
}
compare('проверяемая строка', 20);
compare('проверяемая строка', 18);
compare('проверяемая строка', 10);
