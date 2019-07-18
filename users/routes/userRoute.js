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
    })

    // FUNCIONANDO - GET BY ID
    router.get('/usuario/:userId', (req, res) => {
        usuarioController.listarUsuariosPorId(req.params.userId, (data) => {
            console.log(data);
            if (!data) {
                res.status(500);
                res.send('error');
            } else {
                res.send(data);
            }
        });
    })

    // Adiciona Usuário
    router.post('/usuario', (req, res) => {
        usuarioController.adicionarUsuario(req.body, (err) => {
            console.log('server:' + err);
            if (err) {
                res.status(500);
                res.send(`Erro ao cadastrar o usuário: ${req.body.nome}. Problema: ${err}`);
            } else {
                res.send(`Usuário ${req.body.nome} cadastrado com sucesso.`);
            }
        });
    });

    //Edita usuário
    router.put('/usuario/:userId', (req, res) => {
        usuarioController.alterarUsuario(req.params.userId, req.body, (err) => {
            if (err) {
                res.status(500);
                res.send(`Erro ao alterar o usuário: ${req.body.nome}`);

            } else {
                res.send(`Usuário ${req.body.nome} alterado com sucesso.`);
            }
        });
    })

    //Apaga usuário
    router.delete('/usuario/:userId', (req, res) => {
        usuarioController.deletarUsuario(req.params.userId, (err) => {
            if (err) {
                res.status(500);
                res.send(`Erro ao excluir o usuário de ID = ${req.params.userId}`);

            } else {
                res.send(`Usuário de ID = ${req.params.userId} excluído com sucesso.`);
            }
        });
    });

}


module.exports = userRoutes;