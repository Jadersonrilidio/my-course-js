const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// 1 - indice por onde irá começar;
// 2 - quantos elementos deseja deletar a partir deste índice;
// 3 - elementos para adicionar;
// nomes.splice(indice, delete, elem1, elem2, elem3, ...);
const removidos = nomes.splice(4, 1, 'elem1', 'elem2', 'elem3');

console.log(nomes, removidos);