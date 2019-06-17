module.exports=(sequelize,Sequelize)=>{
    const PostTagsModel=sequelize.define("PostTags",{
        id:{
            type:Sequelize.INTEGER(10),
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        post_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        tag_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        create_at:{
            type:Sequelize.DATE(),
            allowNull:false
        }
    })

    return PostTagsModel
}