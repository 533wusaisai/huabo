/**
 * @description 用户 注册 登录 参数 校验
 */

const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
	userName: {
		type: String,
	},
	password: {
		type: String,
	},
	phone: {
		type: String,
	},
});

const loginSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = {
  Register: mongoose.model("Register", registerSchema),
  Login: mongoose.model("Login", loginSchema),
};
