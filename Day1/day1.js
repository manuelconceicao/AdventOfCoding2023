const { error } = require('console');

const filePath = './doc.txt';

function ReadFile(path) {
  const fs = require('fs')
  const readFile = fs.readFileSync(path, (err, input) => {
    if (err) {
      throw err;
    }
  })
  return readFile.toString();
}

function SplitTextInLines(text){
  return text.split(/\r\n|\r|\n/);
}

function GetDigits(text){
  const digits = [];
  [...text].forEach(c => {
    if(IsDigit(c)){
      digits.push(c);
    }
  })
  return digits;
}

function IsDigit(char){
  if(/^[0-9]+[.]{0,1}[0-9]*$/.test(char)) {
    return true;
  } else {
    return false;
  }
}

function GetFirstAndLastDigit(digits){
    const length = digits.length;
    const firstAndLast = [];

    if(length == 0){
      return NaN;
    }

    if(length == 1){
      const repeatingDigit = digits[0] + digits[0] 
      firstAndLast.push(repeatingDigit);
    }
    else {
      firstAndLast.push(digits[0]);
      firstAndLast.push(digits[length-1]);
    }

    return firstAndLast.join('');
}

function ConvertToInt(text){
  if(isNaN(text)){
    return 0;
  }
  
  return parseInt(text);
}

function SumAll(numbers){
  let sum = 0;

  numbers.forEach(num => sum += num);

  return sum;
}

const readText = ReadFile(filePath);
const lines = SplitTextInLines(readText);

const numberPerLine = [];
let count = 0;
lines.forEach(line => {
  const digits = GetDigits(line);
  const firstAndLastDigits = GetFirstAndLastDigit(digits);
  const number = ConvertToInt(firstAndLastDigits);
  numberPerLine.push(number);
  // console.log(numberPerLine);
  // if(count++ >= 5){throw BreakException;}
});

const total = SumAll(numberPerLine);

console.log(total);
