/**
 *	接口基础配置文件
 */
const CONFIG={
	PORT:9000,//api运行端口
	DB:{
		// 数据库
		database: 'yoko_blog',
		// 用户名
		username: 'root',
		// 密码
		password: '',
		// 地址
		host: '127.0.0.1',
		// 使用什么数据库
		dialect: 'mysql',
		// 连接池
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},
		// 数据表全局配置
		define:{
			freezeTableName:true,
			timestamps:false,
			paranoid:false,
			operatorsAliases: false
		},
		// 时区
		timezone: '+08:00'
	}
}

module.exports=CONFIG
