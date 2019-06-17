module.exports=(sequelize,Sequelize)=>{
    const UserThirdLoginModel = sequelize.define("UserThirdLogin",{
        id:{
            type:Sequelize.INTEGER(10),
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        user_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        third_id:{
            type:Sequelize.INTEGER(10),
            allowNull:false
        },
        third_type:{
            type:Sequelize.ENUM("1","2","3"),
            allowNull:false,
            defaultValue:"1"
        }
    },{
        //设置字段以外的额外信息
        timestamps:false,
        paranoid:false,
        freezeTableName:false, //禁用修改表名，默认情况下sequelize 自动将所有传递的模型名称转换为复数。默认为false
        tableName:"user_third_login" //设置数据库中表的实际名称
    })

    UserThirdLoginModel.associate=(models)=>{
        UserThirdLoginModel.belongsTo(models.User,{
            foreignKey:"user_id",
            as:"user"
        })
    }

    return UserThirdLoginModel
}