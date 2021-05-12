const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);

const novo = [...nomes];
const removido = novo.pop();
const removido2 = novo.shift();
novo.unshift('Wallace');
console.log(nomes, novo, removido, removido2);

const nome = nomes.join(' - ');
console.log(nome);
