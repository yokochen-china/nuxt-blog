module.exports=(sequelize,Sequelize)=>{
    const TagModel=sequelize.define("Tag",{
        id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        tag_name:{
            type:Sequelize.STRING(60),
            allowNull:false
        },
        create_at:{
            type:Sequelize.DATE(),
            allowNull:false
        }
    })

    return TagModel
}