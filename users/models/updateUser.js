const db = require('../../repositories/db');

function alterarUsuario(idUsuario, dadosUsuario, callback) {
    db.run(`UPDATE usuario
            SET nome  = ?,
                idade = ?,
                ativo = ?
            WHERE id = ?`, [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo, idUsuario], (err, data) => {
        callback(err, data);
    });
}

module.exports = alterarUsuario;
