const db = require('../../repositories/db')

function pegarUsuarioPorId(idUsuario, callback) {
  let sql = `SELECT id,
                  nome, idade, ativo
           FROM usuario
           WHERE id = ?`;

  db.each(sql, [idUsuario], (err, row) => {
    if (err) {
      throw err;
    }
    callback(row);
  });
}

module.exports = pegarUsuarioPorId;