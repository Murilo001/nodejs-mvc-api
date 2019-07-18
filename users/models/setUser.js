const db = require('../../repositories/db')

function salvarUsuario(dadosUsuario, callback) {
	db.run('INSERT INTO usuario(nome, idade, ativo) VALUES(?, ?, ?)', [dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.ativo], (err) => {
		console.log('erro:' + err);
        callback(err);
	});
}

module.exports = salvarUsuario;
