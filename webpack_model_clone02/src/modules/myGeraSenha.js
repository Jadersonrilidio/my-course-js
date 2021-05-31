class GeraSenha {
    constructor (qtde, hasNum, hasLin, hasLai, hasSim) {
        this.charSetArray = [
            '0123456789', 
            'abcdefghijklmnopqrstuvxwyz', 
            'ABCDEFGHIJKLMNOPQRSTUVXWYZ', 
            '!#$%&*-/@_~'
        ]; 
        this.qtde = qtde;
        this.optionsArray = [];
        this.generateOptionsArray(hasNum, hasLin, hasLai, hasSim);
    };

    generateOptionsArray (hasNum, hasLin, hasLai, hasSim) {
        if (hasNum) this.optionsArray.push('numbers');
        if (hasLin) this.optionsArray.push('lowercase letters');
        if (hasLai) this.optionsArray.push('uppercase letters');
        if (hasSim) this.optionsArray.push('symbols');
    };

    geraSenha () {
        if (this.setMax() == 0) return 'Selecione um dos tipos de caractere para gerar sua senha';
        let mySenha = '';
        for (let i = 0; i < this.qtde; i++) {
            let newChar = this.geraCaractere();            
            mySenha = mySenha.concat(newChar);
        }
        return mySenha;
    };

    geraCaractere () {
        const max = this.setMax();
        const sorteio = this.getRandomNumber(0, max);
        const selecao = this.optionsArray[sorteio];
        if (selecao === 'numbers') return this.generateChar(0);
        if (selecao === 'lowercase letters') return this.generateChar(1);
        if (selecao === 'uppercase letters') return this.generateChar(2);
        if (selecao === 'symbols') return this.generateChar(3);
    };
    
    setMax () {
        return this.optionsArray.length;
    };
    
    getRandomNumber (min=0, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    generateChar (index) {
        const charArray = this.charSetArray[index];
        const max = charArray.length;
        const sortNumber = this.getRandomNumber(0, max);
        return charArray[sortNumber];
    };
 };

// TESTS ==========================================================================

const senha1 = new GeraSenha(32, true, true, true, false);

console.log(senha1);
console.log(senha1.setMax());
console.log(senha1.optionsArray);
console.log(senha1.geraSenha());
