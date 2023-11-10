const multer = require("koa-multer");

const path = require("path");

const storage = multer.diskStorage({
  //文件保存路径
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public")); //路径一定要对
  },
  // 修改文件名称
  filename: (req, file, cb) => {
    let fileFormat = file.originalname.split(".");
    cb(null, `${Date.now()}. ${fileFormat[fileFormat.length - 1]}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
