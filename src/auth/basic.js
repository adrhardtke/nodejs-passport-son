const BasicStrategy = require('passport-http').BasicStrategy

module.exports = new BasicStrategy(
    function(username, password, callback){
        if(username === 'admin' && password === 'admin'){
            return callback(null, true) // nenhum erro, tru para autenticação OK
        } else {
            return callback(null, false) // nao teve nenhum erro, mas a autenticação foi falha
        }
    }
)