module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('article_category',{
		id:{
			type: DataTypes.INTEGER(),
			primaryKey: true
		},
		cate_name:{
			type: DataTypes.STRING,
        },
        cate_desc:{
            type:DataTypes.STRING
        },
        cate_keywords:{
            type:DataTypes.STRING
        },
        cate_icon:{
            type:DataTypes.STRING
        }
	})
}