//외부 모듈 request
const request = require('request');

let url = "https://youtu.be/s_hk-nszOmg";
request(url, (err, res, body)=>{
    if(err){
        console.log("request error..");
        console.log(err);
    } else {
        console.log(body);
    }

})