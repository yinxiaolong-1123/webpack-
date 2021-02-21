

import count from './count'

console.log(count(8, 2));


console.log('index.js文件加载了');

import('./add').then(({default: add}) => {
    console.log(add(6, 9));
})