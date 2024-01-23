// Fungsi untuk menentukan dua angka selanjutnya dalam pola bilangan
function nextTwoNumbersInPattern(numbers, operation) {
  const lastNumber = numbers[numbers.length - 1];
  const secondLastNumber = numbers[numbers.length - 2];
  
  let nextNumber1, nextNumber2;

  switch (operation) {
    case 'multiply':
      const commonRatioMultiply = lastNumber / secondLastNumber;
      nextNumber1 = lastNumber * commonRatioMultiply;
      nextNumber2 = nextNumber1 * commonRatioMultiply;
      break;
    case 'add':
      const commonDifferenceAdd = lastNumber - secondLastNumber;
      nextNumber1 = lastNumber + commonDifferenceAdd;
      nextNumber2 = nextNumber1 + commonDifferenceAdd;
      break;
    case 'divide':
      const commonRatioDivide = secondLastNumber / lastNumber;
      nextNumber1 = lastNumber / commonRatioDivide;
      nextNumber2 = nextNumber1 / commonRatioDivide;
      break;
    case 'subtract':
      const commonDifferenceSubtract = secondLastNumber - lastNumber;
      nextNumber1 = lastNumber - commonDifferenceSubtract;
      nextNumber2 = nextNumber1 - commonDifferenceSubtract;
      break;
    default:
      console.log('Operasi tidak valid.');
      process.exit();
  }

  return [nextNumber1, nextNumber2];
}

// Main program
const readline = require('readline-sync');

console.log('Masukkan beberapa angka dalam deret (pisahkan dengan koma):');
const inputNumbers = readline.question().split(',').map(Number);

console.log('Pilih operasi deret:');
console.log('1. Perkalian');
console.log('2. Penambahan');
console.log('3. Pembagian');
console.log('4. Pengurangan');
const choice = parseInt(readline.question('Masukkan pilihan (1-4):'));

let operation;

switch (choice) {
  case 1:
    operation = 'multiply';
    break;
  case 2:
    operation = 'add';
    break;
  case 3:
    operation = 'divide';
    break;
  case 4:
    operation = 'subtract';
    break;
  default:
    console.log('Pilihan tidak valid.');
    process.exit();
}

const nextTwoNumbers = nextTwoNumbersInPattern(inputNumbers, operation);

console.log(`Angka selanjutnya dalam deret adalah: ${nextTwoNumbers[0]} dan ${nextTwoNumbers[1]}`);
