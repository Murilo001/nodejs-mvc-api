const db = require('../../repositories/db')

function deletarUsuario(idUsuario, callback) {
    db.run(`UPDATE usuario SET ativo = ? WHERE id = ?`, [0, idUsuario], (err, data) => {
        callback(err, data);
    });
}

module.exports = deletarUsuario;
