module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('article',{
		id:{
			type: DataTypes.INTEGER(),
			primaryKey: true
		},
		article_title:{
			type: DataTypes.STRING,
        },
        article_content:{
            type:DataTypes.TEXT
        },
        article_tag:{
            type:DataTypes.STRING
        },
        article_keywords:{
            type:DataTypes.STRING
        },
        article_desc:{
            type:DataTypes.STRING
        },
        article_like_num:{
            type:DataTypes.INTEGER()
        },
        article_reward_num:{
            type:DataTypes.INTEGER()
        },
        article_view_num:{
            type:DataTypes.INTEGER()
        },
        article_create_time:{
            type:DataTypes.STRING
        }
	})
}