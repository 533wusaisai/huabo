/**
 * @description 接口路由配置
 */
require("../db");

const Router = require("@koa/router");
const upload = require("./storge");

const router = new Router({
	prefix: "/api/v1",
});

const { registerInfo, loginInfo } = require("../controllers/user");
const { uploadImage } = require("../controllers/upload");
const { verifyToken, createToken } = require("../utils/jwt");

// 用户相关
router.post("/register", registerInfo);
router.post("/login", loginInfo);

// 获取菜单信息

router.post("/upload", upload.single("file"), uploadImage);

module.exports = router;
