/**
 * @description token 生成  验证 过期时间
 */

const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const toJwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);

/**
 * @description 创建token
 */
const createToken = async (text) => {
  const token = await toJwt({ text }, "hua-bo", { expiresIn: 60 * 60 * 24 });
  return token;
};

/**
 * @description 验证 token
 */
const verifyToken = (required = true) => {
  return async (ctx, next) => {
    let token = await ctx.headers.authorization;
    token = token ? token.split("Bearer ")[1] : null;
    if (token) {
      try {
        const userinfo = await verify(token, "hua-bo");
        ctx.user = userinfo;
        await next();
      } catch (error) {
        ctx.throw(400, error);
      }
    } else if (required) {
      ctx.throw(400, "token验证失败");
    } else {
      await next();
    }
  };
};

module.exports = {
  createToken,
  verifyToken,
};
