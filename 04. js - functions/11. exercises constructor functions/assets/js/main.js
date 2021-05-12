function Calculadora () {
    const display = document.querySelector('.display');

    this.inicia = () => {cliqueBotoes();pressEnter();}

    const cliqueBotoes = function () {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) addChar(el);
            if (el.classList.contains('btn-clear')) clear();
            if (el.classList.contains('btn-del')) del();
            if (el.classList.contains('btn-eq')) result();
        });
    }

    const pressEnter = function () {
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) result();
        });
    }

    const addChar = el => {
        display.value += el.innerText;
        display.focus();
    }

    const clear = () => display.value = '';
    
    const del = () => display.value = display.value.slice(0, -1);
    
    const result = () => {
        try {
            const result = eval(display.value);
            if(!result) {
                alert('Conta inválida');
                return;
            }
            display.value = result;
        } catch (e) {
            alert('Erro: Conta inválida');
            return;
        }
    }

}

const c1 = new Calculadora();
c1.inicia();

 // ============================================================================

 /*
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
                    this.addChar(el.innerText);
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

        addChar (valor) {
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
*/