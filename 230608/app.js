const MongoClient = require('mongodb').MongoClient;

var database;
function connectDB() {
    var databaseUrl = 'mongodb://localhost:27017/local'

    MongoClient.connect(databaseUrl, (err, db) => {
        if(err) throw err;
        
        console.log('connected!');
        database = db;
    })
}

app.get('/', (req,res) => {
    dbconn.connect();
    dbconn.query('select * from todoTbl', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.render('list', { datalist: result});
        }
    }); 
    dbconn.end();
})