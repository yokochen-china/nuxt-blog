/*
Navicat MySQL Data Transfer

Source Server         : MYDB
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yoko_blog

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-06-14 20:36:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL COMMENT '参与回复用户id',
  `parent_id` int(10) DEFAULT NULL COMMENT '评论上级id',
  `post_id` int(10) NOT NULL COMMENT '帖子id',
  `content` varchar(255) NOT NULL COMMENT '回复内容',
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '回复时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(10) NOT NULL COMMENT '所属类目id',
  `title` varchar(120) NOT NULL COMMENT '帖子标题',
  `content` text NOT NULL COMMENT '帖子内容',
  `image` varchar(255) DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for post_category
-- ----------------------------
DROP TABLE IF EXISTS `post_category`;
CREATE TABLE `post_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(12) NOT NULL COMMENT '分类名称',
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for post_tags
-- ----------------------------
DROP TABLE IF EXISTS `post_tags`;
CREATE TABLE `post_tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) NOT NULL COMMENT '帖子id',
  `tag_id` int(10) NOT NULL COMMENT '标签id',
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `top_nav_id` int(10) NOT NULL,
  `brand` varchar(20) NOT NULL COMMENT '站点LOGO',
  `copy_right` varchar(255) NOT NULL COMMENT '版权信息',
  `description` varchar(255) NOT NULL COMMENT '站点介绍',
  `keywords` varchar(255) NOT NULL COMMENT '站点关键字',
  `footer` varchar(255) NOT NULL COMMENT '站点底部',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(60) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for top_nav
-- ----------------------------
DROP TABLE IF EXISTS `top_nav`;
CREATE TABLE `top_nav` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(6) NOT NULL COMMENT '导航名称',
  `cate_path` varchar(255) NOT NULL COMMENT '导航地址',
  `target` enum('1','0') NOT NULL DEFAULT '1' COMMENT '跳转方式0站内导航2站外导航',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户表唯一ID',
  `name` varchar(255) NOT NULL COMMENT '用户网名',
  `username` varchar(32) DEFAULT NULL COMMENT '用户名登录名',
  `password` varchar(32) DEFAULT NULL COMMENT '用户密码',
  `email` varchar(255) DEFAULT NULL COMMENT '电子邮件',
  `blog` varchar(255) DEFAULT NULL COMMENT '个人网站地址',
  `github` varchar(255) DEFAULT NULL COMMENT 'github主页',
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `status` enum('1','0') NOT NULL DEFAULT '0' COMMENT '账户状态，0正常、1封停',
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_third_login
-- ----------------------------
DROP TABLE IF EXISTS `user_third_login`;
CREATE TABLE `user_third_login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) NOT NULL COMMENT '用户表id',
  `third_id` int(10) NOT NULL COMMENT '第三方登录id唯一值',
  `third_type` enum('3','2','1') NOT NULL DEFAULT '1' COMMENT '第三方登录类型：1:github 2:qq 3:微信',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
