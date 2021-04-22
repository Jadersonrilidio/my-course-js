// Arrays in js can hold all sort of elements with various types, it does not need to be declared
// in order to have an array.   
const arrayDemo = ['joão', 'maria', 'ricardo', 1, 2, true, null, [1, 2, 3, 4], '...'];
//  índice         0       1       2
const alunos = ['Luiz', 'Maria', 'João']

console.log(alunos); // ac0cess the entire array
console.log(alunos[0]); // ítem do array alunos no índice 0 = 'Luiz'

alunos[0] = 'Eduardo';
console.log(alunos);

alunos[3] = 'Luiza'; // adiciona-se(ou altera) um elemento no array no índice 3 (se [3] = null, cria-se mais um elemento)
console.log(alunos);

console.log(alunos.lentgh);
alunos[alunos.length] = 'Novo alunos';
alunos[alunos.length] = 'Outro novo alunos';
alunos.push('Nome do aluno'); // adiciona um elemento ao final do array

alunos.unshift('Luiza'); // adiciona um elemento ao início do array

alunos.pop(); // remove último elemento do array - retorna o elemento
alunos.shift(); // remove o primeiro elemento do array - retorna o elemento

delete alunos[1]; // deleta o elemento no índice 1 sem modificar os demais índices, ínidce 1 fica = null

console.log(alunos.slice(0, 3)); // pega do elemento 0 ao 2 apenas
console.log(alunos.slice(-3)); // pega do ante-penúltimo até o último elemento

console.log(typeof alunos); // return Object
console.log(alunos instanceof Array); // return true or false
