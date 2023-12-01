/**
 * @description 用户 注册 登录 参数 校验
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

// TODO: 密码加密处理

const usersSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});
usersSchema.pre("save", function (next) {
	let user = this;
	// 只有当密码被修改或者是新密码时才进行加密操作
	if (!user.isModified("password")) return next();
	// 生成盐
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		// 使用盐对密码进行哈希加密
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);

			// 用加密后的密码替换原密码
			user.password = hash;
			next();
		});
	});
});
module.exports = {
	User: mongoose.model("User", usersSchema),
};
