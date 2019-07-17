/** Common Functions */
const util = require('../../common/util');
/** End Common Function */
const moment = require('moment');

/** Model Functions */
const setUserModel = require('../models/setUser');
const getUserModel = require('../models/getUser');
const listUserModel = require('../models/listUser');
const updateUserModel = require('../models/updateUser');
const deleteUserModel = require('../models/deleteUser');
/** End Model Functions */

const adicionarUsuario = (dadosUsuario, callback) => {
    try {
        let validacao = validarDados(dadosUsuario);
        if (validacao) {
            callback(validacao);
        } else {
            setUserModel(dadosUsuario, (data) => {
                callback(data);
            });
        }
    } catch (er) {
        callback(er);
    }
}

/** Regras de Negócio de Adicionar Usuário */
const validarDados = (dadosUsuario) => {
    let preenchimento = verificaPreenchimentoObrigatorio(dadosUsuario);
    if (preenchimento)
        return preenchimento;
    let regra = verificaRegraNegocio(dadosUsuario)
    if (regra)
        return regra;
    return null;
}

const verificaRegraNegocio = (dadosUsuario) => {
    let dataNascimento;
    try {
        dataNascimento = moment(dadosUsuario.idade, "DD/MM/YYYY");
    } catch (e) {
        return 'Data de nascimento em formato incorreto.';
    }
    let dataAtual = moment(new Date(), "DD/MM/YYYY");
    if (dataAtual.diff(dataNascimento, 'years') < 18)
        return 'Apostas só são permitidas para pessoas acima de 18 anos.'
    return null;
}

const verificaPreenchimentoObrigatorio = (dadosUsuario) => {
    if (util.isEmpty(dadosUsuario))
        return 'Dados não fornecidos.';
    if (util.isEmpty(dadosUsuario.nome))
        return 'Nome não fornecido.';
    if (util.isEmpty(dadosUsuario.idade))
        return 'Idade não fornecido.';
    return null;
}
/** FIM Regras de Negócio de Adicionar Usuário */

const listarUsuariosPorId = (id, callback) => {
    getUserModel(id, (data) => {
        callback(data);
    });
}

const listarUsuarios = (callback) => {
    listUserModel((data) => {
        callback(data);
    });
}

const alterarUsuario = (id, dadosUsuario, callback) => {
    updateUserModel(id, dadosUsuario, (data) => {
        callback(data);
    });
}

const deletarUsuario = (id, callback) => {
    deleteUserModel(id, (data) => {
        callback(data);
    });
}

module.exports = {
    adicionarUsuario: adicionarUsuario,
    listarUsuariosPorId: listarUsuariosPorId,
    listarUsuarios: listarUsuarios,
    alterarUsuario: alterarUsuario,
    deletarUsuario: deletarUsuario,
}