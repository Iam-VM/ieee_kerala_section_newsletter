require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.resolve(__dirname + '/public')));


app.listen(process.env['PORT'], () => {
    console.log(`Server: running at port ${process.env['PORT']}`)
});