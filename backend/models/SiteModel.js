module.exports=(sequelize,Sequelize)=>{
    const SiteModel = sequelize.define("SiteModel",{
        id:{
            type:Sequelize.INTEGER(10),
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        top_nav_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        brand:{
            type:Sequelize.STRING(20),
            allowNull:false
        },
        copy_right:{
            type:Sequelize.STRING()
        },
        description:{
            type:Sequelize.STRING()
        },
        keywords:{
            type:Sequelize.STRING()
        },
        footer:{
            type:Sequelize.STRING()
        }
    })


    return SiteModel
}