const fs = require('fs').promises;

module.exports = (filePath, dados) => {
    fs.writeFile(filePath, dados, { flag: 'w' });
};
