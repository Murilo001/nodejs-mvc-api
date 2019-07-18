/** Common Functions */
const util = require('../../common/util');
/** End Common Functions */

const validate = (dadosUsuario) => {
    let preenchimento = verificaPreenchimentoObrigatorio(dadosUsuario);
    if (preenchimento)
        return preenchimento;
    let regra = verificaRegraNegocio(dadosUsuario)
    if (regra)
        return regra;
    return null;
}

const verificaRegraNegocio = (dadosUsuario) => {
    /** Verificar se é um número válido. */
    return null;
}

const verificaPreenchimentoObrigatorio = (dadosUsuario) => {
    if (util.isEmpty(dadosUsuario))
        return 'Dados não fornecidos.';
    if (util.isEmpty(dadosUsuario.id))
        return 'Nome não fornecido.';
    return null;
}

module.exports = validate;