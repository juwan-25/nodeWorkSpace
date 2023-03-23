function callTenTime(callback){
    for(let i=0; i<10; i++){
        callback();
    }
}

callTenTime( function() {
    console.log("함수 호출");
})