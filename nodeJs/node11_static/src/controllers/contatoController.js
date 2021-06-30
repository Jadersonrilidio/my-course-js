exports.paginaInicial = (req, res) => {
    res.send(
    `você está na página de contatos agora, Selecione seus contatos<br>
    <form action="/contato" method="POST">
        input 01: <input type="text" name="input1" id="input1"><br>
        input 02: <input type="text" name="input2" id="input2"><br>
        input 03: <input type="password" name="input3" id="input3"><br>
        <input type="submit" value="Enviar">
    </form>`
    );
};

exports.trataPost = (req, res) => {
    res.send(req.body.input3);
};