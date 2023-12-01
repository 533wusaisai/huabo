
const uploadImage = async (ctx, next) => {
  console.log(ctx.request.body);
  /**
   * @return { 上传图片方案 1}
   * @param { headPath 图片拼接地址}
   */

  const headPath =
    "http://localhost:3000/" + ctx.request.files.file.newFilename;
  ctx.body = {
    filename: headPath,
    message: "上传成功",
    status: 200,
    success: true,
  };
  /**
   * @return { 上传图片方案 2}
   * @param { headPath 图片拼接地址}
   * @description {引入内置模块fs}
   */
  //   const file = ctx.request.files.file;
  //   const reader = fs.createReadStream(file.filepath);
  //   const upStream = fs.createWriteStream(`./public/${file.newFilename}`);
  //   reader.pipe(upStream);
  //   ctx.body = {
  //     message: "上传成功",
  //     code: 200,
  //     success: true,
  //   };
};
module.exports = {
  uploadImage,
};
