const db = require('../../repositories/db')

function listarUsuario(callback) {
  let sql = `SELECT id,
                  nome, idade, ativo
           FROM usuario
           WHERE ativo = 1
           ORDER BY id`;

  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    callback(row);
  });
}

module.exports = listarUsuario;