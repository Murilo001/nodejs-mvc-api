const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usuarioController = require('../users/controllers/usuarioController');
const cors = require('cors');
const app = express();

app.use(cors());

app.set('engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

// FUNCIONANDO - LISTAGEM GERAL
app.get('/usuario', (req, res) => {
    usuarioController.listarUsuarios((data) => {
        if (data) {
            res.send(data);
        } else {
            res.send('error');
        }
    });
})

// FUNCIONANDO - GET BY ID
app.get('/usuario/:userId', (req, res) => {
    usuarioController.listarUsuariosPorId(req.params.userId, (data) => {
        if (data) {
            res.send(data);
        } else {
            res.send('error');
        }
    });
})

// Adiciona Usuário
app.post('/usuario', (req, res) => {
    usuarioController.adicionarUsuario(req.body, (err) => {
        if (err) {
            res.send(`Erro ao cadastrar o usuário: ${req.body.nome}`);

        } else {
            res.send(`Usuário ${req.body.nome} cadastrado com sucesso.`);
        }
    });
});

//Edita usuário
app.put('/usuario/:userId', (req, res) => {
    usuarioController.alterarUsuario(req.params.userId, req.body, (err) => {
        if (err) {
            res.send(`Erro ao alterar o usuário: ${req.body.nome}`);

        } else {
            res.send(`Usuário ${req.body.nome} alterado com sucesso.`);
        }
    });
})

//Apaga usuário
app.delete('/usuario/:userId', (req, res) => {
    usuarioController.deletarUsuario(req.params.userId, (err) => {
        if (err) {
            res.send(`Erro ao excluir o usuário de ID = ${req.params.userId}`);

        } else {
            res.send(`Usuário de ID = ${req.params.userId} excluído com sucesso.`);
        }
    });
});

app.listen(3000);