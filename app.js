/**
 * @description 项目主文件
 */
const koa = require("koa");
const app = new koa();
const cors = require("@koa/cors");
const koaStatic = require("koa-static");
// const bodyParser = require("koa-bodyparser");
const { koaBody } = require("koa-body");

const path = require("path");

const router = require("./routers");
const log4js = require("./utils/log4");

// 静态资源访问
app.use(koaStatic(path.join(__dirname, "./public")));

app.use(cors());

app.use(koaBody(), {
	// koa2 不仅能处理 post 数据 还能处理 文件类型
	multipart: true,
	formidable: {
		maxFileSize: 200 * 1024 * 1024,
		uploadDir: path.join(__dirname, "./public"),
		keepExtensions: true, // 保持文件后缀
	},
});

// bodyParser & koaBody 最好不要一起使用 否则会出问题  注意中间件位置
// app.use(bodyParser()); 只能处理post 数据
app.use(router.routes());

// 应用 allowedMethods 中间件，它会根据 ctx.status 设置响应头
// 如果有不被允许的方法请求，它会返回 405 或 501
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  log4js.info(`get params:${JSON.stringify(ctx.request.query)}`);
  log4js.info(`post params:${JSON.stringify(ctx.request.body)}`);
});

app.listen(3000, () => {
  console.info("http://127.0.0.1:3000");
});
