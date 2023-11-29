/**
 * @description  控制器 接口校验 返回前端操作
 * 注意： 注册信息 用户名 密码 密码不能明文保存 需要做加密处理
 * 注意： 用户登录 用户名 密码
 */

const { User } = require("../models/user");

// 注册
const registerInfo = async (ctx) => {
	const { username } = ctx.request.body;
	try {
		let userRegister = await User.find({ username });
		if (userRegister) {
			ctx.body = {
				data: "注册失败!",
				message: "该用户已存在！",
				success: false,
				code: 200,
			};

			const userModel = new User(ctx.request.body);
			const saveUser = await userModel.save();
			ctx.body = {
				data: "注册成功！",
				message: "",
				success: true,
				code: 200,
			};
		}
	} catch (error) {
		ctx.body = {
			message: error.message,
			data: "注册失败！",
			success: false,
			code: -1,
		};
	}
};
// 登录
// TODO: token 生成
const loginInfo = async (ctx) => {
	const { username } = ctx.request.body;
	try {
		const userLogin = await User.findOne({ username });
		// 检查是否存在
		if (userLogin) {
			ctx.body = {
				data: "登录成功！",
				message: "",
				success: true,
				code: 200,
			};
		} else {
			ctx.body = {
				data: "登录失败!",
				maessage: "该用户未注册！",
				success: false,
				code: 200,
			};
		}
		// 检查密码
		// 创建token
	} catch (error) {
		ctx.body = {
			message: error.message,
			data: "登录失败!",
			success: false,
			code: -1,
		};
	}
};

module.exports = {
  registerInfo,
  loginInfo,
};
