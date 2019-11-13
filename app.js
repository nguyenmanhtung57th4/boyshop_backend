const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const apiRouter = require('./routers/api');

const app = express();

app.use(cors({ origin: ['http://localhost:3000','https://boyshop.herokuapp.com'] , credentials : true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb://<dbuser>:<dbpassword>@ds241895.mlab.com:41895/unterwasche

mongoose.connect('mongodb://admin:admin123@ds241895.mlab.com:41895/unterwasche', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(" DB connect success!");
    }
})

app.use('/api', apiRouter);

app.listen(process.env.PORT || 6969, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server start success!!")
    }
})