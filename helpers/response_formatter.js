const { response } = require("express");

module.exports = {
    // nama key object yg akan dipanggil ketika export/require di file lain
    response : (status, message, data) => { 
        if (data) {
            return {
                status : status,
                message: message,
                data   : data
            }
        } else {
            return {
                status : status,
                message: message,
            }
        }
    }
}