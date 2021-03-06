/** Common Functions */
const util = require('../../common/util');
const moment = require('moment');
/** End Common Functions */

const validate = (id, dadosUsuario) => {
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

    if (dadosUsuario.ativo != '1' && dadosUsuario.ativo != '0')
        return 'Campo Ativo preenchido incorretamente, informe 0 para inativo e 1 para ativo.'

    return null;
}

const verificaPreenchimentoObrigatorio = (dadosUsuario) => {
    if (util.isEmpty(dadosUsuario))
        return 'Dados não fornecidos.';
    if (util.isEmpty(dadosUsuario.nome))
        return 'Nome não fornecido.';
    if (util.isEmpty(dadosUsuario.idade))
        return 'Idade não fornecida.';
    return null;
}

module.exports = validate;