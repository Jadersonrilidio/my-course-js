module.exports = (req, res, next) => {
    console.log('Passei no middleware global');
    if (req.body.cliente) {
        console.log(`Vi que você postou ${req.body.cliente}`);
    }

    next();
}