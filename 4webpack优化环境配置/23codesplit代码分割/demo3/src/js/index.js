

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

/**
 * 通过js代码，让某个文件被单独打包成一个chunk
 */

 import(/**webpackChunkName */ './test').then((result) => {
    // eslint-disable-next-line
  console.log('加载成功',result);
 }).catch(() => {
    // eslint-disable-next-line
   console.log('加载失败');
 });
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5, 7));
