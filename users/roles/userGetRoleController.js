/** Common Functions */
const util = require('../../common/util');
/** End Common Functions */

const validate = (id) => {
    let regra = verificaRegraNegocio(id)
    if (regra)
        return regra;
    return null;
}

const verificaRegraNegocio = (id) => {
    /** Verificar se é um número válido. */
    return null;
}

module.exports = validate;