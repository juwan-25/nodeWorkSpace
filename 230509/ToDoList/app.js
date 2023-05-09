const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', './views');

let todosArr = [
    {id:1, content:"하하하하", yesno:"yes"},
    {id:2, content:"하하하하하하하하", yesno:"no"},
    {id:3, content:"하하하하", yesno:"no"},
    {id:4, content:"하하하하하하하하", yesno:"yes"},
];


app.get('/', (req,res) => {
    console.log('/ get이 시작');
    res.render('list', {datalist: todosArr});
})

app.listen(3000, () => {
    console.log('http://localhost:3000/');
})

