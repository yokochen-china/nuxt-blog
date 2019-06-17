module.exports=(sequelize,Sequelize)=>{
    const PostModel=sequelize.define("Post",{
        id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        category_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
        },
        title:{
            type:Sequelize.STRING(120),
            allowNull:false
        },
        content:{
            type:Sequelize.TEXT(),
            allowNull:false
        },
        image:{
            type:Sequelize.STRING(),
            allowNull:false
        },
        views:{
            type:Sequelize.INTEGER(11),
            allowNull:false,
        },
        create_at:{
            type:Sequelize.DATE(),
            allowNull:false
        }
    })

    return PostModel
}