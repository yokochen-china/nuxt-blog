module.exports=(sequelize,DataTypes)=>{
	return sequelize.define('admin',{
		id:{
			type: DataTypes.INTEGER(),
			primaryKey: true
		},
		username:{
			type: DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING
        },
        user_pic:{
            type:DataTypes.STRING
        },
        last_login_time:{
            type:DataTypes.STRING
        },
        login_num:{
            type:DataTypes.INTEGER()
        }
	})
}