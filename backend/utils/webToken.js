const jwt = require("jsonwebtoken")

function makeJWT(payload){
    const secret = "yokochen" 
    return  token = jwt.sign(payload,secret,{expiresIn:"1h"})
}

function getJWTPayload(token){
    return jwt.verify(token.split(' ')[1], secret)
}

module.exports={
    makeJWT,
    getJWTPayload
}