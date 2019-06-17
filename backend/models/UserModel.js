module.exports=(sequelize,Sequelize)=>{
    const UserModel = sequelize.define("User",{
        id:{
            type:Sequelize.INTEGER(10),
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING(),
            allowNull:false
        },
        username:{
            type:Sequelize.STRING(32),
            allowNull:true
        },
        password:{
            type:Sequelize.STRING(32),
            allowNull:true
        },
        email:{
            type:Sequelize.STRING(),
            allowNull:true
        },
        blog:{
            type:Sequelize.STRING(),
            allowNull:true
        },
        github:{
            type:Sequelize.STRING(),
            allowNull:true
        },
        avatar:{
            type:Sequelize.STRING(),
            allowNull:true
        },
        status:{
            type:Sequelize.ENUM("0","1"),
            defaultValue:"0"
        },
        create_at:{
            type:Sequelize.DATE(),
            allowNull:true
        }
    },{
        //设置字段以外的额外信息
        timestamps:false,
        paranoid:false,
        freezeTableName:false, //禁用修改表名，默认情况下sequelize 自动将所有传递的模型名称转换为复数。默认为false
        tableName:"user" //设置数据库中表的实际名称
    })

    UserModel.associate=(models)=>{
        
    }

    return UserModel
}