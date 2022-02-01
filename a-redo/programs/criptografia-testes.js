// D and E, D(E(msg)) = msg;
function MessageEncrypt (message) {
    Object.defineProperty(this, 'message', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: message,
    });

    // transforma string texto em string em ascii, separado por vírgulas.
    this.asciiText = function () {
        let asciiTxt = '';
        for (let index in this.message) {
            asciiTxt += this.message[index].charCodeAt() + ',';
        }
        return asciiTxt.slice(0, -1); 
    };

    // transforma uma string de ascii separado em vírgulas em texto novamente.
    this.textAscii = function () {
        let txt = '';
        let asciiArray = this.asciiText().split(',');
        for (let number of asciiArray) {
            txt += String.fromCharCode(number);
        }
        return txt;
    };
}
MessageEncrypt.prototype.asciiText = this.asciiText;
MessageEncrypt.prototype.textAscii = this.textAscii;

// ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== TESTS ===== TESTS =====

const msg1 = new MessageEncrypt('meu pau no seu cu.');

console.table({msg1});
console.log(msg1.message);
console.log(msg1.asciiText());
console.log(msg1.textAscii());
