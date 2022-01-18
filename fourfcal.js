let prompt = require('prompt-sync')();
let select = require('data-inputjs').select;

function evalResponse(response) {
  // if (/^-?\d+\s*(([+-/*^]|\*\*)\s*-?\d+)+$/.test(response)) {
  if (/^-?\d+(([+-/*^]|\*\*)-?\d+)+$/.test(response)) {
    return eval(response.replace('^', '**'));
  } else {
    return 'you cheeky bastard';
  }
}

function actualCalculator(operation) {
  let command = operation.split(' ');
  switch (command[1]) {
    case '+':
      return Number(command[0]) + Number(command[2]);
    case '-':
      return command[0] - command[2];
    case '/':
      return command[0] / command[2];
    case '*':
      return command[0] * command[2];
    default:
      console.log('i think you did something wrong');
      return;
  }
}

function inputjsCalculator(numbers) {
  select(['+', '-', '*', '/']).then((operation) => {
    switch (operation) {
      case '+':
        return Number(numbers[0]) + Number(numbers[1]);
      case '-':
        return numbers[0] - numbers[1];
      case '/':
        return numbers[0] / numbers[1];
      case '*':
        return numbers[0] * numbers[1];
      default:
        console.log('i think you did something wrong');
        return;
    }
  });
}

let response = prompt('input calculation: ');
while (response != 'exit') {
  console.log(actualCalculator(response));
  response = prompt('input calculation: ');
}
