const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    //console.log('evento previnido'); //TEST
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResult('Altura inválida', false);
        return;
    }
    //console.log('cheguei aqui'); //TEST

    const imc = getIMC(peso, altura);
    const rangeImc = setRangeIMC(imc);
    //console.log(imc, rangeImc); //TEST

    const msg = `Seu IMC é ${imc} (${rangeImc}).`;
    setResult(msg, true);
});

function setRangeIMC (imc) {
    // não recomendado, mas usado por simplicidade do código
    if (imc >= 39.9) return 'Obesidade grau 3';
    if (imc >= 34.9) return 'Obesidade grau 2';
    if (imc >= 29.9) return 'Obesidade grau 1';
    if (imc >= 24.9) return 'Sobrepeso';
    if (imc >= 18.5) return 'Peso normal';
    if (imc < 18.5) return 'Abaixo do peso';
}

function getIMC (peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = ''; // criado parágrafo vazio
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-result-green');
    } else {
        p.classList.add('paragrafo-result-red');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}
 
// =====================================================================================================
/*
function myScope () {
    const form = document.querySelector('#form');
    const result = document.querySelector('#result'); 
    
    
    function receiveEventForm (event) {
        event.preventDefault();
        
        const altura = form.querySelector('#altura');
        const peso = form.querySelector('#peso');
        
        const imc = (peso.value / (altura.value ** 2)).toFixed(2);
        result.innerHTML = `<p>Seu IMC é ${imc}   (${setRangeIMC(imc)})</p>`;
    }
    form.addEventListener('submit', receiveEventForm);    
}
myScope();

function setRangeIMC (imc) {
    if (0 < imc && imc < 18.5) {
        return 'Abaixo do peso'; 
    }else if (18.5 <= imc && imc < 24.9) {
        return 'Peso normal';
    }else if (24.9 <= imc && imc < 29.9) {
        return 'Sobrepeso';
    }else if (29.9 <= imc && imc < 34.9) {
        return 'Obesidade grau 1';
    }else if (34.9 <= imc && imc < 39.9) {
        return 'Obesidade grau 2';
    }else if (39.9 <= imc && imc <= 100) {
        return 'Obesidade grau 3';
    }else {
        return 'resultado fora dos parâmetros normais';
    }
}
*/

// =====================================================================================================

/*
function myScope () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; 

    function receiveEventForm (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({nome: nome.value, sobrenome: sobrenome.value,  peso: peso.value, altura: altura.value});
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}.</p>`;
    }
    form.addEventListener('submit', receiveEventForm);    
}
myScope();
*/