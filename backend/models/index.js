
    const Sequelize = require("sequelize")
    const path = require("path")
    const fs = require("fs")
    
    // 加载配置文件
    const conf = require(path.join(__dirname,"../config/config.json"))
    const config = conf[conf.env].mysql
    
    // 建立数据库连接池
    const sequelize = new Sequelize(config.database, config.username, config.password, config)

    // 建立数据模型
    let db={}
    try{
        fs
        .readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-8) === 'Model.js')
        })
        .forEach(file => {
            const model = sequelize['import'](path.join(__dirname, file))
            db[model.name] = model;
        })
        
        //注册关联模型
        Object.keys(db).forEach(modelName => {
            if(db[modelName].associate) {
                db[modelName].associate(db)
            }
        })
        db.Sequelize=Sequelize
        db.sequelize=sequelize
        
    }catch(e){
        console.log("模型文件导入失败：\n"+e)
    }
    //导出模型
    module.exports = db