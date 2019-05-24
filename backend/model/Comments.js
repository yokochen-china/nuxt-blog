module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('commonts',{
		id:{
			type: DataTypes.INTEGER(),
			primaryKey: true
        },
        uid:{
			type: DataTypes.INTEGER(),
			primaryKey: true
        },
        pid:{
			type: DataTypes.INTEGER(),
			primaryKey: true
		},
		content:{
			type: DataTypes.STRING,
        },
        reply_id:{
            type:DataTypes.STRING
        },
        like_num:{
            type:DataTypes.INTEGER()
        },
        create_at:{
            type:DataTypes.STRING
        }
	})
}