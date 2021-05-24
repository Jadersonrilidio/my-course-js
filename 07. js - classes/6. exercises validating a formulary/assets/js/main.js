class ValidaFormulario {
    constructor () {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos () {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    camposSaoValidos () {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;

            if (!campo.value) {
                this.criaErro (campo, `campo "${label}" não pode estar em branco.`);
                valid = false;
            }
            
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    senhasSaoValidas () {
        let valid = true;

        const senha1 = this.formulario.querySelector('.senha');
        const senha2 = this.formulario.querySelector('.repetir-senha');

        if (senha1.value !== senha2.value) {
            this.criaErro(senha1, `Senha repetida incorretamente`);
            this.criaErro(senha2, `Senha repetida incorretamente`);
            valid = false;
        }

        if (senha1.value.length < 6 || senha1.value.length > 12) {
            this.criaErro(senha1, `Senha deve conter entre 6 a 12 caracteres`);
            valid = false;
        }

        return valid;
    }

    validaCPF (campo) {
        const cpf = new ValidaCPF(campo.value);
        
        if (!cpf.valida()) {
            this.criaErro(campo, `cpf inválido`);
            return false;
        }
        
        return true;
    }

    validaUsuario (campo) {
        let valid = true;

        const user = campo.value;

        if( user.length < 3 || user.length > 12) {
            this.criaErro(campo, `Usuário deve conter entre 3 a 12 caracteres`);
            valid = false;
        }

        // ERRADO, REVISAR!
        if(!user.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, `Usuário deve conter apenas letras e/ou números`);
            valid = false;
        }

        return valid;
    }

    criaErro (campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);

    }
}

const formulario = new ValidaFormulario();
