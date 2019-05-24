// 导入数据库配置
const DBCONFIG=require("../config/config").DB;
/**
 *  导入Sequelize  
 *	Sequelize 是一个基于 promise 的 Node.js ORM, 
 *	目前支持 Postgres, MySQL, SQLite 和 Microsoft SQL Server. 
 *	它具有强大的事务支持, 关联关系, 读取和复制等功能.
 *	中文文档：https://github.com/demopark/sequelize-docs-Zh-CN
 **/
const Sequelize=require("sequelize");
// 实例化sequelize
const sequelize=new Sequelize(DBCONFIG);
// 导入模型统一管理
const ArticleModel=sequelize.import(__dirname+"/Article.js");
const ArticleCategoryModel=sequelize.import(__dirname+"/Article_category.js");
const SiteInfoModel=sequelize.import(__dirname+"/Site_info.js");
const UserModel=sequelize.import(__dirname+"/User.js");
const AdminModel=sequelize.import(__dirname+"/Admin.js");
/**
 * 指定模型关系
 * @BelongsTo 关联是在 source model 上存在一对一关系的外键的关联
 * @HasMany 一对多关联 将一个来源与多个目标连接起来。 而多个目标接到同一个特定的源。
 * @HasOne 关联是在 target model 上存在一对一关系的外键的关联
 * reaymore https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/associations.md
 */
// ArticleModel.belongsTo(CateModel,{
// 	foreignKey:"article_cate_id",
// 	targetKey:"id"
// });
// CateModel.hasMany(ArticleModel,{
// 	foreignKey:"article_cate_id",
// 	targetKey:"id"
// });
// 导出
module.exports={
	sequelize,
	ArticleModel,
	ArticleCategoryModel,
	SiteInfoModel,
	UserModel,
	AdminModel
}