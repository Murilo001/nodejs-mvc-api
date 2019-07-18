/** Business Role Functions */
const userSetRole = require('../roles/userSetRole');
const userGetRole = require('../roles/userGetRoleController');
const userUpdateRole = require('../roles/userUpdateRoleController');
const userDeleteRole = require('../roles/userDeleteRoleController');
/** End Business Role Functions */

/** Model Functions */
const setUserModel = require('../models/setUser');
const getUserModel = require('../models/getUser');
const listUserModel = require('../models/listUser');
const updateUserModel = require('../models/updateUser');
const deleteUserModel = require('../models/deleteUser');
/** End Model Functions */

/**
 * Adicionar usuário.
 * @route POST /usuario
 * @group Adicionar - Adiciona um usuário caso esteja tudo em conforme.
 * @param {string} nome.query.required - nome do usuário
 * @param {string} dataNascimento.query.required - data de nascimento do usuário.
 * @param {string} Ativo.query.optional - 1 caso ativo, 0 caso inativo.
 * @returns {object} 200 - Messagem de sucesso.
 * @returns {Error}  500 - Dados inválidos.
 */
const adicionarUsuario = (dadosUsuario, callback) => {
    try {
        let invalid = userSetRole(dadosUsuario);
        if (invalid != null) {
            return callback(invalid);
        } else {
            setUserModel(dadosUsuario, (data) => {
                callback(data);
            });
        }
    } catch (er) {
        callback(er);
    }
};

/**
 * Listar usuário por ID.
 * @route GET /usuario/id
 * @group Listar por ID - Lista informações do usuário pego pelo ID.
 * @returns {object} 200 - JSON com dados do usuário.
 * @returns {Error}  500 - Dados inválidos.
 */
const listarUsuariosPorId = (id, callback) => {
    try {
        getUserModel(id, (data) => {
            callback(data);
        });
    } catch (er) {
        callback(undefined, er);
    }
};

/**
 * Listar todos usuários.
 * @route GET /usuario
 * @group Listar todos - Lista todos os usuários ativos.
 * @returns {object} 200 - JSON com dados do usuário.
 * @returns {Error}  500 - Dados inválidos.
 */
const listarUsuarios = (callback) => {
    listUserModel((data) => {
        callback(data);
    });
};

/**
 * Altera dados do usuário.
 * @route PUT /usuario
 * @group Altera dados - Altera dados de um usuário.
 * @param {string} nome.query.required - nome do usuário
 * @param {string} dataNascimento.query.required - data de nascimento do usuário.
 * @param {string} Ativo.query.optional - 1 caso ativo, 0 caso inativo.
 * @returns {object} 200 - Messagem de sucesso.
 * @returns {Error}  500 - Dados inválidos.
 */
const alterarUsuario = (id, dadosUsuario, callback) => {
    try {
        let invalid = userSetRole(dadosUsuario);
        if (invalid != null) {
            callback(invalid);
        } else {
            updateUserModel(id, dadosUsuario, (err, data) => {
                callback(err, data);
            });
        }
    } catch (er) {
        callback(er);
    }
};

/**
 * Deleta usuário.
 * @route DELETE /usuario/id
 * @group Deleta Usuário - Deleta um usuário.
 * @returns {object} 200 - Messagem de sucesso.
 * @returns {Error}  500 - Dados inválidos.
 */
const deletarUsuario = (id, callback) => {
    try {
        let invalid = userDeleteRole(id);
        if (invalid != null) {
            return invalid;
        } else {
            deleteUserModel(id, (data) => {
                callback(data);
            });
        }
    } catch (er) {
        callback(er);
    }
};

module.exports = {
    adicionarUsuario: adicionarUsuario,
    listarUsuariosPorId: listarUsuariosPorId,
    listarUsuarios: listarUsuarios,
    alterarUsuario: alterarUsuario,
    deletarUsuario: deletarUsuario,
};
