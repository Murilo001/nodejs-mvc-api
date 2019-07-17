const isEmpty = (object) => {
    if (object == null || object == undefined || object == '')
        return true;
    return false;
}


module.exports = {
    isEmpty: isEmpty
}