module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('site_info',{
		id:{
			type: DataTypes.INTEGER(),
			primaryKey: true
        },
        blog_logo:{
			type: DataTypes.STRING,
			primaryKey: true
        },
        blog_name:{
			type: DataTypes.STRING,
			primaryKey: true
		},
		blog_keywords:{
			type: DataTypes.STRING,
        },
        blog_desc:{
            type:DataTypes.STRING
        },
        blog_footer:{
            type:DataTypes.STRING
        }
	})
}