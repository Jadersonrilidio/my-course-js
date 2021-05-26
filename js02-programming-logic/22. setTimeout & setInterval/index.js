function mostraHora () {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

/*
function intervalFunction() {
    console.log(mostraHora());
}
setInterval(intervalFunction, 1000);
*/

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 5000);
setTimeout(function () {
    console.log('Parando timer.')
}, 5000);
