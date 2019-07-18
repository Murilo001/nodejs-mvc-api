/** Common Functions */
const util = require('../../common/util');
const moment = require('moment');
/** End Common Functions */

const validate = (dadosUsuario) => {
    let preenchimento = verificaPreenchimentoObrigatorio(dadosUsuario);
    if (preenchimento)
        return preenchimento;
    let regra = verificaRegraNegocio(dadosUsuario);
    if (regra)
        return regra;
    return null;
};

const verificaRegraNegocio = (dadosUsuario) => {
    let dataNascimento = util.parseDate(dadosUsuario.idade);
    if (!dataNascimento)
        return 'Data de nascimento em formato incorreto.';

    let dataAtual = moment(new Date(), 'DD/MM/YYYY');
    if (dataAtual.diff(dataNascimento, 'years') < 18)
        return 'Apostas só são permitidas para pessoas acima de 18 anos.';
    return null;
};

const verificaPreenchimentoObrigatorio = (dadosUsuario) => {
    if (util.isEmpty(dadosUsuario))
        return 'Dados não fornecidos.';
    if (util.isEmpty(dadosUsuario.nome))
        return 'Nome não fornecido.';
    if (util.isEmpty(dadosUsuario.idade))
        return 'Idade não fornecido.';
    return null;
};

module.exports = validate;
