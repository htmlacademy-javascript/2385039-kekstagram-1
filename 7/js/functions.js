const isPalindrome = (string) => {
  const newStr = string
    .split('')
    .reverse()
    .join('')
    .replaceAll(' ', '')
    .toLowerCase();

  return string.replaceAll(' ', '').toLowerCase() === newStr;
};
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');


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
isNumber1('1 кефир, 0.5 батона');
isNumber1('а я томат');
isNumber1(2023);


const myPadStart = (string, minLength, pad) => {

  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }

  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);

  return tempPad + tempRepeat + string;
};
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');


const validateStringLength = (string, maxLength) => string.length <= maxLength;

validateStringLength('проверяемая строка', 20);
validateStringLength('проверяемая строка', 10);
