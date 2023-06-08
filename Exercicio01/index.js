const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaM = 1.80;

let imc = peso / (alturaM * alturaM); 
let anoDeNascimento = 2023 - idade;

console.log (imc);
console.log (anoDeNascimento);
console.log (nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log ('tem', alturaM, 'de altura e seu IMC é de', imc)
console.log (`${nome} nasceu em ${anoNascimento}.`)