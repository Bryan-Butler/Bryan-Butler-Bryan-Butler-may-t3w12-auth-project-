const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function comparePassword(plaintextPassword, hashedPassword){
    let doesPasswordMatch = false;
    doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);
    return doesPasswordMatch
}

function generateJwt(user_id){
    let newJwt = jwt.sign
    //payload
    {
        user_id
    }
    //secret
    Process.env.SECRET_KEY
    //option
    {
        expiresIn: '1d'
    }
}


module.exports - {
    comparePassword,
    generateJwt
}