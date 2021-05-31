
import { nome as nome2, sobrenome2, idade, soma, Pessoa } from './modulo1.js';
import * as MeuModulo from './modulo1.js';  // exporta tudo do modulo1.js como um objeto MeuModulo
import qualquerNome from './modulo1.js';

const nome = 'João';
const p1 = new Pessoa('Luizes', 'Mirandas');    

console.log(MeuModulo);
console.log(nome, nome2, sobrenome2, idade);
console.log(p1);
console.log(soma(5, 5));
console.log(qualquerNome(50, 50)); 
