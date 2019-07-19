const usuarioController = require('../controllers/usuarioController');

const userRoutes = (router) => {
    // FUNCIONANDO - LISTAGEM GERAL
    router.get('/usuario', (req, res) => {
        usuarioController.listarUsuarios((data) => {
            if (!data) {
                res.status(500);
                res.send('error');
            } else {
                res.send(data);
            }
        });
    });

    // FUNCIONANDO - GET BY ID
    router.get('/usuario/:userId', (req, res) => {
        usuarioController.listarUsuariosPorId(req.params.userId, (data, err) => {
            if (err) {
                res.status(500);
                res.send('error ' + err);
            } else {
                res.send(data);
            }
        });
    });

    // Adiciona Usuário
    router.post('/usuario', (req, res) => {
        usuarioController.adicionarUsuario(req.body, (err) => {
            let result;

            if (err) {
                res.status(500);
                result = err && String(err);
            } else {
                result = `Usuário ${req.body.nome} cadastrado com sucesso.`;
            }

            res.end(JSON.stringify(result));
        });
    });

    //Edita usuário
    router.put('/usuario/:userId', (req, res) => {
        usuarioController.alterarUsuario(req.params.userId, req.body, (err) => {
            let result;
            if (err) {
                res.status(500);
                result = `Erro ao alterar o usuário: ${req.body.nome}`;
            } else {
                result = `Usuário ${req.body.nome} alterado com sucesso.`;
            }

            res.end(JSON.stringify(result));
        });
    });

    //Apaga usuário
    router.delete('/usuario/:userId', (req, res) => {
        usuarioController.deletarUsuario(req.params.userId, (err, data) => {
            let result;

            if (err) {
                res.status(500);
                result = `Erro ao excluir o usuário de ID = ${req.params.userId}`;
            } else {
                result = `Usuário de ID = ${req.params.userId} excluído com sucesso.`;
            }

            res.end(JSON.stringify(result));
        });
    });

};


module.exports = userRoutes;
