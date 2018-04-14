var express = require('express');
var router = express.Router();
module.exports = function(Mdb) {
    router.get('/', function(req, res) {
        console.log('news服务', req.headers.origin, req.query);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin); //当前服务允许跨域
        Mdb[0].connect(Mdb[2], function(err, client) {
            let db = client.db(Mdb[3]);
            let news = db.collection("vuetest");
            news.find({ "user": req.query.user }).toArray(function(err, data) {
                console.log(data)
                if (err) {
                    console.log(err)
                } else {
                    if (data.length == 0) {
                        console.log(news)
                        news.insert({ "user": req.query.user, "password": req.query.pass, "follow": 0, "fans": 0, "hasSession": true }, (err, result) => {
                            console.log(err);
                        })
                        res.send('1')
                    } else {
                        res.send('-1')
                    }
                }

                // callback(data);
            });
            // client.close();
        });
    });
    return router;
};