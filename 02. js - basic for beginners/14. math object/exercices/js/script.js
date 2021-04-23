let numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroSqrt = Math.sqrt(numero);

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raíz quadrada: <strong>${numeroSqrt}</strong>.</p>`;
texto.innerHTML += `<p>${numeroSqrt} é inteiro: <strong>${Number.isInteger(numeroSqrt)}</strong>.</p>`;
texto.innerHTML += `<p>${numeroSqrt} é NaN: <strong>${Number.isNaN(numeroSqrt)}</strong>.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numeroSqrt)}</strong>.</p>`;
texto.innerHTML += `<p>Arredondandon para cima <strong>${Math.ceil(numeroSqrt)}</strong>.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numeroSqrt.toFixed(2)}</strong>.</p>`;
