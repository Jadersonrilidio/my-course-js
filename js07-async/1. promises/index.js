function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') return reject('BAD VALUE');
        
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// MAIN

esperaAi('1 - Conexão com a BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('2 - Buscando dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('3 - Tratando os dados da BASE', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    console.log( '4 - Exibe dados na tela');
})
.catch(e => {
    console.log('ERRO', e);
});

console.log('A promise é executada em paralelo, enquanto iso o código continua...');


/*
COM CALLBACKS

function esperaAi (msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if(callback) callback();
    }, tempo);
}
esperaAi('Frase 1', rand(1, 3), function callback () {
    esperaAi('Frase 2', rand(1, 3), function callback () {
        esperaAi('Frase 3', rand(1, 3));
    });
});

*/