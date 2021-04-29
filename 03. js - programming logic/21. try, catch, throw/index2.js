/*
try {
    // executa quando não há erros
} catch (err) {
    // É executada quando há erros
} finally {
    // será executado sempre no final
}
*/

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        // console.log('naõ é');
        throw new TypeError ('esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
} 

try {
    const hora = retornaHora(11);
    console.log(hora);
} catch (err) {
    // console.log('esperando uma instância de Date')
} finally {
    console.log('Tenha um bom dia');
}

