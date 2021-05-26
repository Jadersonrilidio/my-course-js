// fazer o contador funcionar de 0 a Time
// criar funções de iniciar contagem,pausar e zerar
// adicionar funcionalidade aos botoes

//=============================================================

function relogio () {
    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            startTimer();
        }
        if (event.target.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (event.target.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }
    })

    function getTimeFromSeconds (seg) {
        let data = new Date(seg * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
}

relogio();
