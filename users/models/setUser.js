const db = require('../../repositories/db')

function salvarUsuario(dadosUsuario, callback) {
	db.run('INSERT INTO usuario(nome, idade, ativo) VALUES(?, ?, ?)', [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo], (err) => {
		console.log('changes:' + this.changes);
		console.log('erro:' + err);
		if (err) {
			callback(err);
		} else if (this.changes == undefined) {
			callback('Dados inválidos.');
		} else {
			callback(null);
		}
	});
}

module.exports = salvarUsuario;