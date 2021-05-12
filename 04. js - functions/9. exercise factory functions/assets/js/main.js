function criaCalculadora () {
    return {
        display: document.querySelector('.display'),

        inicia () {
            this.cliqueBotoes();
            this.pressEnter();
        },

        cliqueBotoes () {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteLast();
                }
                if (el.classList.contains('btn-eq')) {
                    this.checkResult();
                }
            }); // could be used .bind(this);
        },

        pressEnter () {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.checkResult();
                }
            });
        },

        btnParaDisplay (valor) {
            this.display.value += valor;
        },

        clearDisplay () {
            this.display.value = '';
        },

        deleteLast () {
            this.display.value = this.display.value.slice(0, -1);
        },

        checkResult () {
            let result = this.display.value;
            try {
                result = eval(result);
                if(!result) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = result;
            } catch (err) {
                alert('Conta inválida');
                return;
            }
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();