import '../css/index.css';
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
console.log(mul(3, 9));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5, 7));


/**
 * 1.eslint不认识 navgator,window等全局变量
 * 解决： 在package.json 中加 "env": {"browser": true}
 * 
 * "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  },
  2.sw代码必须运行在服务器上 --》
  nodejs 或者
  下载  npm i serve -g
  serve -s build 启动 服务器 将build目录下的所有资源作为静态资源暴露出去

 */
// 注册serviceworker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('注册成功');
      })
      .catch(() => {
        console.log('注册失败');
      });
  });
}
