const hora = 10;

if (0 < hora && hora < 12) {
    console.log('Bom dia!');
}else if (12 <= hora && hora < 18) {
    console.log('Boa tarde!');
}else if (18 <= hora && hora < 24) {
    console.log('Boa noite!');
}else {
    console.log('Hora errada');
}