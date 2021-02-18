// import '@babel/polyfill';

const add = (x, y) => {
    return x + y;
};

console.log(add(2, 5));

const p = new Promise((resolve) => {
    setTimeout(() => {
        console.log('定时器');
        resolve();
    }, 1000);
});
console.log(p);