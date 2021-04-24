// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const ano = zeroAEsquerda(data.getFullYear());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

 const data = new Date();
 const dataBrasil = formatData(data) + ' GMT-03:00.';
console.log(dataBrasil);

/*0
const data1 = new Date();
console.log(data1.toString());

// Thu Jan 01 1970 00:00:00 GMT-00 (UTC Standard Time)
const data2 = new Date(0);
console.log(data2.toString());

// Date(ano, mes, dia, hora, minuto, segundo, milisegundo)
const data3 = new Date(2019, 3, 20, 15, 14, 27, 500);
console.log(data3.toString());

// date em string
const data4 = new Date('2020-04-20 20:20:59'); // ('2020-04-20T20:20:59.500')
console.log(data4.toString());

const data5 = new Date();
console.log('Dia', data5.getDate());
console.log('Mês', data5.getMonth() + 1); // Mês começa a contar do zero 0
console.log('Ano', data5.getFullYear());
console.log('Hora', data5.getHours());
console.log('Min', data5.getMinutes());
console.log('Seg', data5.getSeconds());
console.log('ms', data5.getMilliseconds());
console.log('Dia semana', data5.getDay()); // 0 - Domingo, 6 - Sábado

// data agora
console.log(Date.now());
*/