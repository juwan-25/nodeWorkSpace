//외부 모듈 os, url
const os = require('os');
const url = require('url');

//os
console.log(os.hostname());
console.log(os.type());
console.log(os.arch());

//url
let urlObj = url.parse("https://youtu.be/kBVdYh5G6cc");
console.log(urlObj);
