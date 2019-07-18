const db = require('../../repositories/db')

function salvarUsuario(dadosUsuario, callback) {
	console.log(dadosUsuario);
	db.run('INSERT INTO usuario(nome, idade, ativo) VALUES(?, ?, ?)', [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo], (err) => {
		console.log('changes:' + this.changes);
		console.log('erro:' + err);
		if (err) {
			callback(err);
		} else {
			callback(null);
		}
	});
}

module.exports = salvarUsuario;