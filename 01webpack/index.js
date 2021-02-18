import $ from 'jquery';

import './index.less'

$('title').onclick(() => {
    $('body').css('backgroundColor', 'deeppink');
});

console.log(process.env.NODE_ENV);