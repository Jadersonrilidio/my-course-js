const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
PARA CADA ELEMENTO:
retorne apenas uma string com nome da pessoa
remova apenas a chave "nome" do objeto
adicione uma chave "id" em cada objeto
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const chavesIdade = pessoas.map(obj => ({ idade: obj.idade }));
console.log(chavesIdade);

const chavesIds = pessoas.map(function (obj, index) {
    const newObj = {...obj};
    newObj.id = index;
    return newObj;
});
console.log(chavesIds);
console.log(pessoas);

const chavesIds2 = pessoas.map((obj, index) => ({ nome: obj.nome, idade: obj.idade, id: index }));
console.log(chavesIds2);
console.log(pessoas);