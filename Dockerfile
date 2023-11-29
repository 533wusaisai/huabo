# 使用官方Node.js作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 将package.json和package-lock.json文件复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目源代码复制到工作目录
COPY . .

# 暴露端口，与你的应用程序绑定的端口要一致
EXPOSE 8090

# 运行你的应用程序
CMD [ "npm", "dev" ]