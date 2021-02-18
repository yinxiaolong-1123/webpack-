/**
 * 服务器代码
 * 启动服务器指令两种方法： nodemon server.js/node server.js
 * nodemon启动需要安装 nodemon
 * 全局安装 npm i nodemon -g
 * 
 * 访问服务器地址
 * http://localhost:3000
 */

const express = require('express');

const app = express();

app.use(express.static('build', {maxAge: 1000 * 3600}));

app.listen(3000);