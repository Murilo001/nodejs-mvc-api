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

const adicionarUsuario = (dadosUsuario, callback) => {
    try {
        let invalid = userSetRole(dadosUsuario);
        if (invalid != null) {
            return invalid
        } else {
            setUserModel(dadosUsuario, (data) => {
                callback(data);
            });
        }
    } catch (er) {
        callback(er);
    }
}

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