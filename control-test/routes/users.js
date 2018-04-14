var express = require('express');
var router = express.Router();
module.exports = function(Mdb) {
    router.get('/', function(req, res) {
        console.log('news服务', req.headers.origin, req.query);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //当前服务允许跨域
        Mdb[0].connect(Mdb[2], function(err, client) {
            const db = client.db(Mdb[3]);
            const news = db.collection("vuetest");
            // console.log(news)
            news.find({ "user": req.query.msg }).toArray(function(err, data) {
                Mdb[1].equal(null, err);
                // console.log("Found the following records");
                res.send(data);
                // console.log(data)
                // callback(data);
            });
            // client.close();
        });

    });
    return router;
};