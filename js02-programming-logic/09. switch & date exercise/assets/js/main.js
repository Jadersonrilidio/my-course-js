
// criar relógio no formato: "diaSemana(texto), 00 de Mês(texto) de ano(0000) - 00:00"
// inserir o relógio ao header da página

fetchData();

function fetchData () {
    const h1 = document.querySelector('.container h1');
    h1.innerHTML = getDataString();
}

function getDataString() {
    const data = new Date();
    const dataString = formatDataToString(data);
    return dataString;
}

function formatDataToString (data) {
    const weekday = formatDataWeekday(data.getDay()); //DONE
    const day = data.getDate(); //DISCARD only getDate() is needed
    const month = formatDataMonth(data.getMonth()); //TODO
    const year = data.getFullYear(); //DISCARD only getFullYear() in needed
    const hour = data.getHours(); //DISCARD only getHours() is needed
    const minute = data.getMinutes(); //DISCARD only getMinutes() is needed
    return `${weekday}, ${day} de ${month} de ${year} - ${hour}:${minute}`;
}

function formatDataWeekday (weekday) {
    let weekdayText;
    switch (weekday) {
        case 0:
            weekdayText = 'Domingo';
            return weekdayText;
        case 1:
            weekdayText = 'Segunda-feira';
            return weekdayText;
        case 2:
            weekdayText = 'Terça-feira';
            return weekdayText;
        case 3:
            weekdayText = 'Quarta-feira';
            return weekdayText;
        case 4:
            weekdayText = 'Quinta-feira';
            return weekdayText;
        case 5:
            weekdayText = 'Sexta-feira';
            return weekdayText;
        case 6:
            weekdayText = 'Sábado';
            return weekdayText;
        default:
            weekdayText = '';
            return weekdayText;
    }
}

function formatDataMonth (month) {
    let monthText;

    switch (month) {
        case 0:
            monthText = 'Janeiro';
            return monthText;
        case 1:
            monthText = 'Fevereiro';
            return monthText;
        case 2:
            monthText = 'Março';
            return monthText;
        case 3:
            monthText = 'Abril';
            return monthText;
        case 4:
            monthText = 'Maio';
            return monthText;
        case 5:
            monthText = 'Junho';
            return monthText;
        case 6:
            monthText = 'Julho';
            return monthText;
        case 7:
            monthText = 'Agosto';
            return monthText;
        case 8:
            monthText = 'Setembro';
            return monthText;
        case 9:
            monthText = 'Outubro';
            return monthText;
        case 10:
            monthText = 'Novembro';
            return monthText;
        case 11:
            monthText = 'Dezembro';
            return monthText;
        default:
            monthText = '';
            return monthText;
    }
}


// JEITO 2 DE FAZER

/*
const h1 = document.querySelector('container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/
// or:
/*
const h1 = document.querySelector('container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/

// JEITO 3 DE FAZER

/*
//falta implementar dentro do HTML
const data = new Date();

const diaArray = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira',
        'sexta-feira', 'sábado'];
const mesArray = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro',
        'outubro', 'novembro', 'dezembro'];

const weekdayText = diaArray[data.getDay()];
const monthText = mesArray[data.getMonth()];

console.log(`${weekdayText}, ${zeroAEsquerda(data.getDate())} de ${monthText} de ${data.getFullYear()}
${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);

function zeroAEsquerda(data) {
    return data >= 10 ? data : `0${data}`;
}
*/