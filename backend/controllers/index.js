const fs = require("fs")
const path = require("path")
let conntrolls = {}

fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-13) === 'Controller.js')
})
.forEach(file => {
    const key = file.split('.')[0]
    conntrolls[key] = require(path.join(__dirname, file))
})

module.exports=conntrolls