module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('user',{
		id:{
			type: DataTypes.INTEGER(),
			primaryKey: true
        },
        username:{
			type: DataTypes.STRING,
			primaryKey: true
        },
        avatar_url:{
			type: DataTypes.STRING,
			primaryKey: true
		},
		website:{
			type: DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING
        }
	})
}