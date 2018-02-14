const express = require('express')
const path = require('path')
const app = express()

const appRoot = 'app';

app.use(express.static(path.join(__dirname,appRoot)))

app.get('/*',function(req,res,next){
    res.sendfile('./'+appRoot+'/index.html');
})


port = 3000;

app.listen(port, "0.0.0.0", () => console.log('Example app listening on port :'+port+"!"))