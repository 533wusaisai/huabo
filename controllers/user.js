/**
 * @description  控制器 接口校验 返回前端操作
 * 注意： 注册信息 用户名 密码 密码不能明文保存 需要做加密处理
 * 注意： 用户登录 用户名 密码
 */

const { Register, Login } = require("../models/user");

const registerInfo = async (ctx) => {
	const userModel = new Register(ctx.request.body);
	//  await userModel.save();
	// 	ctx.body = {
	// 		code: 200,
	// 		success: true,
	// 		message: "注册成功",
	// 	};
};
const loginInfo = async (ctx) => {
  // ctx.body = dbBack;
};

module.exports = {
  registerInfo,
  loginInfo,
};
