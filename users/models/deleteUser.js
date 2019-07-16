const db = require('../../repositories/db')

function deletarUsuario(idUsuario, callback) {
    db.run(`UPDATE usuario SET ativo = ? WHERE id = ?`, [0, idUsuario], (err) => {
        callback(err);
    });
}

module.exports = deletarUsuario;