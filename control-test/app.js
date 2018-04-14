var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var cors = require('cors');
var mongodb = require('mongodb')
var indexRouter = require('./routes/index');
// var newsRouter = require('./routes/news');
var usersRouter = require('./routes/users');
var regRouter = require('./routes/reg');
var loginRouter = require('./routes/login');
var delRouter = require('./routes/del');

var app = express();

//mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'vuetest';
const Mdb = [MongoClient, assert, url, dbName]
    // Use connect method to connect to the server
    //     MongoClient.connect(url, function(err, client) {
    //         assert.equal(null, err);
    //         console.log("Connected successfully to server");

//     const db = client.db(dbName);
//     const news=db.
//     client.close();
// });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
    keys: ['aa', 'bb'],
    name: 'abc_id',
    // maxAge:1000*60*60
}));

//配置cors中间件
app.use(cors({
    "origin": ["http://localhost:8081", "http://localhost:5000", "http://localhost:8080"], //允许所有前端域名
    "credentials": true, //允许携带凭证
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
    "allowedHeaders": ['Content-Type', 'Authorization'] //被允许的post方式的请求头
}));

app.use('/', indexRouter);
// app.use('/news', newsRouter(Mdb));
app.use('/users', usersRouter(Mdb));
app.use('/reg', regRouter(Mdb));
app.use('/login', loginRouter(Mdb));
app.use('/del', delRouter(Mdb));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;