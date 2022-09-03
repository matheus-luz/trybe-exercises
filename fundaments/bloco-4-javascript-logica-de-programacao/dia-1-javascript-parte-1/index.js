const a = 3;
const b = 5;
const c = 7;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));


if (a > b) {
  console.log(`a-${a} é maior que b${b}`);
} else {
  console.log(`b-${b} é maior que a-${a}`);
};

if(a < b && a < c) {
  console.log('A é menor que B e que C');
} else if(a > b && a > c) {
  console.log('A é maior que B e que c');
} else if(a === b && a === c) {
  console.log('A é igual a B e C ');
}