let MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://127.0.0.1:27017/local';

MongoClient.connect(dbUrl, (err, db) => {
    if(err) console.log(err);
    else {
        console.log("연결 성공");
        db.collection('users').find().toArray((err, results)=>{
            console.log(results);
        });
        db.close();
    }
});