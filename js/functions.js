// Задание 1
const isPalindrome = (string) => {
  const newStr = string
    .split('')
    .reverse()
    .join('')
    .replaceAll(' ', '')
    .toLowerCase();
  if (string.replaceAll(' ', '').toLowerCase() === newStr) {
    return true;
  }
  return false;
};
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

// Задание 1 , другой вариант решения
const isPalindrome1 = (string) => {
  const interimString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = interimString.length - 1; i >= 0; i--) {
    reverseString += interimString.at(i);
  }
  return interimString === reverseString;
};
console.log(isPalindrome1('топот'));
console.log(isPalindrome1('ДовОд'));
console.log(isPalindrome1('Кекс'));
console.log(isPalindrome1('Лёша на полке клопа нашёл '));

// Задание 2
const isNumber1 = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
console.log(isNumber1('2023 год'));
console.log(isNumber1('ECMAScript 2022'));
console.log(isNumber1('1 кефир, 0.5 батона'));
console.log(isNumber1('агент 007'));
console.log(isNumber1('а я томат'));
console.log(isNumber1(2023));
console.log(isNumber1(-1));
console.log(isNumber1('1.5'));
console.log(isNumber1(-1.5));

// Задание 3
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + string;
};
console.log(myPadStart('1', 2, '0'));
console.log(myPadStart('1', 4, '0'));
console.log(myPadStart('q', 4, 'werty'));
console.log(myPadStart('q', 4, 'we'));
console.log(myPadStart('qwerty', 4, '0'));

// Задание 4
const isCompare = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};
console.log(isCompare('проверяемая строка', 20));
console.log(isCompare('проверяемая строка', 18));
console.log(isCompare('проверяемая строка', 10));
