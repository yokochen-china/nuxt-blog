module.exports=(sequelize,Sequelize)=>{
    const PostCategoryModel=sequelize.define("PostCategory",{
        id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING(12),
            allowNull:false
        },
        create_at:{
            type:Sequelize.DATE(),
            allowNull:false
        }
    })

    return PostCategoryModel
}