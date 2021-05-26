const nome = 'Luiz Otávio Miranda';
let idade = 30;
let peso = 84;
let altura = 1.8;
let IMC = peso / (altura * altura);
const anoNascimento = 2019 - idade;

// Template strings mode use:
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);