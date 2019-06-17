module.exports=(sequelize,Sequelize)=>{
    const TopNavModel = sequelize.define("TopNav",{
        id:{
            type:Sequelize.INTEGER(10),
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        cate_name:{
            type:Sequelize.STRING(6),
            allowNull:false
        },
        cate_path:{
            type:Sequelize.STRING(),
            allowNull:false
        },
        target:{
            type:Sequelize.ENUM("0","1"),
            defaultValue:"0"
        }
    })
    return TopNavModel
}