module.exports=(sequelize,Sequelize)=>{
    const CommentModel=sequelize.define("Comment",{
        id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        user_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
        },
        parent_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        post_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        content:{
            type:Sequelize.STRING(),
            allowNull:false
        },
        create_at:{
            type:Sequelize.DATE(),
            allowNull:false
        }
    })

    return CommentModel
}