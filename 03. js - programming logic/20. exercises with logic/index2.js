const largura = 400;
const altura = 350;

// =======================================================
// FORMA 1
function isPaisagem (largura, altura) {
    if (largura > altura) {
        return true;
    }
    return false;
}
console.log(isPaisagem(largura, altura));

// =======================================================
// FORMA 2
function isPaisagem2 (largura, altura) {
    return largura > altura ? true : false;
}
console.log(isPaisagem2(largura, altura));

// =======================================================
// FORMA 3
const isPaisagem3 = (largura, altura) => largura > altura ? true : false;
console.log(isPaisagem3(largura, altura));

// =======================================================
// FORMA 4
const isPaisagem4 = (largura, altura) => largura > altura;
console.log(isPaisagem4(largura, altura));

// =======================================================
// FORMA 5
console.log(largura > altura);
