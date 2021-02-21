import $ from 'jquery';

console.log($);


function yin() {
    let arr = [
        {
            name: 'joke',
            id: 1
        },
        {
            name: 'joke',
            id: 2
        },
        {
            name: 'joke',
            id: 3
        },
        {
            name: 'joke',
            id: 4
        },
        {
            name: 'joke',
            id: 5
        },  
    ]
    arr = arr.map(itme => {
        return itme.id
    })
    console.log(arr);
}
yin();

