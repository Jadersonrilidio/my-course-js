const nome = prompt('Digite seu nome');

window.document.body.innerHTML = `O seu nome é <strong>${nome}</strong>.<br />`;
window.document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras.<br />`;
window.document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1]}</strong>.<br />`; // nome.chatAt(1)
window.document.body.innerHTML += `Qual o primeiro índice da letra 'a' do seu nome? <strong>${nome.indexOf('a')}</strong>.<br />`;
window.document.body.innerHTML += `Qual o último índice da letra 'a' do seu nome? <strong>${nome.lastIndexOf('a')}</strong>.<br />`;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong>.<br />`;
window.document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>.<br />`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas é: <strong>${nome.toUpperCase()}</strong>.<br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas é: <strong>${nome.toLowerCase()}</strong>.<br />`;