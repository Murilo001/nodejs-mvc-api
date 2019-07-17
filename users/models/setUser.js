const db = require('../../repositories/db')

function salvarUsuario(dadosUsuario, callback) {
	db.run('INSERT INTO usuario(nome, idade, ativo) VALUES(?, ?, ?)', [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo], (err) => {
		if (err)
			callback(err);
		if (this.changes == undefined)
			callback('Dados inválidos.');
		callback(null);
	});
}

module.exports = salvarUsuario;