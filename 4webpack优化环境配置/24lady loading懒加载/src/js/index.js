
// eslint-disable-next-line
console.log('index.js,被加载了');



// import { mul } from './test.js'
// console.log(mul);

document.getElementById('btn').onclick = function () {
  // 懒加载
  // 预加载 webpackPrefetch: true
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
    console.log(mul(2, 8));
  });
  
};
